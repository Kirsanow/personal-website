import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import LoginCard from './_components/login-card'
import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'

export const metadata: Metadata = {
  title: 'Login | Your Learning Platform',
  description: 'Login to access your courses and continue learning',
}

export default async function LoginPage() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  if (user) {
    redirect('/account')
  }
  return (
    <div className="bg-base-100 flex min-h-screen items-center justify-center p-4">
      <LoginCard />
    </div>
  )
}
