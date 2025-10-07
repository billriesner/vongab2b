'use client';

import { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'next/navigation';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

interface ClubOrder {
  id: string;
  organization_name: string;
  contact_name: string;
  email: string;
  starter_kit: 'core' | 'pro';
  total_units: number;
  subtotal: number;
  deposit_amount: number;
  second_payment_amount: number;
  final_payment_amount: number;
  order_status: 'deposit_paid' | 'design_approved' | 'production_ready' | 'shipped';
  payment_status: 'deposit_paid' | 'second_payment_due' | 'final_payment_due' | 'fully_paid';
  created_at: string;
  cart_items: any[];
}

export default function OrderStatusPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const orderId = params.id as string;
  const email = searchParams.get('email');
  
  const [order, setOrder] = useState<ClubOrder | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (orderId && email) {
      fetchOrder();
    } else {
      setError('Missing order ID or email');
      setLoading(false);
    }
  }, [orderId, email]);

  const fetchOrder = async () => {
    try {
      const response = await fetch(`/api/club/orders?orderId=${orderId}&email=${email}`);
      const data = await response.json();
      
      if (response.ok) {
        setOrder(data.order);
      } else {
        setError(data.error || 'Order not found');
      }
    } catch (err) {
      setError('Failed to fetch order');
    } finally {
      setLoading(false);
    }
  };

  const handleSecondPayment = async () => {
    try {
      const response = await fetch('/api/club/payment/second', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ orderId, email })
      });

      const data = await response.json();
      
      if (response.ok) {
        window.location.href = data.checkoutUrl;
      } else {
        alert(`Error: ${data.error}`);
      }
    } catch (err) {
      alert('Failed to create payment session');
    }
  };

  const handleFinalPayment = async () => {
    try {
      const response = await fetch('/api/club/payment/final', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ orderId, email })
      });

      const data = await response.json();
      
      if (response.ok) {
        window.location.href = data.checkoutUrl;
      } else {
        alert(`Error: ${data.error}`);
      }
    } catch (err) {
      alert('Failed to create payment session');
    }
  };

  const getStatusBadge = (orderStatus: string, paymentStatus: string) => {
    if (paymentStatus === 'fully_paid') {
      return <Badge className="bg-green-500">Fully Paid</Badge>;
    }
    
    if (paymentStatus === 'final_payment_due') {
      return <Badge className="bg-orange-500">Final Payment Due</Badge>;
    }
    
    if (paymentStatus === 'second_payment_due') {
      return <Badge className="bg-yellow-500">Second Payment Due</Badge>;
    }
    
    return <Badge className="bg-blue-500">Deposit Paid</Badge>;
  };

  const getOrderItems = (cartItems: any[]) => {
    return cartItems.map((item: any) => {
      const itemQty = Object.values(item.sizeRun).reduce((sum: number, qty: any) => sum + qty, 0);
      return `${item.gearType}: ${itemQty} units`;
    }).join(', ');
  };

  if (loading) {
    return (
      <div className="min-h-screen py-8" style={{ backgroundColor: '#F7F7F7' }}>
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-navy mb-8">Order Status</h1>
            <p>Loading order details...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error || !order) {
    return (
      <div className="min-h-screen py-8" style={{ backgroundColor: '#F7F7F7' }}>
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-navy mb-8">Order Status</h1>
            <p className="text-red-600">Error: {error}</p>
            <Link href="/club/get-started">
              <Button className="mt-4">Start New Order</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8" style={{ backgroundColor: '#F7F7F7' }}>
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-navy mb-2">Order Status</h1>
          <p className="text-text/70">Track your Club Vonga order progress</p>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-2xl text-navy">{order.organization_name}</CardTitle>
                <p className="text-text/70 mt-1">
                  Order #{order.id.slice(0, 8)} • {order.starter_kit === 'core' ? 'Core Kit' : 'Pro Kit'}
                </p>
              </div>
              {getStatusBadge(order.order_status, order.payment_status)}
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-navy mb-2">Order Details</h3>
                <div className="space-y-1 text-sm text-text/70">
                  <p><strong>Contact:</strong> {order.contact_name}</p>
                  <p><strong>Email:</strong> {order.email}</p>
                  <p><strong>Total Units:</strong> {order.total_units}</p>
                  <p><strong>Items:</strong> {getOrderItems(order.cart_items)}</p>
                  <p><strong>Order Date:</strong> {new Date(order.created_at).toLocaleDateString()}</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-navy mb-2">Payment Schedule</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Initial Deposit (10%):</span>
                    <span className="font-semibold text-green-600">${order.deposit_amount.toLocaleString()} ✓</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Design Approval (40%):</span>
                    <span className={`font-semibold ${order.payment_status === 'second_payment_due' || order.payment_status === 'final_payment_due' || order.payment_status === 'fully_paid' ? 'text-green-600' : 'text-text/70'}`}>
                      ${order.second_payment_amount.toLocaleString()} {order.payment_status === 'second_payment_due' || order.payment_status === 'final_payment_due' || order.payment_status === 'fully_paid' ? '✓' : ''}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Before Shipment (50%):</span>
                    <span className={`font-semibold ${order.payment_status === 'final_payment_due' || order.payment_status === 'fully_paid' ? 'text-green-600' : 'text-text/70'}`}>
                      ${order.final_payment_amount.toLocaleString()} {order.payment_status === 'final_payment_due' || order.payment_status === 'fully_paid' ? '✓' : ''}
                    </span>
                  </div>
                  <div className="border-t pt-2 flex justify-between font-bold">
                    <span>Total:</span>
                    <span>${order.subtotal.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Actions */}
            {order.payment_status === 'second_payment_due' && (
              <div className="mt-6 p-4 bg-yellow-50 border-2 border-yellow-300 rounded-lg">
                <h3 className="font-semibold text-navy mb-2">Design Approved - Payment Required</h3>
                <p className="text-sm text-text/70 mb-4">
                  Your design has been approved! Please complete the second payment of ${order.second_payment_amount.toLocaleString()} to begin production.
                </p>
                <Button onClick={handleSecondPayment} className="bg-accent hover:bg-accent/90 text-navy">
                  Pay ${order.second_payment_amount.toLocaleString()} (40%)
                </Button>
              </div>
            )}

            {order.payment_status === 'final_payment_due' && (
              <div className="mt-6 p-4 bg-orange-50 border-2 border-orange-300 rounded-lg">
                <h3 className="font-semibold text-navy mb-2">Ready to Ship - Final Payment Required</h3>
                <p className="text-sm text-text/70 mb-4">
                  Your order is ready to ship! Please complete the final payment of ${order.final_payment_amount.toLocaleString()} to initiate shipment.
                </p>
                <Button onClick={handleFinalPayment} className="bg-accent hover:bg-accent/90 text-navy">
                  Pay ${order.final_payment_amount.toLocaleString()} (50%)
                </Button>
              </div>
            )}

            {order.payment_status === 'fully_paid' && (
              <div className="mt-6 p-4 bg-green-50 border-2 border-green-300 rounded-lg">
                <h3 className="font-semibold text-navy mb-2">Order Complete!</h3>
                <p className="text-sm text-text/70">
                  All payments have been received. Your order will be shipped soon!
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        <div className="text-center">
          <Link href="/club/get-started">
            <Button variant="outline">Start New Order</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
