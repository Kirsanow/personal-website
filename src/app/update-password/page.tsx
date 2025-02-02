import { getUser } from '@/actions/user'
import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'

export default async function UpdatePasswordPage() {
  const user = await getUser()
  if (!user) {
    redirect('/login')
  }

  const updatePassword = async (formData: FormData) => {
    'use server'
    const password = formData.get('password') as string
    const supabase = await createClient()
    await supabase.auth.updateUser({ password })

    redirect('/account')
  }
  return (
    <div className="mx-auto h-screen w-full flex-auto">
      <div className="flex h-full flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">Update Password</h1>
        <p className="text-base-content/60">
          Please enter your new password below.
        </p>
        <form action={updatePassword} className="mt-4 w-full max-w-xs">
          <input
            type="password"
            name="password"
            className="input input-bordered w-full"
          />
          <button type="submit" className="btn btn-primary mt-4 w-full">
            Update Password
          </button>
        </form>
      </div>
    </div>
  )
}
