import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

// Client-side Supabase client (for browser usage)
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Server-side Supabase client (for API routes with full access)
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
})

// Types for our Club Orders
export interface ClubOrder {
  id: string
  stripe_session_id: string
  organization_name: string
  contact_name: string
  email: string
  phone?: string
  organization_type?: string
  member_count?: number
  
  // Order Details
  starter_kit: 'core' | 'pro'
  cart_items: any[]
  total_units: number
  
  // Pricing
  subtotal: number
  deposit_amount: number
  second_payment_amount: number
  final_payment_amount: number
  
  // Status Tracking
  order_status: 'deposit_paid' | 'design_approved' | 'production_ready' | 'shipped'
  payment_status: 'deposit_paid' | 'second_payment_due' | 'final_payment_due' | 'fully_paid'
  
  // Timestamps
  created_at: string
  design_approved_at?: string
  production_ready_at?: string
  shipped_at?: string
  
  // Stripe Payment IDs
  deposit_payment_intent_id?: string
  second_payment_intent_id?: string
  final_payment_intent_id?: string
}
