import { getSEOTags } from '@/lib/seo'

export const metadata = getSEOTags({
  title: 'JavaScript Blueprint for Bubble Developers | Artem Kirsanov',
  description:
    'Master JavaScript and TypeScript to supercharge your Bubble apps. From custom workflows to plugin development, and beyond to full-stack applications. Join 1,000+ Bubble developers.',
  keywords: [
    'JavaScript course',
    'Bubble.io',
    'plugin development',
    'full-stack development',
    'Next.js',
    'React',
    'TypeScript',
    'nocode to code',
  ],
  openGraph: {
    title: 'JavaScript Blueprint for Bubble Developers',
    description:
      'Transform your Bubble development skills with JavaScript. Learn to build custom plugins, enhance workflows, and create full-stack applications.',
    images: [
      {
        url: '/images/js-course-preview.png',
        width: 1200,
        height: 630,
        alt: 'JavaScript Blueprint for Bubble Developers Course Preview',
      },
    ],
  },
  canonicalUrlRelative: '/courses',
})

export default function CoursesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
