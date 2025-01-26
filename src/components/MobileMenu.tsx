'use client'

import Image from 'next/image'
import Link from 'next/link'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <div
      className={`fixed inset-0 z-[100] transform transition-opacity duration-300 ${
        isOpen ? 'pointer-events-auto' : 'pointer-events-none'
      }`}
    >
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/20 backdrop-blur-sm transition-opacity ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
      />

      {/* Menu panel */}
      <div
        className={`fixed inset-y-0 right-0 z-[100] w-full max-w-sm bg-white px-6 py-6 shadow-xl transition-transform duration-300 dark:bg-zinc-900 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col space-y-4">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Image
                src="/images/avatar.png"
                alt="Artem Kirsanov"
                className="h-10 w-10 rounded-full"
                width={40}
                height={40}
              />
              <div className="flex flex-col">
                <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                  Artem Kirsanov
                </span>
                <span className="text-sm text-zinc-600 dark:text-zinc-400">
                  AI Expert & Software Developer
                </span>
              </div>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center justify-center rounded-full bg-white/80 p-2 text-zinc-900 shadow-sm ring-1 ring-zinc-900/5 transition-all hover:bg-zinc-50 dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20"
            >
              <span className="sr-only">Close menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-col space-y-4">
            <Link
              href="#services"
              onClick={onClose}
              className="text-base font-medium text-zinc-900 transition hover:text-indigo-600 dark:text-zinc-100 dark:hover:text-indigo-400"
            >
              Services
            </Link>
            <Link
              href="https://www.youtube.com/@kirsnv?sub_confirmation=1"
              onClick={onClose}
              target="_blank"
              className="text-base font-medium text-zinc-900 transition hover:text-indigo-600 dark:text-zinc-100 dark:hover:text-indigo-400"
            >
              YouTube
            </Link>
            <Link
              href="https://www.skool.com/metamakers-3765/about"
              onClick={onClose}
              target="_blank"
              className="text-base font-medium text-zinc-900 transition hover:text-indigo-600 dark:text-zinc-100 dark:hover:text-indigo-400"
            >
              Community
            </Link>
            <Link
              href="/courses"
              onClick={onClose}
              className="text-base font-medium text-zinc-900 transition hover:text-indigo-600 dark:text-zinc-100 dark:hover:text-indigo-400"
            >
              Courses
            </Link>
            <div className="pt-4">
              <Link
                href="https://cal.com/kirsanov/30min"
                onClick={onClose}
                target="_blank"
                className="inline-flex w-full items-center justify-center rounded-full bg-indigo-600 px-4 py-2.5 text-base font-medium text-white transition hover:bg-indigo-500"
              >
                Book a Call
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
