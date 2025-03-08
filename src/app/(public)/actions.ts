'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

export type ServerActionResponse = Promise<
  | {
      success: true
      message?: string
    }
  | { success: false; message: string }
  | undefined
>

export async function login(formData: FormData): ServerActionResponse {
  const supabase = await createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { error } = await supabase.auth.signInWithPassword(data)

  console.log(data, error)

  if (error) {
    return {
      success: false,
      message: 'Email or password is incorrect',
    }
  }

  revalidatePath('/', 'layout')
  redirect('/')
}

export async function signUp(formData: FormData): ServerActionResponse {
  const supabase = await createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { error } = await supabase.auth.signUp(data)

  if (error) {
    return {
      success: false,
      message: 'Something went wrong while signing up. Try again later.',
    }
  }

  revalidatePath('/', 'layout')
  redirect('/')
}
