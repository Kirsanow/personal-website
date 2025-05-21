'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Container } from '@/components/Container'

interface CaseStudy {
  title: string
  description: string
  date: string
  image: string
  href: string
  category: string
}

const caseStudies: CaseStudy[] = [
  {
    title: 'Quillminds AI Learning Platform',
    description:
      'How we built an AI-powered education platform that personalizes learning experiences.',
    date: 'March 15, 2024',
    image: '/case-studies/quillminds.jpg',
    href: '/case-studies/quillminds',
    category: 'Education',
  },
  {
    title: 'Feel Frontend Architecture',
    description:
      'Redesigning the frontend architecture for better performance and user experience.',
    date: 'February 1, 2024',
    image: '/case-studies/feel.jpg',
    href: '/case-studies/feel',
    category: 'Development',
  },
  {
    title: 'PollPebble Voting System',
    description:
      'Creating a secure and intuitive voting platform for modern organizations.',
    date: 'January 10, 2024',
    image: '/case-studies/pollpebble.jpg',
    href: '/case-studies/pollpebble',
    category: 'Full Stack',
  },
]

export default function CaseStudies() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="relative mx-auto">
        <div className="relative mx-auto overflow-hidden border-x border-t p-2 py-8 text-center md:p-12">
          <h2 className="text-muted-foreground text-sm font-semibold tracking-tight text-balance uppercase">
            Case Studies
          </h2>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Recent Projects
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-zinc-600 dark:text-zinc-400">
            Explore some of my recent work and learn about the challenges,
            solutions, and impact of each project.
          </p>

          {/* Gradient and Canvas Background */}
          <div className="from-background dark:from-background pointer-events-none absolute right-0 bottom-0 left-0 -z-10 h-full w-full bg-gradient-to-t from-50%" />
          <div className="absolute inset-0 -z-20 size-full h-full w-full">
            <canvas
              className="pointer-events-none"
              width="1932"
              height="232"
              style={{ width: '966px', height: '116px' }}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 border border-b-0 lg:grid-cols-3">
          {caseStudies.map((study, index) => (
            <Link
              key={study.href}
              href={study.href}
              className="bg-background hover:bg-secondary/20 border-b p-4 transition-colors last:border-b-0 lg:border-r lg:border-b-0 last:lg:border-r-0"
            >
              <div className="relative aspect-[1200/630] overflow-hidden">
                <Image
                  src={study.image}
                  alt={study.title}
                  width={1200}
                  height={630}
                  className="border object-cover"
                />
              </div>
              <p className="my-2">
                <span className="text-muted-foreground text-xs">
                  {study.date}
                </span>
                <span className="ml-2 text-xs text-teal-500">
                  {study.category}
                </span>
              </p>
              <h3 className="mb-2 text-xl font-medium">{study.title}</h3>
              <p className="text-muted-foreground">{study.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </Container>
  )
}
