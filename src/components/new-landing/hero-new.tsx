'use client'

import React from 'react'
import Link from 'next/link'
import { Button } from '../Button'

interface HeroNewProps {
  // You can add props here if needed
}

const HeroNew: React.FC<HeroNewProps> = () => {
  return (
    <section id="hero" className="relative w-full">
      <div className="relative flex w-full flex-col items-center px-6">
        <div className="absolute inset-0">
          <div className="absolute inset-0 -z-10 h-[600px] w-full rounded-b-xl [background:radial-gradient(125%_125%_at_50%_10%,var(--background)_40%,var(--primary)_100%)] md:h-[800px]"></div>
        </div>
        <div className="relative z-10 mx-auto flex h-full w-full max-w-3xl flex-col items-center justify-center gap-10 pt-32">
          <p className="border-border bg-secondary/30 flex h-8 items-center gap-2 rounded-full border px-3 text-sm">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-[#364153] dark:fill-white"
            >
              <path d="M2 3.5A1.5 1.5 0 013.5 2h9A1.5 1.5 0 0114 3.5v9a1.5 1.5 0 01-1.5 1.5h-9A1.5 1.5 0 012 12.5v-9z" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.5 3a.5.5 0 00-.5.5v9a.5.5 0 00.5.5h9a.5.5 0 00.5-.5v-9a.5.5 0 00-.5-.5h-9zM4 5a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1V5z"
                fill="white"
              />
              <path
                d="M5 6h6v1H5V6zM5 8h6v1H5V8zM5 10h4v1H5v-1z"
                fill="white"
              />
            </svg>
            Introducing learning center
          </p>
          <div className="flex flex-col items-center justify-center gap-5">
            <h1 className="text-foreground text-center text-3xl font-medium tracking-tighter text-balance md:text-4xl lg:text-5xl xl:text-6xl">
              More Than Just Code. Meet Your Partner for High-Quality SaaS
              Development
            </h1>
            <p className="text-muted-foreground text-center text-base leading-relaxed font-medium tracking-tight text-balance md:text-lg">
              Forget freelance frustrations. I partner with aspiring founders to
              deliver meticulously crafted code, transparent project management,
              and the technical expertise you need to succeed. Let's build
              something great together.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            <Button className="rounded-full">Let's Build Your Vision</Button>
            <Button variant={'outline'} className="rounded-full">
              See Examples
            </Button>
          </div>
        </div>
      </div>
      <div className="relative mt-10 px-6">
        <div className="relative size-full overflow-hidden rounded-2xl shadow-xl">
          <div className="relative block dark:hidden">
            <div className="group relative cursor-pointer">
              <div className="bg-background aspect-video w-full rounded-2xl"></div>
              <div className="absolute inset-0 isolate flex scale-[0.9] items-center justify-center rounded-2xl transition-all duration-200 ease-out group-hover:scale-100">
                <div className="from-secondary/20 flex size-28 items-center justify-center rounded-full bg-gradient-to-t to-[#ACC3F7/15] backdrop-blur-md">
                  <div className="from-secondary relative flex size-20 scale-100 items-center justify-center rounded-full bg-gradient-to-t to-white/10 shadow-md transition-all duration-200 ease-out group-hover:scale-[1.2]">
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
                      className="lucide lucide-play size-8 scale-100 fill-white text-white transition-transform duration-200 ease-out group-hover:scale-105"
                      style={{
                        filter:
                          'drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06))',
                      }}
                    >
                      <polygon points="6 3 20 12 6 21 6 3"></polygon>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative hidden dark:block">
            <div className="group relative cursor-pointer">
              <div className="bg-background aspect-video w-full rounded-2xl"></div>
              <div className="absolute inset-0 isolate flex scale-[0.9] items-center justify-center rounded-2xl transition-all duration-200 ease-out group-hover:scale-100">
                <div className="from-secondary/20 flex size-28 items-center justify-center rounded-full bg-gradient-to-t to-[#ACC3F7/15] backdrop-blur-md">
                  <div className="from-secondary relative flex size-20 scale-100 items-center justify-center rounded-full bg-gradient-to-t to-white/10 shadow-md transition-all duration-200 ease-out group-hover:scale-[1.2]">
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
                      className="lucide lucide-play size-8 scale-100 fill-white text-white transition-transform duration-200 ease-out group-hover:scale-105"
                      style={{
                        filter:
                          'drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06))',
                      }}
                    >
                      <polygon points="6 3 20 12 6 21 6 3"></polygon>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroNew
