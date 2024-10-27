// app/api/verify/send-code/route.ts
import { NextResponse } from 'next/server';
import { VerificationService } from '@/services/verification';

// app/api/verify/verify-code/route.ts
export async function POST(req: Request) {
    try {
      const { phone, code } = await req.json();
  
      const result = await VerificationService.verifyCode(phone, code);
      
      if (!result.isValid) {
        const attemptsLeft = await VerificationService.getAttemptsLeft(phone);
        
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