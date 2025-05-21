'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { caseStudies } from '@/config'
import { Button } from '@/components/Button'

interface CaseStudy {
  title: string
  description: string
  image: string
  tags: string[]
  slug: string
}

const CaseStudies = () => {
  const [activeCase, setActiveCase] = useState<string>(
    Object.keys(caseStudies)[0],
  )
  const ROTATION_INTERVAL = 5000 // 5 seconds per case study

  // Add a ref to store the interval ID
  const rotationTimerRef = React.useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    // Clear any existing timer
    if (rotationTimerRef.current) {
      clearInterval(rotationTimerRef.current)
    }

    // Set up automatic rotation
    rotationTimerRef.current = setInterval(() => {
      setActiveCase((prevCase) => {
        const cases = Object.keys(caseStudies)
        const currentIndex = cases.indexOf(prevCase)
        return cases[(currentIndex + 1) % cases.length]
      })
    }, ROTATION_INTERVAL)

    // Clean up interval on component unmount
    return () => {
      if (rotationTimerRef.current) {
        clearInterval(rotationTimerRef.current)
      }
    }
  }, [])

  const handleCaseClick = (caseKey: string) => {
    setActiveCase(caseKey)

    // Reset the timer when manually clicking
    if (rotationTimerRef.current) {
      clearInterval(rotationTimerRef.current)
    }

    rotationTimerRef.current = setInterval(() => {
      setActiveCase((prevCase) => {
        const cases = Object.keys(caseStudies)
        const currentIndex = cases.indexOf(prevCase)
        return cases[(currentIndex + 1) % cases.length]
      })
    }, ROTATION_INTERVAL)
  }

  return (
    <section
      id="case-studies"
      className="relative flex w-full flex-col items-center justify-center gap-5"
    >
      <div className="border-border h-full w-full border-b p-10 md:p-14">
        <div className="mx-auto flex max-w-xl flex-col items-center justify-center gap-2">
          <h2 className="text-center text-3xl font-medium tracking-tighter text-balance md:text-4xl">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-center font-medium text-balance">
            Explore some of my recent work and the technologies I use to build
            exceptional digital experiences
          </p>
        </div>
      </div>

      <div className="flex h-full w-full items-center justify-center lg:h-[450px]">
        <div className="w-full">
          <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center">
            <div className="grid h-full w-full grid-cols-5 items-center gap-x-10 px-10 md:px-20">
              {/* Desktop Project List */}
              <div className="col-span-2 hidden h-full w-full justify-start md:items-center lg:flex">
                <div
                  className="flex h-full w-full flex-col gap-8"
                  data-orientation="vertical"
                >
                  {Object.entries(caseStudies).map(([key, study]) => (
                    <div
                      key={key}
                      data-state={activeCase === key ? 'open' : 'closed'}
                      data-orientation="vertical"
                      className="dark:data-[state=open]:bg-secondary relative mt-px overflow-hidden rounded-lg focus-within:relative focus-within:z-10 data-[state=closed]:rounded-none data-[state=closed]:border-0 data-[state=open]:bg-white data-[state=open]:shadow-[0px_0px_1px_0px_rgba(0,0,0,0.16),0px_1px_2px_-0.5px_rgba(0,0,0,0.16)]"
                    >
                      <div
                        className="absolute right-0 bottom-0 left-0 h-0.5 w-full overflow-hidden rounded-lg bg-neutral-300/50 transition-opacity data-[state=closed]:opacity-0 data-[state=open]:opacity-100 dark:bg-neutral-300/30"
                        data-state={activeCase === key ? 'open' : 'closed'}
                      >
                        <div
                          className="bg-primary absolute top-0 left-0 h-full w-full transition-all ease-linear"
                          style={{
                            transitionDuration:
                              activeCase === key
                                ? `${ROTATION_INTERVAL}ms`
                                : '0s',
                            width: activeCase === key ? '100%' : '0',
                          }}
                        />
                      </div>
                      <h3
                        data-orientation="vertical"
                        data-state={activeCase === key ? 'open' : 'closed'}
                        className="flex"
                      >
                        <button
                          type="button"
                          aria-expanded={activeCase === key}
                          data-state={activeCase === key ? 'open' : 'closed'}
                          data-orientation="vertical"
                          className="group flex h-[45px] flex-1 cursor-pointer items-center justify-between p-3 text-left text-lg font-semibold tracking-tight outline-none"
                          onClick={() => handleCaseClick(key)}
                          aria-disabled={activeCase === key}
                        >
                          {study.title}
                        </button>
                      </h3>
                      <div
                        data-state={activeCase === key ? 'open' : 'closed'}
                        role="region"
                        className="overflow-hidden text-sm"
                        hidden={activeCase !== key}
                      >
                        <div className="space-y-2 p-3">
                          <p className="text-muted-foreground font-medium">
                            {study.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {study.tags.map((tag) => (
                              <span
                                key={tag}
                                className="bg-secondary text-secondary-foreground rounded-full px-2.5 py-0.5 text-xs font-medium"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Project Image */}
              <div className="col-span-5 h-[350px] min-h-[200px] w-auto lg:col-span-3">
                <Link
                  href={`/case-studies/${caseStudies[activeCase].slug}`}
                  className="group relative block h-full w-full overflow-hidden"
                >
                  <div className="absolute inset-0 z-10 bg-black/0 transition-colors duration-300 group-hover:bg-black/5" />
                  <img
                    alt={caseStudies[activeCase].title}
                    className="aspect-auto h-full w-full rounded-xl border border-neutral-300/50 object-cover p-1 transition-all duration-300"
                    src={caseStudies[activeCase].image}
                  />
                </Link>
              </div>

              {/* Mobile Cards */}
              <ul
                className="col-span-5 flex snap-x snap-mandatory flex-nowrap overflow-x-auto [-ms-overflow-style:none] [-webkit-mask-image:linear-gradient(90deg,transparent,black_10%,white_90%,transparent)] [mask-image:linear-gradient(90deg,transparent,black_10%,white_90%,transparent)] [scrollbar-width:none] lg:hidden [&::-webkit-scrollbar]:hidden"
                style={{ padding: '50px calc(50%)' }}
              >
                {Object.entries(caseStudies).map(([key, study]) => (
                  <Link
                    key={key}
                    href={`/case-studies/${study.slug}`}
                    className="card bg-background relative grid h-full max-w-64 shrink-0 items-start justify-center border-t border-b border-l p-3 first:rounded-tl-xl last:rounded-tr-xl last:border-r"
                    style={{ scrollSnapAlign: 'center' }}
                  >
                    <div
                      className="absolute right-0 bottom-0 left-0 h-0.5 w-full overflow-hidden rounded-lg bg-neutral-300/50 transition-opacity data-[state=closed]:opacity-0 data-[state=open]:opacity-100 dark:bg-neutral-300/30"
                      data-state={activeCase === key ? 'open' : 'closed'}
                    >
                      <div
                        className="bg-secondary absolute top-0 left-0 h-full transition-all ease-linear"
                        style={{
                          transitionDuration:
                            activeCase === key
                              ? `${ROTATION_INTERVAL}ms`
                              : '0s',
                          width: activeCase === key ? '100%' : '0',
                        }}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <h2 className="text-lg font-bold">{study.title}</h2>
                      <p className="text-muted-foreground mx-0 max-w-sm text-sm leading-relaxed font-medium text-balance">
                        {study.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {study.tags.map((tag) => (
                          <span
                            key={tag}
                            className="bg-secondary text-secondary-foreground rounded-full px-2.5 py-0.5 text-xs font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center pb-10">
        <Button variant="outline" asChild>
          <Link href="/case-studies">
            View All Projects
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
              className="ml-2 h-4 w-4"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
        </Button>
      </div>
    </section>
  )
}

export default CaseStudies
