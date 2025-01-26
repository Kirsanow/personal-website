import { getSEOTags } from '@/lib/seo'

export const metadata = getSEOTags({
  title: 'Blog | Artem Kirsanov',
  description:
    'Thoughts on development, design, and building in public. Learn about web development, no-code tools, and building successful SaaS products.',
  keywords: [
    'web development',
    'Next.js',
    'React',
    'TypeScript',
    'no-code',
    'Bubble.io',
    'SaaS',
    'entrepreneurship',
  ],
  openGraph: {
    title: 'Blog | Artem Kirsanov',
    description:
      'Thoughts on development, design, and building in public. Learn about web development, no-code tools, and building successful SaaS products.',
    images: [
      {
        url: '/images/blog-preview.png',
        width: 1200,
        height: 630,
        alt: 'Artem Kirsanov Blog',
      },
    ],
  },
  canonicalUrlRelative: '/blog',
})

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
