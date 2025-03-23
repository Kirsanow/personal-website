'use client'

import React from 'react'
import { Code, Clock, TrendingDown, Rocket, ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'

const Stat = ({ number, text }: { number: string; text: string }) => {
  return (
    <div className="inline-flex items-center px-3 py-2 mt-3 text-sm font-medium whitespace-nowrap rounded-full border border-base-content/10 bg-base-300/50">
      <span className="mr-2 font-bold text-primary">{number}</span>
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
        isPrimary ? 'shadow-lg shadow-primary/10' : 'shadow-md'
      }`}
    >
      <div
        className={`absolute inset-0 rounded-xl ${
          isPrimary
            ? 'bg-gradient-to-br from-primary/20 to-base-300/70'
            : 'bg-gradient-to-br from-base-300 to-base-200'
        }`}
      />
      <div
        className={`absolute inset-0 rounded-xl border ${
          isPrimary ? 'border-primary/30' : 'border-base-content/5'
        }`}
      />

      <div className="flex relative z-10 flex-col gap-4 p-4 h-full sm:p-6 md:p-8">
        <div className="flex flex-wrap gap-4 items-center">
          <div
            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full sm:h-14 sm:w-14 ${
              isPrimary ? 'bg-primary/10' : 'bg-base-100'
            } shadow-md`}
          >
            {icon}
          </div>
          <h3 className="text-lg font-bold sm:text-xl">{title}</h3>
        </div>

        <p className="text-sm leading-relaxed text-base-content/80 sm:text-base">
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
    <section className="overflow-hidden py-16 w-full bg-base-200 md:py-24">
      {/* Background pattern */}
      <div className="bg-[url('data:image/svg+xml,%3Csvg width=\\\\'6\\\\' height=\\\\'6\\\\' viewBox=\\\\'0 0 6 6\\\\' xmlns=\\\\'http://www.w3.org/2000/svg\\\\'%3E%3Cg fill=\\\\'%239C92AC\\\\' fill-opacity=\\\\'0.05\\\\' fill-rule=\\\\'evenodd\\\\'%3E%3Cpath d=\\\\'M5 0h1L0 5v1H0V0h5z\\\\' /%3E%3C/g%3E%3C/svg%3E')] absolute inset-0 opacity-50" />

      <div className="container px-4 mx-auto max-w-7xl sm:px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <div className="inline-block px-4 py-3 rounded-full bg-primary/10 sm:px-6">
            <span className="flex items-center text-lg font-medium text-primary sm:text-2xl">
              <span className="mr-2 text-4xl font-bold">80%</span>
              <span>of founders abandon their MVP before launch</span>
            </span>
          </div>
        </div>

        {/* Mobile Timeline - Vertical Stacked */}
        <div className="flex flex-col space-y-10 md:hidden">
          <StageCard
            icon={<Code size={22} className="text-primary" />}
            title="The Technical Quicksand"
            description="What seems simple quickly becomes complex — authentication, payments, and email systems all demand specialized knowledge you don't have."
            stat={{
              number: '76%',
              text: 'of founders underestimate complexity',
            }}
          />

          <div className="flex justify-center items-center w-full">
            <ChevronRight size={24} className="rotate-90 text-primary" />
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

          <StageCard
            icon={<TrendingDown size={22} className="text-primary" />}
            title="The Motivation Cliff"
            description="As technical debt grows and progress slows, motivation plummets until the project is quietly abandoned."
            stat={{
              number: '2-3',
              text: 'months is when most founders quit',
            }}
          />

          <div className="flex relative justify-center items-center my-10 w-full">
            <div className="absolute inset-0 w-full h-px bg-base-content/10"></div>
            <span className="relative px-4 text-sm font-medium tracking-wider uppercase bg-base-200 text-base-content/60">
              OR
            </span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
          >
            <StageCard
              icon={<Rocket size={22} className="text-primary" />}
              title="The Alternative Path"
              description="Hand off the technical complexity and launch your MVP in just 3 weeks, with all the critical features working perfectly."
              stat={{
                number: '100%',
                text: 'of our clients launch on time',
              }}
              isPrimary={true}
            />
          </motion.div>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden md:block">
          <div className="relative mx-auto mt-10">
            {/* Main Path */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-6">
              <div className="w-full h-full">
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

              <div className="relative w-full h-full">
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

              <div className="w-full h-full">
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

            {/* Alternative Path - Branch */}
            <div className="flex flex-col items-center mt-10 mb-10">
              <div className="flex justify-center items-center mb-10 w-16 h-16 rounded-full bg-primary/10">
                <span className="text-lg font-bold text-primary">OR</span>
              </div>

              <motion.div
                className="w-full max-w-lg"
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.03,
                  transition: { duration: 0.2 },
                  boxShadow:
                    '0 10px 25px -5px rgba(var(--color-primary-rgb), 0.3)',
                }}
              >
                <StageCard
                  icon={<Rocket size={24} className="text-primary" />}
                  title="The Alternative Path"
                  description="Hand off the technical complexity and launch your MVP in just 3 weeks, with all the critical features working perfectly."
                  stat={{
                    number: '100%',
                    text: 'of our clients launch on time',
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
