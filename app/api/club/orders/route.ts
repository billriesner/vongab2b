import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { supabaseAdmin, type ClubOrder } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      stripeSessionId,
      organizationName,
      contactName,
      email,
      phone,
      organizationType,
      memberCount,
      starterKit,
      cartItems,
      subtotal,
      depositAmount,
      secondPaymentAmount,
      finalPaymentAmount,
      depositPaymentIntentId
    } = body;

    // Validate required fields
    if (!stripeSessionId || !organizationName || !contactName || !email || !starterKit || !cartItems) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Calculate total units
    const totalUnits = cartItems.reduce((total: number, item: any) => {
      const itemQty = Object.values(item.sizeRun).reduce((sum: number, qty: any) => sum + qty, 0);
      return total + itemQty;
    }, 0);

    // Create order object
    const orderData: Omit<ClubOrder, 'id' | 'created_at'> = {
      stripe_session_id: stripeSessionId,
      organization_name: organizationName,
      contact_name: contactName,
      email,
      phone: phone || null,
      organization_type: organizationType || null,
      member_count: memberCount || null,
      starter_kit: starterKit,
      cart_items: cartItems,
      total_units: totalUnits,
      subtotal,
      deposit_amount: depositAmount,
      second_payment_amount: secondPaymentAmount,
      final_payment_amount: finalPaymentAmount,
      order_status: 'deposit_paid',
      payment_status: 'deposit_paid',
      deposit_payment_intent_id: depositPaymentIntentId || undefined,
      second_payment_intent_id: undefined,
      final_payment_intent_id: undefined
    };

    // Insert order into database
    const supabaseAdmin = supabaseAdmin();
    const { data, error } = await supabaseAdminClient
      .from('club_orders')
      .insert([orderData])
      .select()
      .single();

    if (error) {
      console.error('Database error:', error);
      return NextResponse.json(
        { error: 'Failed to save order' },
        { status: 500 }
      );
    }

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
                text: "🎉 New Club Vonga Order"
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
                  text: `*Contact:*\n${contactName}`
                },
                {
                  type: "mrkdwn",
                  text: `*Email:*\n${email}`
                },
                {
                  type: "mrkdwn",
                  text: `*Kit Type:*\n${starterKit === 'core' ? 'Core Kit' : 'Pro Kit'}`
                },
                {
                  type: "mrkdwn",
                  text: `*Total Units:*\n${totalUnits}`
                },
                {
                  type: "mrkdwn",
                  text: `*Order Total:*\n$${subtotal.toLocaleString()}`
                },
                {
                  type: "mrkdwn",
                  text: `*Deposit Paid:*\n$${depositAmount.toLocaleString()} (10%)`
                },
                {
                  type: "mrkdwn",
                  text: `*Next Payment:*\n$${secondPaymentAmount.toLocaleString()} (40%)`
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
        // Don't fail the request if Slack fails
      }
    }

    return NextResponse.json({
      success: true,
      orderId: data.id,
      message: 'Order saved successfully'
    });

  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const email = searchParams.get('email');
    const orderId = searchParams.get('orderId');

    if (orderId) {
      // Get specific order
      const supabaseAdmin = supabaseAdmin();
      const { data, error } = await supabaseAdminClient
        .from('club_orders')
        .select('*')
        .eq('id', orderId)
        .single();

      if (error) {
        return NextResponse.json(
          { error: 'Order not found' },
          { status: 404 }
        );
      }

      return NextResponse.json({ order: data });
    }

    if (email) {
      // Get orders for specific email
      const supabaseAdmin = supabaseAdmin();
      const { data, error } = await supabaseAdminClient
        .from('club_orders')
        .select('*')
        .eq('email', email)
        .order('created_at', { ascending: false });

      if (error) {
        return NextResponse.json(
          { error: 'Failed to fetch orders' },
          { status: 500 }
        );
      }

      return NextResponse.json({ orders: data });
    }

    // Get all orders (admin only)
    const supabaseAdmin = supabaseAdmin();
    const { data, error } = await supabaseAdminClient
      .from('club_orders')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      return NextResponse.json(
        { error: 'Failed to fetch orders' },
        { status: 500 }
      );
    }

    return NextResponse.json({ orders: data });

  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
