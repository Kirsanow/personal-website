'use client'

import React from 'react'
import { Users, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const CommunityCTA = () => {
  return (
    <section className="bg-base-100 relative overflow-hidden py-16 md:py-24">
      {/* Background gradient */}
      <div className="from-base-200/50 to-base-100 absolute inset-0 bg-gradient-to-b"></div>

      {/* Content container */}
      <div className="relative z-10 container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center lg:flex-row lg:items-stretch lg:justify-between">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-10 max-w-xl lg:mb-0 lg:w-1/2 lg:pr-12"
          >
            <div className="bg-primary/10 text-primary inline-flex items-center rounded-full px-3 py-1 text-sm">
              <Users size={16} className="mr-2" />
              Join Our Community
            </div>

            <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Learn to Build with <span className="text-primary">AI Tools</span>
            </h2>

            <p className="text-base-content/80 mt-6 text-lg">
              Connect with like-minded founders and developers who are
              leveraging AI to build faster and smarter. Get access to exclusive
              resources, workshops, and direct support from experts.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 rounded-full p-1.5">
                  <svg
                    className="text-primary h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-base-content/90">
                  Weekly live workshops
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-primary/10 rounded-full p-1.5">
                  <svg
                    className="text-primary h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-base-content/90">
                  Private Discord access
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-primary/10 rounded-full p-1.5">
                  <svg
                    className="text-primary h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-base-content/90">
                  AI development resources
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right content - Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full lg:w-5/12"
          >
            <div className="bg-base-200 ring-base-content/5 overflow-hidden rounded-2xl p-8 ring-1 shadow-lg">
              <div className="flex flex-col space-y-6">
                <h3 className="text-xl font-bold">Join Metamakers Community</h3>
                <p className="text-base-content/70">
                  Get access to our exclusive community of founders building
                  with AI. Learn, share, and grow together.
                </p>

                <Link
                  href="https://www.skool.com/metamakers-3765/about"
                  target="_blank"
                  className="btn btn-primary text-primary-content mt-4 flex w-full items-center justify-center gap-2"
                >
                  <span>Join Now</span>
                  <ArrowRight size={16} />
                </Link>

                <div className="mt-6 flex items-center justify-center">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="bg-primary/10 border-base-200 h-8 w-8 rounded-full border-2"
                        style={{
                          backgroundImage: `url(https://i.pravatar.cc/100?img=${i + 10})`,
                          backgroundSize: 'cover',
                        }}
                      />
                    ))}
                  </div>
                  <span className="text-base-content/70 ml-3 text-sm">
                    Join 200+ founders
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CommunityCTA
