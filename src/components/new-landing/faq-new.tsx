'use client'

import { useState } from 'react'
import type { ReactNode } from 'react'

interface FAQItemProps {
  question: string
  answer: ReactNode
}

const faqList: FAQItemProps[] = [
  {
    question: 'What is an AI Agent?',
    answer: (
      <p className="text-muted-foreground">
        An AI Agent is an autonomous software entity powered by artificial
        intelligence that can perform tasks, make decisions, and interact with
        users and other systems on your behalf. Unlike traditional AI systems
        that respond to specific queries, AI Agents can understand context,
        execute complex workflows, and continuously learn from interactions.
      </p>
    ),
  },
  {
    question: 'How does SkyAgent work?',
    answer: (
      <p className="text-muted-foreground">
        SkyAgent works by combining advanced language models with specialized
        tools and APIs. It understands your requests in natural language, breaks
        down complex tasks into manageable steps, executes those steps using the
        appropriate tools, and delivers results. SkyAgent can access your data
        sources, integrate with your existing software, and automate repetitive
        workflows while continuously learning from your feedback.
      </p>
    ),
  },
  {
    question: 'How secure is my data?',
    answer: (
      <p className="text-muted-foreground">
        Your data security is our top priority. SkyAgent employs end-to-end
        encryption, secure authentication protocols, and strict access controls.
        We follow industry best practices for data protection, including regular
        security audits and compliance with relevant regulations. Your data is
        processed within secure environments and is never shared with third
        parties without your explicit consent.
      </p>
    ),
  },
  {
    question: 'Can I integrate my existing tools?',
    answer: (
      <p className="text-muted-foreground">
        Yes, SkyAgent is designed for seamless integration with your existing
        tools and workflows. Our platform supports connections to popular
        productivity suites, CRM systems, databases, and custom APIs. Through
        our developer-friendly integration framework, you can extend SkyAgent's
        capabilities to work with virtually any software or service your
        organization uses.
      </p>
    ),
  },
  {
    question: 'Is there a free trial available?',
    answer: (
      <p className="text-muted-foreground">
        Yes, we offer a comprehensive free trial that gives you full access to
        SkyAgent's features for a limited time. This allows you to experience
        the platform's capabilities, test integrations with your existing
        systems, and evaluate the potential impact on your workflows before
        making a commitment. No credit card is required to start your trial.
      </p>
    ),
  },
  {
    question: 'How does SkyAgent save me time?',
    answer: (
      <p className="text-muted-foreground">
        SkyAgent saves you time by automating repetitive tasks, streamlining
        complex workflows, and providing instant access to information across
        your systems. It can handle email management, schedule coordination,
        data entry, research, content generation, and much more—all without
        requiring manual intervention. By delegating these tasks to SkyAgent,
        you and your team can focus on high-value work that requires human
        creativity and strategic thinking.
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
    <div
      data-state={isOpen ? 'open' : 'closed'}
      data-orientation="vertical"
      data-slot="accordion-item"
      className="grid gap-2 border-0 last:border-b-0"
    >
      <h3
        data-orientation="vertical"
        data-state={isOpen ? 'open' : 'closed'}
        className="flex"
      >
        <button
          type="button"
          aria-expanded={isOpen}
          data-state={isOpen ? 'open' : 'closed'}
          data-orientation="vertical"
          data-slot="accordion-trigger"
          className="focus-visible:border-ring focus-visible:ring-ring border-border data-[state=open]:ring-primary/20 dark:bg-background flex flex-1 cursor-pointer items-start justify-between gap-4 rounded-lg border bg-white px-4 py-3.5 text-left text-sm font-medium no-underline transition-all outline-none hover:no-underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 data-[state=open]:ring [&[data-state=open]>svg]:rotate-180"
          onClick={toggleOpen}
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
            className="lucide lucide-chevron-down text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200"
          >
            <path d="m6 9 6 6 6-6"></path>
          </svg>
        </button>
      </h3>
      <div
        data-state={isOpen ? 'open' : 'closed'}
        role="region"
        data-orientation="vertical"
        data-slot="accordion-content"
        className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm"
        style={{
          '--radix-accordion-content-height':
            'var(--radix-collapsible-content-height)',
          '--radix-accordion-content-width':
            'var(--radix-collapsible-content-width)',
        }}
        hidden={!isOpen}
      >
        <div className="p-4">{item.answer}</div>
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
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-center font-medium text-balance">
            Answers to common questions about SkyAgent and its features. If you
            have any other questions, please don't hesitate to contact us.
          </p>
        </div>
      </div>
      <div className="mx-auto w-full max-w-3xl px-10">
        <div
          data-slot="accordion"
          className="grid w-full gap-2 border-b-0"
          data-orientation="vertical"
        >
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
