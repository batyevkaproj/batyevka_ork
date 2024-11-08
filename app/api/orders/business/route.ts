import { NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const servdeskData = {
      name_client_business_req: body.customerName,
      phone_client_business_req: body.customerPhone,

      internet_type_business_req: body.internetType,
      internet_speed_business_req: `${body.internetSpeed} ${body.internetMeasure}`,
      static_ip_business_req: body.hasStaticIP ? 'Так' : 'Ні',

      total_price_business_req: body.totalMonthlyPrice.toString(),
      regular_price_business_req: body.regularPrice?.toString(),
      setup_price_business_req: body.setupPrice?.toString(),

      comment_business_req: body.comment || 'Заявка на підключення через сторінку бізнес',

      address_business_req: body.customerAddress,
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
        },
      }
    );

    const servdesk_id = response.data;

    const tariffDetails = [
      `Тариф: ${body.internetType} ${body.internetSpeed} ${body.internetMeasure}`,
      `Статичний IP: ${body.hasStaticIP ? 'Так' : 'Ні'}`,
      `Регулярна ціна: ${body.regularPrice} грн/міс`,
      `Вартість: ${body.totalMonthlyPrice} грн/міс`,
      `Адреса: ${body.customerAddress}`,
      `Тип абонента: БІЗНЕС`,

    ].join('\n');

    // Отправляем в Telegram
    const telegramData = {
      chat_id: process.env.TELEGRAM_CHAT_ID,
      text: `Нова заявка на БІЗНЕС підключення!\n\nКлієнт: ${body.customerName}\nТелефон: ${body.customerPhone}\n\n${tariffDetails}\n\nServDesk ID: ${servdesk_id}`,
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
    console.error('Error submitting order:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to submit order' },
      { status: 500 }
    );
  }
}