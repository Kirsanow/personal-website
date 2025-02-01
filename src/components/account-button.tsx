'use client'

import Link from 'next/link'
import { getUser } from '@/actions/user'
import { useEffect, useState } from 'react'

function AccountButton({ className }: { className?: string }) {
  const [user, setUser] = useState<any | null>(null)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    getUser().then((user) => {
      setUser(user)
      setLoading(false)
    })
  }, [])

  if (loading) {
    return <div className="h-10 w-20 rounded-full bg-gray-200" />
  }

  if (!user) {
    return (
      <Link
        href="/login"
        className={`btn btn-primary rounded-full bg-[#4F39F6] text-white hover:bg-[#4F39F6]/90 ${className}`}
      >
        Login
      </Link>
    )
  }

  return (
    <Link
      href="/account"
      className={`btn btn-primary rounded-full bg-[#4F39F6] text-white hover:bg-[#4F39F6]/90 ${className}`}
    >
      Account
    </Link>
  )
}

export default AccountButton
