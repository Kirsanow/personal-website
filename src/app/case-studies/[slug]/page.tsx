import { Container } from '@/components/Container'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

// We'll reuse the case studies data from the process component
const caseStudies = [
  {
    slug: 'dreampress',
    title: 'Dreampress.ai',
    description:
      'AI-powered story writing platform built with Bubble.io. From concept to launch in record time.',
    fullDescription: `Dreampress.ai revolutionized the way writers create stories by leveraging AI technology. 
    Built entirely on Bubble.io, this platform enables writers to generate, enhance, and publish their stories with AI assistance.
    
    The challenge was to create a scalable platform that could handle complex AI operations while maintaining a simple, intuitive interface for writers.`,
    metrics: [
      { label: 'Stories Generated', value: '50k+' },
      { label: 'User Growth', value: '8x' },
      { label: 'Average Rating', value: '4.9/5' },
      { label: 'Time Saved', value: '75%' },
    ],
    techStack: ['Bubble.io', 'OpenAI', 'Make.com', 'Stripe'],
    timeline: '3 weeks',
    image:
      'https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fa854f716b37d256a41f8642118b9f76c.cdn.bubble.io%2Fd233%2Ff1732212554887x769368611537858700%2FDreamPress-AI-2024.jpeg?w=&h=&auto=compress&dpr=1&fit=max',
    challenges: [
      'Integrating multiple AI models seamlessly',
      'Ensuring real-time story generation and editing',
      'Building a scalable payment and subscription system',
      'Optimizing performance for concurrent users',
    ],
    solutions: [
      'Custom AI pipeline architecture using Make.com',
      'Efficient caching and queue management',
      'Stripe integration for flexible subscription tiers',
      'Load balancing and performance optimization',
    ],
    results: [
      'Reduced story creation time by 75%',
      'Achieved 8x user growth in 3 months',
      'Maintained 99.9% uptime',
      'Generated over 50,000 stories',
    ],
  },
  {
    slug: 'homeezy',
    title: 'Homeezy.io',
    description:
      'Marketplace connecting homeowners with contractors, built with Bubble.io for rapid market validation.',
    fullDescription: `Homeezy.io transformed the home improvement industry by creating a seamless marketplace for homeowners and contractors.
    The platform streamlines project bidding, scheduling, and payment processing while ensuring quality and trust.
    
    Our goal was to validate the market quickly while building a robust platform that could scale with demand.`,
    metrics: [
      { label: 'Contractors', value: '500+' },
      { label: 'Projects', value: '1.2k+' },
      { label: 'Customer Satisfaction', value: '96%' },
      { label: 'Average Project Value', value: '$8.5k' },
    ],
    techStack: ['Bubble.io', 'Stripe Connect', 'Twilio'],
    timeline: '4 weeks',
    image:
      'https://cdn.prod.website-files.com/6671976ea034bf9a0b4feda5/66eb0e15efc6d99f96478374_Homeezy.webp',
    challenges: [
      'Creating a trusted verification system for contractors',
      'Building a reliable booking and scheduling system',
      'Implementing secure payment processing',
      'Managing complex project workflows',
    ],
    solutions: [
      'Automated contractor verification workflow',
      'Real-time availability calendar system',
      'Stripe Connect integration for secure payments',
      'Custom project management dashboard',
    ],
    results: [
      'Onboarded 500+ verified contractors',
      'Processed over 1,200 successful projects',
      'Achieved 96% customer satisfaction rate',
      'Reduced project booking time by 60%',
    ],
  },
  {
    slug: 'qullminds',
    title: 'Qullminds.com',
    description:
      'AI research paper and essay writing platform built with Next.js and AI integration.',
    fullDescription: `Qullminds.com revolutionized academic writing by providing AI-powered research and writing assistance.
    Built with Next.js for optimal performance, the platform helps students and researchers streamline their writing process while maintaining academic integrity.
    
    The challenge was to create a powerful yet ethical AI writing assistant that could handle complex academic requirements.`,
    metrics: [
      { label: 'Papers Written', value: '10k+' },
      { label: 'User Rating', value: '4.8/5' },
      { label: 'Time Saved', value: '65%' },
      { label: 'Active Users', value: '5k+' },
    ],
    techStack: ['Next.js', 'OpenAI', 'MongoDB', 'Vercel'],
    timeline: '6 weeks',
    image: '/images/quillminds.png',
    challenges: [
      'Ensuring academic integrity and originality',
      'Handling complex research paper formatting',
      'Managing high-volume concurrent requests',
      'Implementing accurate citation generation',
    ],
    solutions: [
      'Custom AI model fine-tuning for academic writing',
      'Automated formatting and citation system',
      'Serverless architecture for scalability',
      'Real-time plagiarism detection',
    ],
    results: [
      'Generated over 10,000 unique papers',
      'Maintained 4.8/5 user satisfaction rating',
      'Reduced writing time by 65%',
      'Achieved 100% originality score',
    ],
  },
  {
    slug: 'pollpebble',
    title: 'PollPebble',
    description:
      'Embeddable survey platform for small businesses, built with Next.js for optimal performance.',
    fullDescription: `PollPebble redefined how small businesses gather customer feedback with its innovative embeddable survey platform.
    Built using Next.js, the platform offers seamless integration, real-time analytics, and customizable survey experiences.
    
    Our mission was to create a high-performance survey tool that could handle high volumes of responses while maintaining data accuracy.`,
    metrics: [
      { label: 'Active Surveys', value: '2k+' },
      { label: 'Responses', value: '100k+' },
      { label: 'Response Rate', value: '+40%' },
      { label: 'Load Time', value: '<1s' },
    ],
    techStack: ['Next.js', 'PostgreSQL', 'Prisma', 'AWS'],
    timeline: '8 weeks',
    image: '/images/pollpebble.png',
    challenges: [
      'Ensuring seamless embed experience',
      'Handling high-volume response data',
      'Maintaining fast load times',
      'Creating intuitive analytics dashboard',
    ],
    solutions: [
      'Optimized embed code with minimal footprint',
      'Efficient data streaming and processing',
      'Edge caching and CDN implementation',
      'Real-time analytics processing',
    ],
    results: [
      'Processed over 100,000 survey responses',
      'Achieved sub-second load times',
      'Increased response rates by 40%',
      'Maintained 99.99% data accuracy',
    ],
  },
]

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col items-center gap-2 rounded-2xl bg-white p-6 shadow-xs ring-1 ring-zinc-100">
      <div className="font-display text-3xl font-medium text-indigo-600">
        {value}
      </div>
      <div className="text-sm text-zinc-600">{label}</div>
    </div>
  )
}

function Section({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-2xl bg-white p-8 shadow-xs ring-1 ring-zinc-100">
      <h3 className="font-display text-xl font-medium text-zinc-900">
        {title}
      </h3>
      <ul className="mt-6 grid gap-4">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-3">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-6 w-6 flex-none text-indigo-600"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="text-zinc-600">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function CaseStudy({ params }: { params: { slug: string } }) {
  const study = caseStudies.find((s) => s.slug === params.slug)

  if (!study) {
    notFound()
  }

  return (
    <div className="relative overflow-hidden py-16 sm:py-20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-y-0 h-full w-full bg-linear-to-b from-zinc-50 via-white to-white" />
        <div className="absolute inset-0">
          <div className="bg-grid-zinc-900/[0.04] absolute inset-0 bg-[size:32px] [mask-image:linear-gradient(to_bottom,white,transparent,white)]" />
        </div>
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[60rem] w-[90rem] translate-y-1/4 rounded-full bg-linear-to-r from-indigo-100/80 via-indigo-300/30 to-zinc-100/50 opacity-20 blur-3xl" />
      </div>

      <Container>
        <div className="relative">
          <Link
            href="/#case-studies"
            className="group mb-8 inline-flex items-center gap-2 text-sm font-medium text-zinc-600 transition hover:text-indigo-600"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
            Back to Case Studies
          </Link>

          <div className="mx-auto max-w-5xl">
            {/* Cover Image Section */}
            <div className="relative mb-12 aspect-16/9 w-full overflow-hidden rounded-2xl shadow-lg">
              <Image
                src={study.image}
                alt={study.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1280px) 100vw, 1280px"
              />
            </div>

            {/* Title and Description */}
            <div className="mx-auto mb-12 flex max-w-xl flex-col items-center text-center">
              <div className="inline-flex items-center rounded-full bg-indigo-500/10 px-3 py-1 text-sm text-indigo-600 ring-1 ring-inset ring-indigo-600/20">
                {study.timeline}
              </div>
              <h1 className="font-display mt-6 text-4xl font-medium tracking-tight text-zinc-900">
                {study.title}
              </h1>
              <p className="mt-4 text-lg text-zinc-600">{study.description}</p>
            </div>

            {/* Main Content Card */}
            <div className="rounded-3xl bg-white shadow-xs ring-1 ring-zinc-100">
              {/* Tech Stack */}
              <div className="border-b border-zinc-100 px-8 py-6 lg:px-12">
                <h2 className="font-display text-sm font-medium text-zinc-900">
                  Tech Stack
                </h2>
                <div className="mt-4 flex flex-wrap gap-2">
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

              {/* Stats Section */}
              <div className="grid grid-cols-2 gap-px border-b border-zinc-100 bg-zinc-50 sm:grid-cols-4">
                {study.metrics.map((metric) => (
                  <div key={metric.label} className="bg-white px-6 py-8">
                    <p className="text-sm font-medium leading-6 text-zinc-600">
                      {metric.label}
                    </p>
                    <p className="mt-2 flex items-baseline gap-x-2">
                      <span className="font-display text-3xl font-medium tracking-tight text-indigo-600">
                        {metric.value}
                      </span>
                    </p>
                  </div>
                ))}
              </div>

              {/* Description */}
              <div className="px-8 py-10 lg:px-12">
                <div className="prose-zinc prose mx-auto max-w-3xl">
                  {study.fullDescription
                    .split('\n\n')
                    .map((paragraph, index) => (
                      <p key={index} className="text-zinc-600">
                        {paragraph}
                      </p>
                    ))}
                </div>
              </div>
            </div>

            {/* Challenges, Solutions, Results */}
            <div className="mt-12 grid gap-8 sm:grid-cols-2">
              <Section title="Challenges" items={study.challenges} />
              <Section title="Solutions" items={study.solutions} />
            </div>

            <div className="mt-8">
              <Section title="Results" items={study.results} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
