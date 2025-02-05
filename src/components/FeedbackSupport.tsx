'use client'
import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from 'next-themes'
import { getUser, saveFeedback } from '@/actions/user'
import { User } from '@supabase/supabase-js'

const FeedbackSupport: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [feedback, setFeedback] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    async function fetchUser() {
      const user = await getUser()
      setUser(user)
    }
    fetchUser()
  }, [])

  const toggleModal = () => {
    setIsOpen(!isOpen)
    // reset form on close
    if (isOpen) {
      setFeedback('')
      setName('')
      setEmail('')
      setSubmitted(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    const formData = new FormData(e.target as HTMLFormElement)
    const feedback = formData.get('feedback') as string

    try {
      // Replace this with actual API call if needed
      await saveFeedback(feedback, user?.id || '', user?.email || '')
      setSubmitted(true)
    } catch (err) {
      console.error('Failed to submit feedback', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      {/* Fixed button to open feedback modal */}
      <motion.button
        onClick={toggleModal}
        className="btn btn-primary fixed bottom-4 left-4 z-50 gap-2 border-none text-sm sm:text-base"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 sm:h-5 sm:w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-4l-4 4z"
          />
        </svg>
        <span className="hidden sm:inline">Support & Feedback</span>
        <span className="sm:hidden">Support</span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-0">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black"
              onClick={toggleModal}
            />
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative z-10 w-full max-w-[24rem] rounded-2xl bg-white p-4 shadow-xl sm:p-6 dark:bg-zinc-800"
            >
              <h2 className="mb-4 text-lg font-bold text-zinc-800 sm:text-xl dark:text-zinc-200">
                Support & Feedback
              </h2>
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center"
                >
                  <div className="flex flex-col items-center gap-4">
                    <div>
                      <svg
                        className="h-12 w-12 sm:h-16 sm:w-16"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <p className="text-sm text-zinc-600 sm:text-base dark:text-zinc-300">
                      Thank you for your feedback! If needed, I will get back to
                      you as soon as possible.
                    </p>
                    <button
                      onClick={toggleModal}
                      className="btn btn-sm btn-ghost"
                    >
                      Close
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text text-sm text-zinc-700 sm:text-base dark:text-zinc-300">
                        Share feedback or ask questions
                      </span>
                    </label>
                    <textarea
                      value={feedback}
                      name="feedback"
                      onChange={(e) => setFeedback(e.target.value)}
                      className="textarea textarea-bordered h-24 w-full bg-white text-sm sm:text-base dark:bg-zinc-700"
                      required
                    ></textarea>
                  </div>
                  <div className="mt-6 flex justify-end gap-2">
                    <button
                      type="button"
                      onClick={toggleModal}
                      className="btn btn-ghost btn-sm text-sm"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="btn btn-sm btn-primary border-none text-sm"
                      disabled={loading}
                    >
                      {loading ? (
                        <>
                          <span className="loading loading-spinner loading-sm"></span>
                          Sending...
                        </>
                      ) : (
                        'Send Feedback'
                      )}
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}

export default FeedbackSupport
