import Airtable from 'airtable';

// Initialize Airtable client
export const getAirtableBase = () => {
  if (!process.env.AIRTABLE_TOKEN) {
    console.warn('Airtable token not found');
    return null;
  }

  const airtable = new Airtable({ apiKey: process.env.AIRTABLE_TOKEN });
  return airtable.base(process.env.AIRTABLE_BASE_ID!);
};

// Table name
export const ORDERS_TABLE = process.env.AIRTABLE_TABLE_ID || 'tbl5hxH53WPrguBAG';

// Type definitions for Club Orders
export interface ClubOrder {
  id?: string;
  'Order ID': string;
  'Stripe Session ID': string;
  'Organization Name': string;
  'Contact Name': string;
  'Email': string;
  'Phone'?: string;
  'Organization Type'?: string;
  'Member Count'?: number;
  'Starter Kit': 'Core' | 'Pro';
  'Cart Items': string; // JSON string
  'Total Units': number;
  'Subtotal': number;
  'Deposit Amount': number;
  'Second Payment Amount': number;
  'Final Payment Amount': number;
  'Order Status': 'Deposit Paid' | 'Design Approved' | 'Production Ready' | 'Shipped';
  'Payment Status': 'Deposit Paid' | 'Second Payment Due' | 'Final Payment Due' | 'Fully Paid';
  'Created At': string;
  'Design Approved At'?: string;
  'Production Ready At'?: string;
  'Shipped At'?: string;
  'Deposit Payment Intent ID'?: string;
  'Second Payment Intent ID'?: string;
  'Final Payment Intent ID'?: string;
}

// Helper function to create an order in Airtable
export const createOrder = async (orderData: Omit<ClubOrder, 'id'>) => {
  const base = getAirtableBase();
  if (!base) {
    throw new Error('Airtable not configured');
  }

  try {
    const records = await base(ORDERS_TABLE).create([
      {
        fields: orderData,
      },
    ]);

    return {
      id: records[0].id,
      ...records[0].fields,
    };
  } catch (error) {
    console.error('Error creating order in Airtable:', error);
    throw error;
  }
};

// Helper function to get an order by ID
export const getOrderById = async (recordId: string): Promise<ClubOrder & { id: string }> => {
  const base = getAirtableBase();
  if (!base) {
    throw new Error('Airtable not configured');
  }

  try {
    const record = await base(ORDERS_TABLE).find(recordId);
    return {
      id: record.id,
      ...record.fields,
    } as ClubOrder & { id: string };
  } catch (error) {
    console.error('Error fetching order from Airtable:', error);
    throw error;
  }
};

// Helper function to update an order
export const updateOrder = async (recordId: string, updates: Partial<ClubOrder>) => {
  const base = getAirtableBase();
  if (!base) {
    throw new Error('Airtable not configured');
  }

  try {
    const records = await base(ORDERS_TABLE).update([
      {
        id: recordId,
        fields: updates,
      },
    ]);

    return {
      id: records[0].id,
      ...records[0].fields,
    };
  } catch (error) {
    console.error('Error updating order in Airtable:', error);
    throw error;
  }
};

// Helper function to get orders by email
export const getOrdersByEmail = async (email: string) => {
  const base = getAirtableBase();
  if (!base) {
    throw new Error('Airtable not configured');
  }

  try {
    const records = await base(ORDERS_TABLE)
      .select({
        filterByFormula: `{Email} = '${email}'`,
        sort: [{ field: 'Created At', direction: 'desc' }],
      })
      .all();

    return records.map((record) => ({
      id: record.id,
      ...record.fields,
    }));
  } catch (error) {
    console.error('Error fetching orders by email from Airtable:', error);
    throw error;
  }
};

// Helper function to get all orders
export const getAllOrders = async () => {
  const base = getAirtableBase();
  if (!base) {
    throw new Error('Airtable not configured');
  }

  try {
    const records = await base(ORDERS_TABLE)
      .select({
        sort: [{ field: 'Created At', direction: 'desc' }],
      })
      .all();

    return records.map((record) => ({
      id: record.id,
      ...record.fields,
    }));
  } catch (error) {
    console.error('Error fetching all orders from Airtable:', error);
    throw error;
  }
};

// Helper function to find order by Stripe Session ID
export const getOrderByStripeSessionId = async (sessionId: string) => {
  const base = getAirtableBase();
  if (!base) {
    throw new Error('Airtable not configured');
  }

  try {
    const records = await base(ORDERS_TABLE)
      .select({
        filterByFormula: `{Stripe Session ID} = '${sessionId}'`,
        maxRecords: 1,
      })
      .all();

    if (records.length === 0) {
      return null;
    }

    return {
      id: records[0].id,
      ...records[0].fields,
    };
  } catch (error) {
    console.error('Error fetching order by session ID from Airtable:', error);
    throw error;
  }
};

