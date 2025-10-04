import { NextResponse } from 'next/server';
import { VerificationService } from '@/services/verification';

export const dynamic = 'force-dynamic'; // <-- ADD THIS LINE


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
// INSIDE YOUR CATCH BLOCK (FOR DEBUGGING ONLY)
} catch (e) {
  console.error(e);
  // Temporarily return the actual error to the client to see what's happening
  if (e instanceof Error) {
    return NextResponse.json({ error: `Server Error: ${e.message}` }, { status: 500 });
  }
  return NextResponse.json(
    { error: 'An unknown error occurred' },
    { status: 500 }
  );
}
}