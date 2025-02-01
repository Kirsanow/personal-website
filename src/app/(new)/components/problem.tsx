import { Container } from '@/components/Container'

interface PainPoint {
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
}

function ProblemIcon({ className }: { className?: string }) {
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
        d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
      />
    </svg>
  )
}

function SpeedIcon({ className }: { className?: string }) {
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
        d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
      />
    </svg>
  )
}

function ComplexityIcon({ className }: { className?: string }) {
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
        d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
      />
    </svg>
  )
}

function ResourcesIcon({ className }: { className?: string }) {
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
        d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
      />
    </svg>
  )
}

function PainPoint({ title, description, icon: Icon }: PainPoint) {
  return (
    <div className="group relative">
      <div className="relative overflow-hidden rounded-3xl bg-zinc-50 px-8 pt-10 pb-12 transition duration-500 hover:bg-white hover:ring-1 hover:shadow-md hover:ring-zinc-200/50">
        <div className="absolute -top-12 -right-12 z-0 h-[200px] w-[200px] rotate-12 transform-gpu rounded-full bg-linear-to-br from-indigo-50 to-indigo-100/50 opacity-0 blur-2xl transition duration-500 group-hover:opacity-60" />

        <div className="relative z-10">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white ring-1 shadow-md shadow-zinc-800/5 ring-zinc-900/5">
              <Icon className="h-7 w-7 text-indigo-600" />
            </div>
            <h3 className="font-display text-xl font-medium [text-wrap:balance] text-zinc-900">
              {title}
            </h3>
          </div>
          <p className="mt-4 text-sm text-zinc-600">{description}</p>
        </div>
      </div>
    </div>
  )
}

const painPoints: PainPoint[] = [
  {
    title: 'Slow Development Speed',
    description:
      'Traditional development is too slow and expensive. You need to move fast to validate your ideas and get to market quickly.',
    icon: SpeedIcon,
  },
  {
    title: 'Technical Complexity',
    description:
      'Managing infrastructure, choosing tech stack, and implementing best practices is overwhelming when you just want to build your product.',
    icon: ComplexityIcon,
  },
  {
    title: 'Limited Resources',
    description:
      'Building a full development team is expensive and risky. You need a more efficient way to build and iterate on your product.',
    icon: ResourcesIcon,
  },
  {
    title: 'Scaling Challenges',
    description:
      'As your product grows, you face increasing technical debt and scaling issues that slow down your progress.',
    icon: ProblemIcon,
  },
]

export default function Problem() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <div className="relative">
        {/* Adjusted gradient decoration */}
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
            The Challenge
          </div>
          <h2 className="font-display mt-8 text-4xl font-medium tracking-tight [text-wrap:balance] text-zinc-900 sm:text-5xl">
            Does This Sound Familiar?
          </h2>
          <p className="mt-6 text-lg text-zinc-600">
            Many founders face these development challenges when building their
            SaaS. You're not alone.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-xl gap-8 px-4 sm:mt-20 sm:px-6 lg:max-w-none lg:grid-cols-2">
          {painPoints.map((point, index) => (
            <PainPoint key={index} {...point} />
          ))}
        </div>
      </div>
    </Container>
  )
}
