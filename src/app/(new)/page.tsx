'use client'
import Image, { type ImageProps } from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
  YoutubeIcon,
} from '@/components/SocialIcons'
import logoFeel from '@/images/logos/feel.svg'
import logoQuillminds from '@/images/logos/quillminds.svg'
import logoPollPebble from '@/images/logos/pollpebble.svg'
import logoDreampress from '@/images/logos/dreampress.svg'
import logoTransform from '@/images/logos/transform.svg'
import image1 from '@/images/photos/image-1.jpg'
import image2 from '@/images/photos/image-2.jpg'
import image3 from '@/images/photos/image-3.jpg'
import image4 from '@/images/photos/image-4.jpg'
import image5 from '@/images/photos/image-5.jpg'
import CalcomReact from '@/components/calcom-react'
import { usePathname } from 'next/navigation'
import portraitImage from '@/images/portrait.jpg'
import { Suspense, useState } from 'react'
import { useEffect } from 'react'
import Hero from './components/hero'
import Problem from './components/problem'
import Solution from './components/solution'
import Services from './components/services'
import Process from './components/process'
import Footer from './components/footer'
import { MobileMenu } from '@/components/MobileMenu'

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function BriefcaseIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function ArrowDownIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function SocialLink({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function Newsletter() {
  return (
    <form
      action="/thank-you"
      className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
    >
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <MailIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Stay up to date</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Get notified when I publish something new, and unsubscribe at any time.
      </p>
      <div className="mt-6 flex">
        <input
          type="email"
          placeholder="Email address"
          aria-label="Email address"
          required
          className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 sm:text-sm dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10"
        />
        <Button type="submit" className="ml-4 flex-none">
          Join
        </Button>
      </div>
    </form>
  )
}

interface Role {
  company: string
  title: string
  logo: ImageProps['src']
  start: string | { label: string; dateTime: string }
  end: string | { label: string; dateTime: string }
}

function Role({ role }: { role: Role }) {
  let startLabel =
    typeof role.start === 'string' ? role.start : role.start.label
  let startDate =
    typeof role.start === 'string' ? role.start : role.start.dateTime

  let endLabel = typeof role.end === 'string' ? role.end : role.end.label
  let endDate = typeof role.end === 'string' ? role.end : role.end.dateTime

  return (
    <li className="flex gap-2 py-2">
      <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
      </div>
      <dl className="flex flex-auto flex-col justify-center gap-y-1">
        <div className="flex items-center justify-between">
          <div>
            <dt className="sr-only">Company</dt>
            <dd className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
              {role.company}
            </dd>
          </div>
          <div>
            <dt className="sr-only">Date</dt>
            <dd
              className="text-xs text-zinc-400 dark:text-zinc-500"
              aria-label={`${startLabel} until ${endLabel}`}
            >
              <time dateTime={startDate}>{startLabel}</time>{' '}
              <span aria-hidden="true">—</span>{' '}
              <time dateTime={endDate}>{endLabel}</time>
            </dd>
          </div>
        </div>
        <div>
          <dt className="sr-only">Role</dt>
          <dd className="text-xs text-zinc-500 dark:text-zinc-400">
            {role.title}
          </dd>
        </div>
      </dl>
    </li>
  )
}

function Resume() {
  const pathname = usePathname()

  let resume: Array<Role> = [
    {
      company: 'Quillminds',
      title: pathname?.includes('nocode')
        ? 'Bubble Developer, Designer and Founder'
        : 'Fullstack Engineer, Designer and Founder',
      logo: logoQuillminds,
      start: '2023',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      company: 'Transform',
      title: 'Frontend and Backend Developer',
      logo: logoTransform,
      start: '2024',
      end: '2024',
    },
    {
      company: 'Dreampress',
      title: pathname?.includes('nocode')
        ? 'Lead Bubble Developer'
        : 'Lead Fullstack Developer',
      logo: logoDreampress,
      start: '2023',
      end: '2024',
    },
    {
      company: 'PollPebble',
      title: pathname?.includes('nocode')
        ? 'Bubble Developer, UX Designer'
        : 'Fullstack Engineer, design engineer',
      logo: logoPollPebble,
      start: '2022',
      end: '2024',
    },
    {
      company: 'Feel',
      title: pathname?.includes('nocode')
        ? 'Lead Bubble Developer'
        : 'Lead Frontend Developer',
      logo: logoFeel,
      start: '2020',
      end: '2022',
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <Role key={roleIndex} role={role} />
        ))}
      </ol>
      {/* <Button href="#" variant="secondary" className="group mt-6 w-full">
        Download CV
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button> */}
    </div>
  )
}

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image1, image2, image3, image4, image5].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800',
              rotations[imageIndex % rotations.length],
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

interface ServiceCard {
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
}

function CodeIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M8 16l-4-4 4-4M16 16l4-4-4-4"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function LearnIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function CommunityIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function ServiceSection({ service }: { service: ServiceCard }) {
  return (
    <div className="group relative flex flex-col items-start rounded-3xl bg-zinc-50 p-8 transition-all duration-300 hover:scale-105 hover:bg-white hover:shadow-xl dark:bg-zinc-800/50 dark:hover:bg-zinc-700/50">
      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-3xl bg-gradient-to-r from-indigo-500/5 via-sky-500/5 to-emerald-500/5 opacity-0 transition duration-300 group-hover:opacity-100 sm:block dark:from-indigo-500/10 dark:via-sky-500/10 dark:to-emerald-500/10" />

      <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition-colors duration-300 group-hover:bg-indigo-50 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:group-hover:border-indigo-500/50 dark:group-hover:bg-zinc-700">
        <service.icon className="h-8 w-8 transition-colors duration-300 group-hover:stroke-indigo-500 dark:group-hover:stroke-indigo-400" />
      </div>

      <h2 className="mt-8 text-xl font-semibold text-zinc-800 dark:text-zinc-100">
        {service.title}
      </h2>

      <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
        {service.description}
      </p>

      <div className="relative mt-8 flex items-center text-indigo-500 transition-colors duration-300 group-hover:text-indigo-600 dark:text-indigo-400 dark:group-hover:text-indigo-300">
        {service.title === 'Learning Resources' ? (
          <a
            href="https://www.youtube.com/@kirsnv"
            target="_blank"
            className="flex items-center"
          >
            <span className="font-medium">View tutorials</span>
            <svg
              className="ml-2 h-4 w-4 stroke-current"
              fill="none"
              viewBox="0 0 16 16"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3.75 8h8.5M12.25 8l-3.5-3.5M12.25 8l-3.5 3.5" />
            </svg>
          </a>
        ) : service.title === 'Community' ? (
          <a
            target="_blank"
            href="https://www.skool.com/metamakers-3765/about"
            className="flex items-center"
          >
            <span className="font-medium">Join community</span>
            <svg
              className="ml-2 h-4 w-4 stroke-current"
              fill="none"
              viewBox="0 0 16 16"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3.75 8h8.5M12.25 8l-3.5-3.5M12.25 8l-3.5 3.5" />
            </svg>
          </a>
        ) : (
          <>
            <span className="font-medium">Learn more</span>
            <svg
              className="ml-2 h-4 w-4 stroke-current"
              fill="none"
              viewBox="0 0 16 16"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6.75 3.25l4.5 4.5-4.5 4.5" />
            </svg>
          </>
        )}
      </div>
    </div>
  )
}

function ProcessStep({
  step,
}: {
  step: { title: string; description: string; number: number }
}) {
  return (
    <div className="relative flex flex-col items-start pl-16">
      <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 text-xl font-bold text-white">
        {step.number}
      </div>
      <h3 className="mt-2 text-xl font-semibold text-zinc-800 dark:text-zinc-100">
        {step.title}
      </h3>
      <p className="mt-3 text-base text-zinc-600 dark:text-zinc-400">
        {step.description}
      </p>
    </div>
  )
}

function CaseStudy({
  title,
  description,
  metrics,
  image,
  link,
}: {
  title: string
  description: string
  metrics: { label: string; value: string }[]
  image: ImageProps['src']
  link: string
}) {
  return (
    <div className="group relative overflow-hidden rounded-3xl bg-zinc-50 transition-all duration-300 hover:bg-white hover:shadow-xl dark:bg-zinc-800/50 dark:hover:bg-zinc-700/50">
      <div className="h-64 overflow-hidden">
        <Image
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-8">
        <h3 className="text-xl font-semibold text-zinc-800 dark:text-zinc-100">
          {title}
        </h3>
        <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
          {description}
        </p>
        <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-3">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                {metric.value}
              </div>
              <div className="text-sm text-zinc-600 dark:text-zinc-400">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Link
            href={link}
            className="inline-flex items-center text-indigo-500 transition-colors duration-300 hover:text-indigo-600 dark:text-indigo-400 dark:hover:text-indigo-300"
          >
            View Case Study
            <svg
              className="ml-2 h-4 w-4 stroke-current"
              fill="none"
              viewBox="0 0 16 16"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6.75 3.25l4.5 4.5-4.5 4.5" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}

function ToolCard({
  name,
  description,
  proficiency,
  icon,
  category,
}: {
  name: string
  description: string
  proficiency: number
  icon: string
  category: 'nocode' | 'code' | 'design' | 'ai'
}) {
  const categoryColors = {
    nocode:
      'from-purple-500/10 to-purple-500/5 dark:from-purple-400/10 dark:to-purple-400/5',
    code: 'from-blue-500/10 to-blue-500/5 dark:from-blue-400/10 dark:to-blue-400/5',
    design:
      'from-pink-500/10 to-pink-500/5 dark:from-pink-400/10 dark:to-pink-400/5',
    ai: 'from-emerald-500/10 to-emerald-500/5 dark:from-emerald-400/10 dark:to-emerald-400/5',
  }

  const categoryTextColors = {
    nocode: 'text-purple-500 dark:text-purple-400',
    code: 'text-blue-500 dark:text-blue-400',
    design: 'text-pink-500 dark:text-pink-400',
    ai: 'text-emerald-500 dark:text-emerald-400',
  }

  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl dark:bg-zinc-800">
      <div
        className={`absolute inset-0 bg-gradient-to-br opacity-50 ${categoryColors[category]}`}
      />

      <div className="relative">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Image
              src={icon}
              alt={name}
              width={40}
              height={40}
              className="rounded-lg"
            />
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
              {name}
            </h3>
          </div>
          <span
            className={`text-sm font-medium ${categoryTextColors[category]}`}
          >
            {category.toUpperCase()}
          </span>
        </div>

        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          {description}
        </p>

        <div className="mt-4">
          <div className="flex items-center justify-between text-sm">
            <span className="font-medium text-zinc-700 dark:text-zinc-300">
              Proficiency
            </span>
            <span className="font-medium text-zinc-700 dark:text-zinc-300">
              {proficiency}%
            </span>
          </div>
          <div className="mt-2 h-2 w-full rounded-full bg-zinc-100 dark:bg-zinc-700">
            <div
              className={`h-full rounded-full transition-all duration-500 ${
                category === 'nocode'
                  ? 'bg-purple-500'
                  : category === 'code'
                    ? 'bg-blue-500'
                    : category === 'design'
                      ? 'bg-pink-500'
                      : 'bg-emerald-500'
              }`}
              style={{ width: `${proficiency}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

function PainPoint({
  title,
  description,
  icon: Icon,
}: {
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <div className="relative rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-indigo-50 to-zinc-50 opacity-0 transition-all duration-300 group-hover:opacity-100 dark:from-zinc-900 dark:to-zinc-800" />

      <div className="relative flex items-start">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-600">
          <Icon className="h-6 w-6 text-white" />
        </div>
        <div className="ml-4">
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
            {title}
          </h3>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}

function ClockIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 8v4l2.5 2.5" stroke="currentColor" />
      <path
        d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2z"
        stroke="currentColor"
      />
    </svg>
  )
}

function MoneyIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path
        d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12c0 4.418-4.03 8-9 8s-9-3.582-9-8 4.03-8 9-8 9 3.582 9 8z"
        stroke="currentColor"
      />
    </svg>
  )
}

function ComplexityIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path
        d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
        stroke="currentColor"
      />
    </svg>
  )
}

function QualityIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        stroke="currentColor"
      />
    </svg>
  )
}

function BenefitCard({
  title,
  description,
  icon: Icon,
}: {
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <div className="relative flex flex-col items-start rounded-2xl bg-white p-6 shadow-md transition-all duration-300 hover:shadow-xl dark:bg-zinc-800/50">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-500/10 dark:bg-indigo-400/10">
        <Icon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
        {title}
      </h3>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        {description}
      </p>
    </div>
  )
}

function RocketIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path
        d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84"
        stroke="currentColor"
      />
    </svg>
  )
}

function ShieldIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        stroke="currentColor"
      />
    </svg>
  )
}

function SparklesIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path
        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
        stroke="currentColor"
      />
    </svg>
  )
}

export const Header = ({
  onMobileMenuOpen,
}: {
  onMobileMenuOpen: () => void
}) => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/80 shadow-sm backdrop-blur-lg'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="relative">
        <div
          className={`absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent transition-opacity duration-500 ${
            isScrolled ? 'opacity-100' : 'opacity-0'
          }`}
        />

        <div className="py-4 sm:py-6">
          <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Image
                  src="/images/avatar.png"
                  alt="Artem Kirsanov"
                  className="h-10 w-10 rounded-full"
                  width={40}
                  height={40}
                />
                <div className="flex flex-col">
                  <span className="font-semibold text-gray-900 dark:text-zinc-100">
                    Artem Kirsanov
                  </span>
                  <span className="text-sm text-gray-600 dark:text-zinc-400">
                    AI Expert & Software Developer
                  </span>
                </div>
              </div>

              <div className="hidden sm:ml-auto sm:flex sm:items-center sm:space-x-6">
                <a
                  href="#services"
                  className="text-sm text-gray-600 hover:text-gray-900 dark:text-zinc-400 dark:hover:text-zinc-300"
                >
                  Services
                </a>
                <a
                  target="_blank"
                  href="https://www.youtube.com/@kirsnv?sub_confirmation=1"
                  className="text-sm text-gray-600 hover:text-gray-900 dark:text-zinc-400 dark:hover:text-zinc-300"
                >
                  YouTube
                </a>

                <a
                  target="_blank"
                  href="https://www.skool.com/metamakers-3765/about"
                  className="text-sm text-gray-600 hover:text-gray-900 dark:text-zinc-400 dark:hover:text-zinc-300"
                >
                  Community
                </a>
                <Link
                  href="/blog"
                  className="text-sm text-gray-600 hover:text-gray-900 dark:text-zinc-400 dark:hover:text-zinc-300"
                >
                  Blog
                </Link>
                <a
                  target="_blank"
                  href="/courses"
                  className="text-sm text-gray-600 hover:text-gray-900 dark:text-zinc-400 dark:hover:text-zinc-300"
                >
                  Courses
                </a>
                <a
                  target="_blank"
                  href="https://cal.com/kirsanov/30min"
                  className="rounded-full bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-500"
                >
                  Book a call
                </a>
              </div>

              <div className="ml-4 flex sm:hidden">
                <button
                  type="button"
                  onClick={onMobileMenuOpen}
                  className="inline-flex items-center justify-center rounded-full bg-white/80 p-2 text-gray-900 shadow-sm ring-1 ring-gray-900/5 transition-all hover:bg-gray-50 dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20"
                >
                  <span className="sr-only">Open menu</span>
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

function CTASection() {
  return (
    <div className="relative isolate mt-32 px-6 py-32 sm:mt-56 sm:py-40 lg:px-8">
      <div className="absolute inset-x-0 top-0 -z-10 h-full bg-gradient-to-b from-indigo-50/20 via-white to-white dark:from-zinc-900/20 dark:via-zinc-900 dark:to-zinc-900" />

      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-100">
          Ready to Build Your SaaS?
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          Let's discuss your project and find the perfect approach to bring your
          vision to life.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="https://cal.com/kirsanov/30min"
            target="_blank"
            className="rounded-xl bg-indigo-600 px-8 py-4 text-lg font-semibold text-white shadow-sm transition-all duration-300 hover:bg-indigo-500 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Schedule a Free Call
          </a>
          <a
            href="https://www.youtube.com/@kirsnv?sub_confirmation=1"
            target="_blank"
            className="text-lg font-semibold leading-6 text-zinc-900 dark:text-zinc-100"
          >
            Watch My Videos <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </div>
  )
}

// function Footer() {
//   return (
//     <footer className="mt-32 border-t border-zinc-100 dark:border-zinc-700/40">
//       <Container>
//         <div className="flex flex-col items-center justify-between gap-6 py-16 sm:flex-row">
//           <div className="flex flex-col items-center gap-2 sm:items-start">
//             <div className="flex items-center space-x-4">
//               <Image
//                 src="/images/avatar.png"
//                 alt="Artem Kirsanov"
//                 width={40}
//                 height={40}
//                 className="rounded-full"
//               />
//               <div>
//                 <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
//                   Artem Kirsanov
//                 </p>
//                 <p className="text-sm text-zinc-600 dark:text-zinc-400">
//                   AI Expert & Software Developer
//                 </p>
//               </div>
//             </div>
//             <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
//               Helping founders build better SaaS products
//             </p>
//           </div>

//           <div className="flex flex-col items-center gap-6 sm:flex-row sm:gap-8">
//             <div className="flex gap-6">
//               <SocialLink
//                 href="https://x.com/kirsnvartem"
//                 aria-label="Follow on X"
//                 icon={XIcon}
//               />
//               <SocialLink
//                 href="https://www.youtube.com/@kirsnv?sub_confirmation=1"
//                 aria-label="Follow on Youtube"
//                 icon={YoutubeIcon}
//               />
//               <SocialLink
//                 href="https://github.com/Kirsanow"
//                 aria-label="Follow on GitHub"
//                 icon={GitHubIcon}
//               />
//               <SocialLink
//                 href="https://www.linkedin.com/in/kirsnv/"
//                 aria-label="Follow on LinkedIn"
//                 icon={LinkedInIcon}
//               />
//             </div>
//             <div className="h-6 w-px bg-zinc-200 dark:bg-zinc-700/40" />
//             <div className="flex gap-6">
//               <Link
//                 href="/privacy"
//                 className="text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
//               >
//                 Privacy
//               </Link>
//               <Link
//                 href="/terms"
//                 className="text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
//               >
//                 Terms
//               </Link>
//             </div>
//           </div>
//         </div>
//       </Container>
//     </footer>
//   )
// }

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <>
      <Header onMobileMenuOpen={() => setIsMobileMenuOpen(true)} />
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
      <Hero />
      <Problem />
      <Solution />
      <Services />
      <Process />
      <Footer />
    </>
  )
}
