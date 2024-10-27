// app/api/verify/send-code/route.ts
import { NextResponse } from 'next/server';
import { VerificationService } from '@/services/verification';

export async function POST(req: Request) {
  try {
    const { phone, name } = await req.json();

    // Валидация телефона (используем тот же regex)
    const phoneRegex = /^(?:\+38|38)?0(50|63|66|67|68|73|93|95|96|97|98|99)\d{7}$/;
    if (!phoneRegex.test(phone)) {
      return NextResponse.json(
        { error: 'Invalid phone number' },
        { status: 400 }
      );
    }

    // Генерируем код
    const code = await VerificationService.generateCode(phone);

    // В реальном приложении здесь был бы код отправки SMS
    // Для разработки просто логируем код
    console.log(`SMS Code for ${phone}: ${code}`);

    return NextResponse.json({
      success: true,
      message: 'Verification code sent'
    });
  } catch (error) {
    console.error('Error sending verification code:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}