import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: Request) {
    try {
        const body = await req.json();

        let addressString = '';
        if (body.address) {
            addressString = `\nАдреса: ${body.address.fullAddress}`;
        }

        const servdeskData = {
            name_client_call_req: body.customerName,
            phone_client_call_req: body.customerPhone,
            comment_call_req: `Заявка на зворотній дзвінок${addressString}`,
        };

        const formData = new URLSearchParams();
        Object.entries(servdeskData).forEach(([key, value]) => {
            if (value) formData.append(key, value);
        });

        // Отправляем запрос в ServDesk
        const response = await axios.post(
            'https://servdesk.batyevka.net/addons/add_req.php',
            formData,
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                }
            }
        );

        const servdesk_id = response.data;

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

        return NextResponse.json({
            success: true,
            servdesk_id
        });

    } catch (error) {
        console.error(`[ORDER_CALL_ERROR]: Error submiting call request`, error);

        return NextResponse.json(
            {
                success: false,
                error: 'Failed to submit call request'
            },
            {
                status: 500
            });
    }
}