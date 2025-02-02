'use client'

import AccountButton from '@/components/account-button'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const MobileMenu = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean
  onClose: () => void
}) => {
  return (
    <div
      className={`fixed inset-0 z-100 transform transition-opacity duration-300 ${
        isOpen ? 'pointer-events-auto' : 'pointer-events-none'
      }`}
    >
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/20 backdrop-blur-xs transition-opacity ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
      />

      {/* Menu panel */}
      <div
        className={`fixed inset-y-0 right-0 z-100 w-full bg-white px-6 py-6 transition-transform duration-300 sm:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col space-y-4">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Image
                src="/images/avatar.png"
                alt="Artem Kirsanov"
                className="h-10 w-10 rounded-full"
                width={40}
                height={40}
              />
              <span className="font-semibold text-gray-900">
                Artem Kirsanov
              </span>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center justify-center rounded-full bg-white p-2 text-gray-900 ring-1 shadow-xs ring-gray-900/5 transition-all hover:bg-gray-50"
            >
              <span className="sr-only">Close menu</span>
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-col space-y-4">
            <a
              href="#curriculum"
              onClick={onClose}
              className="text-base font-medium text-gray-900 hover:text-indigo-600"
            >
              Curriculum
            </a>
            <a
              href="#pricing"
              onClick={onClose}
              className="text-base font-medium text-gray-900 hover:text-indigo-600"
            >
              Pricing
            </a>
            <div className="pt-4">
              {/* <a
                href="#enroll"
                onClick={onClose}
                className="inline-flex w-full items-center justify-center rounded-full bg-indigo-600 px-4 py-2.5 text-base font-medium text-white hover:bg-indigo-500"
              >
                Enroll Now
              </a> */}
              <AccountButton className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function JsForBubblers() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const isWaitlist = false
  return (
    <div className="mx-auto h-screen w-full flex-auto">
      {/* Remove the script and style tags and add the CSS to globals.css instead */}
      <Header onMobileMenuOpen={() => setIsMobileMenuOpen(true)} />
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
      <main className="flex-auto">
        <Hero isWaitlist={isWaitlist} />
        <About />
        <WhatYouGet />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

const Header = ({ onMobileMenuOpen }: { onMobileMenuOpen: () => void }) => {
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
          ? 'bg-white/80 shadow-xs backdrop-blur-lg'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="relative">
        <div
          className={`absolute bottom-0 left-0 h-px w-full bg-linear-to-r from-transparent via-indigo-500/20 to-transparent transition-opacity duration-500 ${
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
                  <span className="font-semibold text-gray-900">
                    Artem Kirsanov
                  </span>
                  <span className="text-sm text-gray-600">
                    Bubble Expert & JavaScript Developer
                  </span>
                </div>
              </div>

              <div className="hidden sm:ml-auto sm:flex sm:items-center sm:space-x-6">
                <a
                  href="#curriculum"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Curriculum
                </a>

                <a
                  href="#pricing"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Pricing
                </a>
                {/* <a
                  href="#enroll"
                  className="rounded-full bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-500"
                >
                  Enroll Now
                </a> */}
                <AccountButton />
              </div>

              <div className="ml-4 flex sm:hidden">
                <button
                  type="button"
                  onClick={onMobileMenuOpen}
                  className="inline-flex items-center justify-center rounded-full bg-white/80 p-2 text-gray-900 ring-1 shadow-xs ring-gray-900/5 transition-all hover:bg-gray-50"
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

const Hero = ({ isWaitlist }: { isWaitlist: boolean }) => {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showToast, setShowToast] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const GOOGLE_SCRIPT_URL =
        'https://script.google.com/macros/s/AKfycbwGz4J0N0y_AKVkDdfwnVBpfyB9bg6_ofSSCAZSgWgO4EH_uEknv_i3r8HCZyHYI3sBPw/exec'

      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })
      setShowToast(true)
      setEmail('')
      setTimeout(() => setShowToast(false), 3000)
    } catch (error) {
      console.error('Submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <div
        className={`fixed right-4 bottom-4 transform transition-all duration-300 ${
          showToast ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
        }`}
        style={{ zIndex: 99999 }}
      >
        <div className="rounded-lg bg-white px-6 py-4 ring-1 shadow-xl ring-gray-900/5">
          <div className="flex items-center gap-x-3">
            <svg
              className="h-5 w-5 text-green-600"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
            <p className="text-sm font-medium text-gray-900">
              Thanks for joining! We'll be in touch soon.
            </p>
          </div>
        </div>
      </div>

      <div className="relative isolate overflow-x-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-linear-to-b from-indigo-50/30 via-white/60 to-white"></div>
          <div
            className="absolute top-0 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-2xl"
            aria-hidden="true"
          >
            <div className="aspect-1155/678 w-full max-w-[72.1875rem] bg-linear-to-tr from-[#ff80b5]/25 to-[#9089fc]/25 opacity-[0.1]"></div>
          </div>
        </div>

        <div className="animate-fade-in mx-auto w-full max-w-7xl pt-10 pb-16 sm:pb-24 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-24">
          <div className="px-4 sm:px-6 lg:px-0 lg:pt-4">
            <div id="enroll" className="mx-auto max-w-2xl">
              <div className="max-w-lg">
                <div className="mb-6 inline-flex rounded-full bg-indigo-500/10 px-4 py-1 text-sm font-medium text-indigo-600 ring-1 ring-indigo-500/20 ring-inset sm:mb-8">
                  Enroll now
                </div>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-6xl">
                  The JavaScript Blueprint for{' '}
                  <span className="bg-linear-to-r from-indigo-600 to-violet-500 bg-clip-text text-transparent">
                    Bubble Developers
                  </span>
                </h1>
                <p className="mt-4 text-base text-gray-600 sm:mt-6 sm:text-lg">
                  Master JavaScript and TypeScript to supercharge your Bubble
                  apps. From custom workflows to plugin development, and beyond
                  to full-stack applications.
                </p>
                <ul className="mt-6 space-y-3 text-gray-600 sm:mt-8">
                  <li className="flex items-start space-x-2 sm:items-center">
                    <svg
                      className="mt-0.5 h-5 w-5 shrink-0 text-indigo-600 sm:mt-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="flex-1">
                      Build powerful custom workflows with JavaScript
                    </span>
                  </li>
                  <li className="flex items-start space-x-2 sm:items-center">
                    <svg
                      className="mt-0.5 h-5 w-5 shrink-0 text-indigo-600 sm:mt-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="flex-1">
                      Create and monetize your own Bubble plugins
                    </span>
                  </li>
                  <li className="flex items-start space-x-2 sm:items-center">
                    <svg
                      className="mt-0.5 h-5 w-5 shrink-0 text-indigo-600 sm:mt-0"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="flex-1">
                      Build full-stack apps with Next.js and React
                    </span>
                  </li>
                </ul>
                <div className="mt-8">
                  {isWaitlist ? (
                    <div>
                      <div className="space-y-4">
                        <form onSubmit={handleSubmit} className="mt-6">
                          <div className="flex flex-col gap-3 sm:flex-row sm:space-x-2">
                            <input
                              type="email"
                              autoComplete="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              placeholder="Enter your email"
                              className="flex-1 rounded-lg border-0 px-4 py-3 text-gray-900 ring-1 ring-gray-300 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-600 focus:ring-inset"
                              required
                            />
                            <button
                              type="submit"
                              disabled={isSubmitting}
                              className="flex items-center justify-center rounded-lg bg-linear-to-r from-indigo-600 to-violet-500 px-6 py-3 text-sm font-semibold whitespace-nowrap text-white shadow-xs hover:from-indigo-500 hover:to-violet-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:opacity-75"
                            >
                              {isSubmitting ? (
                                <>
                                  <svg
                                    className="mr-2 h-4 w-4 animate-spin"
                                    viewBox="0 0 24 24"
                                  >
                                    <circle
                                      className="opacity-25"
                                      cx="12"
                                      cy="12"
                                      r="10"
                                      stroke="currentColor"
                                      strokeWidth="4"
                                      fill="none"
                                    />
                                    <path
                                      className="opacity-75"
                                      fill="currentColor"
                                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                    />
                                  </svg>
                                  Joining...
                                </>
                              ) : (
                                'Join Waitlist'
                              )}
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-x-6">
                      <a
                        href="/login?checkout=true"
                        className="w-full rounded-xl bg-linear-to-r from-indigo-600 to-violet-500 px-8 py-4 text-center text-base font-medium text-white transition-all hover:from-indigo-500 hover:to-violet-400 sm:w-auto"
                      >
                        Enroll Now - $99
                      </a>
                      <a
                        href="#curriculum"
                        className="text-base leading-7 font-semibold text-gray-900 hover:text-indigo-600"
                      >
                        View Curriculum <span aria-hidden="true">→</span>
                      </a>
                    </div>
                  )}
                </div>

                <div className="mt-6 text-sm text-gray-500">
                  <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-x-2">
                    <div className="flex items-center space-x-2">
                      <svg
                        className="h-5 w-5 text-green-600"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-sm font-medium text-gray-500">
                        Early access
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <svg
                        className="h-5 w-5 text-green-600"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-sm font-medium text-gray-500">
                        30% discount
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <svg
                        className="h-5 w-5 text-green-600"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-sm font-medium text-gray-500">
                        Private Discord community
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 px-4 sm:mt-24 sm:px-6 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:w-full lg:px-0">
            <div className="relative rounded-xl bg-linear-to-b from-indigo-50 to-white p-4 ring-1 shadow-2xl ring-gray-900/10 sm:p-8">
              <div className="bg-grid-slate-100 absolute inset-0 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))]"></div>
              <div className="relative overflow-hidden rounded-xl bg-gray-900 p-4 shadow-xl">
                <div className="absolute top-0 right-0 left-0 h-8 bg-gray-800 px-4 py-1.5">
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-1.5">
                      <div className="h-2.5 w-2.5 rounded-full bg-red-500"></div>
                      <div className="h-2.5 w-2.5 rounded-full bg-yellow-500"></div>
                      <div className="h-2.5 w-2.5 rounded-full bg-green-500"></div>
                    </div>
                    <div className="text-xs text-gray-400">script.js</div>
                  </div>
                </div>

                <pre className="mt-8 overflow-x-auto font-mono text-sm leading-6">
                  <code className="relative block text-gray-50">
                    <span className="text-violet-300"> function</span>{' '}
                    <span className="text-indigo-300">enhanceBubbleApp</span>
                    <span className="text-gray-300">()</span>{' '}
                    <span className="text-gray-300">{'{'}</span>
                    {'\n'}
                    {'  '}
                    <span className="text-slate-500">
                      // Your JavaScript journey starts here
                    </span>
                    {'\n'}
                    {'  '}
                    <span className="text-violet-300">const</span>{' '}
                    <span className="text-blue-300">value</span>{' '}
                    <span className="text-gray-300">=</span>{' '}
                    <span className="text-violet-300">properties.</span>
                    <span className="text-indigo-300">param1</span>
                    {'\n\n'}
                    <span className="text-indigo-300">
                      {' '}
                      bubble_fn_addCustomWorkflow
                    </span>
                    <span className="text-gray-300">({'{'}</span>
                    {'\n'}
                    {'    '}
                    <span className="text-sky-300">name</span>
                    <span className="text-gray-300">:</span>{' '}
                    <span className="text-emerald-300">'Advanced Search'</span>
                    <span className="text-gray-300">,</span>
                    {'\n'}
                    {'    '}
                    <span className="text-sky-300">type</span>
                    <span className="text-gray-300">:</span>{' '}
                    <span className="text-emerald-300">'backend'</span>
                    <span className="text-gray-300">,</span>
                    {'\n'}
                    {'    '}
                    <span className="text-sky-300">language</span>
                    <span className="text-gray-300">:</span>{' '}
                    <span className="text-emerald-300">'javascript'</span>
                    {'\n'}
                    {'  '}
                    <span className="text-gray-300">{'}'}</span>
                    {'\n\n'}
                    {'  '}
                    <span className="text-slate-500">
                      // More exciting code coming soon...
                    </span>
                    {'\n'}
                    <span className="text-gray-300">{'}'}</span>
                  </code>
                </pre>

                <div className="absolute top-8 left-4 text-right text-xs leading-6 select-none">
                  {Array.from({ length: 11 }).map((_, i) => (
                    <div key={i} className="text-gray-600">
                      {i + 1}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-linear-to-b from-white/0 via-white/50 to-white"></div>
      </div>
    </>
  )
}

const About = () => {
  return (
    <div className="relative w-full overflow-x-hidden bg-white py-16 sm:py-24">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-8 w-[150%] origin-bottom-left skew-x-[-30deg] bg-white ring-1 shadow-xl shadow-indigo-600/10 ring-indigo-50 sm:mr-16 lg:mr-0 xl:mr-16 xl:origin-center"></div>
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl">
          <div className="relative left-[calc(50%-11rem)] aspect-1155/678 w-full max-w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-10"></div>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <div className="flex items-center gap-x-3">
            <div className="h-px flex-auto bg-gray-100"></div>
            <div className="text-sm leading-6 font-semibold whitespace-nowrap text-indigo-600">
              How it works
            </div>
            <div className="h-px flex-auto bg-gray-100"></div>
          </div>

          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900 sm:mt-8 sm:text-4xl">
            Three Steps to JavaScript Mastery for Bubble Developers
          </h2>
          <p className="mt-4 text-center text-base leading-7 text-gray-600 sm:mt-6 sm:text-lg">
            A structured approach to learning JavaScript that's specifically
            designed for Bubble developers. Start with the basics and progress
            to advanced concepts.
          </p>
        </div>

        <div className="mx-auto mt-12 w-full max-w-2xl sm:mt-16 lg:mt-20 lg:max-w-none">
          <dl className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-x-8">
            <div className="flex flex-col rounded-2xl bg-white p-6 ring-1 shadow-xs ring-gray-900/5 sm:p-8">
              <dt className="text-base leading-7 font-semibold text-gray-900">
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 18v-6m0 0V6m0 6h6m-6 0H6"
                    />
                  </svg>
                </div>
                JavaScript Fundamentals for Bubble
              </dt>
              <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">
                  Master JavaScript basics with Bubble-specific examples. Learn
                  how to integrate JavaScript into your workflows and understand
                  Bubble's JavaScript API.
                </p>
                <ul className="mt-6 space-y-2 text-sm">
                  <li className="flex items-start">
                    <svg
                      className="mt-1 mr-2 h-4 w-4 shrink-0 text-indigo-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="flex-1">
                      Variables, Functions & Objects
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="mt-1 mr-2 h-4 w-4 shrink-0 text-indigo-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="flex-1">Async Programming & APIs</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="mt-1 mr-2 h-4 w-4 shrink-0 text-indigo-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="flex-1">DOM Manipulation</span>
                  </li>
                </ul>
              </dd>
            </div>

            <div className="flex flex-col rounded-2xl bg-white p-6 ring-1 shadow-xs ring-gray-900/5 sm:p-8">
              <dt className="text-base leading-7 font-semibold text-gray-900">
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                    />
                  </svg>
                </div>
                Plugin Development
              </dt>
              <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">
                  Learn to create, test, and publish your own Bubble plugins.
                  Understand the plugin architecture and monetization
                  strategies.
                </p>
                <ul className="mt-6 space-y-2 text-sm">
                  <li className="flex items-start">
                    <svg
                      className="mt-1 mr-2 h-4 w-4 shrink-0 text-indigo-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-600">
                      Plugin Architecture & Best Practices
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="mt-1 mr-2 h-4 w-4 shrink-0 text-indigo-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-600">
                      Custom Elements & Actions
                    </span>
                  </li>
                </ul>
              </dd>
            </div>

            <div className="flex flex-col rounded-2xl bg-white p-6 ring-1 shadow-xs ring-gray-900/5 sm:p-8">
              <dt className="text-base leading-7 font-semibold text-gray-900">
                <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                    />
                  </svg>
                </div>
                Full-Stack Development
              </dt>
              <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                <p className="flex-auto">
                  Take your skills further with modern full-stack development.
                  Learn React, Next.js, and how to transition from NoCode to
                  Code.
                </p>
                <ul className="mt-6 space-y-2 text-sm">
                  <li className="flex items-start">
                    <svg
                      className="mt-1 mr-2 h-4 w-4 shrink-0 text-indigo-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="flex-1">React & Next.js Fundamentals</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="mt-1 mr-2 h-4 w-4 shrink-0 text-indigo-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="flex-1">
                      API Routes & Database Integration
                    </span>
                  </li>
                </ul>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  )
}

const CTA = () => {
  return (
    <div id="pricing" className="relative isolate overflow-hidden bg-gray-900">
      <div className="px-4 py-16 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to Transform Your Bubble Development Skills?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-gray-300 sm:mt-6 sm:text-lg">
            Learn practical Javascript skills to level up your Bubble
            development skills
          </p>

          <div className="mt-8 flex flex-col items-center">
            <div className="mb-6 w-full rounded-2xl bg-white/10 p-6 backdrop-blur-sm sm:mb-8 sm:p-8">
              <div className="flex flex-col items-center gap-y-6 sm:flex-row sm:items-center sm:justify-center sm:gap-x-8">
                <div className="text-center sm:text-left">
                  <div className="text-base font-medium text-gray-300 sm:text-lg">
                    Early Bird Price
                  </div>
                  <div className="mt-1 flex items-baseline justify-center gap-x-2 sm:justify-start">
                    <span className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                      $99
                    </span>
                    <span className="text-sm text-gray-300">
                      /lifetime access
                    </span>
                  </div>
                </div>
                <div className="hidden h-16 w-px bg-white/10 sm:block"></div>
                <ul className="space-y-2 text-sm text-gray-300 sm:space-y-3">
                  <li className="flex items-center gap-x-3">
                    <svg
                      className="h-5 w-5 flex-none text-indigo-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Complete course access
                  </li>
                  <li className="flex items-center gap-x-3">
                    <svg
                      className="h-5 w-5 flex-none text-indigo-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Private Discord community
                  </li>
                  <li className="flex items-center gap-x-3">
                    <svg
                      className="h-5 w-5 flex-none text-indigo-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Project code & resources
                  </li>
                </ul>
              </div>
            </div>

            <a href="/login?checkout=true">
              <button className="w-full rounded-xl bg-linear-to-r from-indigo-500 to-violet-500 px-8 py-3 text-base font-semibold text-white shadow-xs transition-all hover:from-indigo-600 hover:to-violet-600 sm:px-12 sm:py-4">
                Enroll now
              </button>
            </a>
            <p className="mt-3 text-sm text-gray-300 sm:mt-4">
              30-day money-back guarantee
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

const WhatYouGet = () => {
  return (
    <div id="curriculum" className="relative isolate bg-white py-24 sm:py-32">
      {/* Decorative elements */}
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-10 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base leading-7 font-semibold text-indigo-600">
            Course Curriculum
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Your Journey from Bubble Developer to Full-Stack Expert
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            A carefully crafted curriculum that takes you from JavaScript basics
            to building and monetizing your own plugins
          </p>
        </div>

        {/* Course Modules */}
        <div className="mx-auto mt-16 max-w-5xl">
          <div className="space-y-16">
            {/* Module 1: JavaScript Fundamentals */}
            <div className="group relative">
              <div className="relative rounded-3xl bg-white p-8 ring-1 ring-gray-200 transition-all duration-300 hover:ring-2 hover:ring-indigo-500 lg:p-10">
                <div className="flex items-center gap-x-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-indigo-600 text-lg font-semibold text-white">
                    1
                  </span>
                  <h3 className="text-xl leading-7 font-semibold tracking-tight text-gray-900">
                    JavaScript Fundamentals for Bubble
                  </h3>
                </div>
                <p className="mt-4 text-base leading-7 text-gray-600">
                  Master the core concepts of JavaScript with examples
                  specifically tailored for Bubble developers.
                </p>

                <div className="mt-8 grid gap-8 lg:grid-cols-2">
                  {/* What You'll Learn */}
                  <div>
                    <h4 className="text-sm leading-6 font-semibold text-indigo-600">
                      What You'll Learn
                    </h4>
                    <ul className="mt-4 space-y-3">
                      <li className="flex gap-x-3">
                        <svg
                          className="h-6 w-5 flex-none text-indigo-600"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-gray-600">
                          Variables, Functions & Objects with Bubble context
                        </span>
                      </li>
                      <li className="flex gap-x-3">
                        <svg
                          className="h-6 w-5 flex-none text-indigo-600"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-gray-600">
                          Async Programming & API Integration
                        </span>
                      </li>
                      <li className="flex gap-x-3">
                        <svg
                          className="h-6 w-5 flex-none text-indigo-600"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-gray-600">
                          DOM Manipulation & Event Handling
                        </span>
                      </li>
                    </ul>
                  </div>

                  {/* Practical Projects */}
                  <div>
                    <h4 className="text-sm leading-6 font-semibold text-indigo-600">
                      Practical Skills
                    </h4>
                    <ul className="mt-4 space-y-3">
                      <li className="flex gap-x-3">
                        <svg
                          className="h-6 w-5 flex-none text-indigo-600"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-gray-600">
                          Supercharge your workflows with JavaScript{' '}
                        </span>
                      </li>
                      <li className="flex gap-x-3">
                        <svg
                          className="h-6 w-5 flex-none text-indigo-600"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-gray-600">
                          Overcame any Bubble limitations just when you need it
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Preview Code */}
                <div className="mt-8">
                  <div className="relative overflow-hidden rounded-xl bg-gray-900 shadow-xl">
                    {/* VS Code-like header */}
                    <div className="absolute top-0 right-0 left-0 h-8 bg-gray-800 px-4 py-1.5">
                      <div className="flex items-center justify-between">
                        <div className="flex space-x-1.5">
                          <div className="h-2.5 w-2.5 rounded-full bg-red-500"></div>
                          <div className="h-2.5 w-2.5 rounded-full bg-yellow-500"></div>
                          <div className="h-2.5 w-2.5 rounded-full bg-green-500"></div>
                        </div>
                        <div className="text-xs text-gray-400">
                          fundamentals.js
                        </div>
                      </div>
                    </div>

                    {/* Code content */}
                    <div className="mt-8 px-4 pb-4">
                      <pre className="overflow-x-auto font-mono text-sm leading-6">
                        <code className="relative block text-gray-50">
                          <div className="group flex">
                            <span className="mr-4 text-right text-xs text-gray-600 select-none">
                              1
                            </span>
                            <span className="flex-1">
                              <span className="text-violet-300">function</span>{' '}
                              <span className="text-indigo-300">
                                createSearchComponent
                              </span>
                              <span className="text-gray-300">()</span>{' '}
                              <span className="text-gray-300">{'{'}</span>
                            </span>
                          </div>
                          <div className="group flex">
                            <span className="mr-4 text-right text-xs text-gray-600 select-none">
                              2
                            </span>
                            <span className="flex-1">
                              <span className="text-slate-500">
                                {'  '}// Initialize search configuration
                              </span>
                            </span>
                          </div>
                          <div className="group flex">
                            <span className="mr-4 text-right text-xs text-gray-600 select-none">
                              3
                            </span>
                            <span className="flex-1">
                              <span className="text-slate-500">
                                {'  '}// with Bubble-specific settings
                              </span>
                            </span>
                          </div>
                          <div className="group flex">
                            <span className="mr-4 text-right text-xs text-gray-600 select-none">
                              4
                            </span>
                            <span className="flex-1">
                              <span className="text-violet-300">
                                {'  '}const
                              </span>{' '}
                              <span className="text-blue-300">config</span>{' '}
                              <span className="text-gray-300">=</span>{' '}
                              <span className="text-gray-300">{'{'}</span>
                            </span>
                          </div>
                          <div className="group flex">
                            <span className="mr-4 text-right text-xs text-gray-600 select-none">
                              5
                            </span>
                            <span className="flex-1">
                              <span className="text-sky-300">
                                {'    '}fuzzyMatch
                              </span>
                              <span className="text-gray-300">:</span>{' '}
                              <span className="text-indigo-300">true</span>
                              <span className="text-gray-300">,</span>
                            </span>
                          </div>
                          <div className="group flex">
                            <span className="mr-4 text-right text-xs text-gray-600 select-none">
                              6
                            </span>
                            <span className="flex-1">
                              <span className="text-sky-300">
                                {'    '}fields
                              </span>
                              <span className="text-gray-300">:</span>{' '}
                              <span className="text-gray-300">[</span>
                              <span className="text-emerald-300">'name'</span>
                              <span className="text-gray-300">,</span>{' '}
                              <span className="text-emerald-300">
                                'description'
                              </span>
                              <span className="text-gray-300">],</span>
                            </span>
                          </div>
                          <div className="group flex">
                            <span className="mr-4 text-right text-xs text-gray-600 select-none">
                              7
                            </span>
                            <span className="flex-1">
                              <span className="text-sky-300">
                                {'    '}debounceMs
                              </span>
                              <span className="text-gray-300">:</span>{' '}
                              <span className="text-indigo-300">300</span>
                            </span>
                          </div>
                          <div className="group flex">
                            <span className="mr-4 text-right text-xs text-gray-600 select-none">
                              8
                            </span>
                            <span className="flex-1">
                              <span className="text-gray-300">{'  }'};</span>
                            </span>
                          </div>
                          <div className="group flex">
                            <span className="mr-4 text-right text-xs text-gray-600 select-none">
                              9
                            </span>
                            <span className="flex-1"></span>
                          </div>
                          <div className="group flex">
                            <span className="mr-4 text-right text-xs text-gray-600 select-none">
                              10
                            </span>
                            <span className="flex-1">
                              <span className="text-slate-500">
                                {'  '}// Initialize the component
                              </span>
                            </span>
                          </div>
                          <div className="group flex">
                            <span className="mr-4 text-right text-xs text-gray-600 select-none">
                              11
                            </span>
                            <span className="flex-1">
                              <span className="text-indigo-300">
                                initializeSearch
                              </span>
                              <span className="text-gray-300">(</span>
                              <span className="text-blue-300">config</span>
                              <span className="text-gray-300">);</span>
                            </span>
                          </div>
                          <div className="group flex">
                            <span className="mr-4 text-right text-xs text-gray-600 select-none">
                              12
                            </span>
                            <span className="flex-1">
                              <span className="text-gray-300">{'}'}</span>
                            </span>
                          </div>
                        </code>
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Module 2: Plugin Development */}
            <div className="group relative">
              <div className="relative rounded-3xl bg-white p-8 ring-1 ring-gray-200 transition-all duration-300 hover:ring-2 hover:ring-indigo-500 lg:p-10">
                <div className="flex items-center gap-x-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-indigo-600 text-lg font-semibold text-white">
                    2
                  </span>
                  <h3 className="text-xl leading-7 font-semibold tracking-tight text-gray-900">
                    Building & Monetizing Bubble Plugins
                  </h3>
                </div>
                <p className="mt-4 text-base leading-7 text-gray-600">
                  Learn to create, publish, and monetize your own Bubble
                  plugins. Open new revenue streams while helping other
                  developers.
                </p>

                <div className="mt-8 grid gap-8 lg:grid-cols-2">
                  <div>
                    <h4 className="text-sm leading-6 font-semibold text-indigo-600">
                      Plugin Development
                    </h4>
                    <ul className="mt-4 space-y-3">
                      <li className="flex gap-x-3">
                        <svg
                          className="h-6 w-5 flex-none text-indigo-600"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-gray-600">
                          Plugin Architecture & Best Practices
                        </span>
                      </li>
                      <li className="flex gap-x-3">
                        <svg
                          className="h-6 w-5 flex-none text-indigo-600"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-gray-600">
                          Custom Elements & Actions
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm leading-6 font-semibold text-indigo-600">
                      Business Skills
                    </h4>
                    <ul className="mt-4 space-y-3">
                      <li className="flex gap-x-3">
                        <svg
                          className="h-6 w-5 flex-none text-indigo-600"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-gray-600">
                          Plugin Monetization Strategies
                        </span>
                      </li>
                      <li className="flex gap-x-3">
                        <svg
                          className="h-6 w-5 flex-none text-indigo-600"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-gray-600">
                          Marketing & Distribution
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Success Metrics */}
                <div className="mt-8 grid grid-cols-2 gap-8 lg:grid-cols-4">
                  <div className="rounded-xl bg-indigo-500/5 p-6 text-center">
                    <div className="text-2xl font-semibold text-indigo-600">
                      50+
                    </div>
                    <div className="mt-1 text-sm text-gray-600">
                      Plugin Ideas
                    </div>
                  </div>
                  <div className="rounded-xl bg-indigo-500/5 p-6 text-center">
                    <div className="text-2xl font-semibold text-indigo-600">
                      $1k+
                    </div>
                    <div className="mt-1 text-sm text-gray-600">
                      Monthly Revenue
                    </div>
                  </div>
                  <div className="rounded-xl bg-indigo-500/5 p-6 text-center">
                    <div className="text-2xl font-semibold text-indigo-600">
                      5+
                    </div>
                    <div className="mt-1 text-sm text-gray-600">
                      Case Studies
                    </div>
                  </div>
                  <div className="rounded-xl bg-indigo-500/5 p-6 text-center">
                    <div className="text-2xl font-semibold text-indigo-600">
                      ∞
                    </div>
                    <div className="mt-1 text-sm text-gray-600">
                      Possibilities
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Module 3: Full-Stack Development */}
            <div className="group relative">
              <div className="relative rounded-3xl bg-white p-8 ring-1 ring-gray-200 transition-all duration-300 hover:ring-2 hover:ring-indigo-500 lg:p-10">
                <div className="flex items-center gap-x-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-indigo-600 text-lg font-semibold text-white">
                    3
                  </span>
                  <h3 className="text-xl leading-7 font-semibold tracking-tight text-gray-900">
                    Full-Stack Development with Next.js
                  </h3>
                </div>
                <p className="mt-4 text-base leading-7 text-gray-600">
                  Take your skills to the next level by learning modern
                  full-stack development with Next.js and React.
                </p>

                <div className="mt-8 grid gap-8 lg:grid-cols-2">
                  <div>
                    <h4 className="text-sm leading-6 font-semibold text-indigo-600">
                      Technical Skills
                    </h4>
                    <ul className="mt-4 space-y-3">
                      <li className="flex gap-x-3">
                        <svg
                          className="h-6 w-5 flex-none text-indigo-600"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-gray-600">
                          React & Next.js Fundamentals
                        </span>
                      </li>
                      <li className="flex gap-x-3">
                        <svg
                          className="h-6 w-5 flex-none text-indigo-600"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-gray-600">
                          API Routes & Database Integration
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm leading-6 font-semibold text-indigo-600">
                      Knowledge
                    </h4>
                    <ul className="mt-4 space-y-3">
                      <li className="flex gap-x-3">
                        <svg
                          className="h-6 w-5 flex-none text-indigo-600"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-gray-600">
                          Transition from Nocode to Code
                        </span>
                      </li>
                      <li className="flex gap-x-3">
                        <svg
                          className="h-6 w-5 flex-none text-indigo-600"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-gray-600">
                          Deployment & Scaling
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Final Project Preview */}
                <div className="mt-8">
                  <div className="rounded-xl bg-linear-to-r from-indigo-500/5 via-purple-500/5 to-pink-500/5 p-6">
                    <h4 className="text-sm leading-6 font-semibold text-indigo-600">
                      Milestone Project
                    </h4>
                    <p className="mt-2 text-gray-600">
                      Build a Full-Stack App with Next.js and Supabase. Deploy a
                      production-ready application
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 flex justify-center">
            <a
              href="/login?checkout=true"
              className="rounded-full bg-indigo-600 px-8 py-4 text-base font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Start Your Journey Today
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

const Footer = () => {
  return (
    <footer className="relative isolate overflow-hidden border-t border-gray-200 bg-white">
      {/* Decorative blur effect */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white/90 ring-1 shadow-xl shadow-indigo-600/10 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        {/* Bottom section */}
        <div className="border-gray-900/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-y-4 md:flex-row">
            <p className="text-xs leading-5 text-gray-500">
              © 2024 Artem Kirsanov. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a
                href="https://x.com/kirsnvartem"
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Twitter</span>
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
                </svg>
              </a>
              {/* <a
                href="https://github.com/your-handle"
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">GitHub</span>
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a> */}
              {/* <a
                href="https://discord.gg/your-server"
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">Discord</span>
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
                </svg>
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default JsForBubblers
