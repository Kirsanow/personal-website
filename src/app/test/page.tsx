import '@/app/app.css'

import FeaturesGrid from '@/components/new-landing/features-grid'
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
    </div>
  )
}
