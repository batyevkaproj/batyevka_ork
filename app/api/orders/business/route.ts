import { NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const fullAddress = `${body.streetName}, ${body.houseNumber}${
      body.entrance ? `, під'їзд ${body.entrance}` : ''
    }${
      body.floor ? `, поверх ${body.floor}` : ''
    }${
      body.apartment ? `, кв. ${body.apartment}` : ''
    }`;

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

      address_business_req: fullAddress,
      
      street_business_req: body.streetName,
      house_business_req: body.houseNumber,
      entrance_business_req: body.entrance,
      floor_business_req: body.floor,
      apartment_business_req: body.apartment,
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
      servdesk_id
    });

  } catch (error) {
    console.error('[BUSINESS_ORDER_ERROR]: Error submitting order:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to submit order' },
      { status: 500 }
    );
  }
}