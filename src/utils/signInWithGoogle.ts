import { supabase } from './supabase/client'

export function signInWithGoogle() {
  supabase.auth.signInWithOAuth({
    provider: 'google',
  })
}
