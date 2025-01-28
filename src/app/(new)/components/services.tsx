import { Container } from '@/components/Container'
import Image from 'next/image'
import Link from 'next/link'

interface Service {
  name: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  features: string[]
  cta: {
    text: string
    href: string
  }
}

interface Testimonial {
  content: string
  author: {
    name: string
    role: string
    company: string
    image: string
  }
}

function NoCodeIcon({ className }: { className?: string }) {
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
        d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
      />
    </svg>
  )
}

function FullStackIcon({ className }: { className?: string }) {
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
        d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
      />
    </svg>
  )
}

function DesignIcon({ className }: { className?: string }) {
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
        d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
      />
    </svg>
  )
}

function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="group relative h-full">
      <div className="relative flex h-full flex-col overflow-hidden rounded-3xl bg-white/80 px-8 pb-12 pt-10 backdrop-blur-xs transition duration-300 hover:bg-white hover:shadow-xl hover:ring-1 hover:ring-zinc-200/50">
        <div className="absolute -right-12 -top-12 z-0 h-[300px] w-[300px] rotate-12 transform-gpu rounded-full bg-linear-to-br from-indigo-500/10 to-indigo-400/5 opacity-0 blur-3xl transition duration-500 group-hover:opacity-100" />

        <div className="relative z-10 flex grow flex-col">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-indigo-500/10 to-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5">
              <service.icon className="h-8 w-8 text-indigo-600" />
            </div>
            <h3 className="font-display text-2xl font-medium text-zinc-900">
              {service.name}
            </h3>
          </div>

          <p className="mt-4 text-base text-zinc-600">{service.description}</p>

          <ul className="mt-8 grow space-y-4">
            {service.features.map((feature, index) => (
              <li key={index} className="flex items-center gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-100">
                  <svg
                    className="h-4 w-4 flex-none text-indigo-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-base text-zinc-600">{feature}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <Link
              target="_blank"
              href={service.cta.href}
              className="inline-flex items-center rounded-full bg-indigo-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-indigo-700"
            >
              {service.cta.text}
              <svg
                className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
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

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="relative rounded-3xl bg-white p-8 shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5">
      <blockquote className="relative">
        <p className="text-sm tracking-tight text-zinc-900">
          "{testimonial.content}"
        </p>
      </blockquote>
      <figcaption className="relative mt-6 flex items-center justify-between border-t border-zinc-100 pt-6">
        <div>
          <div className="font-display text-base font-medium text-zinc-900">
            {testimonial.author.name}
          </div>
          <div className="mt-1 text-sm text-zinc-600">
            {testimonial.author.role} at {testimonial.author.company}
          </div>
        </div>
        <div className="overflow-hidden rounded-full bg-zinc-50">
          <Image
            className="h-12 w-12 object-cover"
            src={testimonial.author.image}
            alt={testimonial.author.name}
            width={48}
            height={48}
          />
        </div>
      </figcaption>
    </figure>
  )
}

const services: Service[] = [
  {
    name: 'No-Code MVP Development',
    description:
      'Launch your MVP in weeks, not months. We use modern no-code tools and AI to build your product fast.',
    icon: NoCodeIcon,
    features: [
      'Rapid prototyping and iteration',
      'Full-featured web and mobile apps',
      'Custom workflows and automation',
      'Third-party integrations',
    ],
    cta: {
      text: 'Start your MVP project',
      href: 'https://cal.com/kirsanov/30min',
    },
  },
  {
    name: 'Full-Stack Development',
    description:
      'Build scalable, production-ready applications with modern tech stack and AI-powered development.',
    icon: FullStackIcon,
    features: [
      'Next.js and React applications',
      'AI-powered development',
      'Cloud infrastructure setup',
      'Performance optimization',
    ],
    cta: {
      text: 'Discuss your project',
      href: 'https://cal.com/kirsanov/30min',
    },
  },
  {
    name: 'Design + Development',
    description:
      'Get a complete solution with beautiful design and robust development, all in one package.',
    icon: DesignIcon,
    features: [
      'UI/UX design',
      'Brand identity',
      'Responsive development',
      'Design system creation',
    ],
    cta: {
      text: 'Start your project',
      href: 'https://cal.com/kirsanov/30min',
    },
  },
]

const testimonials: Testimonial[] = [
  {
    content:
      "I cannot recommend him highly enough. After seeing his performance on this job, I am going to be hiring him again in January. The best freelancer I've ever worked with, period.",
    author: {
      name: 'Anuj Nayyar',
      role: 'Founder',
      company: 'Dreampress.ai',
      image: '/images/harish-avatar.png',
    },
  },
  {
    content:
      'Working with Artem on our Homeezy MVP was an exceptional experience. His "yes to everything" attitude coupled with his relentless work ethic made obstacles vanish.',
    author: {
      name: 'Gabriel Aguila',
      role: 'CEO',
      company: 'Homeezy.io',
      image: '/images/tip-avatar.png',
    },
  },
  {
    content:
      'Collaborating with Artem on our MVP was incredibly rewarding. His proactive approach and tireless dedication transformed challenges into opportunities',
    author: {
      name: 'Ted Sims',
      role: 'Co-founder',
      company: 'BuildFast',
      image: '/images/tip2-avatar.png',
    },
  },
]

export default function Services() {
  return (
    <div className="relative mt-24 overflow-hidden pb-32 sm:mt-32 lg:mt-40">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-y-0 h-full w-full bg-linear-to-b from-zinc-50 via-zinc-100/70 to-white" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-[1000px] w-[1000px] rotate-[30deg]">
            <div className="absolute inset-0 blur-3xl" aria-hidden="true">
              <div
                className="absolute inset-0 -z-10 transform-gpu bg-linear-to-r from-indigo-100/70 via-indigo-300/30 to-zinc-100/50 opacity-30"
                style={{
                  clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <Container className="relative px-8">
        <div className="relative">
          <div className="relative mx-auto max-w-2xl lg:text-center">
            <div className="mt-12 inline-flex items-center rounded-full bg-indigo-500/10 px-3 py-1 text-sm text-indigo-600 ring-1 ring-inset ring-indigo-600/20">
              Our Services
            </div>
            <h2 className="font-display mt-8 text-4xl font-medium tracking-tight text-zinc-900 [text-wrap:balance] sm:text-5xl">
              Everything You Need to Build Your SaaS
            </h2>
            <p id="services" className="mt-6 text-lg text-zinc-600">
              Choose the service that matches your needs. From rapid MVP
              development to full-scale applications, we've got you covered.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-xl gap-10 sm:mt-20 lg:max-w-none lg:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>

          <div className="relative mx-auto mt-32 max-w-2xl lg:text-center">
            <div className="inline-flex items-center rounded-full bg-indigo-500/10 px-3 py-1 text-sm text-indigo-600 ring-1 ring-inset ring-indigo-600/20">
              Testimonials
            </div>
            <h2 className="font-display mt-8 text-3xl font-medium tracking-tight text-zinc-900 [text-wrap:balance] sm:text-4xl">
              Trusted by Founders
            </h2>
            <p className="mt-6 text-lg text-zinc-600">
              Hear from founders who've transformed their development process
              with our help.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-xl gap-8 lg:max-w-none lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}
