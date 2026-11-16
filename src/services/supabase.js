import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// If Supabase keys are provided in .env, create the live client.
// Otherwise, export null with graceful fallback methods.
export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey && supabaseUrl !== 'https://your-project.supabase.co')

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null

/**
 * Helper to fetch properties from Supabase when configured,
 * otherwise falls back to local data.
 */
export async function getPropertiesFromSupabase() {
  if (!isSupabaseConfigured || !supabase) {
    return null
  }

  try {
    const { data, error } = await supabase
      .from('properties')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      console.warn('Supabase fetch error, fallback to local storage/mock:', error.message)
      return null
    }

    return data
  } catch (err) {
    console.warn('Supabase connection error:', err)
    return null
  }
}

/**
 * Helper to save a new property into Supabase if connected
 */
export async function savePropertyToSupabase(property) {
  if (!isSupabaseConfigured || !supabase) {
    return { success: false, mode: 'local' }
  }

  try {
    const { data, error } = await supabase
      .from('properties')
      .insert([property])
      .select()

    if (error) {
      console.error('Supabase insert error:', error)
      return { success: false, error }
    }

    return { success: true, data: data[0] }
  } catch (err) {
    console.error('Supabase exception:', err)
    return { success: false, error: err }
  }
}
