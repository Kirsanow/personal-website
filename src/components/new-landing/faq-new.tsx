'use client'

import { useState } from 'react'
import type { ReactNode } from 'react'

interface FAQItemProps {
  question: string
  answer: ReactNode
}

const faqList: FAQItemProps[] = [
  {
    question: 'What types of projects do you typically work on?',
    answer: (
      <p className="text-muted-foreground">
        I specialize in building modern web applications using React, Next.js,
        and other cutting-edge technologies. This includes full-stack
        development, from responsive front-end interfaces to robust back-end
        systems. Whether you need a new SaaS platform, an e-commerce solution,
        or a custom web application, I can help bring your vision to life.
      </p>
    ),
  },
  {
    question: 'How do you handle project communication and updates?',
    answer: (
      <p className="text-muted-foreground">
        Communication is key to project success. We'll have regular check-ins
        through your preferred platform (Slack, email, or video calls), and
        you'll receive detailed progress updates. I maintain full transparency
        with access to development progress, and we can adjust our communication
        frequency based on your needs.
      </p>
    ),
  },
  {
    question: 'What is your development process like?',
    answer: (
      <p className="text-muted-foreground">
        My process starts with a thorough discovery phase where we define your
        requirements and create a detailed roadmap. Development is done in
        focused sprints with regular demos and feedback sessions. I emphasize
        clean code, thorough testing, and maintaining clear documentation
        throughout the project lifecycle.
      </p>
    ),
  },
  {
    question: 'How do you handle project timelines and budgets?',
    answer: (
      <p className="text-muted-foreground">
        After our initial discovery phase, I provide detailed timelines and cost
        estimates. I work in agile sprints to deliver value incrementally and
        maintain flexibility. You'll always have clear visibility into project
        progress and budget usage, and I'm proactive about communicating any
        potential adjustments needed.
      </p>
    ),
  },
  {
    question: 'Do you provide support after the project launch?',
    answer: (
      <p className="text-muted-foreground">
        Yes, I offer post-launch support to ensure your application runs
        smoothly. This includes bug fixes, performance monitoring, and necessary
        updates. We can also discuss ongoing maintenance plans or feature
        development to help your application grow with your business needs.
      </p>
    ),
  },
  {
    question: 'What makes your development approach different?',
    answer: (
      <p className="text-muted-foreground">
        I combine technical expertise with a strong focus on business outcomes.
        Every decision is made with your goals in mind, whether that's scaling
        your user base, improving performance, or reducing operational costs. I
        also emphasize writing maintainable, future-proof code that can grow
        with your business.
      </p>
    ),
  },
]

const FAQItem = ({
  item,
  isOpen,
  toggleOpen,
}: {
  item: FAQItemProps
  isOpen: boolean
  toggleOpen: () => void
}) => {
  return (
    <div className="border-b last:border-b-0">
      <button
        type="button"
        onClick={toggleOpen}
        className="hover:text-primary flex w-full items-center justify-between gap-4 py-4 text-left text-base font-medium transition-colors"
      >
        {item.question}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`h-4 w-4 shrink-0 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
      <div
        className={`grid transition-all duration-200 ease-out ${
          isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="overflow-hidden">
          <div className="pt-0 pb-4">{item.answer}</div>
        </div>
      </div>
    </div>
  )
}

const FAQNew = () => {
  const [openItem, setOpenItem] = useState<number | null>(null)

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index)
  }

  return (
    <section
      id="faq"
      className="relative flex w-full flex-col items-center justify-center gap-10 pb-10"
    >
      <div className="h-full w-full border-b p-10 md:p-14">
        <div className="mx-auto flex max-w-xl flex-col items-center justify-center gap-2">
          <h2 className="text-center text-3xl font-medium tracking-tighter text-balance md:text-4xl">
            Common Questions
          </h2>
          <p className="text-muted-foreground text-center font-medium text-balance">
            Learn more about how I work and what you can expect when we
            collaborate on your project.
          </p>
        </div>
      </div>
      <div className="mx-auto w-full max-w-3xl px-6 md:px-10">
        <div className="divide-border divide-y">
          {faqList.map((item, index) => (
            <FAQItem
              key={index}
              item={item}
              isOpen={openItem === index}
              toggleOpen={() => toggleItem(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQNew
