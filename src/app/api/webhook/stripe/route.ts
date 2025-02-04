import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'
import { headers } from 'next/headers'
import { NextResponse } from 'next/server'
import Stripe from 'stripe'

// Initialize Stripe with the correct API version from the webhook logs
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-01-27.acacia', // Match the version from webhook logs
})

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!

export async function POST(req: Request) {
  try {
    const body = await req.text()
    const headersList = await headers()
    const signature = headersList.get('stripe-signature')

    if (!signature) {
      console.error('No stripe signature found')
      return NextResponse.json({ error: 'No signature found' }, { status: 400 })
    }

    let event: Stripe.Event

    try {
      // Debug logging
      console.log('Webhook Debug Info:')
      console.log('Signature:', signature)
      console.log('Secret (first 4 chars):', webhookSecret.slice(0, 4))
      console.log('Body length:', body.length)

      // Construct the event
      event = await stripe.webhooks.constructEventAsync(
        body,
        signature,
        webhookSecret.trim(), // Ensure no whitespace
      )
    } catch (err: any) {
      console.error('⚠️ Webhook signature verification failed:', err.message)
      return NextResponse.json(
        {
          error: 'Webhook signature verification failed',
          details: err.message,
        },
        { status: 400 },
      )
    }

    // Handle the event based on its type
    switch (event.type) {
      case 'checkout.session.completed': {
        const session = event.data.object as Stripe.Checkout.Session
        console.log('💰 Processing checkout session:', session.id)

        // Get the course and user IDs from metadata
        const courseId = session.metadata?.courseId
        const userId = session.metadata?.userId

        if (!courseId || !userId) {
          console.error('Missing metadata in session:', session.id)
          return NextResponse.json(
            { error: 'Missing metadata' },
            { status: 400 },
          )
        }

        // Update the user's course access in Supabase
        const supabase = await createClient()
        const { data: userData, error: fetchError } = await supabase
          .from('user_data')
          .select('courses_access')
          .eq('id', userId)
          .single()

        if (fetchError) {
          console.error('Error fetching user data:', fetchError)
          return NextResponse.json(
            { error: 'Failed to fetch user data' },
            { status: 500 },
          )
        }

        const coursesAccess = userData?.courses_access || []
        if (!coursesAccess.includes(courseId)) {
          const { error: updateError } = await supabase
            .from('user_data')
            .update({
              courses_access: [...coursesAccess, courseId],
            })
            .eq('id', userId)

          if (updateError) {
            console.error('Error updating user data:', updateError)
            return NextResponse.json(
              { error: 'Failed to update user data' },
              { status: 500 },
            )
          }
        }

        console.log('✅ Successfully processed checkout session:', session.id)
        revalidatePath(`/account/courses/${courseId}`)
        break
      }

      case 'charge.succeeded':
      case 'charge.updated':
      case 'payment_intent.succeeded': {
        // Log these events but don't process them
        console.log(`📝 Received ${event.type} event:`, event.data.object.id)
        break
      }

      default: {
        console.log(`⚠️ Unhandled event type: ${event.type}`)
      }
    }

    return NextResponse.json({
      received: true,
      type: event.type,
      id: event.id,
    })
  } catch (error: any) {
    console.error('🔥 Webhook error:', error.message)
    return NextResponse.json(
      {
        error: 'Webhook handler failed',
        details: error.message,
      },
      { status: 500 },
    )
  }
}

// This is important for Stripe webhooks
export const config = {
  api: {
    bodyParser: false, // Don't parse the body, we need it raw for signature verification
  },
}

// Enable edge runtime for better performance and to avoid redirects
export const runtime = 'edge'

// Disable dynamic segments handling which can cause redirects
export const dynamic = 'force-dynamic'
