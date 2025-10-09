import { NextResponse } from 'next/server';
import axios from 'axios';
import { z } from "zod";
import { smsService } from '@/services/SMSService';

const PHP_SCRIPT_URL = process.env.PHP_CONTACT_FORM_ENDPOINT || "https://servdesk.batyevka.net/sblog/contact_br.php";

// Схема Zod для валідації адреси
const addressSchema = z.object({
  streetId: z.number(),
  streetName: z.string(),
  houseId: z.number(),
  houseNumber: z.string(),
  entrance: z.string().optional(),
  floor: z.string().optional(), 
  apartment: z.string().optional(), 
  fullAddress: z.string()
});

// Схема Zod для валідації всього замовлення
const orderSchema = z.object({
  customerName: z.string().min(2, "Ім'я має містити мінімум 2 символи"),
  customerPhone: z.string().regex(/^380\d{9}$/, "Неправильний формат телефону"),
  address: addressSchema,
  internetType: z.string().optional(), // <-- ЗМІНЕНО z.enum на z.string
  internetSpeed: z.number().optional(),
  internetMeasure: z.string().optional(),
  hasTV: z.boolean().optional(),
  tvPackage: z.object({
    id: z.number(),
    name: z.string(),
    price: z.number()
  }).optional(),
  hasStaticIP: z.boolean().optional(),
  prepaidMonths: z.number().optional(),
  setupPrice: z.number().optional(),
  routerPrice: z.number().optional(),
  totalMonthlyPrice: z.number().optional(),
  regularPrice: z.number().optional()
});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Валідація даних, що прийшли з фронтенду
    const validationResult = orderSchema.safeParse(body);

    if (!validationResult.success) {
      console.error('Validation error:', validationResult.error);
      return NextResponse.json({
        success: false,
        error: "Неправильний формат даних"
      }, { status: 400 });
    }

    const orderData = validationResult.data;
    let servDeskId;

    // Перевірка, чи це не тестове середовище
    const isTestEnvironment = process.env.NODE_ENV === 'development' ||
      process.env.NODE_ENV === 'test' ||
      process.env.NEXT_PUBLIC_API_ENV === 'local';

    if (isTestEnvironment) {
      console.log('[TEST_ENV] Using mock ServDesk ID');
      servDeskId = "12345"; // Тестовий ID для локальної розробки
    } else {
      // --- Логіка для продакшн-середовища ---
      const servDeskData = {
        'type': 'data',
        'cli_name': orderData.customerName,
        'cli_phone': orderData.customerPhone,
        'cli_street': orderData.address.streetName,
        'cli_house': orderData.address.houseNumber,
        'cli_enter': orderData.address.entrance || '',
        'cli_flat': orderData.address.apartment || '',
        'cli_ele': orderData.address.floor || '',
        'cli_addr': orderData.address.fullAddress,
        'cli_descr': orderData.internetType ?
          `${orderData.internetType} ${orderData.internetSpeed} ${orderData.internetMeasure}${orderData.hasStaticIP ? ' + Static IP' : ''}` :
          'Заявка на зворотній дзвінок'
      };

      // 1. Створення заявки в ServDesk
      const servDeskResponse = await axios.post(
        PHP_SCRIPT_URL,
        new URLSearchParams(servDeskData),
        {
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        }
      );

      // =================================================================
      // === ДІАГНОСТИЧНИЙ ЛОГ ДЛЯ ВІДПОВІДІ ВІД SERVDESK =================
      // =================================================================
      console.log("--- ServDesk Response ---");
      console.log("Status Code:", servDeskResponse.status);
      console.log("Response Headers:", servDeskResponse.headers);
      console.log("Response Data:", servDeskResponse.data); // Найважливіший рядок!
      console.log("-------------------------");
      // =================================================================

      if (!servDeskResponse.data) {
        throw new Error('Failed to create order in ServDesk');
      }
      servDeskId = servDeskResponse.data;

      // 2. Формування та відправка повідомлення в Telegram
      const tariffDetails = orderData.internetType ? [
        `Тип підключення: ${orderData.internetType}`,
        `Швидкість: ${orderData.internetSpeed} ${orderData.internetMeasure}`,
        orderData.tvPackage ? `ТВ пакет: ${orderData.tvPackage.name}` : 'Без ТВ',
        `Статичний IP: ${orderData.hasStaticIP ? 'Так' : 'Ні'}`,
        orderData.regularPrice ? `Регулярна ціна: ${orderData.regularPrice} грн/міс` : null,
        `Вартість: ${orderData.totalMonthlyPrice} грн/міс`,
        orderData.setupPrice ? `Вартість підключення: ${orderData.setupPrice} грн.` : null
      ].filter(Boolean).join('\n') : '';

      const telegramMessage = [
        'Нова заявка на підключення!',
        '',
        `Клієнт: ${orderData.customerName}`,
        `Телефон: ${orderData.customerPhone}`,
        '',
        tariffDetails,
        '',
        'Адреса:',
        `• Вулиця: ${orderData.address.streetName}`,
        `• Будинок: ${orderData.address.houseNumber}`,
        orderData.address.entrance ? `• Під'їзд: ${orderData.address.entrance}` : null,
        orderData.address.floor ? `• Поверх: ${orderData.address.floor}` : null,
        orderData.address.apartment ? `• Квартира: ${orderData.address.apartment}` : null,
        '',
        `ServDesk ID: ${servDeskId}`
      ].filter(Boolean).join('\n');

      await axios.post(
        `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
        {
          chat_id: process.env.TELEGRAM_CHAT_ID,  
          text: telegramMessage,
          parse_mode: 'HTML'
        }
      );

      // 3. Відправка SMS-повідомлення клієнту
      const notificationResult = await smsService.sendNotification(
        'orderCreated', orderData.customerPhone, servDeskId
      );

      if (!notificationResult) {
        console.error('Notification errors:', notificationResult);
      }
    }

    // Успішна відповідь, якщо все пройшло добре
    return NextResponse.json({
      success: true,
      redirectUrl: `/success?id=${servDeskId}&type=connection`
    });

  } catch (error: any) {
    // Покращений блок обробки помилок
    console.error('[ORDER_SUBMIT_ERROR]: Загальна помилка:', error.message);

    if (axios.isAxiosError(error)) {
      console.error('Axios error details:');
      console.error(' - URL:', error.config?.url);
      console.error(' - Status:', error.response?.status);
      console.error(' - Response Data:', error.response?.data);
    }
    
    return NextResponse.json({
      success: false,
      error: "Внутрішня помилка сервера"
    }, { status: 500 });
  }
}