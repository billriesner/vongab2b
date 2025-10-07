// Mock client for build time
const mockClient = {
  from: () => ({ 
    select: () => ({ 
      eq: () => ({ 
        single: () => Promise.resolve({ data: null, error: null }),
        limit: () => Promise.resolve({ data: [], error: null })
      }) 
    }),
    insert: () => ({ 
      select: () => ({ 
        single: () => Promise.resolve({ data: null, error: null }) 
      }) 
    }),
    update: () => ({ 
      eq: () => ({ 
        select: () => ({ 
          single: () => Promise.resolve({ data: null, error: null }) 
        }) 
      }) 
    }),
    rpc: () => Promise.resolve({ data: null, error: null })
  })
} as any

// Function to create Supabase clients safely
export const createSupabaseClient = () => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  
  // Return mock client if env vars are missing (build time or misconfiguration)
  if (!supabaseUrl || !supabaseAnonKey) {
    console.warn('Supabase URL or Anon Key missing, using mock client')
    return mockClient
  }
  
  // Only import and create real client when we have credentials
  try {
    const { createClient } = require('@supabase/supabase-js')
    return createClient(supabaseUrl, supabaseAnonKey)
  } catch (error) {
    console.warn('Failed to create Supabase client:', error)
    return mockClient
  }
}

export const createSupabaseAdminClient = () => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY
  
  // Return mock client if env vars are missing (build time or misconfiguration)
  if (!supabaseUrl || !supabaseServiceKey) {
    console.warn('Supabase URL or Service Key missing, using mock client')
    return mockClient
  }
  
  // Only import and create real client when we have credentials
  try {
    const { createClient } = require('@supabase/supabase-js')
    return createClient(supabaseUrl, supabaseServiceKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false
      }
    })
  } catch (error) {
    console.warn('Failed to create Supabase admin client:', error)
    return mockClient
  }
}

// Export only the factory functions - no module-level client creation
export { createSupabaseClient as supabase, createSupabaseAdminClient as supabaseAdmin }

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
