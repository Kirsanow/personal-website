'use client'

import React, { useState } from 'react'
import Image from 'next/image'

interface FeatureItem {
  title: string
  description: string
  isOpen?: boolean
}

interface FeaturesNewProps {
  // You can add props here if needed
}

const FeaturesNew: React.FC<FeaturesNewProps> = () => {
  const [activeFeature, setActiveFeature] = useState<number>(0)

  const features: FeatureItem[] = [
    {
      title: 'Ask Your AI Agent Directly',
      description:
        'Speak or type your command—let SkyAgent capture your intent. Your request instantly sets the process in motion.',
    },
    {
      title: 'Let SkyAgent Process It',
      description:
        'We prioritize the needs and preferences of our users in our design process.',
    },
    {
      title: 'Receive Instant, Actionable Results',
      description:
        'Our features seamlessly integrate with your existing systems for a smooth experience.',
    },
    {
      title: 'Continuous Improvement',
      description:
        'We are constantly updating and improving our features to provide the best experience.',
    },
  ]

  const handleFeatureClick = (index: number) => {
    setActiveFeature(index)
  }

  return (
    <section
      id="features"
      className="relative flex w-full flex-col items-center justify-center gap-5"
    >
      <div className="h-full w-full border-b p-10 md:p-14">
        <div className="mx-auto flex max-w-xl flex-col items-center justify-center gap-2">
          <h2 className="text-center text-3xl font-medium tracking-tighter text-balance md:text-4xl">
            Simple. Seamless. Smart.
          </h2>
          <p className="text-muted-foreground text-center font-medium text-balance">
            Discover how SkyAgent transforms your commands into action in four
            easy steps
          </p>
        </div>
      </div>
      <div className="flex h-full w-full items-center justify-center lg:h-[450px]">
        <div className="w-full">
          <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center">
            <div className="grid h-full w-full grid-cols-5 items-center gap-x-10 px-10 md:px-20">
              {/* Desktop Accordion */}
              <div className="col-span-2 hidden h-full w-full justify-start md:items-center lg:flex">
                <div
                  className="flex h-full w-full flex-col gap-8"
                  data-orientation="vertical"
                >
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      data-state={activeFeature === index ? 'open' : 'closed'}
                      data-orientation="vertical"
                      className="relative mt-px overflow-hidden rounded-lg focus-within:relative focus-within:z-10 data-[state=closed]:rounded-none data-[state=closed]:border-0 data-[state=open]:bg-white data-[state=open]:shadow-[0px_0px_1px_0px_rgba(0,0,0,0.16),0px_1px_2px_-0.5px_rgba(0,0,0,0.16)] dark:data-[state=open]:bg-[#27272A] dark:data-[state=open]:shadow-[0px_0px_0px_1px_rgba(249,250,251,0.06),0px_0px_0px_1px_var(--color-zinc-800,#27272A),0px_1px_2px_-0.5px_rgba(0,0,0,0.24),0px_2px_4px_-1px_rgba(0,0,0,0.24)]"
                    >
                      <div
                        className="absolute right-0 bottom-0 left-0 h-0.5 w-full overflow-hidden rounded-lg bg-neutral-300/50 transition-opacity data-[state=closed]:opacity-0 data-[state=open]:opacity-100 dark:bg-neutral-300/30"
                        data-state={activeFeature === index ? 'open' : 'closed'}
                      >
                        <div
                          className="bg-secondary absolute top-0 left-0 h-full w-full transition-all ease-linear"
                          style={{
                            transitionDuration:
                              activeFeature === index ? '5000ms' : '0s',
                            width: activeFeature === index ? '100%' : '0',
                          }}
                        ></div>
                      </div>
                      <h3
                        data-orientation="vertical"
                        data-state={activeFeature === index ? 'open' : 'closed'}
                        className="flex"
                      >
                        <button
                          type="button"
                          aria-expanded={activeFeature === index}
                          data-state={
                            activeFeature === index ? 'open' : 'closed'
                          }
                          data-orientation="vertical"
                          className="group flex h-[45px] flex-1 cursor-pointer items-center justify-between p-3 text-left text-lg font-semibold tracking-tight outline-none"
                          onClick={() => handleFeatureClick(index)}
                          aria-disabled={activeFeature === index}
                        >
                          {feature.title}
                        </button>
                      </h3>
                      <div
                        data-state={activeFeature === index ? 'open' : 'closed'}
                        role="region"
                        data-orientation="vertical"
                        className="data-[state=closed]:animate-slide-up data-[state=open]:animate-slide-down overflow-hidden text-sm font-medium"
                        style={
                          {
                            '--radix-accordion-content-height':
                              'var(--radix-collapsible-content-height)',
                            '--radix-accordion-content-width':
                              'var(--radix-collapsible-content-width)',
                            '--radix-collapsible-content-height': '64px',
                            '--radix-collapsible-content-width':
                              '423.20001220703125px',
                          } as React.CSSProperties
                        }
                        hidden={activeFeature !== index}
                      >
                        <div className="p-3">{feature.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Feature Image */}
              <div className="false col-span-5 h-[350px] min-h-[200px] w-auto lg:col-span-3">
                <div className="relative h-full w-full overflow-hidden">
                  <div className="absolute inset-0 rounded-xl border border-neutral-300/50 bg-gray-200 opacity-0 transition-all duration-150"></div>
                  <img
                    alt={features[activeFeature].title}
                    className="blur-0 aspect-auto h-full w-full rounded-xl border border-neutral-300/50 object-cover p-1 opacity-100 transition-all duration-300"
                    loading="eager"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{ opacity: 1, filter: 'blur(0px)' }}
                    src="https://images.unsplash.com/photo-1720371300677-ba4838fa0678?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  />
                </div>
              </div>

              {/* Mobile Cards */}
              <ul
                className="col-span-5 flex snap-x snap-mandatory flex-nowrap overflow-x-auto [-ms-overflow-style:none] [-webkit-mask-image:linear-gradient(90deg,transparent,black_10%,white_90%,transparent)] [mask-image:linear-gradient(90deg,transparent,black_10%,white_90%,transparent)] [scrollbar-width:none] lg:hidden [&::-webkit-scrollbar]:hidden"
                style={{ padding: '50px calc(50%)' }}
              >
                {features.map((feature, index) => (
                  <a
                    key={index}
                    className="card bg-background relative grid h-full max-w-64 shrink-0 items-start justify-center border-t border-b border-l p-3 first:rounded-tl-xl last:rounded-tr-xl last:border-r"
                    style={{ scrollSnapAlign: 'center' }}
                  >
                    <div
                      className="absolute right-0 bottom-0 left-0 h-0.5 w-full overflow-hidden rounded-lg bg-neutral-300/50 transition-opacity data-[state=closed]:opacity-0 data-[state=open]:opacity-100 dark:bg-neutral-300/30"
                      data-state={activeFeature === index ? 'open' : 'closed'}
                    >
                      <div
                        className="bg-secondary absolute top-0 left-0 h-full transition-all ease-linear"
                        style={{
                          transitionDuration:
                            activeFeature === index ? '5000ms' : '0s',
                          width: activeFeature === index ? '100%' : '0',
                        }}
                      ></div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <h2 className="text-lg font-bold">{feature.title}</h2>
                      <p className="mx-0 max-w-sm text-sm leading-relaxed font-medium text-balance">
                        {feature.description}
                      </p>
                    </div>
                  </a>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesNew
