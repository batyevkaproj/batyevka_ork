import { NextResponse } from 'next/server';
import { VerificationService } from '@/services/verification';


export async function POST(req: Request) {

  function cleanPhoneNumber(phone: string): string {
    return phone.replace(/\+/g, '');
  }

  function isValidPhoneNumber(phone: string): boolean {
    const cleanPhone = cleanPhoneNumber(phone);
    return /^380\d{9}$/.test(cleanPhone);
  }

  try {
    const { phone, code } = await req.json();

    const cleanedPhone = cleanPhoneNumber(phone);

    if (!isValidPhoneNumber(cleanedPhone)) {
      return NextResponse.json(
        { error: 'Invalid phone number format. Expected format: 380XXXXXXXXX' },
        { status: 400 }
      );
    }

    const result = await VerificationService.verifyCode(cleanedPhone, code);

    if (!result.isValid) {
      const attemptsLeft = await VerificationService.getAttemptsLeft(cleanedPhone);

      return NextResponse.json({
        success: false,
        error: result.error,
        attemptsLeft
      }, { status: 400 });
    }

    return NextResponse.json({
      success: true,
      message: 'Code verified successfully'
    });
  } catch (error) {
    console.error('Error verifying code:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}