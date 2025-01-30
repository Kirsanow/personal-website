// import { getOrCreateUserAvatar } from '@/actions/user'
// import { createCheckoutSession } from '@/lib/payments/stripe'
import { getUserData } from '@/app/account/_queries'
import { checkUserData } from '@/app/login/_actions'
import { createClient } from '@/lib/supabase/server'
// import { getUserData } from '@/queries/user'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  console.log('auth callback')
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get('code')
  const encodedRedirectTo =
    requestUrl.searchParams.get('redirect') || '/account/courses'
  const priceId = requestUrl.searchParams.get('priceId') || false
  const discountCode = requestUrl.searchParams.get('discountCode') || undefined
  const redirectTo = decodeURIComponent(encodedRedirectTo)

  const supabase = await createClient()

  if (code) {
    await supabase.auth.exchangeCodeForSession(code)
    const userData = await checkUserData()
    // await getOrCreateUserAvatar(userData)
  }
  // Set session cookie
  if (priceId && priceId !== '') {
    // await createCheckoutSession({ priceId, discountCode })
  } else {
    console.log('redirecting user')
    return NextResponse.redirect(`${requestUrl.origin}${redirectTo}`)
  }
}
