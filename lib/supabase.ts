import { createClient } from '@supabase/supabase-js'

// Function to create Supabase clients safely
export const createSupabaseClient = () => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  
  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Missing Supabase environment variables')
  }
  
  return createClient(supabaseUrl, supabaseAnonKey)
}

export const createSupabaseAdminClient = () => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY
  
  if (!supabaseUrl || !supabaseServiceKey) {
    throw new Error('Missing Supabase environment variables')
  }
  
  return createClient(supabaseUrl, supabaseServiceKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  })
}

// Client-side Supabase client (for browser usage) - only create if env vars exist
export const supabase = typeof window !== 'undefined' && process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  ? createSupabaseClient()
  : null

// Server-side Supabase client (for API routes with full access) - only create if env vars exist
export const supabaseAdmin = process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY
  ? createSupabaseAdminClient()
  : null

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
