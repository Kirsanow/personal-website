'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'

interface HeaderProps {
  // You can add props here if needed
}

const Header: React.FC<HeaderProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const { setTheme, theme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    const sections = ['hero', 'approach', 'examples']

    const observerOptions = {
      root: null,
      rootMargin: '-100px 0px -300px 0px', // Adjust rootMargin to trigger earlier and end later
      threshold: 0.2, // Lower threshold for easier detection
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId)
      if (element) {
        observer.observe(element)
      }
    })

    return () => {
      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId)
        if (element) {
          observer.unobserve(element)
        }
      })
    }
  }, [])

  // Function to handle click on navigation links
  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header
      className={`sticky top-6 z-50 mx-4 flex justify-center transition-all duration-300 md:mx-0 ${isScrolled ? 'scale-90' : ''}`}
    >
      <div
        style={{ width: isScrolled ? '700px' : '800px' }}
        className="transition-all duration-300"
      >
        <div
          className={`border-border bg-background/75 mx-auto max-w-7xl rounded-2xl border px-2 backdrop-blur-lg transition-all duration-300 xl:px-0 ${isScrolled ? 'py-1' : ''}`}
        >
          <div
            className={`flex items-center justify-between p-4 transition-all ${isScrolled ? 'h-[48px]' : 'h-[56px]'}`}
          >
            <Link className="flex items-center gap-3" href="/">
              <svg
                width={isScrolled ? '36' : '42'}
                height={isScrolled ? '20' : '24'}
                viewBox="0 0 42 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`fill-[var(--primary)] transition-all duration-300 ${isScrolled ? 'size-6' : 'size-7'} md:${isScrolled ? 'size-8' : 'size-10'}`}
              >
                <g clipPath="url(#clip0_322_9172)">
                  <path
                    d="M22.3546 0.96832C22.9097 0.390834 23.6636 0.0664062 24.4487 0.0664062C27.9806 0.0664062 31.3091 0.066408 34.587 0.0664146C41.1797 0.0664284 44.481 8.35854 39.8193 13.2082L29.6649 23.7718C29.1987 24.2568 28.4016 23.9133 28.4016 23.2274V13.9234L29.5751 12.7025C30.5075 11.7326 29.8472 10.0742 28.5286 10.0742H13.6016L22.3546 0.96832Z"
                    fill="current"
                  ></path>
                  <path
                    d="M19.6469 23.0305C19.0919 23.608 18.338 23.9324 17.5529 23.9324C14.021 23.9324 10.6925 23.9324 7.41462 23.9324C0.821896 23.9324 -2.47942 15.6403 2.18232 10.7906L12.3367 0.227022C12.8029 -0.257945 13.6 0.0855283 13.6 0.771372L13.6 10.0754L12.4265 11.2963C11.4941 12.2662 12.1544 13.9246 13.473 13.9246L28.4001 13.9246L19.6469 23.0305Z"
                    fill="current"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_322_9172">
                    <rect width="42" height="24" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
              <p
                className={`text-foreground font-semibold tracking-tight transition-all duration-300 ${isScrolled ? 'text-base' : 'text-lg'}`}
              >
                Kirsanov
              </p>
            </Link>
            <div className="hidden w-full md:block">
              <ul className="relative mx-auto flex h-11 w-fit items-center justify-center rounded-full px-2">
                <li
                  className={`${activeSection === 'hero' ? 'text-foreground' : 'text-foreground/60 hover:text-foreground'} z-10 flex h-full cursor-pointer items-center justify-center px-4 py-2 text-sm font-medium tracking-tight transition-colors duration-200`}
                >
                  <button onClick={() => handleNavClick('hero')}>Home</button>
                </li>

                <li
                  className={`${activeSection === 'approach' ? 'text-foreground' : 'text-foreground/60 hover:text-foreground'} z-10 flex h-full cursor-pointer items-center justify-center px-4 py-2 text-sm font-medium tracking-tight transition-colors duration-200`}
                >
                  <button onClick={() => handleNavClick('approach')}>
                    Approach
                  </button>
                </li>
                <li
                  className={`${activeSection === 'examples' ? 'text-foreground' : 'text-foreground/60 hover:text-foreground'} z-10 flex h-full cursor-pointer items-center justify-center px-4 py-2 text-sm font-medium tracking-tight transition-colors duration-200`}
                >
                  <button onClick={() => handleNavClick('examples')}>
                    Examples
                  </button>
                </li>
                <li className="text-foreground/60 hover:text-foreground z-10 flex h-full cursor-pointer items-center justify-center px-4 py-2 text-sm font-medium tracking-tight transition-colors duration-200">
                  <a
                    target="_blank"
                    href="https://youtube.com/@kirsnv?si=wyySko1V4-VyKks6"
                  >
                    YouTube
                  </a>
                </li>
                <li
                  className="bg-background border-border absolute inset-0 my-1.5 rounded-full border transition-all duration-200"
                  style={{
                    left:
                      activeSection === 'hero'
                        ? '7px'
                        : activeSection === 'approach'
                          ? '78px'
                          : activeSection === 'examples'
                            ? '160px'
                            : '8px',
                    width:
                      activeSection === 'hero'
                        ? '68.8667px'
                        : activeSection === 'approach'
                          ? '85px'
                          : activeSection === 'examples'
                            ? '100px'
                            : '68.8667px',
                  }}
                ></li>
              </ul>
            </div>
            <div className="flex shrink-0 flex-row items-center gap-1 md:gap-3">
              <div className="flex items-center space-x-6">
                <a
                  className={`bg-primary text-primary-foreground dark:text-secondary-foreground hidden w-fit items-center justify-center rounded-full border border-white/[0.12] px-4 font-normal tracking-wide shadow-[inset_0_1px_2px_rgba(255,255,255,0.25),0_3px_3px_-1.5px_rgba(16,24,40,0.06),0_1px_1px_rgba(16,24,40,0.08)] transition-all duration-300 md:flex ${isScrolled ? 'h-7 text-xs' : 'h-8 text-sm'}`}
                  href="https://cal.com/kirsanov/30min"
                  target="_blank"
                >
                  Book a call
                </a>
              </div>
              {/* <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                data-slot="button"
                className={`focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border-input bg-background hover:bg-accent hover:text-accent-foreground inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 rounded-full border font-medium whitespace-nowrap shadow-xs transition-all duration-300 outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 ${isScrolled ? 'size-7 h-7 w-7' : 'size-9 h-8 w-8'} ${isScrolled ? 'text-xs' : 'text-sm'}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`lucide lucide-sun text-primary scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90 ${isScrolled ? 'h-[1rem] w-[1rem]' : 'h-[1.2rem] w-[1.2rem]'}`}
                >
                  <circle cx="12" cy="12" r="4"></circle>
                  <path d="M12 2v2"></path>
                  <path d="M12 20v2"></path>
                  <path d="m4.93 4.93 1.41 1.41"></path>
                  <path d="m17.66 17.66 1.41 1.41"></path>
                  <path d="M2 12h2"></path>
                  <path d="M20 12h2"></path>
                  <path d="m6.34 17.66-1.41 1.41"></path>
                  <path d="m19.07 4.93-1.41 1.41"></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`lucide lucide-moon text-primary absolute scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0 ${isScrolled ? 'h-[1rem] w-[1rem]' : 'h-[1.2rem] w-[1.2rem]'}`}
                >
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                </svg>
                <span className="sr-only">Toggle theme</span>
              </button> */}
              <button
                className={`border-border flex cursor-pointer items-center justify-center rounded-md border transition-all duration-300 md:hidden ${isScrolled ? 'size-7' : 'size-8'}`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`lucide lucide-menu transition-all duration-300 ${isScrolled ? 'size-4' : 'size-5'}`}
                >
                  <line x1="4" x2="20" y1="12" y2="12"></line>
                  <line x1="4" x2="20" y1="6" y2="6"></line>
                  <line x1="4" x2="20" y1="18" y2="18"></line>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
