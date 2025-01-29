import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'

export default async function AccountLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  console.log('user from layout', user)
  if (!user) {
    redirect('/login')
  }

  return <div>{children}</div>
}
