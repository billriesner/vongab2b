'use client';

import { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

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

export default function AdminClubOrdersPage() {
  const [orders, setOrders] = useState<ClubOrder[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await fetch('/api/club/orders');
      const data = await response.json();
      
      if (response.ok) {
        setOrders(data.orders || []);
      } else {
        setError(data.error || 'Failed to fetch orders');
      }
    } catch (err) {
      setError('Failed to fetch orders');
    } finally {
      setLoading(false);
    }
  };

  const handleApproveDesign = async (orderId: string) => {
    try {
      const response = await fetch('/api/admin/approve-design', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ orderId })
      });

      const data = await response.json();
      
      if (response.ok) {
        alert('Design approved! Customer will receive payment link.');
        fetchOrders(); // Refresh orders
      } else {
        alert(`Error: ${data.error}`);
      }
    } catch (err) {
      alert('Failed to approve design');
    }
  };

  const handleReadyToShip = async (orderId: string) => {
    try {
      const response = await fetch('/api/admin/ready-to-ship', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ orderId })
      });

      const data = await response.json();
      
      if (response.ok) {
        alert('Order ready for final payment! Customer will receive payment link.');
        fetchOrders(); // Refresh orders
      } else {
        alert(`Error: ${data.error}`);
      }
    } catch (err) {
      alert('Failed to mark ready for shipping');
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
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-navy mb-8">Club Vonga Orders</h1>
            <p>Loading orders...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen py-8" style={{ backgroundColor: '#F7F7F7' }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-navy mb-8">Club Vonga Orders</h1>
            <p className="text-red-600">Error: {error}</p>
            <Button onClick={fetchOrders} className="mt-4">Retry</Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8" style={{ backgroundColor: '#F7F7F7' }}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-navy mb-2">Club Vonga Orders</h1>
          <p className="text-text/70">Manage orders and trigger follow-up payments</p>
        </div>

        {orders.length === 0 ? (
          <Card>
            <CardContent className="text-center py-8">
              <p className="text-text/70">No orders found.</p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-6">
            {orders.map((order) => (
              <Card key={order.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl text-navy">{order.organization_name}</CardTitle>
                      <p className="text-sm text-text/70 mt-1">
                        {order.contact_name} • {order.email}
                      </p>
                      <p className="text-sm text-text/70">
                        {order.starter_kit === 'core' ? 'Core Kit' : 'Pro Kit'} • {order.total_units} units
                      </p>
                    </div>
                    <div className="text-right">
                      {getStatusBadge(order.order_status, order.payment_status)}
                      <p className="text-sm text-text/70 mt-2">
                        Created: {new Date(order.created_at).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <p className="text-sm font-semibold text-navy">Order Items</p>
                      <p className="text-sm text-text/70">{getOrderItems(order.cart_items)}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-navy">Payment Breakdown</p>
                      <div className="text-sm text-text/70 space-y-1">
                        <p>Total: ${order.subtotal.toLocaleString()}</p>
                        <p>Deposit: ${order.deposit_amount.toLocaleString()} ✓</p>
                        <p>Second: ${order.second_payment_amount.toLocaleString()}</p>
                        <p>Final: ${order.final_payment_amount.toLocaleString()}</p>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-navy">Actions</p>
                      <div className="space-y-2">
                        {order.payment_status === 'deposit_paid' && (
                          <Button 
                            onClick={() => handleApproveDesign(order.id)}
                            className="w-full bg-accent hover:bg-accent/90 text-navy"
                          >
                            Approve Design
                          </Button>
                        )}
                        {order.payment_status === 'second_payment_due' && (
                          <Button 
                            onClick={() => handleReadyToShip(order.id)}
                            className="w-full bg-accent hover:bg-accent/90 text-navy"
                          >
                            Ready to Ship
                          </Button>
                        )}
                        {order.payment_status === 'final_payment_due' && (
                          <p className="text-sm text-text/70">Waiting for final payment</p>
                        )}
                        {order.payment_status === 'fully_paid' && (
                          <p className="text-sm text-green-600">Order complete</p>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
