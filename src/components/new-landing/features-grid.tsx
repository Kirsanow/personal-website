'use client'

/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react'
import { Code, Rocket, Zap, Users, LineChart } from 'lucide-react'
import { motion } from 'framer-motion'

const features = [
  {
    title: 'Rapid Prototyping',
    description: 'Turn your idea into a working prototype in days, not months.',
    styles: 'bg-primary text-primary-content',
    demo: (
      <div className="flex h-full items-stretch overflow-hidden">
        <div className="bg-base-200 rounded-t-box h-full w-full translate-x-12 p-6 transition-all duration-500 ease-in-out group-hover:translate-x-6">
          <p className="text-base-content/70 mb-4 text-sm font-semibold tracking-wide uppercase">
            MVP Development Process
          </p>
          <div className="bg-base-200 text-base-content relative mr-12 h-full py-4 transition-colors duration-300 ease-in-out">
            <div className="flex flex-col space-y-5">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                className="transform opacity-0 transition-all duration-300 ease-out group-hover:opacity-100"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 rounded-full p-1.5">
                    <Code size={16} className="text-primary" />
                  </div>
                  <span className="font-medium">Requirements Analysis</span>
                  <span className="text-primary ml-auto font-bold">✓</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                className="transform opacity-0 transition-all duration-300 ease-out group-hover:opacity-100"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 rounded-full p-1.5">
                    <Code size={16} className="text-primary" />
                  </div>
                  <span className="font-medium">UI/UX Wireframes</span>
                  <span className="text-primary ml-auto font-bold">✓</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.5 }}
                className="transform opacity-0 transition-all duration-300 ease-out group-hover:opacity-100"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 rounded-full p-1.5">
                    <Code size={16} className="text-primary" />
                  </div>
                  <span className="font-medium">API Design</span>
                  <span className="text-primary ml-auto font-bold">✓</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.6 }}
                className="transform opacity-0 transition-all duration-300 ease-out group-hover:opacity-100"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 rounded-full p-1.5">
                    <Rocket size={16} className="text-primary" />
                  </div>
                  <span className="font-medium">Working Prototype</span>
                  <span className="text-primary ml-auto font-bold">
                    1 week ✓
                  </span>
                </div>
              </motion.div>
            </div>

            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.7 }}
              className="btn btn-primary absolute right-4 bottom-6 opacity-0 shadow-lg transition-all duration-300 ease-out group-hover:opacity-100 hover:scale-105"
            >
              Start Now
            </motion.button>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Feature Prioritization',
    description:
      'We focus on what matters most to get your MVP to market quickly and effectively.',
    styles: 'md:col-span-2 bg-base-200/50 text-base-content',
    demo: (
      <div className="flex w-full flex-col gap-3 px-6 py-4">
        {[
          {
            text: 'User Authentication & Security',
            secondaryText: 'Secure login, roles & permissions system',
            votes: 'Critical',
            priority: 1,
            icon: <Users size={14} className="text-primary" />,
          },
          {
            text: 'Revenue Generation',
            secondaryText: 'Stripe integration with subscription models',
            votes: 'High',
            priority: 2,
            icon: (
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-primary"
              >
                <path
                  d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ),
          },
          {
            text: 'Metrics & Analytics',
            secondaryText: 'Data insights to drive product decisions',
            votes: 'Medium',
            priority: 3,
            icon: (
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-primary"
              >
                <path
                  d="M3 3v18h18M9 9v8M13 6v11M17 13v4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ),
          },
        ].map((feature, i) => (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 * i }}
            className="bg-base-100 text-base-content border-base-300/30 hover:border-primary/20 flex w-full justify-between gap-4 rounded-lg border p-4 transition-all duration-200"
            key={i}
          >
            <div className="flex-1">
              <div className="flex items-center">
                <div className="bg-primary/10 mr-3 flex h-6 w-6 items-center justify-center rounded-full text-xs font-semibold">
                  {feature.icon}
                </div>
                <p className="font-semibold">{feature.text}</p>
              </div>
              <p className="text-base-content/70 mt-1.5 pl-9 text-sm">
                {feature.secondaryText}
              </p>
            </div>
            <div className="border-base-300/30 flex items-center border-l pl-2">
              <div className="min-w-16 text-center">
                <div
                  className={`rounded-md px-3 py-1 text-sm font-medium ${
                    feature.votes === 'Critical'
                      ? 'bg-primary/20 text-primary'
                      : feature.votes === 'High'
                        ? 'bg-accent/20 text-accent'
                        : 'bg-secondary/20 text-secondary'
                  }`}
                >
                  {feature.votes}
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        <div className="mt-2 flex justify-end pr-4">
          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="btn btn-primary btn-sm gap-2"
          >
            <span>View Development Plan</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 12H19M19 12L12 5M19 12L12 19"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.button>
        </div>
      </div>
    ),
  },
  {
    title: 'Future-Proof Technology',
    description:
      'We build your MVP with scalable architecture that grows with your business needs.',
    styles: 'md:col-span-2 bg-base-100 text-base-content',
    demo: (
      <div className="left-0 -mt-4 flex h-full w-full overflow-hidden pt-0 lg:pt-8">
        <div className="flex h-full min-w-max -rotate-[8deg] overflow-x-visible lg:pt-4">
          {[
            {
              buttonStyles: 'bg-primary text-primary-content',
              title: 'Modern Frontend',
              subtitle: 'React + Next.js + TypeScript',
              icon: (
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-primary-content"
                >
                  <path
                    d="M12 2H2v10l3.54 3.54A5.98 5.98 0 0 0 12 22a5.98 5.98 0 0 0 6.46-6.46L22 12V2H12z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 12h4M12 2v4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ),
              performance: '98',
              css: '-ml-1 rotate-[6deg] w-72 h-72 z-30 bg-base-200 text-base-content rounded-2xl transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:-ml-64 group-hover:opacity-0 group-hover:scale-75',
              padding: 'p-4',
              delay: 0,
            },
            {
              buttonStyles: 'bg-secondary text-secondary-content',
              title: 'API Backend',
              subtitle: 'Node.js + Express + REST/GraphQL',
              icon: (
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-secondary-content"
                >
                  <path
                    d="M21 12c0-4.418-3.582-8-8-8s-8 3.582-8 8"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 12h8M5 12l-3 3 3 3"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ),
              performance: '95',
              css: 'rotate-[6deg] bg-base-200 text-base-content w-72 h-72 -mr-20 -ml-20 z-20 rounded-xl transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:-ml-24',
              padding: 'p-4',
              delay: 0.1,
            },
            {
              buttonStyles: 'bg-accent text-accent-content',
              title: 'Data Storage',
              subtitle: 'PostgreSQL + Redis Cache',
              icon: (
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-accent-content"
                >
                  <path
                    d="M21 5c0 1.657-4.03 3-9 3S3 6.657 3 5m18 0c0-1.657-4.03-3-9-3S3 3.343 3 5m18 0v14c0 1.66-4.03 3-9 3s-9-1.34-9-3V5m18 4c0 1.66-4.03 3-9 3s-9-1.34-9-3m18 4c0 1.66-4.03 3-9 3s-9-1.34-9-3"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ),
              performance: '92',
              css: 'rotate-[6deg] bg-base-200 text-base-content z-10 w-72 h-72 rounded-xl transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)]',
              padding: 'p-4',
              delay: 0.2,
            },
            {
              buttonStyles: 'bg-neutral text-neutral-content',
              title: 'User Security',
              subtitle: 'JWT + OAuth2 + Role-Based Access',
              icon: (
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-neutral-content"
                >
                  <path
                    d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ),
              performance: '97',
              css: 'rotate-[6deg] bg-base-200 text-base-content w-72 h-72 -ml-20 rounded-xl transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:-ml-16',
              padding: 'p-4',
              delay: 0.3,
            },
            {
              buttonStyles: 'bg-base-100 text-base-content',
              title: 'DevOps',
              subtitle: 'CI/CD Pipeline + AWS/Vercel',
              icon: (
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-base-content"
                >
                  <path
                    d="M22 12.5V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7.5M16 2v4M8 2v4M3 10h18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM18 15v1.5M18 21v1.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ),
              performance: '90',
              css: 'rotate-[6deg] bg-base-200 text-base-content w-72 h-72 -ml-10 -z-10 rounded-xl opacity-0 scale-75 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:opacity-100 group-hover:scale-100 group-hover:-ml-6',
              padding: 'p-4',
              delay: 0.4,
            },
          ].map((stack, i) => (
            <motion.div
              initial={{ opacity: 0.8, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.3 + stack.delay,
                ease: [0.34, 1.56, 0.64, 1],
              }}
              className={`${stack.css} ${stack.padding}`}
              key={i}
            >
              <div className="text-base-content/60 mb-3 text-sm font-medium tracking-wide uppercase">
                MVP Technology
              </div>
              <div className="space-y-2">
                <div className="bg-base-100 rounded-box flex flex-col p-4">
                  <div className="flex items-center gap-3">
                    <div className={`rounded-full p-1.5 ${stack.buttonStyles}`}>
                      {stack.icon}
                    </div>
                    <div>
                      <p className="text-lg font-semibold">{stack.title}</p>
                      <p className="text-sm opacity-80">{stack.subtitle}</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="mb-1 flex justify-between text-sm">
                      <p className="font-medium">Technical Excellence</p>
                      <p
                        className={`font-bold ${
                          stack.buttonStyles.includes('primary')
                            ? 'text-primary'
                            : stack.buttonStyles.includes('secondary')
                              ? 'text-secondary'
                              : stack.buttonStyles.includes('accent')
                                ? 'text-accent'
                                : 'text-neutral'
                        }`}
                      >
                        {stack.performance}/100
                      </p>
                    </div>
                    <div className="bg-base-200 h-2 w-full rounded-full">
                      <div
                        className={`h-2 rounded-full transition-all duration-1000 ease-out ${
                          stack.buttonStyles.includes('primary')
                            ? 'bg-primary'
                            : stack.buttonStyles.includes('secondary')
                              ? 'bg-secondary'
                              : stack.buttonStyles.includes('accent')
                                ? 'bg-accent'
                                : 'bg-neutral'
                        }`}
                        style={{
                          width: '0%',
                          animation:
                            'progressAnimation 1.5s ease-out forwards 0.5s',
                        }}
                      ></div>
                    </div>
                    <style jsx>{`
                      @keyframes progressAnimation {
                        from {
                          width: 0%;
                        }
                        to {
                          width: ${stack.performance}%;
                        }
                      }
                      .group:hover div div div div div:nth-child(2) div div {
                        width: ${stack.performance}% !important;
                      }
                    `}</style>
                  </div>
                </div>
                <div className="bg-base-100 rounded-box p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Key Benefits</span>
                    <span
                      className={`rounded-full px-2 py-0.5 text-xs ${stack.buttonStyles}`}
                    >
                      Industry Standard
                    </span>
                  </div>
                  <div className="mt-2 text-sm opacity-80">
                    <ul className="space-y-1">
                      {stack.title === 'Modern Frontend' ? (
                        <>
                          <li>• Responsive & performant UI</li>
                          <li>• Type-safe development</li>
                          <li>• SEO-friendly architecture</li>
                        </>
                      ) : stack.title === 'API Backend' ? (
                        <>
                          <li>• Efficient data processing</li>
                          <li>• Reliable server architecture</li>
                          <li>• Extensible API design</li>
                        </>
                      ) : stack.title === 'Data Storage' ? (
                        <>
                          <li>• Fast query performance</li>
                          <li>• High-speed caching</li>
                          <li>• Data redundancy & backup</li>
                        </>
                      ) : stack.title === 'User Security' ? (
                        <>
                          <li>• Secure authentication</li>
                          <li>• Granular permissions</li>
                          <li>• Data encryption</li>
                        </>
                      ) : (
                        <>
                          <li>• Automated deployments</li>
                          <li>• Continuous integration</li>
                          <li>• Scalable infrastructure</li>
                        </>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: 'Dedicated Support',
    description:
      'Our team is with you every step of the way to ensure success.',
    styles: 'bg-base-200/50 text-base-content',
    demo: (
      <div className="text-neutral-content space-y-4 px-6">
        {[
          {
            id: 1,
            text: 'When can we schedule our next sprint planning meeting?',
            userImg:
              'https://pbs.twimg.com/profile_images/1514863683574599681/9k7PqDTA_400x400.jpg',
            userName: 'Your Team',
            createdAt: '2024-06-01T00:00:00Z',
            delay: 0.3,
          },
          {
            id: 2,
            text: "I'm available this Thursday at 2PM. We'll review the authentication system and payment integration progress 👨‍💻",
            userImg:
              'https://pbs.twimg.com/profile_images/1778434561556320256/knBJT1OR_400x400.jpg',
            userName: 'Cursor AI Dev',
            createdAt: '2024-06-02T00:00:00Z',
            transition:
              'opacity-0 translate-x-6 group-hover:opacity-100 group-hover:translate-x-0',
            delay: 0.5,
          },
        ]?.map((reply) => (
          <motion.div
            initial={{
              opacity: 0,
              x: reply.id === 2 ? 20 : 0,
              y: reply.id === 1 ? 20 : 0,
            }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{
              duration: 0.5,
              delay: reply.delay,
              ease: [0.25, 1, 0.5, 1],
            }}
            key={reply.id}
            className={`bg-neutral-content text-neutral rounded-box px-6 py-4 transition-all duration-500 ease-out ${reply.id === 2 ? reply.transition : ''}`}
          >
            <div className="mb-2 whitespace-pre-wrap">{reply.text}</div>
            <div className="text-neutral/80 flex items-center gap-2 text-sm">
              <div className="flex items-center gap-2">
                <div className="avatar">
                  <div className="w-7 rounded-full">
                    <img src={reply.userImg} alt={reply.userName} />
                  </div>
                </div>
                <div className=""> {reply.userName} </div>
              </div>
              •
              <div>
                {new Date(reply.createdAt).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    ),
  },
]

const FeaturesGrid = () => {
  return (
    <section className="bg-base-200/50 text-base-content flex w-full items-center justify-center py-20 lg:py-32">
      <div className="flex max-w-[82rem] flex-col gap-16 px-4 md:gap-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl text-4xl font-black tracking-[-0.01em] md:text-6xl"
        >
          Build MVPs that <br />{' '}
          <span className="decoration-primary/50 underline decoration-dashed underline-offset-8">
            actually launch
          </span>
        </motion.h2>
        <div className="text-text-default flex h-fit w-full max-w-[82rem] flex-col gap-4 lg:gap-10">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-10">
            {features.map((feature, index) => (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                key={feature.title}
                className={`${feature.styles} group flex h-[22rem] w-full flex-col gap-6 overflow-hidden rounded-3xl pt-6 shadow-sm transition-shadow duration-300 ease-in-out hover:shadow-md lg:h-[25rem]`}
              >
                <div className="space-y-2 px-6">
                  <h3 className="text-xl font-bold tracking-tight lg:text-3xl">
                    {feature.title}
                  </h3>
                  <p className="opacity-80">{feature.description}</p>
                </div>
                {feature.demo}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesGrid
