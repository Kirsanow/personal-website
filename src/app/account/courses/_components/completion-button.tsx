'use client'

import { createClient } from '@/lib/supabase/client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function CompletionButton({
  courseSlug,
  chapterNumber,
  initialCompleted,
}: {
  courseSlug: string
  chapterNumber: number
  initialCompleted: boolean
}) {
  const [isCompleted, setIsCompleted] = useState(initialCompleted)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const supabase = createClient()

  const toggleCompletion = async () => {
    try {
      setIsLoading(true)
      const {
        data: { user },
      } = await supabase.auth.getUser()

      if (!user) {
        throw new Error('Not authenticated')
      }

      const { error } = await supabase.from('chapter_progress').upsert(
        {
          user_id: user.id,
          course_slug: courseSlug,
          chapter_number: chapterNumber,
          completed: !isCompleted,
          completed_at: !isCompleted ? new Date().toISOString() : null,
        },
        {
          onConflict: 'user_id,course_slug,chapter_number',
        },
      )

      if (error) throw error

      setIsCompleted(!isCompleted)
      router.refresh() // Refresh the page to update progress
    } catch (error) {
      console.error('Error toggling completion:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <button
      onClick={toggleCompletion}
      disabled={isLoading}
      className={`btn ${
        isCompleted ? 'btn-success' : 'btn-primary'
      } btn-sm gap-2 ${isLoading ? 'loading' : ''}`}
    >
      {!isLoading && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-4"
          viewBox="0 0 24 24"
        >
          {isCompleted ? (
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M20 6L9 17l-5-5"
            />
          ) : (
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M20 6L9 17l-5-5"
            />
          )}
        </svg>
      )}
      {isCompleted ? 'Completed' : 'Mark as Complete'}
    </button>
  )
}
