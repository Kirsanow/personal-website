'use client'

import { useRef, useState } from 'react'
import type { JSX } from 'react'

// <FAQ> component is a lsit of <Item> component
// Just import the FAQ & add your FAQ content to the const faqList arrayy below.

interface FAQItemProps {
  question: string
  answer: JSX.Element
}

const faqList: FAQItemProps[] = [
  {
    question: 'What exactly does your fixed-price MVP service include?',
    answer: (
      <div className="space-y-2 leading-relaxed">
        <p>
          Our fixed-price MVP development service provides everything you need
          to get your product to market in just 3 weeks, including:
        </p>
        <ul className="list-inside list-disc">
          <li>Complete frontend and backend development</li>
          <li>Authentication and user management</li>
          <li>Payment processing integration</li>
          <li>Responsive design across all devices</li>
          <li>Production-ready, scalable architecture</li>
          <li>Deployment to your hosting environment</li>
        </ul>
      </div>
    ),
  },
  {
    question: 'How long does it take to build my MVP?',
    answer: (
      <p>
        We deliver your complete MVP in just 3 weeks from the moment we finalize
        requirements. Our streamlined process and proven tech stack allow us to
        move quickly without sacrificing quality or scalability.
      </p>
    ),
  },
  {
    question: 'What technologies do you use for development?',
    answer: (
      <div className="space-y-2 leading-relaxed">
        <p>
          We build with modern, scalable technologies that ensure your product
          can grow with your business:
        </p>
        <ul className="list-inside list-disc">
          <li>Frontend: React, Next.js, TypeScript with Tailwind CSS</li>
          <li>Backend: Node.js with Express or Next.js API routes</li>
          <li>Database: PostgreSQL with Prisma ORM</li>
          <li>Authentication: Next Auth, JWT, OAuth</li>
          <li>Payments: Stripe integration</li>
          <li>Deployment: Vercel or AWS</li>
        </ul>
      </div>
    ),
  },
  {
    question: 'How much does the MVP development service cost?',
    answer: (
      <p>
        Our fixed-price MVP service starts at $10,000, with the exact price
        depending on your specific requirements. We provide a detailed proposal
        with a guaranteed fixed price after our initial consultation - no hidden
        fees or surprise costs.
      </p>
    ),
  },
  {
    question: 'What happens after the MVP is launched?',
    answer: (
      <div className="space-y-2 leading-relaxed">
        <p>After launching your MVP, we offer several options:</p>
        <ul className="list-inside list-disc">
          <li>Ongoing development with flexible engagement models</li>
          <li>Training for your team to take over the codebase</li>
          <li>Maintenance and support packages</li>
          <li>Performance monitoring and optimization</li>
        </ul>
        <p>
          Our goal is to ensure your product continues to scale and succeed even
          after the initial launch.
        </p>
      </div>
    ),
  },
  {
    question: 'How do we get started?',
    answer: (
      <p>
        Getting started is simple! Click the "Start for free" button at the top
        of the page to schedule a consultation. We'll discuss your requirements,
        provide a detailed proposal, and once approved, start development within
        days. You'll have a production-ready MVP in just 3 weeks.
      </p>
    ),
  },
]
const FaqItem = ({ item }: { item: FAQItemProps }) => {
  const accordion = useRef<HTMLDivElement | null>(null)
  const [isOpen, setIsOpen] = useState(false)

  return (
    <li>
      <button
        className="border-base-content/20 relative flex w-full items-center gap-2 border-t py-5 text-left text-base font-semibold md:text-lg"
        onClick={(e) => {
          e.preventDefault()
          setIsOpen(!isOpen)
        }}
        aria-expanded={isOpen}
      >
        <span
          className={`text-base-content flex-1 ${isOpen ? 'text-primary' : ''}`}
        >
          {item?.question}
        </span>
        <svg
          className={`ml-auto h-4 w-4 flex-shrink-0 fill-current`}
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`origin-center transform transition duration-200 ease-out ${
              isOpen && 'rotate-180'
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`origin-center rotate-90 transform transition duration-200 ease-out ${
              isOpen && 'hidden rotate-180'
            }`}
          />
        </svg>
      </button>

      <div
        ref={accordion}
        className={`overflow-hidden opacity-80 transition-all duration-300 ease-in-out`}
        style={
          isOpen
            ? { maxHeight: accordion.current?.scrollHeight ?? 0, opacity: 1 }
            : { maxHeight: 0, opacity: 0 }
        }
      >
        <div className="pb-5 leading-relaxed">{item?.answer}</div>
      </div>
    </li>
  )
}

const FAQ = () => {
  return (
    <section className="bg-base-200/50" id="faq">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-8 py-24 md:flex-row">
        <div className="flex basis-1/2 flex-col text-left">
          <p className="text-primary mb-4 inline-block font-semibold">FAQ</p>
          <p className="text-base-content text-3xl font-extrabold sm:text-4xl">
            Questions About Our MVP Service
          </p>
        </div>

        <ul className="basis-1/2">
          {faqList.map((item, i) => (
            <FaqItem key={i} item={item} />
          ))}
        </ul>
      </div>
    </section>
  )
}

export default FAQ
