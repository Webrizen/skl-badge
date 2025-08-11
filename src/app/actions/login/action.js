'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/utils/supabase/server'

export async function login(formData) {
  const supabase = await createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email'),
    password: formData.get('password'),
  }

  const { error } = await supabase.auth.signInWithPassword(data)

  if (error) {
    return redirect(`/auth/sign-in?error=${error.message}`)
  }

  revalidatePath('/', 'layout')
  redirect('/dashboard')
}

export async function signup(formData) {
  const supabase = await createClient()

  const data = {
    full_name: formData.get('full_name'),
    email: formData.get('email'),
    password: formData.get('password'),
  }

  const { error, data: { user } } = await supabase.auth.signUp({
    email: data.email,
    password: data.password,
  })

  if (error) {
    return redirect(`/auth/sign-up?error=${error.message}`)
  }

  const { error: userError } = await supabase.from('users').insert({
    id: user.id,
    full_name: data.full_name,
  })

  if (userError) {
    return redirect(`/auth/sign-up?error=${userError.message}`)
  }

  revalidatePath('/', 'layout')
  redirect('/auth/confirm-email')
}

export async function signInWithGoogle() {
  const supabase = await createClient()
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: `${location.origin}/auth/callback`,
    },
  })

  if (error) {
    redirect('/error')
  }

  redirect(data.url)
}

export async function logout() {
  const supabase = await createClient()
  await supabase.auth.signOut()
  revalidatePath('/', 'layout')
  redirect('/')
}