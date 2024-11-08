import { NextResponse } from "next/server";
import axios from "axios";


export async function POST(req: Request) {
    try {

        const body = await req.json();

        const servdeskData = {
            name_client_call_req: body.customerName,
            phone_client_call_req: body.customerPhone,
            comment_call_req: 'Заявка на зворотній дзвінок',
        };

        const formData = new URLSearchParams();
        Object.entries(servdeskData).forEach(([key, value]) => {
            if (value) formData.append(key, value);
        });

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

        const telegramData = {
            chat_id: process.env.TELEGRAM_CHAT_ID,
            text: `Нова заявка на зворотній дзвінок!\n\nКлієнт: ${body.customerName}\nТелефон: ${body.customerPhone}\n\nServDesk ID: ${servdesk_id}`,
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