'use client'

import { Container } from '@/components/Container'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { Header } from '../../(new)/page'
import { useEffect, useState } from 'react'
import { MobileMenu } from '@/components/MobileMenu'

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 text-white shadow-lg transition-all duration-300 hover:bg-indigo-500 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-indigo-500 dark:hover:bg-indigo-400 ${
        isVisible ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
      }`}
      aria-label="Scroll to top"
    >
      <svg
        className="h-6 w-6"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
      </svg>
    </button>
  )
}

// This would eventually come from your CMS or data source
const blogPost = {
  title: 'Top Subreddits for Promoting Your Startup in 2025',
  description:
    'A curated list of the most effective subreddits to share your startup and get valuable feedback, users, and insights from the Reddit community.',
  date: 'January 26, 2025',
  readingTime: '3 min read',
  category: 'Growth',
  image: '/images/blog/reddit-marketing.png',
  content: `
    <p>Reddit can be a goldmine for startup founders looking to get early users and feedback. With over 52 million daily active users across diverse communities, it's a powerful platform for reaching potential users and getting genuine feedback. However, success on Reddit requires authenticity, value-first approach, and understanding of community dynamics.</p>
    
    <h2>Comprehensive List of Relevant Subreddits</h2>
    
    <h3>Startup-Focused Communities</h3>
    <ul>
      <li><strong>r/startups (1.7M+ members)</strong> - The largest startup community. Use their monthly "Share your startup" thread.</li>
      <li><strong>r/RoastMyStartup</strong> - Get brutally honest feedback about your startup</li>
      <li><strong>r/Entrepreneur (2.5M+ members)</strong> - Share your journey and insights</li>
      <li><strong>r/EntrepreneurRideAlong</strong> - Document your startup journey</li>
      <li><strong>r/GrowMyBusiness</strong> - Focused on growth strategies</li>
      <li><strong>r/SideProject</strong> - Perfect for early-stage projects</li>
      <li><strong>r/IndieBiz</strong> - Independent business community</li>
    </ul>

    <h3>Product Testing & Feedback</h3>
    <ul>
      <li><strong>r/AlphaandBetausers</strong> - Find early adopters and testers</li>
      <li><strong>r/MadeThis</strong> - Share what you've created</li>
    </ul>

    <h3>Marketing & Growth</h3>
    <ul>
      <li><strong>r/GrowthHacking</strong> - Growth strategies and tactics</li>
      <li><strong>r/Content_Marketing</strong> - Content strategy discussions</li>
      <li><strong>r/Advertising</strong> - Ad strategy and feedback</li>
      <li><strong>r/SocialMediaMarketing</strong> - Social media tactics</li>
      <li><strong>r/SEO</strong> - Search engine optimization</li>
      <li><strong>r/Analytics</strong> - Data and metrics discussions</li>
      <li><strong>r/AskMarketing</strong> - Marketing Q&A</li>
      <li><strong>r/PPC</strong> - Paid advertising strategies</li>
    </ul>

    <h3>General Business & Lifestyle</h3>
    <ul>
      <li><strong>r/SmallBusiness</strong> - Small business community</li>
      <li><strong>r/Digitalnomad</strong> - Remote work and lifestyle</li>
      <li><strong>r/LifeProTips</strong> - Share useful tips (if relevant)</li>
      <li><strong>r/todayilearned</strong> - Share interesting findings</li>
    </ul>

    <h2>Essential Tips for Reddit Success</h2>
    
    <h3>1. Build Genuine Relationships</h3>
    <p>Before promoting anything:</p>
    <ul>
      <li>Spend at least 2-3 weeks actively participating in your target subreddits</li>
      <li>Comment thoughtfully on others' posts</li>
      <li>Share valuable insights without promoting your product</li>
      <li>Build karma naturally through genuine engagement</li>
    </ul>

    <h3>2. Create Value-First Content</h3>
    <p>When sharing your startup:</p>
    <ul>
      <li>Focus on the problem you're solving, not just your solution</li>
      <li>Share real insights from your journey</li>
      <li>Include data, case studies, or interesting findings</li>
      <li>Make your post educational even for those who won't use your product</li>
    </ul>

    <h3>3. Handle Moderation Gracefully</h3>
    <p>If your post gets removed:</p>
    <ul>
      <li>Don't take it personally - moderators are protecting their communities</li>
      <li>Review the subreddit rules carefully</li>
      <li>Message moderators politely for clarification</li>
      <li>Try different subreddits or adjust your approach</li>
      <li>Remember that post removal is a normal part of Reddit marketing</li>
    </ul>

    <h3>4. Engage Authentically with Feedback</h3>
    <ul>
      <li>Respond to every comment, even negative ones</li>
      <li>Thank people for their feedback</li>
      <li>Ask follow-up questions to understand concerns</li>
      <li>Share how you're implementing feedback</li>
      <li>Be transparent about your limitations or challenges</li>
    </ul>

    <h2>Content Formats That Work</h2>
    <ul>
      <li><strong>Problem-Solution Posts</strong> - "How we solved X problem for Y users"</li>
      <li><strong>Behind-the-Scenes</strong> - "Lessons from our first 100 users"</li>
      <li><strong>Data Stories</strong> - "What we learned analyzing 1000 customer conversations"</li>
      <li><strong>Resource Lists</strong> - "Top tools we use to run our startup"</li>
      <li><strong>Failure Stories</strong> - "What went wrong and how we fixed it"</li>
    </ul>

    <h2>Common Pitfalls to Avoid</h2>
    <ul>
      <li>Using promotional or marketing language</li>
      <li>Cross-posting the same content to multiple subreddits at once</li>
      <li>Ignoring or arguing with negative feedback</li>
      <li>Only posting about your product without other contributions</li>
      <li>Using multiple accounts to promote your content</li>
      <li>Asking for upvotes or manipulating votes</li>
    </ul>

    <h2>Measuring Impact</h2>
    <p>Track these metrics for each post:</p>
    <ul>
      <li>Upvote ratio (aim for >80%)</li>
      <li>Comment quality and sentiment</li>
      <li>Traffic to your site (use unique UTM parameters)</li>
      <li>Conversion rate from Reddit visitors</li>
      <li>Community feedback themes</li>
      <li>Long-term engagement (returning users)</li>
    </ul>

    <h2>Conclusion</h2>
    <p>Success on Reddit comes from being a genuine community member first and a promoter second. Focus on building relationships, providing value, and being transparent about your intentions. Don't get discouraged by post removals or negative feedback - they're learning opportunities. Start with smaller, niche communities and gradually expand your presence as you learn what resonates with different audiences.</p>

    <p>Remember: Reddit is a marathon, not a sprint. The relationships and reputation you build will be more valuable than any single promotional post.</p>
  `,
}

export default function BlogPostPage() {
  const params = useParams()
  const slug = params.slug
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <>
      <Header onMobileMenuOpen={() => setIsMobileMenuOpen(true)} />
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
      <article className="py-24 sm:py-32">
        <Container>
          <div className="mx-auto max-w-3xl">
            <Link
              href="/blog"
              className="mb-8 inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
            >
              ← Back to blog
            </Link>

            <div className="relative mb-8 overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/5 dark:from-indigo-400/10 dark:to-purple-400/5" />
              <Image
                src={blogPost.image}
                alt={blogPost.title}
                width={1200}
                height={600}
                className="aspect-[2/1] w-full object-cover"
              />
            </div>

            <header className="mb-16 text-center">
              <div className="flex items-center justify-center gap-4">
                <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-sm font-medium text-indigo-600 dark:text-indigo-400">
                  {blogPost.category}
                </span>
                <span className="text-sm text-zinc-600 dark:text-zinc-400">
                  {blogPost.readingTime}
                </span>
              </div>

              <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-100">
                {blogPost.title}
              </h1>

              <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400">
                {blogPost.description}
              </p>

              <time className="mt-4 block text-sm text-zinc-600 dark:text-zinc-400">
                {blogPost.date}
              </time>
            </header>

            <div
              className="prose-zinc prose mx-auto dark:prose-invert"
              dangerouslySetInnerHTML={{ __html: blogPost.content }}
            />
          </div>
        </Container>
      </article>
      <ScrollToTopButton />
    </>
  )
}
