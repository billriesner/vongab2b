import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    // Check if Resend is configured
    const hasApiKey = !!process.env.RESEND_API_KEY;
    const hasFromEmail = !!process.env.RESEND_FROM_EMAIL;
    
    if (!hasApiKey || !hasFromEmail) {
      return NextResponse.json({
        success: false,
        error: 'Resend not configured',
        hasApiKey,
        hasFromEmail,
      });
    }
    
    // Try to send a test email
    const { sendOrderConfirmationEmail } = await import('@/lib/email');
    const result = await sendOrderConfirmationEmail({
      organizationName: 'Test Organization',
      contactName: 'Test User',
      email: 'bill.riesner@gmail.com',
      orderId: 'TEST-123',
      totalUnits: 100,
      subtotal: 2500,
      depositAmount: 250,
      starterKit: 'Core',
    });
    
    return NextResponse.json({
      success: result.success,
      result,
      config: {
        hasApiKey,
        hasFromEmail,
        fromEmail: process.env.RESEND_FROM_EMAIL,
      }
    });
  } catch (error) {
    console.error('Test email error:', error);
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined,
    }, { status: 500 });
  }
}

