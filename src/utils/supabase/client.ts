import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
  // Use empty strings as fallbacks so the build doesn't crash
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

  return createBrowserClient(
    supabaseUrl,
    supabaseKey
  )
}