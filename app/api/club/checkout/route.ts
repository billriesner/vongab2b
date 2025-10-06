import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
  apiVersion: '2024-12-18.acacia',
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { cartItems, starterKit, depositAmount, organizationName, email } = body;

    if (!process.env.STRIPE_SECRET_KEY) {
      return NextResponse.json(
        { error: 'Stripe is not configured' },
        { status: 500 }
      );
    }

    // Create line items from cart
    const lineItems = cartItems.map((item: any) => {
      const itemQty = Object.values(item.sizeRun).reduce((sum: number, qty: any) => sum + qty, 0);
      const gearLabel = item.gearType.charAt(0).toUpperCase() + item.gearType.slice(1);
      
      return {
        price_data: {
          currency: 'usd',
          product_data: {
            name: `${starterKit === 'core' ? 'Core' : 'Pro'} Kit - ${gearLabel}`,
            description: `${itemQty} units with NFC technology`,
          },
          unit_amount: Math.round((depositAmount / cartItems.length) * 100), // Split deposit across items
        },
        quantity: 1,
      };
    });

    // Create Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/club/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/club/get-started`,
      customer_email: email,
      payment_method_options: {
        // Enable Apple Pay and Google Pay
        card: {
          request_three_d_secure: 'automatic',
        },
      },
      // Automatically show Apple Pay and Google Pay when available
      ui_mode: 'hosted',
      metadata: {
        organizationName,
        starterKit,
        depositAmount: depositAmount.toString(),
        type: 'club_deposit',
      },
    });

    // Send Slack notification about payment initiated
    if (process.env.SLACK_WEBHOOK_URL) {
      const slackMessage = {
        text: '💳 Club Vonga Deposit Payment Initiated',
        blocks: [
          {
            type: 'header',
            text: {
              type: 'plain_text',
              text: '💳 Club Vonga Deposit Payment Initiated'
            }
          },
          {
            type: 'section',
            fields: [
              {
                type: 'mrkdwn',
                text: `*Organization:*\n${organizationName}`
              },
              {
                type: 'mrkdwn',
                text: `*Email:*\n${email}`
              },
              {
                type: 'mrkdwn',
                text: `*Kit:*\n${starterKit === 'core' ? 'Core' : 'Pro'}`
              },
              {
                type: 'mrkdwn',
                text: `*Deposit:*\n$${depositAmount.toLocaleString()}`
              }
            ]
          },
          {
            type: 'context',
            elements: [
              {
                type: 'mrkdwn',
                text: `Session ID: ${session.id}`
              }
            ]
          }
        ]
      };

      await fetch(process.env.SLACK_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(slackMessage)
      });
    }

    return NextResponse.json({ sessionId: session.id, url: session.url });

  } catch (error) {
    console.error('Error creating checkout session:', error);
    return NextResponse.json(
      { error: 'Failed to create checkout session' },
      { status: 500 }
    );
  }
}

