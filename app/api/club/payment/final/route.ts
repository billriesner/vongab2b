import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import Stripe from 'stripe';
import { supabaseAdmin } from '@/lib/supabase';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-12-18.acacia',
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { orderId, email } = body;

    if (!orderId || !email) {
      return NextResponse.json(
        { error: 'Missing orderId or email' },
        { status: 400 }
      );
    }

    // Get order from database
    const { data: order, error: orderError } = await supabaseAdmin
      .from('club_orders')
      .select('*')
      .eq('id', orderId)
      .eq('email', email)
      .single();

    if (orderError || !order) {
      return NextResponse.json(
        { error: 'Order not found' },
        { status: 404 }
      );
    }

    // Check if order is ready for final payment
    if (order.payment_status !== 'final_payment_due') {
      return NextResponse.json(
        { error: 'Order is not ready for final payment' },
        { status: 400 }
      );
    }

    // Create Stripe Checkout Session for final payment
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: `Club Vonga - Final Payment`,
              description: `50% final payment for ${order.organization_name} order (${order.total_units} units)`,
            },
            unit_amount: Math.round(order.final_payment_amount * 100), // Convert to cents
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/club/payment/success?type=final&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/club/order/${orderId}`,
      customer_email: order.email,
      payment_method_options: {
        card: {
          request_three_d_secure: 'automatic',
        },
      },
      ui_mode: 'hosted',
      metadata: {
        orderId: order.id,
        paymentType: 'final_payment',
        organizationName: order.organization_name,
        customerEmail: order.email,
        amount: order.final_payment_amount.toString(),
        kitType: order.starter_kit,
        totalUnits: order.total_units.toString(),
      },
    });

    // Update order with payment intent ID
    await supabaseAdmin
      .from('club_orders')
      .update({ final_payment_intent_id: session.id })
      .eq('id', orderId);

    return NextResponse.json({
      success: true,
      sessionId: session.id,
      checkoutUrl: session.url
    });

  } catch (error) {
    console.error('Final payment error:', error);
    return NextResponse.json(
      { error: 'Failed to create payment session' },
      { status: 500 }
    );
  }
}
