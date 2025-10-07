import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase';

export async function POST() {
  try {
    const supabaseClient = supabaseAdmin();
    
    // Create the club_orders table
    const createTableSQL = `
      CREATE TABLE IF NOT EXISTS club_orders (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        stripe_session_id TEXT UNIQUE NOT NULL,
        organization_name TEXT NOT NULL,
        contact_name TEXT NOT NULL,
        email TEXT NOT NULL,
        phone TEXT,
        organization_type TEXT,
        member_count INTEGER,
        
        -- Order Details
        starter_kit TEXT NOT NULL CHECK (starter_kit IN ('core', 'pro')),
        cart_items JSONB NOT NULL,
        total_units INTEGER NOT NULL,
        
        -- Pricing
        subtotal DECIMAL(10,2) NOT NULL,
        deposit_amount DECIMAL(10,2) NOT NULL,
        second_payment_amount DECIMAL(10,2) NOT NULL,
        final_payment_amount DECIMAL(10,2) NOT NULL,
        
        -- Status Tracking
        order_status TEXT DEFAULT 'deposit_paid' CHECK (order_status IN ('deposit_paid', 'design_approved', 'production_ready', 'shipped')),
        payment_status TEXT DEFAULT 'deposit_paid' CHECK (payment_status IN ('deposit_paid', 'second_payment_due', 'final_payment_due', 'fully_paid')),
        
        -- Timestamps
        created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
        design_approved_at TIMESTAMP WITH TIME ZONE,
        production_ready_at TIMESTAMP WITH TIME ZONE,
        shipped_at TIMESTAMP WITH TIME ZONE,
        
        -- Stripe Payment IDs
        deposit_payment_intent_id TEXT,
        second_payment_intent_id TEXT,
        final_payment_intent_id TEXT
      );
    `;

    // Execute the SQL
    const { data, error } = await supabaseClient.rpc('exec_sql', { sql: createTableSQL });

    if (error) {
      return NextResponse.json({
        success: false,
        error: error.message,
        details: 'Failed to create club_orders table'
      }, { status: 500 });
    }

    // Create indexes
    const createIndexesSQL = `
      CREATE INDEX IF NOT EXISTS idx_club_orders_email ON club_orders(email);
      CREATE INDEX IF NOT EXISTS idx_club_orders_stripe_session ON club_orders(stripe_session_id);
      CREATE INDEX IF NOT EXISTS idx_club_orders_status ON club_orders(order_status, payment_status);
      CREATE INDEX IF NOT EXISTS idx_club_orders_created_at ON club_orders(created_at DESC);
    `;

    const { data: indexData, error: indexError } = await supabaseClient.rpc('exec_sql', { sql: createIndexesSQL });

    if (indexError) {
      console.warn('Index creation warning:', indexError.message);
    }

    // Enable RLS
    const enableRLSSQL = `ALTER TABLE club_orders ENABLE ROW LEVEL SECURITY;`;
    const { error: rlsError } = await supabaseClient.rpc('exec_sql', { sql: enableRLSSQL });

    if (rlsError) {
      console.warn('RLS enable warning:', rlsError.message);
    }

    return NextResponse.json({
      success: true,
      message: 'Database setup completed successfully!',
      data: data,
      indexData: indexData
    });

  } catch (error) {
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
      details: 'Exception occurred while setting up database'
    }, { status: 500 });
  }
}
