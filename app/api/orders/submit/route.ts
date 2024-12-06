import { NextResponse } from 'next/server';
import axios from 'axios';
import { z } from "zod";
import { smsService } from '@/services/SMSService';

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

const orderSchema = z.object({
  customerName: z.string().min(2, "Ім'я має містити мінімум 2 символи"),
  customerPhone: z.string().regex(/^380\d{9}$/, "Неправильний формат телефону"),
  address: addressSchema,
  internetType: z.enum(["GPON", "UTP", "G-PON", "XGS-PON"]).optional(),
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

    const isTestEnvironment = process.env.NODE_ENV === 'development' ||
      process.env.NODE_ENV === 'test' ||
      process.env.NEXT_PUBLIC_API_ENV === 'local';

    if (isTestEnvironment) {
      console.log('[TEST_ENV] Using mock ServDesk ID');
      servDeskId = "12345"; // Hardcoded test ID
    } else {
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

      const servDeskResponse = await axios.post(
        'https://servdesk.batyevka.net/addons/add_req.php',
        new URLSearchParams(servDeskData),
        {
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        }
      );

      if (!servDeskResponse.data) {
        throw new Error('Failed to create order in ServDesk');
      }

      servDeskId = servDeskResponse.data;

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

      // Send SMS notification in all environments
      const notificationResult = await smsService.sendNotification(
        'orderCreated', orderData.customerPhone, servDeskId
      );

      if (!notificationResult) {
        console.error('Notification errors:', notificationResult);
      }
    }

    return NextResponse.json({
      success: true,
      redirectUrl: `/success?id=${servDeskId}&type=connection`
    });

  } catch (error) {
    console.error('[ORDER_SUBMIT_ERROR]:', error);
    return NextResponse.json({
      success: false,
      error: "Внутрішня помилка сервера"
    }, { status: 500 });
  }
}