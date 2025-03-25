import '@/app/app.css'
import BookingCalendar from '@/components/new-landing/booking-calendar'
import FAQ from '@/components/new-landing/FAQ'

import FeaturesGrid from '@/components/new-landing/features-grid'
import Footer from '@/components/new-landing/footer'
import Hero from '@/components/new-landing/hero'
import { Problem } from '@/components/new-landing/Problem'
import WithWithout from '@/components/new-landing/with-without'
import CommunityCTA from '@/components/new-landing/community-cta'

export default function TestPage() {
  return (
    <div>
      <Hero />
      <Problem />
      <FeaturesGrid />
      <WithWithout />
      <CommunityCTA />
      <BookingCalendar />
      <FAQ />
      <Footer />
    </div>
  )
}
