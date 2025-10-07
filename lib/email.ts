import { Resend } from 'resend';

// Initialize Resend client
const getResendClient = () => {
  if (!process.env.RESEND_API_KEY) {
    console.warn('Resend API key not configured');
    return null;
  }
  return new Resend(process.env.RESEND_API_KEY);
};

const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || 'orders@vonga.io';
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

// Email template styles
const emailStyles = {
  container: 'font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;',
  header: 'background-color: #303E55; color: white; padding: 30px; text-align: center;',
  logo: 'font-size: 24px; font-weight: bold; margin: 0;',
  content: 'padding: 30px; background-color: #f7f7f7;',
  card: 'background-color: white; padding: 20px; margin: 20px 0; border-radius: 8px;',
  button: 'display: inline-block; background-color: #33BECC; color: #303E55; padding: 15px 30px; text-decoration: none; border-radius: 5px; font-weight: bold; margin: 20px 0;',
  footer: 'text-align: center; padding: 20px; color: #666; font-size: 12px;',
  divider: 'border-top: 2px solid #33BECC; margin: 20px 0;',
};

interface OrderEmailData {
  organizationName: string;
  contactName: string;
  email: string;
  orderId: string;
  totalUnits: number;
  subtotal: number;
  depositAmount?: number;
  paymentAmount?: number;
  paymentType?: 'second' | 'final';
  starterKit: 'Core' | 'Pro';
}

export async function sendOrderConfirmationEmail(data: OrderEmailData) {
  const resend = getResendClient();
  if (!resend) return { success: false, error: 'Email service not configured' };

  const html = `
    <div style="${emailStyles.container}">
      <div style="${emailStyles.header}">
        <h1 style="${emailStyles.logo}">VONGA</h1>
        <p>Order Confirmation</p>
      </div>
      
      <div style="${emailStyles.content}">
        <h2 style="color: #303E55;">Thank you for your order, ${data.contactName}!</h2>
        
        <div style="${emailStyles.card}">
          <h3 style="color: #303E55; margin-top: 0;">Order Summary</h3>
          <p><strong>Organization:</strong> ${data.organizationName}</p>
          <p><strong>Order ID:</strong> ${data.orderId}</p>
          <p><strong>Starter Kit:</strong> ${data.starterKit} Kit</p>
          <p><strong>Total Units:</strong> ${data.totalUnits}</p>
          <p><strong>Order Total:</strong> $${data.subtotal.toLocaleString()}</p>
          <p><strong>Deposit Paid (10%):</strong> $${(data.depositAmount || 0).toLocaleString()}</p>
        </div>

        <div style="${emailStyles.divider}"></div>

        <h3 style="color: #303E55;">What Happens Next?</h3>
        <p>Our design team will review your order and create mockups based on your specifications. This typically takes 2-3 business days.</p>
        
        <p><strong>Payment Schedule:</strong></p>
        <ul>
          <li>✅ 10% Deposit - Paid</li>
          <li>⏳ 40% - Due upon design approval</li>
          <li>⏳ 50% - Due before shipment</li>
        </ul>

        <a href="${BASE_URL}/club/order/${data.orderId}?email=${encodeURIComponent(data.email)}" style="${emailStyles.button}">
          View Order Status
        </a>

        <p style="margin-top: 30px;">If you have any questions, please don't hesitate to reach out to our team.</p>
      </div>

      <div style="${emailStyles.footer}">
        <p>© ${new Date().getFullYear()} Vonga. All rights reserved.</p>
        <p>Questions? Contact us at <a href="mailto:support@vonga.io">support@vonga.io</a></p>
      </div>
    </div>
  `;

  try {
    const result = await resend.emails.send({
      from: FROM_EMAIL,
      to: data.email,
      subject: `Order Confirmation - ${data.organizationName} (${data.orderId})`,
      html,
    });
    return { success: true, data: result };
  } catch (error) {
    console.error('Failed to send order confirmation email:', error);
    return { success: false, error };
  }
}

export async function sendPaymentRequestEmail(data: OrderEmailData) {
  const resend = getResendClient();
  if (!resend) return { success: false, error: 'Email service not configured' };

  const isSecondPayment = data.paymentType === 'second';
  const paymentLabel = isSecondPayment ? '40% Payment' : 'Final 50% Payment';
  const subject = isSecondPayment ? 'Design Approved - Payment Required' : 'Order Ready to Ship - Final Payment Required';

  const html = `
    <div style="${emailStyles.container}">
      <div style="${emailStyles.header}">
        <h1 style="${emailStyles.logo}">VONGA</h1>
        <p>${subject}</p>
      </div>
      
      <div style="${emailStyles.content}">
        <h2 style="color: #303E55;">Hello ${data.contactName},</h2>
        
        ${isSecondPayment ? `
          <p style="font-size: 16px; line-height: 1.6;">Great news! Your design has been approved and we're ready to move into production.</p>
        ` : `
          <p style="font-size: 16px; line-height: 1.6;">Your order is complete and ready to ship! Please submit your final payment to complete the process.</p>
        `}

        <div style="${emailStyles.card}">
          <h3 style="color: #303E55; margin-top: 0;">Order Details</h3>
          <p><strong>Organization:</strong> ${data.organizationName}</p>
          <p><strong>Order ID:</strong> ${data.orderId}</p>
          <p><strong>Total Units:</strong> ${data.totalUnits}</p>
          <p><strong>Order Total:</strong> $${data.subtotal.toLocaleString()}</p>
        </div>

        <div style="${emailStyles.card}; background-color: #FFF4E6; border-left: 4px solid #33BECC;">
          <h3 style="color: #303E55; margin-top: 0;">${paymentLabel} Due</h3>
          <p style="font-size: 24px; font-weight: bold; color: #303E55; margin: 10px 0;">
            $${(data.paymentAmount || 0).toLocaleString()}
          </p>
        </div>

        <div style="text-align: center;">
          <a href="${BASE_URL}/club/payment/${data.paymentType}?orderId=${data.orderId}&email=${encodeURIComponent(data.email)}" style="${emailStyles.button}">
            Pay Now
          </a>
        </div>

        <p style="margin-top: 30px; font-size: 14px; color: #666;">
          You can also view your complete order status and payment details by visiting your order page.
        </p>

        <a href="${BASE_URL}/club/order/${data.orderId}?email=${encodeURIComponent(data.email)}" style="color: #33BECC; text-decoration: none;">
          View Order Status →
        </a>
      </div>

      <div style="${emailStyles.footer}">
        <p>© ${new Date().getFullYear()} Vonga. All rights reserved.</p>
        <p>Questions? Contact us at <a href="mailto:support@vonga.io">support@vonga.io</a></p>
      </div>
    </div>
  `;

  try {
    const result = await resend.emails.send({
      from: FROM_EMAIL,
      to: data.email,
      subject: `${subject} - ${data.organizationName}`,
      html,
    });
    return { success: true, data: result };
  } catch (error) {
    console.error('Failed to send payment request email:', error);
    return { success: false, error };
  }
}

export async function sendOrderCompleteEmail(data: OrderEmailData) {
  const resend = getResendClient();
  if (!resend) return { success: false, error: 'Email service not configured' };

  const html = `
    <div style="${emailStyles.container}">
      <div style="${emailStyles.header}">
        <h1 style="${emailStyles.logo}">VONGA</h1>
        <p>Order Complete!</p>
      </div>
      
      <div style="${emailStyles.content}">
        <h2 style="color: #303E55;">🎉 Thank you, ${data.contactName}!</h2>
        
        <p style="font-size: 16px; line-height: 1.6;">Your order is fully paid and will be shipped soon. We'll send you tracking information once your order is on its way.</p>

        <div style="${emailStyles.card}">
          <h3 style="color: #303E55; margin-top: 0;">Order Summary</h3>
          <p><strong>Organization:</strong> ${data.organizationName}</p>
          <p><strong>Order ID:</strong> ${data.orderId}</p>
          <p><strong>Starter Kit:</strong> ${data.starterKit} Kit</p>
          <p><strong>Total Units:</strong> ${data.totalUnits}</p>
          <p><strong>Total Paid:</strong> $${data.subtotal.toLocaleString()}</p>
        </div>

        <div style="${emailStyles.card}; background-color: #E8F5E9; border-left: 4px solid #4CAF50;">
          <p style="margin: 0; font-weight: bold; color: #2E7D32;">✓ Payment Complete</p>
          <p style="margin: 5px 0 0 0; color: #666;">All payments have been received. Your order will ship within 2-3 weeks.</p>
        </div>

        <a href="${BASE_URL}/club/order/${data.orderId}?email=${encodeURIComponent(data.email)}" style="${emailStyles.button}">
          View Order Status
        </a>

        <div style="${emailStyles.divider}"></div>

        <h3 style="color: #303E55;">What's Next?</h3>
        <p>1. Your order will be prepared for shipment</p>
        <p>2. You'll receive tracking information via email</p>
        <p>3. Your custom gear will arrive within 2-3 weeks</p>

        <p style="margin-top: 30px;">We're excited to help you build your community with Vonga!</p>
      </div>

      <div style="${emailStyles.footer}">
        <p>© ${new Date().getFullYear()} Vonga. All rights reserved.</p>
        <p>Questions? Contact us at <a href="mailto:support@vonga.io">support@vonga.io</a></p>
      </div>
    </div>
  `;

  try {
    const result = await resend.emails.send({
      from: FROM_EMAIL,
      to: data.email,
      subject: `Order Complete - ${data.organizationName} (${data.orderId})`,
      html,
    });
    return { success: true, data: result };
  } catch (error) {
    console.error('Failed to send order complete email:', error);
    return { success: false, error };
  }
}

