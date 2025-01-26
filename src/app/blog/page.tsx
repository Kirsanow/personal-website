'use client'

import { Container } from '@/components/Container'
import Link from 'next/link'
import Image from 'next/image'
import { Header } from '../(new)/page'
import { useState } from 'react'
import { MobileMenu } from '@/components/MobileMenu'

interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  readingTime: string
  category: string
  image: string
}

// This would eventually come from your CMS or data source
const blogPosts: BlogPost[] = [
  {
    slug: 'top-subreddits-for-startup-growth',
    title: 'Top Subreddits for Promoting Your Startup in 2025',
    description:
      'A curated list of the most effective subreddits to share your startup and get valuable feedback, users, and insights from the Reddit community.',
    date: 'January 26, 2025',
    readingTime: '3 min read',
    category: 'Growth',
    image: '/images/blog/reddit-marketing.png',
  },
]

function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-zinc-50 transition-all duration-300 hover:bg-white hover:shadow-xl dark:bg-zinc-800/50 dark:hover:bg-zinc-700/50"
    >
      <div className="relative h-48 overflow-hidden sm:h-52">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/5 dark:from-indigo-400/10 dark:to-purple-400/5" />
        <Image
          src={post.image}
          alt={post.title}
          width={800}
          height={400}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-4">
          <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-sm font-medium text-indigo-600 dark:text-indigo-400">
            {post.category}
          </span>
          <span className="text-sm text-zinc-600 dark:text-zinc-400">
            {post.readingTime}
          </span>
        </div>

        <h2 className="mt-4 text-xl font-semibold text-zinc-900 dark:text-zinc-100">
          {post.title}
        </h2>

        <p className="mt-2 flex-1 text-sm text-zinc-600 dark:text-zinc-400">
          {post.description}
        </p>

        <div className="mt-6 flex items-center justify-between">
          <span className="text-sm text-zinc-600 dark:text-zinc-400">
            {post.date}
          </span>
          <span className="text-sm font-medium text-indigo-600 transition-colors group-hover:text-indigo-500 dark:text-indigo-400 dark:group-hover:text-indigo-300">
            Read more →
          </span>
        </div>
      </div>
    </Link>
  )
}

export default function BlogPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <>
      <Header onMobileMenuOpen={() => setIsMobileMenuOpen(true)} />
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
      <div className="py-24 sm:py-32">
        <Container>
          <div className="mx-auto max-w-7xl">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-6xl dark:text-zinc-100">
                Blog
              </h1>
              <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
                Thoughts on development, design, and building in public.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2">
              {blogPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}
