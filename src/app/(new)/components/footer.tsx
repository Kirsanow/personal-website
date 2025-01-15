import { Container } from '@/components/Container'
import Link from 'next/link'

function FooterLink({
  href,
  children,
  target,
}: {
  href: string
  children: React.ReactNode
  target?: string
}) {
  return (
    <Link
      href={href}
      target={target}
      className="text-sm text-zinc-600 transition hover:text-indigo-600"
    >
      {children}
    </Link>
  )
}

function CTASection() {
  return (
    <div className="relative overflow-hidden border-t border-zinc-100 bg-white">
      <Container className="relative">
        <div className="relative mx-auto max-w-2xl py-24 sm:py-32 lg:max-w-4xl lg:px-12">
          {/* Decorative elements */}
          <div className="absolute left-1/2 top-0 -z-10 h-[800px] w-[800px] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]">
            <div className="absolute inset-0 h-full w-full bg-gradient-to-tr from-indigo-500/20 via-indigo-300/10 to-zinc-100/20 opacity-20" />
          </div>

          <div className="flex flex-col items-center text-center">
            <h2 className="font-display text-4xl font-medium tracking-tight text-zinc-900 sm:text-5xl">
              Ready to Build Your SaaS?
            </h2>
            <p className="mt-6 max-w-xl text-lg text-zinc-600">
              Join our community of founders or get hands-on help building your
              product. Choose the path that works best for you.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                target="_blank"
                href="https://cal.com/kirsanov/30min"
                className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-8 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-indigo-700"
              >
                Book Development Call
              </Link>
              <Link
                target="_blank"
                href="https://www.skool.com/metamakers-3765/about"
                className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-medium text-indigo-600 shadow-sm ring-1 ring-inset ring-indigo-200 transition hover:bg-zinc-50 hover:ring-indigo-300"
              >
                Join Community
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default function Footer() {
  return (
    <footer>
      <CTASection />

      <div className="border-t border-zinc-100 py-10 sm:py-16">
        <Container>
          <div className="flex flex-col items-center gap-8">
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4">
              <FooterLink
                target="_blank"
                href="https://www.skool.com/metamakers-3765/about"
              >
                Community
              </FooterLink>
              <FooterLink href="#services">Services</FooterLink>
              <FooterLink target="_blank" href="https://cal.com/kirsanov/30min">
                Contact
              </FooterLink>
            </div>

            <div className="flex items-center gap-4">
              <Link
                target="_blank"
                href="https://x.com/kirsnvartem"
                className="text-zinc-400 transition hover:text-zinc-600"
              >
                <span className="sr-only">Twitter</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </Link>
              <Link
                target="_blank"
                href="https://github.com/Kirsanow"
                className="text-zinc-400 transition hover:text-zinc-600"
              >
                <span className="sr-only">GitHub</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>

            <p className="text-sm text-zinc-500">
              &copy; {new Date().getFullYear()} Kirsanov.co. All rights
              reserved.
            </p>
          </div>
        </Container>
      </div>
    </footer>
  )
}
