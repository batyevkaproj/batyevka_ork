import { NextResponse } from 'next/server';
import axios from 'axios';
import type { TariffOrderForm } from '@/types/order';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    const servdeskData: TariffOrderForm = {
      name_client_business_req: body.customerName,
      phone_client_business_req: body.customerPhone,
      
      internet_type_business_req: body.internetType,
      internet_speed_business_req: `${body.internetSpeed} ${body.internetMeasure}`,
      tv_package_business_req: body.hasTV ? body.tvPackage?.name : 'Без ТБ',
      static_ip_business_req: body.hasStaticIP ? 'Так' : 'Ні',
      
      prepaid_months_business_req: body.prepaidMonths.toString(),
      setup_price_business_req: body.setupPrice.toString(),
      router_price_business_req: body.routerPrice.toString(),
      total_price_business_req: body.totalMonthlyPrice.toString(),
      
      comment_business_req: `Заявка на підключення через калькулятор тарифів`
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
      `Тариф: ${servdeskData.internet_type_business_req} ${servdeskData.internet_speed_business_req}`,
      `ТБ: ${servdeskData.tv_package_business_req}`,
      `Статичний IP: ${servdeskData.static_ip_business_req}`,
      `Передплата: ${servdeskData.prepaid_months_business_req} міс`,
      `Вартість: ${servdeskData.total_price_business_req} грн/міс`,
    ].join('\n');

    // Отправляем в Telegram
    const telegramData = {
      chat_id: process.env.TELEGRAM_CHAT_ID,
      text: `Нова заявка на підключення!\n\nКлієнт: ${servdeskData.name_client_business_req}\nТелефон: ${servdeskData.phone_client_business_req}\n\n${tariffDetails}\n\nServDesk ID: ${servdesk_id}`,
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