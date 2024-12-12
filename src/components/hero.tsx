'use client'

import { Container } from '@/components/Container'
import Link from 'next/link'

export function Hero() {
  return (
    <Container className="mt-24 sm:mt-32 md:mt-32">
      <div className="relative flex flex-col items-center text-center">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-6xl dark:text-zinc-100">
            Turn Your No-Code App Into a{' '}
            <span className="text-teal-500 dark:text-teal-400">
              Powerful Solution
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            Custom integrations and technical solutions for ambitious no-code
            builders who want to take their apps to the next level
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-teal-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-teal-600 dark:hover:bg-teal-400"
            >
              Let's Enhance Your App
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center rounded-full bg-white/90 px-6 py-3 text-sm font-semibold text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition hover:bg-zinc-50 dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20"
            >
              See My Work
            </Link>
          </div>
        </div>

        <div className="relative mx-auto mt-16 w-full max-w-4xl">
          <BackgroundIllustration className="h-[500px] w-full transform" />
        </div>
      </div>
    </Container>
  )
}

function BackgroundIllustration(props: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div {...props}>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative aspect-[16/9] w-full max-w-[800px] rounded-2xl border border-white/20 bg-gradient-to-b from-white/10 to-white/5 shadow-2xl backdrop-blur-xl dark:border-white/10 dark:from-white/5 dark:to-white/0">
          <div className="absolute inset-0 overflow-hidden rounded-2xl">
            {/* Background grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000,transparent)]" />

            <svg
              viewBox="0 0 1000 1000"
              fill="none"
              className="absolute h-full w-full"
              aria-hidden="true"
            >
              {/* Gradient background */}
              <g className="opacity-30">
                <circle
                  cx="500"
                  cy="500"
                  r="420"
                  stroke="url(#gradient-1)"
                  strokeWidth="1"
                  className="animate-spin-slow"
                />
                <circle
                  cx="500"
                  cy="500"
                  r="380"
                  stroke="url(#gradient-2)"
                  strokeWidth="1"
                  className="animate-spin-slow [animation-direction:reverse]"
                />
              </g>

              {/* Main content group */}
              <g className="animate-float-slow">
                {/* Main window */}
                <rect
                  x="280"
                  y="300"
                  width="440"
                  height="280"
                  rx="16"
                  className="fill-white/10 backdrop-blur-3xl"
                  filter="url(#shadow)"
                />

                {/* Browser-like header */}
                <path
                  d="M280 316a16 16 0 0 1 16-16h408a16 16 0 0 1 16 16v40H280v-40z"
                  className="fill-white/5"
                />

                {/* Browser controls */}
                <circle cx="316" cy="320" r="6" className="fill-rose-500/70" />
                <circle
                  cx="340"
                  cy="320"
                  r="6"
                  className="fill-yellow-500/70"
                />
                <circle cx="364" cy="320" r="6" className="fill-green-500/70" />

                {/* Code editor content */}
                <g className="animate-pulse">
                  {/* Line numbers */}
                  <text x="300" y="380" className="fill-white/20 text-xs">
                    1
                  </text>
                  <text x="300" y="400" className="fill-white/20 text-xs">
                    2
                  </text>
                  <text x="300" y="420" className="fill-white/20 text-xs">
                    3
                  </text>

                  {/* Code lines */}
                  <rect
                    x="320"
                    y="375"
                    width="240"
                    height="2"
                    className="fill-teal-500/40"
                  />
                  <rect
                    x="320"
                    y="395"
                    width="180"
                    height="2"
                    className="fill-teal-500/40"
                  />
                  <rect
                    x="320"
                    y="415"
                    width="200"
                    height="2"
                    className="fill-teal-500/40"
                  />
                </g>

                {/* Side panels */}
                <g className="animate-float-slow [animation-delay:-2s]">
                  {/* API panel */}
                  <rect
                    x="740"
                    y="360"
                    width="120"
                    height="160"
                    rx="8"
                    className="fill-teal-500/10"
                    filter="url(#glow)"
                  />
                  <path
                    d="M760 390h80M760 410h60M760 430h70"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="stroke-teal-500/40"
                    strokeLinecap="round"
                  />

                  {/* Widget panel */}
                  <rect
                    x="140"
                    y="360"
                    width="120"
                    height="160"
                    rx="8"
                    className="fill-teal-400/10"
                    filter="url(#glow)"
                  />
                  <circle
                    cx="200"
                    cy="440"
                    r="30"
                    className="stroke-teal-500/40"
                    strokeWidth="2"
                    fill="none"
                  />
                </g>

                {/* Connection lines */}
                <g className="animate-pulse opacity-20">
                  <path
                    d="M260 440h480"
                    stroke="url(#gradient-line)"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                  />
                </g>
              </g>

              {/* Definitions */}
              <defs>
                <linearGradient id="gradient-1" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#14B8A6" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#14B8A6" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="gradient-2" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#14B8A6" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#14B8A6" stopOpacity="0" />
                </linearGradient>
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="8" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
                <filter
                  id="shadow"
                  x="-10%"
                  y="-10%"
                  width="120%"
                  height="120%"
                >
                  <feDropShadow
                    dx="0"
                    dy="8"
                    stdDeviation="16"
                    floodOpacity="0.2"
                  />
                </filter>
                <linearGradient id="gradient-line" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#14B8A6" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#14B8A6" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}
