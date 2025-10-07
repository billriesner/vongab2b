# Club Vonga Automated Payment System

⚠️ **DEPRECATED: This documentation is for the Supabase version which has been replaced with Airtable.**  
**Club Vonga functionality is currently disabled pending rebuild with Airtable integration.**

---

## Overview

The Club Vonga system now includes an automated 3-stage payment workflow:
- **10% Initial Deposit** - Paid when order is submitted
- **40% Design Approval Payment** - Paid after design is approved
- **50% Final Payment** - Paid before shipment

## System Architecture

### Database
- **Supabase** - Stores all order data and payment tracking
- **Table**: `club_orders` - Contains order details, payment status, and Stripe payment IDs

### Payment Processing
- **Stripe Checkout** - Handles all payments with Apple Pay/Google Pay support
- **Webhooks** - Automatically saves orders when deposits are paid
- **Follow-up Payments** - Generated via admin dashboard actions

### Notifications
- **Slack** - Real-time notifications for new orders and payment events
- **Email** - (Future enhancement) Customer notifications with payment links

## Access Points

### 1. Admin Dashboard
**URL**: `/admin/club-orders`
- View all Club Vonga orders
- See payment status and order details
- Trigger follow-up payments
- Manage order workflow

### 2. Customer Order Status
**URL**: `/club/order/[orderId]?email=[email]`
- Customers can track their order progress
- View payment schedule and amounts
- Complete pending payments

### 3. Order Form
**URL**: `/club/get-started`
- Multi-step form for order submission
- Cart system for gear selection
- Stripe integration for deposit payment

## Workflow Guide

### For Customers

#### Step 1: Submit Order
1. Navigate to `/club/get-started`
2. Fill out organization information (Step 1)
3. Select starter kit and gear items (Step 2)
4. Upload logo and brand details (Step 3)
5. Choose rewards (Step 4)
6. Review pricing and pay 10% deposit (Step 5)

#### Step 2: Track Progress
1. Receive order confirmation email
2. Visit order status page: `/club/order/[orderId]?email=[email]`
3. Monitor payment schedule and order status

#### Step 3: Complete Payments
1. **Design Approval Payment (40%)**
   - Triggered when admin approves design
   - Receive email with payment link
   - Complete payment to begin production

2. **Final Payment (50%)**
   - Triggered when order is ready to ship
   - Receive email with payment link
   - Complete payment to initiate shipment

### For Admin (You)

#### Step 1: Monitor New Orders
1. Check `/admin/club-orders` dashboard
2. Review new orders with "Deposit Paid" status
3. Slack notifications will alert you to new orders

#### Step 2: Approve Design
1. Review customer's branding requirements
2. Create approved design
3. Click **"Approve Design"** button in admin dashboard
4. System automatically:
   - Updates order status to "design_approved"
   - Changes payment status to "second_payment_due"
   - Sends Slack notification
   - Generates payment link for customer

#### Step 3: Mark Ready for Shipment
1. Complete production of items
2. Click **"Ready to Ship"** button in admin dashboard
3. System automatically:
   - Updates order status to "production_ready"
   - Changes payment status to "final_payment_due"
   - Sends Slack notification
   - Generates payment link for customer

#### Step 4: Complete Order
1. Customer completes final payment
2. Order status updates to "fully_paid"
3. Ship items to customer
4. Update order status to "shipped" (manual step)

## Order Status Definitions

### Order Status
- **`deposit_paid`** - Initial 10% payment received
- **`design_approved`** - Design approved, waiting for 40% payment
- **`production_ready`** - Items produced, waiting for 50% payment
- **`shipped`** - Order complete and shipped

### Payment Status
- **`deposit_paid`** - Only 10% deposit received
- **`second_payment_due`** - 40% design approval payment needed
- **`final_payment_due`** - 50% final payment needed
- **`fully_paid`** - All payments completed

## API Endpoints

### Order Management
- `GET /api/club/orders` - List all orders (admin)
- `GET /api/club/orders?orderId=[id]` - Get specific order
- `GET /api/club/orders?email=[email]` - Get orders for customer

### Payment Processing
- `POST /api/club/payment/second` - Create 40% payment session
- `POST /api/club/payment/final` - Create 50% payment session
- `POST /api/club/webhook` - Stripe webhook handler

### Admin Actions
- `POST /api/admin/approve-design` - Approve design and trigger 40% payment
- `POST /api/admin/ready-to-ship` - Mark ready for shipment and trigger 50% payment

## Database Schema

### club_orders Table
```sql
- id: UUID (Primary Key)
- stripe_session_id: TEXT (Unique)
- organization_name: TEXT
- contact_name: TEXT
- email: TEXT
- phone: TEXT (Optional)
- organization_type: TEXT (Optional)
- member_count: INTEGER (Optional)
- starter_kit: TEXT ('core' or 'pro')
- cart_items: JSONB (Order details)
- total_units: INTEGER
- subtotal: DECIMAL(10,2)
- deposit_amount: DECIMAL(10,2)
- second_payment_amount: DECIMAL(10,2)
- final_payment_amount: DECIMAL(10,2)
- order_status: TEXT (deposit_paid, design_approved, production_ready, shipped)
- payment_status: TEXT (deposit_paid, second_payment_due, final_payment_due, fully_paid)
- created_at: TIMESTAMP
- design_approved_at: TIMESTAMP (Optional)
- production_ready_at: TIMESTAMP (Optional)
- shipped_at: TIMESTAMP (Optional)
- deposit_payment_intent_id: TEXT (Optional)
- second_payment_intent_id: TEXT (Optional)
- final_payment_intent_id: TEXT (Optional)
```

## Environment Variables Required

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://uqtzgfntdgyrouzxlcyg.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# Stripe Configuration
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret

# Notifications
SLACK_WEBHOOK_URL=your_slack_webhook_url

# Base URL
NEXT_PUBLIC_BASE_URL=http://localhost:3000 (or your domain)
```

## Slack Notifications

The system sends automated Slack notifications for:

1. **New Order Received**
   - Organization details
   - Order summary
   - Payment breakdown
   - Link to admin dashboard

2. **Design Approved**
   - Order details
   - Second payment amount
   - Payment link for customer

3. **Ready to Ship**
   - Order details
   - Final payment amount
   - Payment link for customer

## Troubleshooting

### Common Issues

1. **Orders not appearing in admin dashboard**
   - Check Supabase connection
   - Verify webhook is configured correctly
   - Check Stripe webhook logs

2. **Payment links not working**
   - Verify environment variables are set
   - Check Stripe API keys
   - Ensure webhook secret is correct

3. **Slack notifications not sending**
   - Verify Slack webhook URL
   - Check webhook URL is accessible
   - Test webhook manually

### Testing the System

1. **Test Order Flow**
   - Submit a test order through the form
   - Verify order appears in admin dashboard
   - Test "Approve Design" functionality
   - Test "Ready to Ship" functionality

2. **Test Payment Flow**
   - Use Stripe test mode
   - Verify webhook receives events
   - Check order status updates correctly

## Security Considerations

- All API routes use Supabase service role for database access
- Stripe webhooks are verified using webhook secrets
- Row-level security policies protect customer data
- Admin dashboard should be protected in production

## Future Enhancements

1. **Email Notifications**
   - SendGrid or Resend integration
   - Automated payment reminder emails
   - Order status update emails

2. **Advanced Admin Features**
   - Bulk order operations
   - Export order data
   - Payment analytics dashboard

3. **Customer Portal**
   - Account creation and login
   - Order history
   - Document upload for designs

## Support

For technical issues or questions about the payment system, refer to:
- Supabase documentation for database issues
- Stripe documentation for payment processing
- Next.js documentation for API routes
- Slack API documentation for webhook integration
