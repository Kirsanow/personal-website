import { Container } from '@/components/Container'
import Link from 'next/link'

interface Benefit {
  title: string
  description: string
  cta: {
    text: string
    href: string
  }
  icon: React.ComponentType<{ className?: string }>
}

function CustomIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
      />
    </svg>
  )
}

function CommunityIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
      />
    </svg>
  )
}

function AIIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
      />
    </svg>
  )
}

function BenefitCard({ title, description, cta, icon: Icon }: Benefit) {
  return (
    <div className="group relative h-full transform transition duration-300 hover:-translate-y-1">
      <div className="relative h-full overflow-hidden rounded-3xl bg-linear-to-b from-white to-zinc-50/80 px-6 pt-10 pb-12 ring-1 shadow-xs ring-zinc-100 transition duration-300 hover:shadow-md hover:ring-zinc-200 sm:px-8">
        {/* Playful gradient blob in the background */}
        <div className="pointer-events-none absolute -top-20 -right-20 h-[400px] w-[400px] opacity-20 mix-blend-multiply">
          <div className="absolute inset-0 rounded-full bg-linear-to-br from-indigo-100 to-indigo-50 blur-3xl" />
        </div>

        <div className="relative z-10 flex h-full flex-col">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white ring-1 shadow-md shadow-zinc-800/5 ring-zinc-900/5">
              <Icon className="h-7 w-7 text-indigo-600" />
            </div>
            <h3 className="font-display text-xl font-medium [text-wrap:balance] text-zinc-900">
              {title}
            </h3>
          </div>
          <p className="mt-4 grow text-sm text-zinc-600">{description}</p>
          <div className="mt-8">
            <Link
              href={cta.href}
              className="inline-flex items-center text-sm font-medium text-indigo-600 transition hover:text-indigo-800"
            >
              {cta.text}
              <svg
                className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

const benefits: Benefit[] = [
  {
    title: 'Custom MVP Development',
    description:
      'Get your product to market faster with our AI-powered development approach. We handle the technical complexity while you focus on your business.',
    cta: {
      text: 'Book a development call',
      href: 'https://cal.com/kirsanov/30min',
    },
    icon: CustomIcon,
  },
  {
    title: 'Community & Learning',
    description:
      'Join a community of founders building with AI. Get access to courses, resources, and direct support to level up your development skills.',
    cta: {
      text: 'Join Metamakers community',
      href: 'https://www.skool.com/metamakers-3765/about',
    },
    icon: CommunityIcon,
  },
  {
    title: 'AI-First Development',
    description:
      'Leverage the latest AI tools and best practices to build faster and smarter. Stay ahead of the curve with cutting-edge development approaches.',
    cta: {
      text: 'See how it works',
      href: '#services',
    },
    icon: AIIcon,
  },
]

export default function Solution() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <div className="relative">
        {/* Enhanced gradient decoration */}
        <div className="absolute -top-24 left-1/2 -z-10 h-[800px] w-full max-w-[800px] -translate-x-1/2 transform overflow-hidden">
          <div className="absolute inset-0 blur-3xl" aria-hidden="true">
            <div
              className="absolute inset-0 -z-10 transform-gpu bg-linear-to-r from-indigo-50/40 via-indigo-100/40 to-zinc-50/40 opacity-50"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
        </div>

        <div className="relative mx-auto max-w-2xl px-4 sm:px-6 lg:text-center">
          <div className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-sm text-indigo-600 ring-1 ring-indigo-600/20 ring-inset">
            The Solution
          </div>
          <h2 className="font-display mt-8 text-4xl font-medium tracking-tight [text-wrap:balance] text-zinc-900 sm:text-5xl">
            Build Your SaaS the Smart Way
          </h2>
          <p className="mt-6 text-lg text-zinc-600">
            Choose your path to success: Get hands-on development help or join
            our community to learn and build alongside other founders.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-xl gap-8 px-4 sm:mt-20 sm:px-6 lg:max-w-none lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} />
          ))}
        </div>
      </div>
    </Container>
  )
}
