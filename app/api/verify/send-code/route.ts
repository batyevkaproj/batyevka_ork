import { NextResponse } from 'next/server';
import { VerificationService } from '@/services/verification';

function cleanPhoneNumber(phone: string): string {
  return phone.replace(/\+/g, '');
}

function isValidPhoneNumber(phone: string): boolean {
  const cleanPhone = cleanPhoneNumber(phone);
  return /^380\d{9}$/.test(cleanPhone);
}

async function sendSMSViaOmnicell(phone: string, code: string) {
  const uniqueKey = Date.now().toString();
  const xmlData = `<?xml version='1.0' encoding='UTF-8' ?>
    <message>
      <service id='single' source='BatyevkaNET' uniq_key='${uniqueKey}'/>
      <to>${phone}</to>
      <body content-type='text/plain'>${code} BATYEVKA.net</body>
    </message>`;

  const response = await fetch('https://api.omnicell.com.ua/ip2sms/', {
    method: 'POST',
    headers: {
      'Content-Type': 'text/xml',
      'Authorization': 'Basic ' + Buffer.from('BatyevkaNET:' + process.env.OMNICELL_PASSWORD).toString('base64'),
    },
    body: xmlData,
  });


  if (!response.ok) {
    throw new Error(`Failed to send SMS: ${response.statusText}`);
  }

  return response.text();
}

export async function POST(req: Request) {
  try {
    const { phone } = await req.json();

    if (!phone) {
      return NextResponse.json(
        { error: 'Phone number is required' },
        { status: 400 }
      );
    }

    // Очищаем номер телефона от лишних символов
    const cleanedPhone = cleanPhoneNumber(phone);

    if (!isValidPhoneNumber(cleanedPhone)) {
      return NextResponse.json(
        { error: 'Invalid phone number format. Expected format: 380XXXXXXXXX' },
        { status: 400 }
      );
    }

    const verificationCode = await VerificationService.generateCode(cleanedPhone);
    console.log('Generated verification code for phone', cleanedPhone, ':', verificationCode);

    try {
      if (process.env.NODE_ENV !== 'development') {
        await sendSMSViaOmnicell(cleanedPhone, verificationCode);
      }

      // В продакшене возвращаем только успех
      // Для разработки можно включить код в ответ
      if (process.env.NODE_ENV === 'development') {
        console.log(`Development mode - SMS Code for ${cleanedPhone}: ${verificationCode}`);
      }

      return NextResponse.json({
        success: true,
        message: 'Verification code sent successfully'
      });

    } catch (smsError) {
      console.error('SMS sending error:', smsError);
      return NextResponse.json(
        { error: 'Failed to send SMS verification code' },
        { status: 500 }
      );
    }

  } catch (error) {
    console.error('Error in SMS verification route:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
