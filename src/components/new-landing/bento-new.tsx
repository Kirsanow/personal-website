'use client'

import React, { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import FeatureAnimation from '../animations/AnimatedFeatures'
import { getAnimationConfig } from '../animations/featureAnimationsConfig'

const BentoFeatures: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.25,
  })

  const [visibleFeatures, setVisibleFeatures] = useState({
    feature1: false,
    feature2: false,
    feature3: false,
    feature4: false,
  })

  useEffect(() => {
    if (inView) {
      // Stagger the animations with delays
      const showFeature1 = setTimeout(() => {
        setVisibleFeatures((prev) => ({ ...prev, feature1: true }))
      }, 0)

      const showFeature2 = setTimeout(() => {
        setVisibleFeatures((prev) => ({ ...prev, feature2: true }))
      }, 300)

      const showFeature3 = setTimeout(() => {
        setVisibleFeatures((prev) => ({ ...prev, feature3: true }))
      }, 600)

      const showFeature4 = setTimeout(() => {
        setVisibleFeatures((prev) => ({ ...prev, feature4: true }))
      }, 900)

      return () => {
        clearTimeout(showFeature1)
        clearTimeout(showFeature2)
        clearTimeout(showFeature3)
        clearTimeout(showFeature4)
      }
    } else {
      setVisibleFeatures({
        feature1: false,
        feature2: false,
        feature3: false,
        feature4: false,
      })
    }
  }, [inView])

  return (
    <section
      id="approach"
      className="relative flex w-full flex-col items-center justify-center px-5 md:px-10"
      ref={ref}
    >
      <div className="relative mx-5 border-x md:mx-10">
        <div className="text-primary/5 absolute top-0 -left-4 h-full w-4 [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)] bg-[size:10px_10px] md:-left-14 md:w-14" />
        <div className="text-primary/5 absolute top-0 -right-4 h-full w-4 [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)] bg-[size:10px_10px] md:-right-14 md:w-14" />
        <div className="h-full w-full border-b p-10 md:p-14">
          <div className="mx-auto flex max-w-xl flex-col items-center justify-center gap-2">
            <h2 className="pb-1 text-center text-3xl font-medium tracking-tighter text-balance md:text-4xl">
              How We Build Great Things, Together
            </h2>
            <p className="text-muted-foreground text-center font-medium text-balance">
              Building exceptional software requires more than just code – it
              demands clear communication, a meticulous process, and a focus on
              your goals. Here's how I partner with clients like you.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 overflow-hidden md:grid-cols-2">
          {/* Feature 1: Deep Discovery & Planning */}
          <div className="before:bg-border after:bg-border group group relative flex max-h-[400px] min-h-[600px] cursor-pointer flex-col items-start justify-end p-0.5 before:absolute before:top-0 before:-left-0.5 before:z-10 before:h-screen before:w-px before:content-[''] after:absolute after:-top-0.5 after:left-0 after:z-10 after:h-px after:w-screen after:content-[''] md:min-h-[500px]">
            <div className="relative flex size-full h-full items-center justify-center overflow-hidden">
              <div className="flex h-full w-full flex-col items-center justify-center gap-5 p-4">
                <div className="from-background pointer-events-none absolute bottom-0 left-0 z-20 h-20 w-full bg-gradient-to-t to-transparent" />
                <FeatureAnimation
                  config={getAnimationConfig('discovery')}
                  isVisible={visibleFeatures.feature1}
                />
              </div>
            </div>
            <div className="flex-1 flex-col gap-2 p-6">
              <h3 className="text-lg font-semibold tracking-tighter">
                Deep Discovery & Planning
              </h3>
              <p className="text-muted-foreground">
                We start by truly understanding your vision and defining a clear
                roadmap to ensure we're building the right thing.
              </p>
            </div>
          </div>

          {/* Feature 2: Transparent Development Sprints */}
          <div className="before:bg-border after:bg-border group group relative flex max-h-[400px] min-h-[600px] cursor-pointer flex-col items-start justify-end p-0.5 before:absolute before:top-0 before:-left-0.5 before:z-10 before:h-screen before:w-px before:content-[''] after:absolute after:-top-0.5 after:left-0 after:z-10 after:h-px after:w-screen after:content-[''] md:min-h-[500px]">
            <div className="relative flex size-full h-full items-center justify-center overflow-hidden">
              <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
                <div className="from-background pointer-events-none absolute bottom-0 left-0 z-20 h-20 w-full bg-gradient-to-t to-transparent" />
                <div className="from-background pointer-events-none absolute top-0 left-0 z-20 h-20 w-full bg-gradient-to-b to-transparent" />
                <FeatureAnimation
                  config={getAnimationConfig('development')}
                  isVisible={visibleFeatures.feature2}
                />
              </div>
            </div>
            <div className="flex-1 flex-col gap-2 p-6">
              <h3 className="text-lg font-semibold tracking-tighter">
                Transparent Development Sprints
              </h3>
              <p className="text-muted-foreground">
                You'll get regular updates, access to work-in-progress, and
                clear communication throughout the build process. No black
                boxes.
              </p>
            </div>
          </div>

          {/* Feature 3: Meticulous Code Craftsmanship */}
          <div className="before:bg-border after:bg-border group group relative flex max-h-[400px] min-h-[600px] cursor-pointer flex-col items-start justify-end p-0.5 before:absolute before:top-0 before:-left-0.5 before:z-10 before:h-screen before:w-px before:content-[''] after:absolute after:-top-0.5 after:left-0 after:z-10 after:h-px after:w-screen after:content-[''] md:min-h-[500px]">
            <div className="relative flex size-full h-full items-center justify-center overflow-hidden">
              <div className="flex h-full w-full flex-col items-center justify-center gap-5 p-4">
                <div className="from-background pointer-events-none absolute bottom-0 left-0 z-20 h-20 w-full bg-gradient-to-t to-transparent" />
                <div className="from-background pointer-events-none absolute top-0 left-0 z-20 h-20 w-full bg-gradient-to-b to-transparent" />
                <FeatureAnimation
                  config={getAnimationConfig('craftsmanship')}
                  isVisible={visibleFeatures.feature3}
                />
              </div>
            </div>
            <div className="flex-1 flex-col gap-2 p-6">
              <h3 className="text-lg font-semibold tracking-tighter">
                Meticulous Code Craftsmanship
              </h3>
              <p className="text-muted-foreground">
                I write clean, well-documented, and tested code built for
                performance, scalability, and future maintainability.
              </p>
            </div>
          </div>

          {/* Feature 4: Proactive Collaboration & Feedback */}
          <div className="before:bg-border after:bg-border group group relative flex max-h-[400px] min-h-[600px] cursor-pointer flex-col items-start justify-end p-0.5 before:absolute before:top-0 before:-left-0.5 before:z-10 before:h-screen before:w-px before:content-[''] after:absolute after:-top-0.5 after:left-0 after:z-10 after:h-px after:w-screen after:content-[''] md:min-h-[500px]">
            <div className="relative flex size-full h-full items-center justify-center overflow-hidden">
              <div className="flex h-full w-full flex-col items-center justify-center gap-5 p-4">
                <div className="from-background pointer-events-none absolute bottom-0 left-0 z-20 h-20 w-full bg-gradient-to-t to-transparent" />
                <div className="from-background pointer-events-none absolute top-0 left-0 z-20 h-20 w-full bg-gradient-to-b to-transparent" />
                <FeatureAnimation
                  config={getAnimationConfig('collaboration')}
                  isVisible={visibleFeatures.feature4}
                />
              </div>
            </div>
            <div className="flex-1 flex-col gap-2 p-6">
              <h3 className="text-lg font-semibold tracking-tighter">
                Proactive Collaboration & Feedback
              </h3>
              <p className="text-muted-foreground">
                I believe in active partnership. I'll proactively share
                insights, ask questions, and integrate your feedback
                effectively.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BentoFeatures
