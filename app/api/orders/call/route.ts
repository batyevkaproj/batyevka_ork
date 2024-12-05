import { NextResponse } from 'next/server';
import axios from 'axios';
import { smsService } from "@/services/SMSService";


async function sendInServdesk(data: any) {
    const sdesk_url = "https://servdesk.batyevka.net/sblog/contact_br.php";

    try {
        const formData = new URLSearchParams();
        for (const [key, value] of Object.entries(data)) {
            formData.append(key, value as string);
        }

        const response = await fetch(sdesk_url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: formData,
        });

        if (!response.ok) {
            return false;
        }

        const result = await response.text();
        return result;

    } catch (error) {
        console.error('ServDesk API error:', error);
        return false;
    }
}

export async function POST(req: Request) {
    try {
        const body = await req.json();

        if (!body.customerName) {
            return NextResponse.json({ status: false });
        }

        let phone = body.customerPhone;
        const chars_to_remove = ["+38", "(", ")", " ", "-"];
        chars_to_remove.forEach(char => {
            phone = phone.replace(char, "");
        });

        // Строим адрес, если он есть
        let addressString = '';
        let addressData = {};

        if (body.address) {
            addressString = `${body.address.streetName} буд. ${body.address.houseNumber} ${body.address.entrance ? `під. ${body.address.entrance}` : ''
                } ${body.address.floor ? `поверх ${body.address.floor}` : ''
                } ${body.address.apartment ? `кв ${body.address.apartment}` : ''
                }`;

            addressData = {
                'cli_street': body.address.streetName,
                'cli_house': body.address.houseNumber,
                'cli_enter': body.address.entrance || '',
                'cli_flat': body.address.apartment || '',
                'cli_ele': body.address.floor || '',
                'cli_addr': addressString,
            };
        }

        const data = {
            'type': 'data',
            'cli_name': body.customerName,
            'cli_phone': phone,
            'cli_descr': `Заявка на зворотній дзвінок${body.address ? '\nАдреса: ' + addressString : ''}`,
            ...addressData
        };

        const servdesk_id = await sendInServdesk(data) || "1";

        let telegramText = `Нова заявка на зворотній дзвінок!\n\nКлієнт: ${body.customerName}\nТелефон: ${body.customerPhone}`;

        if (body.address) {
            telegramText += `\n\nАдреса:\n• Вулиця: ${body.address.streetName}\n• Будинок: ${body.address.houseNumber}`;

            if (body.address.entrance) {
                telegramText += `\n• Під'їзд: ${body.address.entrance}`;
            }
            if (body.address.floor) {
                telegramText += `\n• Поверх: ${body.address.floor}`;
            }
            if (body.address.apartment) {
                telegramText += `\n• Квартира: ${body.address.apartment}`;
            }
        }

        telegramText += `\n\nServDesk ID: ${servdesk_id}`;

        const telegramData = {
            chat_id: process.env.TELEGRAM_CHAT_ID,
            text: telegramText,
            parse_mode: 'HTML'
        };

        await axios.post(
            `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
            telegramData
        );


        const notificationSent = await smsService.sendNotification(
            'callbackRequest',
            phone,
            servdesk_id
        );

        if (!notificationSent) {
            console.warn(`[CALLBACK_${servdesk_id}]: Failed to send SMS notification`);
        }

        return NextResponse.json({
            success: true,
            servdeskId: servdesk_id,
            redirectUrl: `/success?id=${servdesk_id}&type=callback`
        });

    } catch (error) {
        console.error('[CALL_REQUEST_ERROR]: Error submitting call request:', error);
        return NextResponse.json({
            status: false,
            error: "Internal server error"
        }, { status: 500 });
    }
}