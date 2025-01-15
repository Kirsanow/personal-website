import { LinkedInIcon } from '@/components/SocialIcons'
import { Container } from '@/components/Container'
import { GitHubIcon } from '@/components/SocialIcons'
import { YoutubeIcon } from '@/components/SocialIcons'
import { XIcon } from '@/components/SocialIcons'
import Image from 'next/image'
import portraitImage from '@/images/portrait.jpg'
import Link from 'next/link'

function SocialLink({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <Link className="group" {...props}>
      <Icon className="h-5 w-5 fill-gray-700 transition group-hover:fill-gray-900" />
    </Link>
  )
}

export default function Hero() {
  return (
    <Container className="mt-24 sm:mt-32">
      <div className="max-w-7xl">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-12 xl:gap-x-20">
          <div>
            <div className="relative z-10">
              <div className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-sm text-indigo-600">
                Let's Build Something Amazing
              </div>

              <h1 className="font-display mt-8 text-5xl font-medium tracking-tight text-zinc-900 [text-wrap:balance] sm:text-7xl">
                I help founders build{' '}
                <span className="bg-gradient-to-r from-indigo-600 to-indigo-600 bg-clip-text text-transparent">
                  SaaS products
                </span>{' '}
                using AI-powered development
              </h1>

              <p className="mt-6 text-lg text-gray-600">
                Whether you need hands-on MVP development services or want to
                learn and build alongside a community of founders, I'm here to
                help you succeed.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  target="_blank"
                  href="https://cal.com/kirsanov/30min"
                  className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-5 py-3 text-base font-medium text-white transition hover:bg-indigo-700"
                >
                  Book a Call
                </Link>
                <Link
                  target="_blank"
                  href="https://www.skool.com/metamakers-3765/about"
                  className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-5 py-3 text-base font-medium text-gray-900 transition hover:bg-gray-50"
                >
                  Join Community
                </Link>
              </div>

              <div className="mt-10 flex flex-col gap-8">
                <div className="flex gap-6">
                  <div className="flex items-center gap-2">
                    <svg
                      className="h-5 w-5 text-green-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-600">
                      AI-powered development
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      className="h-5 w-5 text-green-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-600">
                      Private Skool community
                    </span>
                  </div>
                </div>

                <div className="flex gap-6">
                  <SocialLink
                    href="https://x.com/kirsnvartem"
                    aria-label="Follow on X"
                    icon={XIcon}
                  />
                  <SocialLink
                    href="https://www.youtube.com/@kirsnv?sub_confirmation=1"
                    aria-label="Follow on Youtube"
                    icon={YoutubeIcon}
                  />
                  <SocialLink
                    href="https://github.com/Kirsanow"
                    aria-label="Follow on GitHub"
                    icon={GitHubIcon}
                  />
                  {/* <SocialLink
                    href="https://www.linkedin.com/in/kirsnv/"
                    aria-label="Follow on LinkedIn"
                    icon={LinkedInIcon}
                  /> */}
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-square overflow-hidden rounded-3xl bg-white">
              <Image
                src={portraitImage}
                alt="Artem Kirsanov"
                className="h-full w-full object-cover grayscale"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
