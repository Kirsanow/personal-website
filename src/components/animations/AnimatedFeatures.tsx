'use client'

import React, { useState } from 'react'
import { motion, useAnimation, AnimatePresence } from 'framer-motion'

// Types
export interface ChatMessage {
  id: string
  content: string
  sender: 'user' | 'assistant'
  avatar?: string
}

export interface ChartDataPoint {
  x: number
  y: number
}

export interface TaskItem {
  id: string
  title: string
  color: string
  opacity?: number
}

export interface CodeMetric {
  id: string
  name: string
  value: number
  target: number
  color: string
}

export interface FeedbackItem {
  id: string
  text: string
  author: string
  avatar: string
  timestamp: string
  positive: boolean
}

export interface AnimationConfig {
  type: 'chat' | 'chart' | 'tasks' | 'custom' | 'code-quality' | 'feedback'
  data:
    | ChatMessage[]
    | ChartDataPoint[]
    | TaskItem[]
    | CodeMetric[]
    | FeedbackItem[]
    | any
  customComponent?: React.ReactNode
}

// Animation variants for different elements
const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delayChildren: 0.15,
      staggerChildren: 0.12,
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: {
      duration: 0.4,
    },
  },
}

const itemVariants = {
  hidden: { y: 15, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 120, damping: 20 },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: { duration: 0.3 },
  },
}

const bubbleVariants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100, damping: 15 },
  },
  exit: {
    scale: 0.95,
    opacity: 0,
    transition: { duration: 0.3 },
  },
}

const drawVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { type: 'spring', duration: 1.5, bounce: 0 },
      opacity: { duration: 0.5 },
    },
  },
  exit: {
    pathLength: 0,
    opacity: 0,
    transition: { duration: 0.3 },
  },
}

// Animated Chat Component
export const AnimatedChat: React.FC<{
  messages: ChatMessage[]
  isVisible: boolean
}> = ({ messages, isVisible }) => {
  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          className="mx-auto flex w-full max-w-md flex-col gap-3"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          style={{ transform: 'translateY(-65px)' }}
        >
          {messages.map((message) => (
            <motion.div
              key={message.id}
              variants={itemVariants}
              className={`flex items-${message.sender === 'user' ? 'end justify-end' : 'start'} gap-3`}
            >
              {message.sender === 'assistant' && (
                <motion.div
                  className="bg-background border-border flex size-10 flex-shrink-0 items-center justify-center rounded-full border shadow-[0_0_10px_rgba(0,0,0,0.05)]"
                  variants={bubbleVariants}
                >
                  <svg
                    width="42"
                    height="24"
                    viewBox="0 0 42 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4 fill-[var(--secondary)]"
                  >
                    <g clipPath="url(#clip0_322_9172)">
                      <path
                        d="M22.3546 0.96832C22.9097 0.390834 23.6636 0.0664062 24.4487 0.0664062C27.9806 0.0664062 31.3091 0.066408 34.587 0.0664146C41.1797 0.0664284 44.481 8.35854 39.8193 13.2082L29.6649 23.7718C29.1987 24.2568 28.4016 23.9133 28.4016 23.2274V13.9234L29.5751 12.7025C30.5075 11.7326 29.8472 10.0742 28.5286 10.0742H13.6016L22.3546 0.96832Z"
                        fill="current"
                      />
                      <path
                        d="M19.6469 23.0305C19.0919 23.608 18.338 23.9324 17.5529 23.9324C14.021 23.9324 10.6925 23.9324 7.41462 23.9324C0.821896 23.9324 -2.47942 15.6403 2.18232 10.7906L12.3367 0.227022C12.8029 -0.257945 13.6 0.0855283 13.6 0.771372L13.6 10.0754L12.4265 11.2963C11.4941 12.2662 12.1544 13.9246 13.473 13.9246L28.4001 13.9246L19.6469 23.0305Z"
                        fill="current"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_322_9172">
                        <rect width="42" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </motion.div>
              )}

              <motion.div
                variants={bubbleVariants}
                className={`${
                  message.sender === 'user'
                    ? 'bg-secondary text-foreground ml-auto max-w-[280px] rounded-2xl p-4'
                    : 'bg-accent border-border min-w-[220px] rounded-xl border p-4 md:min-w-[300px]'
                } shadow-[0_0_10px_rgba(0,0,0,0.05)]`}
              >
                <p
                  className={`text-sm ${message.sender === 'assistant' ? 'text-foreground prose prose-sm dark:prose-invert' : ''}`}
                >
                  {message.content}
                </p>
              </motion.div>

              {message.sender === 'user' && (
                <motion.div
                  variants={bubbleVariants}
                  className="bg-background flex w-fit flex-shrink-0 items-center rounded-full border border-none"
                >
                  <img
                    src={
                      message.avatar ||
                      'https://randomuser.me/api/portraits/women/79.jpg'
                    }
                    alt="User Avatar"
                    className="size-8 flex-shrink-0 rounded-full"
                  />
                </motion.div>
              )}
            </motion.div>
          ))}

          {/* Typing indicator when applicable */}
          {isVisible && (
            <motion.div
              className="mt-1 flex items-start gap-2"
              variants={itemVariants}
            >
              <motion.div className="flex gap-1 p-2">
                <motion.div
                  className="bg-primary/40 h-2 w-2 rounded-full"
                  animate={{ y: [0, -4, 0] }}
                  transition={{ repeat: Infinity, duration: 1.2, delay: 0 }}
                />
                <motion.div
                  className="bg-primary/40 h-2 w-2 rounded-full"
                  animate={{ y: [0, -4, 0] }}
                  transition={{ repeat: Infinity, duration: 1.2, delay: 0.3 }}
                />
                <motion.div
                  className="bg-primary/40 h-2 w-2 rounded-full"
                  animate={{ y: [0, -4, 0] }}
                  transition={{ repeat: Infinity, duration: 1.2, delay: 0.6 }}
                />
              </motion.div>
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

// Animated Chart Component
export const AnimatedChart: React.FC<{
  data: ChartDataPoint[]
  isVisible: boolean
}> = ({ data, isVisible }) => {
  // Create path from data points
  const createPath = () => {
    if (!data.length) return ''

    const maxX = Math.max(...data.map((point) => point.x))
    const maxY = Math.max(...data.map((point) => point.y))

    // Scale points to fit within the SVG viewport
    const scaledPoints = data.map((point) => ({
      x: (point.x / maxX) * 600,
      y: 200 - (point.y / maxY) * 160, // Invert Y since SVG y increases downward
    }))

    let path = `M ${scaledPoints[0].x} ${scaledPoints[0].y}`

    for (let i = 1; i < scaledPoints.length; i++) {
      path += ` C ${scaledPoints[i - 1].x + 20} ${scaledPoints[i - 1].y}, ${scaledPoints[i].x - 20} ${scaledPoints[i].y}, ${scaledPoints[i].x} ${scaledPoints[i].y}`
    }

    return path
  }

  return (
    <div
      className="relative flex size-full h-[300px] items-center justify-center overflow-hidden pt-10"
      style={{ '--color': 'rgba(21 93 252 / 1)' } as React.CSSProperties}
    >
      <AnimatePresence>
        {isVisible && (
          <>
            <motion.div
              className="absolute top-[60%] left-1/2 h-32 w-[2px] -translate-x-1/2 bg-gradient-to-b from-[var(--color)] to-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
            />

            <motion.div
              className="absolute top-32 left-[42%] flex h-8 -translate-x-1/2 items-center justify-center rounded-full border border-white/[0.07] bg-[#1A1B25] px-4 py-1 font-mono text-sm text-white shadow-[0px_1.1px_0px_0px_rgba(255,255,255,0.20)_inset,0px_4.4px_6.6px_0px_rgba(255,255,255,0.01)_inset,0px_2.2px_6.6px_0px_rgba(18,43,105,0.04),0px_1.1px_2.2px_0px_rgba(18,43,105,0.08),0px_0px_0px_1.1px_rgba(18,43,105,0.08)]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="font-mono">Metrics</div>
            </motion.div>

            <svg
              width="600"
              height="200"
              viewBox="0 0 600 200"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="lineGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="rgba(21 93 252 / 0.3)" />
                  <stop offset="100%" stopColor="rgba(21 93 252 / 0)" />
                </linearGradient>
              </defs>

              <motion.path
                d={createPath()}
                fill="url(#lineGradient)"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3, scale: 0.95 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.8 }}
                style={{ transformOrigin: '300px 120px 0px' }}
              />

              <motion.path
                d={createPath()}
                stroke="rgba(21 93 252 / 1)"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                variants={drawVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              />

              {data.map((point, index) => {
                const maxX = Math.max(...data.map((p) => p.x))
                const maxY = Math.max(...data.map((p) => p.y))
                const x = (point.x / maxX) * 600
                const y = 200 - (point.y / maxY) * 160

                return (
                  <motion.circle
                    key={index}
                    cx={x}
                    cy={y}
                    r="4"
                    fill="rgba(21 93 252 / 1)"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    style={{ transformOrigin: `${x}px ${y}px 0px` }}
                  />
                )
              })}
            </svg>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

// Animated Tasks Component
export const AnimatedTasks: React.FC<{
  tasks: TaskItem[]
  isVisible: boolean
}> = ({ tasks, isVisible }) => {
  return (
    <div className="relative flex h-full w-full flex-col">
      <AnimatePresence>
        {isVisible && (
          <>
            {/* Background grid */}
            <motion.div
              className="absolute inset-0 -z-10 flex [mask:linear-gradient(180deg,transparent,black_40%,black_40%,transparent)]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex h-full w-1/3 items-start justify-between">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="bg-primary/30 h-5 w-px first:bg-transparent"
                  />
                ))}
              </div>
              <div className="border-border/30 flex h-full w-1/3 items-start justify-between border-x border-dashed">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="bg-primary/30 h-5 w-px first:bg-transparent"
                  />
                ))}
              </div>
              <div className="flex h-full w-1/3 items-start justify-between">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="bg-primary/30 h-5 w-px first:bg-transparent"
                  />
                ))}
              </div>
            </motion.div>

            {/* Week day labels */}
            <motion.div
              className="text-muted-foreground absolute top-4 right-0 left-0 mx-auto flex max-w-md justify-between px-5 text-sm font-medium"
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span>Mon</span>
              <span>Tue</span>
              <span>Wed</span>
              <span>Thu</span>
              <span>Fri</span>
            </motion.div>

            {/* Timeline indicator */}
            <motion.div
              className="from-secondary/80 absolute top-12 left-1/2 z-10 h-[calc(100%-100px)] w-[2px] -translate-x-1/2 bg-gradient-to-b to-transparent"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 0.8, height: 'calc(100% - 100px)' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />

            {/* Current time indicator */}
            <motion.div
              className="absolute top-[70px] left-1/2 z-20 flex -translate-x-1/2 items-center justify-center"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <motion.div
                className="bg-primary h-4 w-4 rounded-full"
                animate={{
                  boxShadow: [
                    '0 0 0 0 rgba(var(--secondary), 0.4)',
                    '0 0 0 8px rgba(var(--secondary), 0)',
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: 'loop',
                }}
              />
            </motion.div>
            {/* <motion.div
              className="bg-secondary absolute top-[70px] left-1/2 z-20 flex -translate-x-1/2 translate-y-6 items-center justify-center rounded-md px-3 py-0.5 text-xs text-white shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 6 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <span className="font-medium tracking-wide">Sprint Day 3</span>
            </motion.div> */}

            {/* Task cards */}
            <div className="absolute top-1/2 left-0 grid w-full -translate-y-1/3 gap-8 px-8">
              {tasks.map((task, index) => (
                <motion.div
                  key={task.id}
                  className={`${task.color} flex h-10 w-full max-w-[280px] items-center justify-between gap-2 rounded-lg px-4 py-2 text-white shadow-lg ${index % 2 === 0 ? 'mr-8 ml-auto' : 'mr-auto ml-8'}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50, y: 30 }}
                  animate={{ opacity: task.opacity || 1, x: 0, y: 0 }}
                  exit={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                  transition={{
                    type: 'spring',
                    stiffness: 100,
                    damping: 15,
                    delay: 0.3 + index * 0.15,
                  }}
                >
                  <p className="text-sm font-medium">{task.title}</p>
                  <motion.div
                    className={`h-[6px] w-[30px] rounded-full ${index < 2 ? 'bg-accent/25' : 'bg-accent/10'}`}
                    initial={{ width: 0 }}
                    animate={{ width: index < 2 ? 40 : 20 }}
                    transition={{ delay: 0.9 + index * 0.2, duration: 0.7 }}
                  />
                </motion.div>
              ))}
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

// Feature Animation Factory
export const FeatureAnimation: React.FC<{
  config: AnimationConfig
  isVisible?: boolean
}> = ({ config, isVisible = false }) => {
  const [isHovered, setIsHovered] = useState(false)
  const { type, data, customComponent } = config

  // Determine which animations state to use - either viewport visibility or hover state
  const showAnimation = isVisible || isHovered

  return (
    <div
      className="h-full w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {type === 'chat' && (
        <AnimatedChat
          messages={data as ChatMessage[]}
          isVisible={showAnimation}
        />
      )}
      {type === 'chart' && (
        <AnimatedChart
          data={data as ChartDataPoint[]}
          isVisible={showAnimation}
        />
      )}
      {type === 'tasks' && (
        <AnimatedTasks tasks={data as TaskItem[]} isVisible={showAnimation} />
      )}
      {type === 'code-quality' && (
        <CodeQualityMetrics
          metrics={data as CodeMetric[]}
          isVisible={showAnimation}
        />
      )}
      {type === 'feedback' && (
        <FeedbackList
          feedback={data as FeedbackItem[]}
          isVisible={showAnimation}
        />
      )}
      {type === 'custom' && customComponent}
    </div>
  )
}

// Code Quality Metrics Component
export const CodeQualityMetrics: React.FC<{
  metrics: CodeMetric[]
  isVisible: boolean
}> = ({ metrics, isVisible }) => {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="w-full max-w-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="mb-4 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <h4 className="text-muted-foreground text-sm font-medium">
                Code Quality Dashboard
              </h4>
            </motion.div>

            <div className="grid gap-4">
              {metrics.map((metric, index) => (
                <motion.div
                  key={metric.id}
                  className="bg-card relative overflow-hidden rounded-lg border p-4 shadow-sm"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{
                    delay: 0.3 + index * 0.1,
                    duration: 0.5,
                    type: 'spring',
                    stiffness: 100,
                    damping: 15,
                  }}
                >
                  <div className="mb-2 flex items-center justify-between">
                    <h3 className="text-sm font-medium">{metric.name}</h3>
                    <span className="text-sm font-semibold">
                      {metric.value}%
                    </span>
                  </div>

                  <div className="bg-muted/30 h-2 w-full rounded-full">
                    <motion.div
                      className={`h-full rounded-full bg-gradient-to-r ${metric.color}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${metric.value}%` }}
                      transition={{
                        delay: 0.6 + index * 0.15,
                        duration: 0.8,
                        ease: 'easeOut',
                      }}
                    />
                  </div>

                  <motion.div
                    className="text-muted-foreground mt-1 text-right text-xs"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9 + index * 0.1, duration: 0.3 }}
                  >
                    Target: {metric.target}%
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// Feedback List Component
export const FeedbackList: React.FC<{
  feedback: FeedbackItem[]
  isVisible: boolean
}> = ({ feedback, isVisible }) => {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="w-full max-w-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="mb-4 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <h4 className="text-muted-foreground text-sm font-medium">
                Latest Feedback
              </h4>
            </motion.div>

            <div className="flex flex-col gap-3">
              {feedback.map((item, index) => (
                <motion.div
                  key={item.id}
                  className={`relative overflow-hidden rounded-lg border p-3 shadow-sm ${
                    item.positive ? 'bg-card' : 'bg-muted/10'
                  }`}
                  initial={{ opacity: 0, y: 20, x: index % 2 === 0 ? -10 : 10 }}
                  animate={{ opacity: 1, y: 0, x: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{
                    delay: 0.3 + index * 0.15,
                    duration: 0.5,
                    type: 'spring',
                    stiffness: 100,
                    damping: 15,
                  }}
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0">
                      <img
                        src={item.avatar}
                        alt={`${item.author}'s avatar`}
                        className="border-border size-8 rounded-full border"
                      />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-sm font-medium">{item.author}</h3>
                        <span className="text-muted-foreground text-xs">
                          {item.timestamp}
                        </span>
                      </div>

                      <motion.p
                        className="mt-1 text-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                      >
                        {item.text}
                      </motion.p>

                      <motion.div
                        className={`mt-2 flex items-center ${
                          item.positive ? 'text-emerald-500' : 'text-amber-500'
                        }`}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          delay: 0.7 + index * 0.15,
                          duration: 0.3,
                        }}
                      >
                        {item.positive ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="mr-1 size-4"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                              clipRule="evenodd"
                            />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="mr-1 size-4"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z"
                              clipRule="evenodd"
                            />
                          </svg>
                        )}
                        <span className="text-xs font-medium">
                          {item.positive ? 'Implemented' : 'Feedback'}
                        </span>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default FeatureAnimation
