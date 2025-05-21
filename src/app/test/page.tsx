import '@/app/app.css'
import BookingCalendar from '@/components/new-landing/booking-calendar'
import FAQ from '@/components/new-landing/FAQ'

import FeaturesGrid from '@/components/new-landing/features-grid'
import Footer from '@/components/new-landing/footer'
import Hero from '@/components/new-landing/hero'
import { Problem } from '@/components/new-landing/Problem'
import WithWithout from '@/components/new-landing/with-without'
import CommunityCTA from '@/components/new-landing/community-cta'
import Header from '@/components/new-landing/header'
import HeroNew from '@/components/new-landing/hero-new'
import BentoFeatures from '@/components/new-landing/bento-new'
import Quote from '@/components/new-landing/quote'
import CaseStudies from '@/components/new-landing/case-studies'
import FAQNew from '@/components/new-landing/faq-new'

function TestPage() {
  return (
    <>
      <Header />
      <div>
        <HeroNew />
        <BentoFeatures />
        <Quote />
        <CaseStudies />
        <FAQNew />
        {/* <WithWithout /> */}
        {/* <CommunityCTA />
        <BookingCalendar />
        <FAQ /> */}
        <Footer />
      </div>
    </>
  )
}

export default TestPage
