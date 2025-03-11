// docs, requesting and storing Google OAuth tokens for accessing Google services: https://supabase.com/docs/guides/auth/social-login/auth-google?queryGroups=environment&environment=client&queryGroups=framework&framework=nextjs

import { supabase } from './supabase/client'

export function signInWithGoogle() {
  supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: `${process.env.NEXT_PUBLIC_APP_URL}/auth/callback`,
    },
  })
}

export async function signOut() {
  const { error } = await supabase.auth.signOut()
  if (error) {
    console.error(error)
    location.reload()
  }
}
