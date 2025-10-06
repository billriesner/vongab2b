import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { orderId } = body;

    if (!orderId) {
      return NextResponse.json(
        { error: 'Missing orderId' },
        { status: 400 }
      );
    }

    // Get order from database
    const supabaseAdmin = supabaseAdmin();
    const { data: order, error: orderError } = await supabaseAdminClient
      .from('club_orders')
      .select('*')
      .eq('id', orderId)
      .single();

    if (orderError || !order) {
      return NextResponse.json(
        { error: 'Order not found' },
        { status: 404 }
      );
    }

    // Check if order is ready for design approval
    if (order.order_status !== 'deposit_paid' || order.payment_status !== 'deposit_paid') {
      return NextResponse.json(
        { error: 'Order is not ready for design approval' },
        { status: 400 }
      );
    }

    // Update order status
    const { error: updateError } = await supabaseAdminClient
      .from('club_orders')
      .update({
        order_status: 'design_approved',
        payment_status: 'second_payment_due',
        design_approved_at: new Date().toISOString()
      })
      .eq('id', orderId);

    if (updateError) {
      console.error('Database update error:', updateError);
      return NextResponse.json(
        { error: 'Failed to update order status' },
        { status: 500 }
      );
    }

    // Send email notification (placeholder - you'll need to implement email service)
    // For now, we'll just log it
    console.log(`Design approved for order ${orderId}. Customer: ${order.email}`);
    console.log(`Second payment amount: $${order.second_payment_amount}`);

    // Send Slack notification
    if (process.env.SLACK_WEBHOOK_URL) {
      try {
        const slackMessage = {
          text: `✅ Design Approved - Second Payment Due`,
          blocks: [
            {
              type: "header",
              text: {
                type: "plain_text",
                text: "✅ Design Approved - Second Payment Due"
              }
            },
            {
              type: "section",
              fields: [
                {
                  type: "mrkdwn",
                  text: `*Organization:*\n${order.organization_name}`
                },
                {
                  type: "mrkdwn",
                  text: `*Order ID:*\n${orderId}`
                },
                {
                  type: "mrkdwn",
                  text: `*Customer Email:*\n${order.email}`
                },
                {
                  type: "mrkdwn",
                  text: `*Second Payment Due:*\n$${order.second_payment_amount.toLocaleString()}`
                }
              ]
            },
            {
              type: "section",
              text: {
                type: "mrkdwn",
                text: `*Next Steps:*\n• Customer will receive email with payment link\n• 40% payment due before production begins\n• Payment link: ${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/club/payment/second?orderId=${orderId}&email=${order.email}`
              }
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
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Design approved successfully',
      paymentLink: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/club/payment/second?orderId=${orderId}&email=${order.email}`
    });

  } catch (error) {
    console.error('Design approval error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
