import '@/app/app.css'
import CalcomReact from '@/components/calcom-react'
import BookingCalendar from '@/components/new-landing/booking-calendar'
import FAQ from '@/components/new-landing/FAQ'

import FeaturesGrid from '@/components/new-landing/features-grid'
import Footer from '@/components/new-landing/footer'
import Hero from '@/components/new-landing/hero'
import { Problem } from '@/components/new-landing/Problem'
import WithWithout from '@/components/new-landing/with-without'

export default function TestPage() {
  return (
    <div>
      <Hero />
      <Problem />
      <FeaturesGrid />
      <WithWithout />
      <BookingCalendar />
      <FAQ />
      <Footer />
    </div>
  )
}
