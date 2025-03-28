import React from 'react'

const BentoFeatures: React.FC = () => {
  return (
    <section
      id="bento"
      className="relative flex w-full flex-col items-center justify-center px-5 md:px-10"
    >
      <div className="relative mx-5 border-x md:mx-10">
        <div className="text-primary/5 absolute top-0 -left-4 h-full w-4 [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)] bg-[size:10px_10px] md:-left-14 md:w-14" />
        <div className="text-primary/5 absolute top-0 -right-4 h-full w-4 [background-image:repeating-linear-gradient(315deg,currentColor_0_1px,#0000_0_50%)] bg-[size:10px_10px] md:-right-14 md:w-14" />
        <div className="h-full w-full border-b p-10 md:p-14">
          <div className="mx-auto flex max-w-xl flex-col items-center justify-center gap-2">
            <h2 className="pb-1 text-center text-3xl font-medium tracking-tighter text-balance md:text-4xl">
              Empower Your Workflow with AI
            </h2>
            <p className="text-muted-foreground text-center font-medium text-balance">
              Ask your AI Agent for real-time collaboration, seamless
              integrations, and actionable insights to streamline your
              operations.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 overflow-hidden md:grid-cols-2">
          {/* Feature 1: Real-time AI Collaboration */}
          <div className="before:bg-border after:bg-border group group relative flex max-h-[400px] min-h-[600px] cursor-pointer flex-col items-start justify-end p-0.5 before:absolute before:top-0 before:-left-0.5 before:z-10 before:h-screen before:w-px before:content-[''] after:absolute after:-top-0.5 after:left-0 after:z-10 after:h-px after:w-screen after:content-[''] md:min-h-[500px]">
            <div className="relative flex size-full h-full items-center justify-center overflow-hidden">
              <div className="flex h-full w-full flex-col items-center justify-center gap-5 p-4">
                <div className="from-background pointer-events-none absolute bottom-0 left-0 z-20 h-20 w-full bg-gradient-to-t to-transparent" />
                <div
                  className="mx-auto flex w-full max-w-md flex-col gap-2"
                  style={{ transform: 'none' }}
                >
                  <div className="flex items-end justify-end gap-3">
                    <div
                      className="bg-secondary ml-auto max-w-[280px] rounded-2xl p-4 text-white shadow-[0_0_10px_rgba(0,0,0,0.05)]"
                      style={{ opacity: 1, transform: 'none' }}
                    >
                      <p className="text-sm">
                        Hey, I need help scheduling a team meeting that works
                        well for everyone. Any suggestions for finding an
                        optimal time slot?
                      </p>
                    </div>
                    <div className="bg-background border-border flex w-fit flex-shrink-0 items-center rounded-full border">
                      <img
                        src="https://randomuser.me/api/portraits/women/79.jpg"
                        alt="User Avatar"
                        className="size-8 flex-shrink-0 rounded-full"
                      />
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="bg-background border-border flex size-10 flex-shrink-0 items-center justify-center rounded-full border shadow-[0_0_10px_rgba(0,0,0,0.05)]">
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
                    </div>
                    <div className="relative">
                      <div
                        className="bg-background border-border absolute top-0 left-0 rounded-2xl border p-4"
                        style={{ opacity: 1, transform: 'none' }}
                      >
                        <div className="flex gap-1">
                          <div
                            className="bg-primary/50 h-2 w-2 rounded-full"
                            style={{ transform: 'translateY(-4.69569px)' }}
                          />
                          <div
                            className="bg-primary/50 h-2 w-2 rounded-full"
                            style={{ transform: 'translateY(-0.257424px)' }}
                          />
                          <div
                            className="bg-primary/50 h-2 w-2 rounded-full"
                            style={{ transform: 'translateY(-2.55676px)' }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 flex-col gap-2 p-6">
              <h3 className="text-lg font-semibold tracking-tighter">
                Real-time AI Collaboration
              </h3>
              <p className="text-muted-foreground">
                Experience real-time assistance. Ask your AI Agent to coordinate
                tasks, answer questions, and maintain team alignment.
              </p>
            </div>
          </div>

          {/* Feature 2: Seamless Integrations */}
          <div className="before:bg-border after:bg-border group group relative flex max-h-[400px] min-h-[600px] cursor-pointer flex-col items-start justify-end p-0.5 before:absolute before:top-0 before:-left-0.5 before:z-10 before:h-screen before:w-px before:content-[''] after:absolute after:-top-0.5 after:left-0 after:z-10 after:h-px after:w-screen after:content-[''] md:min-h-[500px]">
            <div className="relative flex size-full h-full items-center justify-center overflow-hidden">
              <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
                <div className="from-background pointer-events-none absolute bottom-0 left-0 z-20 h-20 w-full bg-gradient-to-t to-transparent" />
                <div className="from-background pointer-events-none absolute top-0 left-0 z-20 h-20 w-full bg-gradient-to-b to-transparent" />
                <div className="bg-secondary absolute top-1/2 left-1/2 z-30 flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center gap-2 rounded-full p-2 md:top-auto md:bottom-0">
                  <svg
                    width="42"
                    height="24"
                    viewBox="0 0 42 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-10 fill-white"
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
                </div>
                <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
                  <div className="relative flex h-full w-full translate-y-0 items-center justify-center md:translate-y-32">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 flex-col gap-2 p-6">
              <h3 className="text-lg font-semibold tracking-tighter">
                Seamless Integrations
              </h3>
              <p className="text-muted-foreground">
                Unite your favorite tools for effortless connectivity. Boost
                productivity through interconnected workflows.
              </p>
            </div>
          </div>

          {/* Feature 3: Instant Insight Reporting */}
          <div className="before:bg-border after:bg-border group group relative flex max-h-[400px] min-h-[600px] cursor-pointer flex-col items-start justify-end p-0.5 before:absolute before:top-0 before:-left-0.5 before:z-10 before:h-screen before:w-px before:content-[''] after:absolute after:-top-0.5 after:left-0 after:z-10 after:h-px after:w-screen after:content-[''] md:min-h-[500px]">
            <div className="relative flex size-full h-full items-center justify-center overflow-hidden">
              <div
                className="relative flex size-full h-[300px] items-center justify-center overflow-hidden pt-10"
                style={
                  { '--color': 'rgba(21 93 252 / 1)' } as React.CSSProperties
                }
              >
                <div
                  className="absolute top-[60%] left-1/2 h-32 w-[2px] -translate-x-1/2 bg-gradient-to-b from-[var(--color)] to-[var(--color-transparent)]"
                  style={{ opacity: 0 }}
                />
                <div className="absolute top-32 left-[42%] flex h-8 -translate-x-1/2 items-center justify-center rounded-full border border-white/[0.07] bg-[#1A1B25] px-4 py-1 font-mono text-sm text-white opacity-0 shadow-[0px_1.1px_0px_0px_rgba(255,255,255,0.20)_inset,0px_4.4px_6.6px_0px_rgba(255,255,255,0.01)_inset,0px_2.2px_6.6px_0px_rgba(18,43,105,0.04),0px_1.1px_2.2px_0px_rgba(18,43,105,0.08),0px_0px_0px_1.1px_rgba(18,43,105,0.08)] transition-opacity duration-300 ease-in-out">
                  <div className="font-mono">NumberFlowReact</div>
                </div>
                <svg
                  width="600"
                  height="200"
                  viewBox="0 0 600 200"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient
                      id="lineGradient"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop
                        offset="0%"
                        stopColor="rgba(21 93 252 / 0.30196078431372547)"
                      />
                      <stop offset="100%" stopColor="rgba(21 93 252 / 0)" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 0 157.33333333333331 C 20,153.06666666666666 60,138.13333333333333 100,136 C 120,138.13333333333333 160,153.0666666666667 200,146.66666666666669 C 220,138.13333333333335 260,110.4 300,104 C 320,106.13333333333333 360,118.93333333333332 400,114.66666666666666 C 420,108.26666666666667 460,97.60000000000001 500,82.66666666666667 L 600 40 L 600,200 L 0,200 Z"
                    fill="url(#lineGradient)"
                    opacity="0"
                    style={{
                      transform: 'scale(0.95)',
                      transformOrigin: '300px 120px 0px',
                    }}
                  />
                  <path
                    d="M 0 157.33333333333331 C 20,153.06666666666666 60,138.13333333333333 100,136 C 120,138.13333333333333 160,153.0666666666667 200,146.66666666666669 C 220,138.13333333333335 260,110.4 300,104 C 320,106.13333333333333 360,118.93333333333332 400,114.66666666666666 C 420,108.26666666666667 460,97.60000000000001 500,82.66666666666667 L 600 40"
                    stroke="rgba(21 93 252 / 1)"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    pathLength="1"
                    strokeDashoffset="0px"
                    strokeDasharray="0px 1px"
                  />
                  <circle
                    cx="300"
                    cy="104"
                    r="4"
                    fill="rgba(21 93 252 / 1)"
                    opacity="0"
                    style={{
                      transform: 'scale(0)',
                      transformOrigin: '300px 104px 0px',
                    }}
                  />
                </svg>
              </div>
            </div>
            <div className="flex-1 flex-col gap-2 p-6">
              <h3 className="text-lg font-semibold tracking-tighter">
                Instant Insight Reporting
              </h3>
              <p className="text-muted-foreground">
                Transform raw data into clear insights in seconds. Empower
                smarter decisions with real-time, always-learning intelligence.
              </p>
            </div>
          </div>

          {/* Feature 4: Smart Automation */}
          <div className="before:bg-border after:bg-border group group relative flex max-h-[400px] min-h-[600px] cursor-pointer flex-col items-start justify-end p-0.5 before:absolute before:top-0 before:-left-0.5 before:z-10 before:h-screen before:w-px before:content-[''] after:absolute after:-top-0.5 after:left-0 after:z-10 after:h-px after:w-screen after:content-[''] md:min-h-[500px]">
            <div className="relative flex size-full h-full items-center justify-center overflow-hidden">
              <div className="relative flex h-full w-full flex-col">
                <div className="absolute inset-0 -z-10 flex [mask:linear-gradient(180deg,transparent,black_40%,black_40%,transparent)]">
                  <div className="flex h-full w-1/2 items-start justify-between">
                    <div className="bg-primary h-5 w-px first:bg-transparent" />
                    <div className="bg-primary h-5 w-px first:bg-transparent" />
                    <div className="bg-primary h-5 w-px first:bg-transparent" />
                    <div className="bg-primary h-5 w-px first:bg-transparent" />
                    <div className="bg-primary h-5 w-px first:bg-transparent" />
                  </div>
                  <div className="border-border/70 flex h-full w-1/2 items-start justify-between border-x border-dashed">
                    <div className="bg-primary h-5 w-px first:bg-transparent" />
                    <div className="bg-primary h-5 w-px first:bg-transparent" />
                    <div className="bg-primary h-5 w-px first:bg-transparent" />
                    <div className="bg-primary h-5 w-px first:bg-transparent" />
                    <div className="bg-primary h-5 w-px first:bg-transparent" />
                  </div>
                  <div className="flex h-full w-1/2 items-start justify-between">
                    <div className="bg-primary h-5 w-px first:bg-transparent" />
                    <div className="bg-primary h-5 w-px first:bg-transparent" />
                    <div className="bg-primary h-5 w-px first:bg-transparent" />
                    <div className="bg-primary h-5 w-px first:bg-transparent" />
                    <div className="bg-primary h-5 w-px first:bg-transparent" />
                  </div>
                  <div className="border-border/70 flex h-full w-1/2 items-start justify-between border-x border-dashed">
                    <div className="bg-primary h-5 w-px first:bg-transparent" />
                    <div className="bg-primary h-5 w-px first:bg-transparent" />
                    <div className="bg-primary h-5 w-px first:bg-transparent" />
                    <div className="bg-primary h-5 w-px first:bg-transparent" />
                    <div className="bg-primary h-5 w-px first:bg-transparent" />
                  </div>
                  <div className="flex h-full w-1/2 items-start justify-between">
                    <div className="bg-primary h-5 w-px first:bg-transparent" />
                    <div className="bg-primary h-5 w-px first:bg-transparent" />
                    <div className="bg-primary h-5 w-px first:bg-transparent" />
                    <div className="bg-primary h-5 w-px first:bg-transparent" />
                    <div className="bg-primary h-5 w-px first:bg-transparent" />
                  </div>
                  <div className="border-border/70 flex h-full w-1/2 items-start justify-between border-x border-dashed">
                    <div className="bg-primary h-5 w-px first:bg-transparent" />
                    <div className="bg-primary h-5 w-px first:bg-transparent" />
                    <div className="bg-primary h-5 w-px first:bg-transparent" />
                    <div className="bg-primary h-5 w-px first:bg-transparent" />
                    <div className="bg-primary h-5 w-px first:bg-transparent" />
                  </div>
                  <div className="flex h-full w-1/2 items-start justify-between">
                    <div className="bg-primary h-5 w-px first:bg-transparent" />
                    <div className="bg-primary h-5 w-px first:bg-transparent" />
                    <div className="bg-primary h-5 w-px first:bg-transparent" />
                    <div className="bg-primary h-5 w-px first:bg-transparent" />
                    <div className="bg-primary h-5 w-px first:bg-transparent" />
                  </div>
                  <div className="border-border/70 flex h-full w-1/2 items-start justify-between border-x border-dashed">
                    <div className="bg-primary h-5 w-px first:bg-transparent" />
                    <div className="bg-primary h-5 w-px first:bg-transparent" />
                    <div className="bg-primary h-5 w-px first:bg-transparent" />
                    <div className="bg-primary h-5 w-px first:bg-transparent" />
                    <div className="bg-primary h-5 w-px first:bg-transparent" />
                  </div>
                </div>
                <div className="absolute top-4 right-0 left-0 mx-auto flex max-w-md justify-between px-8 text-sm text-gray-500">
                  <span>Tue</span>
                  <span>Wed</span>
                  <span>Thu</span>
                  <span>Fri</span>
                  <span>Sat</span>
                </div>
                <div
                  className="dark:from-accent absolute top-10 z-10 h-[calc(100%-80px)] w-[2px] bg-gradient-to-b from-black to-transparent"
                  style={{
                    opacity: 1,
                    transform: 'translateX(277px) translateX(-50%)',
                  }}
                />
                <div
                  className="dark:bg-accent absolute top-14 z-20 flex h-6 items-center justify-center rounded-md bg-black p-2 text-xs shadow-[0px_2.2px_6.6px_0px_rgba(18,43,105,0.04),0px_1.1px_2.2px_0px_rgba(18,43,105,0.08),0px_0px_0px_1.1px_rgba(18,43,105,0.08),0px_1.1px_0px_0px_rgba(255,255,255,0.20)_inset,0px_4.4px_6.6px_0px_rgba(255,255,255,0.01)_inset]"
                  style={{
                    opacity: 1,
                    transform: 'translateX(277px) translateX(-50%)',
                  }}
                >
                  <span className="text-white">12:00 AM</span>
                </div>
                <div className="absolute top-1/2 left-1/2 grid w-full -translate-x-1/3 -translate-y-1/2 gap-10">
                  <div
                    className="bg-secondary flex h-8 w-[250px] items-center justify-center gap-2 rounded-lg p-2 text-white shadow-[0px_9px_5px_0px_#00000005,0px_4px_4px_0px_#00000009,0px_1px_2px_0px_#00000010]"
                    style={{ opacity: 0, transform: 'translateX(-50px)' }}
                  >
                    <p className="text-sm font-medium">Bento grid</p>
                  </div>
                  <div
                    className="bg-secondary/40 flex h-8 w-[250px] items-center justify-center gap-2 rounded-lg p-2 text-white shadow-[0px_9px_5px_0px_#00000005,0px_4px_4px_0px_#00000009,0px_1px_2px_0px_#00000010]"
                    style={{ opacity: 0, transform: 'translateX(554px)' }}
                  >
                    <p className="text-sm font-medium">Landing Page</p>
                  </div>
                  <div
                    className="bg-secondary/20 border-secondary text-secondary flex h-8 w-[250px] items-center justify-center gap-2 rounded-lg border border-dashed p-2 shadow-[0px_9px_5px_0px_#00000005,0px_4px_4px_0px_#00000009,0px_1px_2px_0px_#00000010]"
                    style={{ opacity: 0, transform: 'translateX(-50px)' }}
                  >
                    <p className="text-sm font-medium">Add Task</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 flex-col gap-2 p-6">
              <h3 className="text-lg font-semibold tracking-tighter">
                Smart Automation
              </h3>
              <p className="text-muted-foreground">
                Set it, forget it. Your AI Agent tackles repetitive tasks so you
                can focus on strategy, innovation, and growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BentoFeatures
