'use client'

import React from 'react'
import {
  Code,
  Clock,
  TrendingDown,
  Rocket,
  ChevronRight,
  Zap,
  Award,
} from 'lucide-react'
import { motion } from 'framer-motion'

const Stat = ({ number, text }: { number: string; text: string }) => {
  return (
    <div className="border-base-content/10 bg-base-300/50 mt-3 inline-flex items-center rounded-full border px-3 py-2 text-sm font-medium whitespace-nowrap">
      <span className="text-primary mr-2 font-bold">{number}</span>
      <span className="opacity-90">{text}</span>
    </div>
  )
}

const StageCard = ({
  icon,
  title,
  description,
  stat,
  isPrimary = false,
}: {
  icon: React.ReactNode
  title: string
  description: string
  stat: { number: string; text: string }
  isPrimary?: boolean
}) => {
  return (
    <div
      className={`relative h-full w-full rounded-xl ${
        isPrimary ? 'shadow-primary/10 shadow-lg' : 'shadow-md'
      }`}
    >
      <div
        className={`absolute inset-0 rounded-xl ${
          isPrimary
            ? 'from-primary/20 to-base-300/70 bg-gradient-to-br'
            : 'from-base-300 to-base-200 bg-gradient-to-br'
        }`}
      />
      <div
        className={`absolute inset-0 rounded-xl border ${
          isPrimary ? 'border-primary/30' : 'border-base-content/5'
        }`}
      />

      <div className="relative z-10 flex h-full flex-col gap-4 p-4 sm:p-6 md:p-8">
        <div className="flex flex-wrap items-center gap-4">
          <div
            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full sm:h-14 sm:w-14 ${
              isPrimary ? 'bg-primary/10' : 'bg-base-100'
            } shadow-md`}
          >
            {icon}
          </div>
          <h3 className="text-lg font-bold sm:text-xl">{title}</h3>
        </div>

        <p className="text-base-content/80 text-sm leading-relaxed sm:text-base">
          {description}
        </p>

        <Stat number={stat.number} text={stat.text} />
      </div>
    </div>
  )
}

// Problem Agitation: A crucial, yet overlooked, component for a landing page that sells.
// It goes under your Hero section, and above your Features section.
// Your Hero section makes a promise to the customer: "Our product will help you achieve XYZ".
// Your Problem section explains what happens to the customer if its problem isn't solved.
// The copy should NEVER mention your product. Instead, it should dig the emotional outcome of not fixing a problem.
// For instance:
// - Hero: "ShipFast helps developers launch startups fast"
// - Problem Agitation: "Developers spend too much time adding features, get overwhelmed, and quit." (not about ShipFast at all)
// - Features: "ShipFast has user auth, Stripe, emails all set up for you"
export const Problem = () => {
  return (
    <section className="bg-base-200 w-full overflow-hidden py-16 md:py-24">
      {/* Background pattern */}
      <div className="bg-[url('data:image/svg+xml,%3Csvg width=\\\\'6\\\\' height=\\\\'6\\\\' viewBox=\\\\'0 0 6 6\\\\' xmlns=\\\\'http://www.w3.org/2000/svg\\\\'%3E%3Cg fill=\\\\'%239C92AC\\\\' fill-opacity=\\\\'0.05\\\\' fill-rule=\\\\'evenodd\\\\'%3E%3Cpath d=\\\\'M5 0h1L0 5v1H0V0h5z\\\\' /%3E%3C/g%3E%3C/svg%3E')] absolute inset-0 opacity-50" />

      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <div className="bg-primary/10 inline-block rounded-full px-4 py-3 sm:px-6">
            <span className="text-primary flex items-center text-lg font-medium sm:text-2xl">
              <span className="mr-2 text-4xl font-bold">80%</span>
              <span>of founders abandon their MVP before launch</span>
            </span>
          </div>
        </div>

        {/* Section Title - Problems */}
        {/* <div className="mx-auto mb-8 max-w-3xl text-center">
          <h2 className="text-base-content text-2xl font-bold md:text-3xl">
            Common Obstacles
          </h2>
          <p className="text-base-content/70 mt-2">
            Why most founders struggle to bring their ideas to life
          </p>
        </div> */}

        {/* Mobile Timeline - Problems - Vertical Stacked */}
        <div className="flex flex-col space-y-6 md:hidden">
          <StageCard
            icon={<Code size={22} className="text-primary" />}
            title="The Technical Quicksand"
            description="What seems simple quickly becomes complex — authentication, payments, and email systems all demand specialized knowledge you don't have."
            stat={{
              number: '76%',
              text: 'of founders underestimate complexity',
            }}
          />

          <div className="flex w-full items-center justify-center">
            <ChevronRight size={24} className="text-primary/70 rotate-90" />
          </div>

          <StageCard
            icon={<Clock size={22} className="text-primary" />}
            title="The Time Trap"
            description="Basic features that should take hours stretch into weeks — 8 hours for Stripe, days to fix email deliverability issues."
            stat={{
              number: '62%',
              text: 'of side projects fail due to time',
            }}
          />

          <div className="flex w-full items-center justify-center">
            <ChevronRight size={24} className="text-primary/70 rotate-90" />
          </div>

          <StageCard
            icon={<TrendingDown size={22} className="text-primary" />}
            title="The Motivation Cliff"
            description="As technical debt grows and progress slows, motivation plummets until the project is quietly abandoned."
            stat={{
              number: '2-3',
              text: 'months is when most founders quit',
            }}
          />

          <div className="relative my-8 flex w-full items-center justify-center">
            <div className="relative z-10 flex items-center justify-center">
              <span className="bg-base-200 text-primary border-primary/20 relative flex items-center justify-center rounded-xl border px-10 py-3 text-center text-lg font-bold tracking-wider uppercase shadow-md">
                <Zap size={18} className="text-primary mr-2" />
                Our Solution
              </span>
            </div>
          </div>

          {/* Mobile Solution Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, type: 'spring', stiffness: 100 }}
            viewport={{ once: true }}
          >
            <StageCard
              icon={<Rocket size={22} className="text-primary" />}
              title="Expert Technical Execution"
              description="We handle all the complex technical challenges, from authentication systems to payment processing, so you don't have to."
              stat={{
                number: '100%',
                text: 'technical hurdles solved',
              }}
              isPrimary={true}
            />
          </motion.div>

          <div className="flex w-full items-center justify-center">
            <ChevronRight size={24} className="text-primary rotate-90" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              type: 'spring',
              stiffness: 100,
              delay: 0.1,
            }}
            viewport={{ once: true }}
          >
            <StageCard
              icon={<Zap size={22} className="text-primary" />}
              title="Rapid Development"
              description="Launch your MVP in just 3 weeks with all critical features working perfectly, saving you months of development time."
              stat={{
                number: '3x',
                text: 'faster time to market',
              }}
              isPrimary={true}
            />
          </motion.div>

          <div className="flex w-full items-center justify-center">
            <ChevronRight size={24} className="text-primary rotate-90" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              type: 'spring',
              stiffness: 100,
              delay: 0.2,
            }}
            viewport={{ once: true }}
          >
            <StageCard
              icon={<Award size={22} className="text-primary" />}
              title="Sustained Momentum"
              description="Maintain your enthusiasm and vision as you see tangible progress every step of the way, keeping your project on track to completion."
              stat={{
                number: '95%',
                text: 'of our clients launch successfully',
              }}
              isPrimary={true}
            />
          </motion.div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:block">
          {/* Problems Row */}
          <div className="relative mx-auto">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="h-full w-full">
                <StageCard
                  icon={<Code size={22} className="text-primary" />}
                  title="The Technical Quicksand"
                  description="What seems simple quickly becomes complex — authentication, payments, and email systems all demand specialized knowledge you don't have."
                  stat={{
                    number: '76%',
                    text: 'of founders underestimate complexity',
                  }}
                />
              </div>

              <div className="relative h-full w-full">
                <StageCard
                  icon={<Clock size={22} className="text-primary" />}
                  title="The Time Trap"
                  description="Basic features that should take hours stretch into weeks — 8 hours for Stripe, days to fix email deliverability issues."
                  stat={{
                    number: '62%',
                    text: 'of side projects fail due to time',
                  }}
                />
              </div>

              <div className="h-full w-full">
                <StageCard
                  icon={<TrendingDown size={22} className="text-primary" />}
                  title="The Motivation Cliff"
                  description="As technical debt grows and progress slows, motivation plummets until the project is quietly abandoned."
                  stat={{
                    number: '2-3',
                    text: 'months is when most founders quit',
                  }}
                />
              </div>
            </div>

            {/* Divider */}
            <div className="relative my-12 flex w-full items-center justify-center">
              <div className="relative z-10 flex items-center justify-center">
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-base-200 text-primary border-primary/20 relative flex items-center justify-center rounded-xl border px-12 py-4 text-center text-xl font-bold tracking-wider uppercase shadow-md"
                >
                  <Zap size={20} className="text-primary mr-3" />
                  Our Solution
                </motion.span>
              </div>
            </div>

            {/* Solution Cards */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <motion.div
                className="h-full w-full"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, type: 'spring', stiffness: 100 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              >
                <StageCard
                  icon={<Rocket size={24} className="text-primary" />}
                  title="Expert Technical Execution"
                  description="We handle all the complex technical challenges, from authentication systems to payment processing, so you don't have to."
                  stat={{
                    number: '100%',
                    text: 'technical hurdles solved',
                  }}
                  isPrimary={true}
                />
              </motion.div>

              <motion.div
                className="h-full w-full"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  type: 'spring',
                  stiffness: 100,
                  delay: 0.1,
                }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              >
                <StageCard
                  icon={<Zap size={24} className="text-primary" />}
                  title="Rapid Development"
                  description="Launch your MVP in just 3 weeks with all critical features working perfectly, saving you months of development time."
                  stat={{
                    number: '3x',
                    text: 'faster time to market',
                  }}
                  isPrimary={true}
                />
              </motion.div>

              <motion.div
                className="h-full w-full"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  type: 'spring',
                  stiffness: 100,
                  delay: 0.2,
                }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              >
                <StageCard
                  icon={<Award size={24} className="text-primary" />}
                  title="Sustained Momentum"
                  description="Maintain your enthusiasm and vision as you see tangible progress every step of the way, keeping your project on track to completion."
                  stat={{
                    number: '95%',
                    text: 'of our clients launch successfully',
                  }}
                  isPrimary={true}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
