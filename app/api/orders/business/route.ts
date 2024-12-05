import { NextResponse } from 'next/server';
import axios from 'axios';

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

        const data = {
            'type': 'data',
            'cli_name': body.customerName,
            'cli_phone': phone,
            'cli_street': body.streetName,
            'cli_house': body.houseNumber,
            'cli_enter': body.entrance,
            'cli_flat': body.apartment,
            'cli_tarif': `${body.internetSpeed} ${body.internetMeasure}`,
            'cli_addr': `${body.streetName} буд. ${body.houseNumber} ${body.entrance ? `під. ${body.entrance}` : ''
                } ${body.floor ? `поверх ${body.floor}` : ''
                } ${body.apartment ? `кв ${body.apartment}` : ''
                }`,
            'cli_descr': `${body.internetType} ${body.internetSpeed} ${body.internetMeasure}${body.hasStaticIP ? ' + Static IP' : ''
                }`,
            'cli_ele': body.floor
        };



        const servdesk_id = await sendInServdesk(data) || 1;

        if (!servdesk_id) {
            return NextResponse.json({
                status: false,
                error: "Failed to create order in ServDesk"
            }, { status: 500 });
        }

        const tariffDetails = [
            `Тариф: ${body.internetType} ${body.internetSpeed} ${body.internetMeasure}`,
            `Статичний IP: ${body.hasStaticIP ? 'Так' : 'Ні'}`,
            body.regularPrice ? `Регулярна ціна: ${body.regularPrice} грн/міс` : null,
            `Вартість: ${body.totalMonthlyPrice} грн/міс`,
            body.setupPrice ? `Вартість підключення: ${body.setupPrice} грн.` : null,
        ].filter(Boolean).join('\n');

        const addressDetails = [
            'Адреса:',
            `• Вулиця: ${body.streetName}`,
            `• Будинок: ${body.houseNumber}`,
            body.entrance ? `• Під'їзд: ${body.entrance}` : null,
            body.floor ? `• Поверх: ${body.floor}` : null,
            body.apartment ? `• Квартира: ${body.apartment}` : null,
        ].filter(Boolean).join('\n');

        const telegramMessage = [
            'Нова заявка на БІЗНЕС підключення!',
            '',
            `Клієнт: ${body.customerName}`,
            `Телефон: ${body.customerPhone}`,
            '',
            tariffDetails,
            '',
            addressDetails,
            '',
            'Тип абонента: БІЗНЕС',
            '',
            `ServDesk ID: ${servdesk_id}`,
        ].join('\n');

        const telegramData = {
            chat_id: process.env.TELEGRAM_CHAT_ID,
            text: telegramMessage,
            parse_mode: 'HTML'
        };

        await axios.post(
            `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
            telegramData
        );

        return NextResponse.json({
            success: true,
            servdeskId: servdesk_id,
            redirectUrl: `/success?id=${servdesk_id}&type=connection`
        });

    } catch (error) {
        console.error('[BUSINESS_ORDER_ERROR]: Error submitting order:', error);
        return NextResponse.json({
            status: false,
            error: "Internal server error"
        }, { status: 500 });
    }
}