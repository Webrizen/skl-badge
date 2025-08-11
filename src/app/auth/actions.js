'use server'

import { headers } from 'next/headers'
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

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email'),
    password: formData.get('password'),
  }

  const { error } = await supabase.auth.signUp(data)

  if (error) {
    return redirect(`/auth/sign-up?error=${error.message}`)
  }

  revalidatePath('/', 'layout')
  redirect('/auth/confirm')
}

export async function signInWithGoogle() {
  const supabase = await createClient()
  const origin = headers().get('origin')

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo: `${origin}/auth/callback`,
    },
  })

  if (error) {
    console.error('Error signing in with Google:', error)
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

export async function forgotPassword(formData) {
  const supabase = await createClient()
  const email = formData.get('email')
  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${headers().get('origin')}/auth/reset-password`,
  })

  if (error) {
    console.error('Error sending password reset email:', error)
    redirect('/error')
  }

  redirect('/auth/forgot-password/success')
}

export async function resetPassword(formData) {
  const password = formData.get('password')
  const confirmPassword = formData.get('confirmPassword')
  const code = formData.get('code')

  if (password !== confirmPassword) {
    return redirect('/auth/reset-password?error=Passwords do not match')
  }

  const supabase = await createClient()

  const { error: codeError } = await supabase.auth.exchangeCodeForSession(code)

  if (codeError) {
    return redirect('/auth/reset-password?error=Invalid or expired token')
  }

  const { error } = await supabase.auth.updateUser({ password })

  if (error) {
    return redirect(`/auth/reset-password?error=${error.message}`)
  }

  redirect('/auth/sign-in')
}