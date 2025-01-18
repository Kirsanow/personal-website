import { Container } from '@/components/Container'
import Image from 'next/image'
import Link from 'next/link'

interface Tool {
  name: string
  description: string
  icon: string
  category: 'ai' | 'development' | 'design' | 'nocode'
}

interface CaseStudy {
  title: string
  description: string
  metrics: {
    label: string
    value: string
  }[]
  techStack: string[]
  timeline: string
  image: string
  href: string
}

interface ProcessStep {
  name: string
  description: string
  tools: Tool[]
}

const tools: Tool[] = [
  {
    name: 'Claude 3.5',
    description:
      'Advanced AI assistant for development planning and code architecture',
    icon: '/tools/claude-3.5.png',
    category: 'ai',
  },
  {
    name: 'GPT-4',
    description: 'AI model for rapid prototyping and technical analysis',
    icon: '/tools/GPT-4.png',
    category: 'ai',
  },
  {
    name: 'Figma',
    description: 'Collaborative design and prototyping platform',
    icon: '/tools/figma.png',
    category: 'design',
  },
  {
    name: 'Next.js 15',
    description: 'Production-grade React framework for scalable applications',
    icon: '/tools/next-js.svg',
    category: 'development',
  },
  {
    name: 'Bubble.io',
    description: 'No-code platform for rapid application development',
    icon: '/tools/bubble-logo.png',
    category: 'nocode',
  },
]

const process: ProcessStep[] = [
  {
    name: 'Discovery & Planning',
    description:
      'We start by understanding your vision and planning the perfect approach using AI-powered analysis.',
    tools: tools.filter((t) => t.category === 'ai'),
  },
  {
    name: 'Design & Prototyping',
    description:
      'Rapid prototyping and iterative design process to validate ideas quickly.',
    tools: tools.filter((t) => t.category === 'design'),
  },
  {
    name: 'Development & Launch',
    description:
      'Choose between rapid no-code development or scalable full-stack solutions.',
    tools: tools.filter(
      (t) => t.category === 'development' || t.category === 'nocode',
    ),
  },
]

const caseStudies: CaseStudy[] = [
  {
    title: 'Dreampress.ai',
    description:
      'AI-powered story writing platform built with Bubble.io. Joined mid-project to help with design and development to bring it to completion.',
    metrics: [
      { label: 'Stories Generated', value: '50k+' },
      { label: 'User Growth', value: '8x' },
    ],
    techStack: ['Bubble.io', 'OpenAI', 'Make.com', 'Stripe'],
    timeline: '3 weeks',
    image: '/images/dream-for-site.png',
    href: '/case-studies/dreampress',
  },
  {
    title: 'Homeezy.io',
    description:
      'Marketplace connecting homeowners with contractors, built with Bubble.io for rapid market validation.',
    metrics: [
      { label: 'Contractors', value: '500+' },
      { label: 'Projects', value: '1.2k+' },
    ],
    techStack: ['Bubble.io', 'Stripe Connect', 'Twilio'],
    timeline: '4 weeks',
    image: '/images/homeezy-for-site.png',
    href: '/case-studies/homeezy',
  },
  {
    title: 'Qullminds.com',
    description:
      'AI research paper and essay writing platform built with Next.js and AI integration.',
    metrics: [
      { label: 'Papers Written', value: '10k+' },
      { label: 'User Rating', value: '4.8/5' },
    ],
    techStack: ['Next.js', 'OpenAI', 'MongoDB', 'Vercel'],
    timeline: '6 weeks',
    image: '/images/quillminds-for-site.png',
    href: '/case-studies/qullminds',
  },
  {
    title: 'PollPebble',
    description:
      'Embeddable survey platform for small businesses, built with Next.js for optimal performance.',
    metrics: [
      { label: 'Active Surveys', value: '2k+' },
      { label: 'Responses', value: '100k+' },
    ],
    techStack: ['Next.js', 'PostgreSQL', 'Prisma', 'AWS'],
    timeline: '8 weeks',
    image: '/images/pollpebble-for-site.png',
    href: '/case-studies/pollpebble',
  },
]

function ToolCard({ tool }: { tool: Tool }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white p-4 shadow-sm ring-1 ring-zinc-100 transition duration-300 hover:-translate-y-1 hover:shadow-md hover:ring-zinc-200">
      <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br from-indigo-500/10 to-indigo-400/5 opacity-0 blur-2xl transition duration-500 group-hover:opacity-100" />

      <div className="relative flex items-center gap-4">
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-50 to-white shadow-sm ring-1 ring-indigo-100/50">
          <Image
            src={tool.icon}
            alt={tool.name}
            width={32}
            height={32}
            className="h-8 w-8 rounded-md transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        <div className="flex-1">
          <h4 className="font-display text-base font-medium text-zinc-900">
            {tool.name}
          </h4>
          <p className="mt-1 text-sm text-zinc-600">{tool.description}</p>
        </div>
      </div>
    </div>
  )
}

function ProcessStepCard({
  step,
  index,
}: {
  step: ProcessStep
  index: number
}) {
  return (
    <div className="relative">
      {/* Vertical line connecting steps */}
      {index !== process.length - 1 && (
        <div className="absolute left-[2.5rem] top-[7.5rem] h-24 w-px bg-gradient-to-b from-indigo-500/60 to-indigo-500/10 lg:left-[3.5rem]" />
      )}

      <div className="relative flex flex-col gap-8 rounded-3xl bg-white/50 p-8 ring-1 ring-zinc-100 backdrop-blur-sm transition duration-300 hover:bg-white/80 hover:shadow-lg hover:ring-zinc-200 lg:p-10">
        <div className="flex flex-col gap-6 sm:flex-row">
          <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-indigo-500 text-2xl font-semibold text-white shadow-md lg:h-28 lg:w-28 lg:text-3xl">
            {index + 1}
          </div>
          <div className="flex-1">
            <h3 className="font-display text-2xl font-medium text-zinc-900 lg:text-3xl">
              {step.name}
            </h3>
            <p className="mt-3 text-base text-zinc-600 lg:text-lg">
              {step.description}
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {step.tools.map((tool) => (
                <ToolCard key={tool.name} tool={tool} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <Link
      href={study.href}
      className="group relative flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-zinc-100 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-zinc-200"
    >
      {/* Logo Section */}
      <div className="relative h-64 w-full overflow-hidden bg-gradient-to-br from-indigo-50/80 to-white sm:h-72">
        <div className="absolute inset-0 flex items-center justify-center p-12 sm:p-16">
          <Image
            src={study.image}
            alt={study.title}
            fill
            className="object-contain p-8"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-1 flex-col gap-6 border-t border-zinc-100 bg-white p-8 sm:p-10">
        <div>
          <div className="flex items-center gap-2">
            <div className="rounded-full bg-indigo-500/10 px-3 py-1 text-sm font-medium text-indigo-600 ring-1 ring-inset ring-indigo-600/20">
              {study.timeline}
            </div>
          </div>
          <h3 className="font-display mt-4 text-2xl font-medium text-zinc-900">
            {study.title}
          </h3>
          <p className="mt-2 text-base text-zinc-600">{study.description}</p>
        </div>

        <div className="grid grid-cols-2 gap-8">
          {study.metrics.map((metric) => (
            <div key={metric.label}>
              <div className="font-display text-3xl font-medium text-indigo-600">
                {metric.value}
              </div>
              <div className="mt-1 text-sm text-zinc-600">{metric.label}</div>
            </div>
          ))}
        </div>

        <div className="border-t border-zinc-100 pt-6">
          <div className="flex flex-wrap gap-2">
            {study.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-zinc-100 px-3 py-1 text-sm font-medium text-zinc-800"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-auto flex items-center justify-between">
          <span className="text-sm font-medium text-zinc-900">
            View Case Study
          </span>
          <svg
            className="h-6 w-6 text-zinc-600 transition-transform duration-200 group-hover:translate-x-2"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </div>
      </div>
    </Link>
  )
}

export default function Process() {
  return (
    <div className="relative mt-24 overflow-hidden py-24 sm:mt-32 sm:py-32 lg:mt-40">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-y-0 h-full w-full bg-gradient-to-b from-zinc-50 via-white to-white" />
        <div className="absolute inset-0">
          <div className="bg-grid-zinc-900/[0.04] absolute inset-0 bg-[size:32px] [mask-image:linear-gradient(to_bottom,white,transparent,white)]" />
        </div>
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[60rem] w-[90rem] translate-y-1/4 rounded-full bg-gradient-to-r from-indigo-100/80 via-indigo-300/30 to-zinc-100/50 opacity-20 blur-3xl" />
      </div>

      <Container>
        <div className="relative">
          <div className="mx-auto max-w-3xl lg:text-center">
            <div className="inline-flex items-center rounded-full bg-indigo-500/10 px-3 py-1 text-sm text-indigo-600 ring-1 ring-inset ring-indigo-600/20">
              Our Process
            </div>
            <h2 className="font-display mt-8 text-4xl font-medium tracking-tight text-zinc-900 [text-wrap:balance] sm:text-5xl">
              From No-Code to Full-Stack
            </h2>
            <p className="mt-6 text-lg text-zinc-600">
              We combine rapid no-code prototyping with scalable full-stack
              development. Launch fast, then evolve your product with
              confidence.
            </p>
          </div>

          <div className="relative mx-auto mt-16 flex max-w-3xl flex-col gap-16 sm:mt-20">
            {process.map((step, index) => (
              <ProcessStepCard key={step.name} step={step} index={index} />
            ))}
          </div>

          <div className="relative mx-auto mt-32 max-w-2xl lg:text-center">
            <div className="inline-flex items-center rounded-full bg-indigo-500/10 px-3 py-1 text-sm text-indigo-600 ring-1 ring-inset ring-indigo-600/20">
              Case Studies
            </div>
            <h2 className="font-display mt-8 text-3xl font-medium tracking-tight text-zinc-900 [text-wrap:balance] sm:text-4xl">
              Success Stories
            </h2>
            <p className="mt-6 text-lg text-zinc-600">
              See how we've helped founders like you build and scale their SaaS
              products using our hybrid approach.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-xl gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-2">
            {caseStudies.map((study) => (
              <CaseStudyCard key={study.title} study={study} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}
