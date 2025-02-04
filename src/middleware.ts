import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { updateSession } from '@/lib/supabase/middleware'

export async function middleware(request: NextRequest) {
  // Bypass middleware for Stripe webhook requests to avoid redirects
  if (request.nextUrl.pathname.startsWith('/api/webhook/stripe')) {
    console.log(
      'Skipping middleware for Stripe webhook:',
      request.nextUrl.pathname,
    )
    return NextResponse.next()
  }

  // update user's auth session
  console.log('middleware triggered')
  await updateSession(request)
  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - api/webhook/stripe (stripe webhook)
     * Feel free to modify this pattern to include more paths.
     */
    '/((?!_next/static|_next/image|favicon.ico|api/webhook/stripe/?|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}
