'use client'

import { createClient } from '@/lib/supabase/client'
import { redirect } from 'next/navigation'

export default function LogoutButton() {
  const supabase = createClient()
  const handleLogout = async () => {
    await supabase.auth.signOut()
    redirect('/login')
  }
  return (
    <button className="btn btn-outline" onClick={handleLogout}>
      Logout
    </button>
  )
}
