'use server'

import { createClient } from '@/lib/supabase/server'
import { courses } from '@/config'
import Stripe from 'stripe'
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-01-27.acacia',
})

export async function purchaseCourse(formData: FormData) {
  const supabase = await createClient()
  const slug = formData.get('slug')
  const priceId = formData.get('priceId')

  // Get the current user
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser()
  if (userError || !user) throw new Error('User not authenticated')

  // Get the course details
  const course = Object.values(courses).find((c) => c.slug === slug)
  if (!course) throw new Error('Course not found')

  // Create a Stripe Checkout Session
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price: priceId as string,
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/account/courses/${course.slug}?success=true&chapter=1`,
    cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/account?canceled=true`,
    customer_email: user.email,
    metadata: {
      courseId: course.slug,
      userId: user.id,
    },
  })

  if (session.url) {
    return redirect(session.url)
  }

  return { error: 'Failed to create checkout session' }
}
