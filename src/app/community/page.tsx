'use client'

import React from 'react'
import Link from 'next/link'
import {
  Users,
  ArrowRight,
  MessageSquare,
  Zap,
  Share2,
  Heart,
} from 'lucide-react'
import { Button } from '@/components/Button'
import { motion } from 'framer-motion'

export default function Community() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      {/* Hero Section */}
      <section className="relative w-full">
        <div className="relative flex w-full flex-col items-center px-6">
          <div className="absolute inset-0">
            <div className="absolute inset-0 -z-10 h-[500px] w-full rounded-b-xl [background:radial-gradient(125%_125%_at_50%_10%,var(--background)_40%,var(--primary)_100%)] md:h-[600px]"></div>
          </div>
          <div className="relative z-10 mx-auto flex h-full w-full max-w-3xl flex-col items-center justify-center gap-10 pt-32">
            <p className="border-border bg-secondary/30 flex h-8 items-center gap-2 rounded-full border px-3 text-sm">
              <Users size={16} className="mr-1" />
              Join the Metamakers community
            </p>
            <div className="flex flex-col items-center justify-center gap-5">
              <h1 className="text-foreground text-center text-3xl font-medium tracking-tighter text-balance md:text-4xl lg:text-5xl xl:text-6xl">
                Learn and Build with Fellow Founders in Our Community
              </h1>
              <p className="text-muted-foreground text-center text-base leading-relaxed font-medium tracking-tight text-balance md:text-lg">
                Connect with like-minded entrepreneurs, access exclusive
                resources, and get direct support to accelerate your progress
                and avoid common pitfalls.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2.5">
              <Link
                href="https://www.skool.com/metamakers-3765/about"
                target="_blank"
              >
                <Button className="gap-2 rounded-full">
                  Join Community <ArrowRight size={16} />
                </Button>
              </Link>
              <Button variant={'outline'} className="rounded-full">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-foreground text-3xl font-bold tracking-tight sm:text-4xl">
              Why Join Our Community?
            </h2>
            <p className="text-muted-foreground mt-4 text-lg">
              Everything you need to build faster and better with the support of
              experienced founders.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Feature 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-card rounded-xl border p-6 shadow-sm"
            >
              <div className="bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-lg">
                <MessageSquare className="text-primary h-6 w-6" />
              </div>
              <h3 className="text-foreground text-xl font-semibold">
                Weekly Discussions
              </h3>
              <p className="text-muted-foreground mt-2">
                Participate in moderated discussions on relevant topics with
                fellow founders and experts.
              </p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-xl border p-6 shadow-sm"
            >
              <div className="bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-lg">
                <Zap className="text-primary h-6 w-6" />
              </div>
              <h3 className="text-foreground text-xl font-semibold">
                Exclusive Resources
              </h3>
              <p className="text-muted-foreground mt-2">
                Access templates, guides, and tools specifically curated for
                technical founders.
              </p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-card rounded-xl border p-6 shadow-sm"
            >
              <div className="bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-lg">
                <Share2 className="text-primary h-6 w-6" />
              </div>
              <h3 className="text-foreground text-xl font-semibold">
                Networking
              </h3>
              <p className="text-muted-foreground mt-2">
                Connect with potential co-founders, investors, and partners in
                our private network.
              </p>
            </motion.div>

            {/* Feature 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-card rounded-xl border p-6 shadow-sm sm:col-span-2 lg:col-span-3"
            >
              <div className="flex flex-col items-center gap-6 md:flex-row">
                <div className="bg-primary/10 flex h-16 w-16 items-center justify-center rounded-lg">
                  <Heart className="text-primary h-8 w-8" />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-foreground text-xl font-semibold">
                    Direct Support From Experts
                  </h3>
                  <p className="text-muted-foreground mt-2">
                    Get personalized advice and feedback on your projects from
                    experienced builders who've been in your shoes.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-base-100 relative overflow-hidden py-16 md:py-24">
        <div className="bg-muted/50 absolute inset-0"></div>

        <div className="relative z-10 container mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="text-foreground text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to Join Our Community?
            </h2>
            <p className="text-muted-foreground mt-4 text-lg">
              Connect with founders who are building the future with AI and
              modern development tools.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="bg-card w-full max-w-md rounded-2xl border p-8 shadow-lg">
              <div className="flex flex-col space-y-6">
                <h3 className="text-foreground text-xl font-bold">
                  Join Metamakers Community
                </h3>
                <p className="text-muted-foreground">
                  Get access to our exclusive community of founders building
                  with AI. Learn, share, and grow together.
                </p>

                <Link
                  href="https://www.skool.com/metamakers-3765/about"
                  target="_blank"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground focus-visible:ring-ring mt-4 inline-flex h-10 w-full items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:ring-1 focus-visible:outline-none"
                >
                  <span>Join Now</span>
                  <ArrowRight size={16} />
                </Link>

                <div className="mt-6 flex items-center justify-center">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="bg-primary/10 border-card h-8 w-8 rounded-full border-2"
                        style={{
                          backgroundImage: `url(https://i.pravatar.cc/100?img=${i + 10})`,
                          backgroundSize: 'cover',
                        }}
                      />
                    ))}
                  </div>
                  <span className="text-muted-foreground ml-3 text-sm">
                    Join 200+ founders
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
