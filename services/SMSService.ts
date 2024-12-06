
import axios from 'axios';

export class SMSService {
    private static instance: SMSService;

    private readonly templates = {
        orderCreated: (servDeskId: string | number) =>
            `Ваша заявка #${servDeskId} прийнята. Найближчим часом з вами зв'яжеться менеджер.`,

        orderConfirmed: (servDeskId: string | number) =>
            `Ваша заявка #${servDeskId} підтверджена. Очікуйте дзвінка майстра для узгодження часу підключення.`,

        callbackRequest: (servDeskId: string | number) =>
            `Ваш запит на зворотній дзвінок #${servDeskId} прийнято. Ми зв'яжемося з вами найближчим часом.`
    };

    private errorCount: Record<string, number> = {};
    private readonly ERROR_THRESHOLD = 3; // Максимальное количество ошибок перед уведомлением
    private readonly ERROR_RESET_INTERVAL = 1800000; // 30 минут в миллисекундах

    private constructor() {
        setInterval(() => {
            this.errorCount = {};
        }, this.ERROR_RESET_INTERVAL);
    }

    public static getInstance(): SMSService {
        if (!SMSService.instance) {
            SMSService.instance = new SMSService();
        }
        return SMSService.instance;
    }

    /**
     * Отправляет уведомление об ошибке администратору в Telegram
     * Включает механизм защиты от флуда сообщениями об ошибках
     */
    private async notifyAdminAboutError(error: unknown, context: {
        phone: string;
        type: string;
        servDeskId: string | number;
    }): Promise<void> {
        try {
            // Создаем уникальный ключ для этого типа ошибки
            const errorKey = `${context.type}_${context.phone}`;
            this.errorCount[errorKey] = (this.errorCount[errorKey] || 0) + 1;

            // Проверяем, не превышен ли порог уведомлений
            if (this.errorCount[errorKey] > this.ERROR_THRESHOLD) {
                return; // Пропускаем уведомление, если превышен порог
            }

            // Формируем детальное сообщение об ошибке
            const errorMessage = [
                '❌ Помилка відправки SMS!',
                '',
                `📱 Номер телефону: ${context.phone}`,
                `📋 Тип повідомлення: ${context.type}`,
                `🔢 ServDesk ID: ${context.servDeskId}`,
                '',
                '⚠️ Деталі помилки:',
                error instanceof Error ? error.message : JSON.stringify(error),
                '',
                `Спроба: ${this.errorCount[errorKey]} з ${this.ERROR_THRESHOLD}`
            ].join('\n');

            // Отправляем уведомление в Telegram
            await axios.post(
                `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
                {
                    chat_id: process.env.TELEGRAM_CHAT_ID, 
                    text: errorMessage,
                    parse_mode: 'HTML'
                }
            );
        } catch (notificationError) {
            // Логируем ошибку отправки уведомления администратору
            console.error('[ADMIN_NOTIFICATION_ERROR]:', notificationError);
        }
    }

    private async sendSMS(phone: string, message: string): Promise<boolean> {
        try {
            const uniqueKey = Date.now().toString();
            const xmlData = `<?xml version='1.0' encoding='UTF-8' ?>
                <message>
                    <service id='single' source='BatyevkaNET' uniq_key='${uniqueKey}'/>
                    <to>${phone}</to>
                    <body content-type='text/plain'>${message}</body>
                </message>`;
    
            const response = await axios.post(
                'https://api.omnicell.com.ua/ip2sms/',
                xmlData,
                {
                    headers: {
                        'Content-Type': 'text/xml',
                        'Authorization': 'Basic ' + Buffer.from(
                            'BatyevkaNET:' + process.env.OMNICELL_PASSWORD
                        ).toString('base64'),
                    }
                }
            );
    
            if (response.status === 200) {
                if (response.data && typeof response.data === 'string' && response.data.includes('error')) {
                    console.error('[SMS_API_ERROR]:', response.data);
                    return false;
                }
                return true;
            }
    
            console.error('[SMS_API_ERROR]: Unexpected status code:', response.status);
            return false;
    
        } catch (error) {
            if (axios.isAxiosError(error)) {
                if (error.response) {
                    console.error('[SMS_API_ERROR]: Server responded with error:', {
                        status: error.response.status,
                        data: error.response.data
                    });
                } else if (error.request) {
                    console.error('[SMS_API_ERROR]: No response received:', error.message);
                } else {
                    // Ошибка при подготовке запроса
                    console.error('[SMS_API_ERROR]: Request configuration error:', error.message);
                }
            } else {
                // Неожиданная ошибка
                console.error('[SMS_API_ERROR]: Unexpected error:', error);
            }
    
            return false;
        }
    }

    public async sendNotification(
        type: keyof typeof this.templates,
        phone: string,
        servDeskId: string | number
    ): Promise<boolean> {
        try {
            const template = this.templates[type];
            if (!template) {
                throw new Error(`Unknown notification type: ${type}`);
            }

            const cleanPhone = phone.replace(/[^0-9]/g, '');
            if (!cleanPhone.match(/^380\d{9}$/)) {
                throw new Error(`Invalid phone number format: ${phone}`);
            }

            const message = template(servDeskId);
            const sent = await this.sendSMS(cleanPhone, message);

            if (!sent) {
                throw new Error('SMS sending failed');
            }

            return true;

        } catch (error) {
            // Отправляем уведомление администратору о проблеме
            await this.notifyAdminAboutError(error, {
                phone,
                type,
                servDeskId
            });

            return false;
        }
    }
}

export const smsService = SMSService.getInstance();