import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import Stripe from 'stripe';

// Force dynamic rendering - don't pre-render this API route at build time
export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-09-30.clover',
});

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!;

export async function POST(request: NextRequest) {
  const body = await request.text();
  const sig = request.headers.get('stripe-signature')!;

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, sig, endpointSecret);
  } catch (err) {
    console.error('Webhook signature verification failed:', err);
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
  }

  // Handle successful payment
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session;
    
    // Only process Club Vonga orders
    if (session.metadata?.type !== 'club_deposit') {
      return NextResponse.json({ received: true });
    }

    try {
      // Extract order data from session metadata
      const {
        organizationName,
        customerEmail,
        kitType,
        totalUnits,
        memberCount,
        itemCount,
        depositAmount,
        depositPercentage,
        subtotalAmount,
        secondPayment,
        finalPayment,
        products,
        cartItemsJson
      } = session.metadata;

      // Parse cart items
      const cartItems = JSON.parse(cartItemsJson || '[]');

      // Save order to database
      const orderData = {
        stripe_session_id: session.id,
        organization_name: organizationName,
        contact_name: session.customer_details?.name || 'Unknown',
        email: customerEmail,
        phone: session.customer_details?.phone || undefined,
        organization_type: undefined, // Not stored in metadata
        member_count: parseInt(memberCount || '0'),
        starter_kit: kitType,
        cart_items: cartItems,
        total_units: parseInt(totalUnits || '0'),
        subtotal: parseFloat(subtotalAmount || '0'),
        deposit_amount: parseFloat(depositAmount || '0'),
        second_payment_amount: parseFloat(secondPayment || '0'),
        final_payment_amount: parseFloat(finalPayment || '0'),
        order_status: 'deposit_paid',
        payment_status: 'deposit_paid',
        deposit_payment_intent_id: session.payment_intent as string,
        second_payment_intent_id: undefined,
        final_payment_intent_id: undefined
      };

      // Import Supabase inside the function to avoid build-time initialization
      const { supabaseAdmin } = await import('@/lib/supabase');
      const supabaseAdminClient = supabaseAdmin();
      const { data, error } = await supabaseAdminClient
        .from('club_orders')
        .insert([orderData])
        .select()
        .single();

      if (error) {
        console.error('Failed to save order:', error);
        return NextResponse.json({ error: 'Failed to save order' }, { status: 500 });
      }

      console.log('Order saved successfully:', data.id);

      // Send Slack notification about new order
      if (process.env.SLACK_WEBHOOK_URL) {
        try {
          const slackMessage = {
            text: `🎉 New Club Vonga Order Received!`,
            blocks: [
              {
                type: "header",
                text: {
                  type: "plain_text",
                  text: "🎉 New Club Vonga Order - Deposit Paid!"
                }
              },
              {
                type: "section",
                fields: [
                  {
                    type: "mrkdwn",
                    text: `*Organization:*\n${organizationName}`
                  },
                  {
                    type: "mrkdwn",
                    text: `*Contact:*\n${session.customer_details?.name || 'Unknown'}`
                  },
                  {
                    type: "mrkdwn",
                    text: `*Email:*\n${customerEmail}`
                  },
                  {
                    type: "mrkdwn",
                    text: `*Kit Type:*\n${kitType === 'core' ? 'Core Kit' : 'Pro Kit'}`
                  },
                  {
                    type: "mrkdwn",
                    text: `*Total Units:*\n${totalUnits}`
                  },
                  {
                    type: "mrkdwn",
                    text: `*Order Total:*\n$${parseFloat(subtotalAmount || '0').toLocaleString()}`
                  },
                  {
                    type: "mrkdwn",
                    text: `*Deposit Paid:*\n$${parseFloat(depositAmount || '0').toLocaleString()} (10%)`
                  },
                  {
                    type: "mrkdwn",
                    text: `*Next Payment:*\n$${parseFloat(secondPayment || '0').toLocaleString()} (40%)`
                  }
                ]
              },
              {
                type: "section",
                text: {
                  type: "mrkdwn",
                  text: `*Order Items:*\n${cartItems.map((item: any) => {
                    const itemQty = Object.values(item.sizeRun).reduce((sum: number, qty: any) => sum + qty, 0);
                    return `• ${item.gearType}: ${itemQty} units`;
                  }).join('\n')}`
                }
              },
              {
                type: "actions",
                elements: [
                  {
                    type: "button",
                    text: {
                      type: "plain_text",
                      text: "View Order Details"
                    },
                    url: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/admin/club-orders`,
                    style: "primary"
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
        } catch (slackError) {
          console.error('Slack notification failed:', slackError);
          // Don't fail the webhook if Slack fails
        }
      }

    } catch (error) {
      console.error('Error processing webhook:', error);
      return NextResponse.json({ error: 'Processing failed' }, { status: 500 });
    }
  }

  return NextResponse.json({ received: true });
}
