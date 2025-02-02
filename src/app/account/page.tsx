import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { courses } from '../../config'
import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import LogoutButton from './_components/logout-button'
import { getUserData } from './_queries'
import { purchaseCourse } from '@/actions/stripe'

export const metadata: Metadata = {
  title: 'Account | Your Learning Dashboard',
  description: 'Manage your account and access your purchased courses',
}

// Mock data - replace with actual data fetching
const mockUserData = {
  name: 'John Doe',
  email: 'john@example.com',
  avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John',
  memberSince: 'January 2024',
}

export default async function AccountPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()
  const userData = await getUserData()
  const checkout = (await searchParams).checkout
  if (
    checkout &&
    !userData?.courses_access.find(
      (course: string) => course === 'javascript-for-bubble-developers',
    )
  ) {
    const formData = new FormData()
    formData.set('slug', courses['javascript-for-bubble-developers'].slug)
    formData.set(
      'priceId',
      process.env.NODE_ENV === 'production'
        ? courses['javascript-for-bubble-developers'].priceId
        : courses['javascript-for-bubble-developers'].priceId_test,
    )
    await purchaseCourse(formData)
  }
  return (
    <div className="min-h-screen p-4 md:p-8">
      {/* Hero section with user info */}
      <div className="card border-base-300 mb-8 border bg-white shadow-xs">
        <div className="card-body">
          <div className="flex items-center justify-between">
            <div className="flex flex-col items-center gap-6 md:flex-row">
              <div className="avatar">
                <div className="ring-neutral/20 ring-offset-base-100 w-18 rounded-full ring ring-offset-2">
                  <img
                    src={mockUserData.avatar}
                    alt="User avatar"
                    width={96}
                    height={96}
                  />
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold">{user?.email}</h1>
                {/* <div className="badge badge-neutral mt-2">
                  Member since {mockUserData.memberSince}
                </div> */}
              </div>
            </div>
            <LogoutButton />
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      {/* <div className="stats mb-8 grid grid-cols-1 gap-4 shadow md:grid-cols-3">
        <div className="stat ">
          <div className="stat-title">Courses Enrolled</div>
          <div className="stat-value">{Object.keys(courses).length}</div>
        </div>
        <div className="stat">
          <div className="stat-title">Average Progress</div>
          <div className="stat-value">48%</div>
        </div>
        <div className="stat ">
          <div className="stat-title">Hours Learned</div>
          <div className="stat-value">24</div>
        </div>
      </div> */}

      {/* Courses Section */}
      <div>
        <div>
          <h2 className="card-title mb-6 text-2xl">Your Courses</h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {await Promise.all(
              Object.values(courses).map(async (course) => {
                const hasAccess =
                  userData?.courses_access?.includes(course.slug) || false

                // Get chapter progress for this course
                const { data: chapterProgress } = await supabase
                  .from('chapter_progress')
                  .select('chapter_number, completed')
                  .eq('user_id', user?.id)
                  .eq('course_slug', course.slug)

                // Count only completed chapters
                const completedCount = (chapterProgress || []).filter(
                  (chapter) => chapter.completed,
                ).length

                const totalChapters = course.chapters.length
                const progressPercentage = Math.round(
                  (completedCount / totalChapters) * 100,
                )

                return (
                  <div
                    key={course.slug}
                    className="card bg-base-100 border-base-300 border shadow-sm transition-shadow hover:shadow-md"
                  >
                    <figure className="border-base-300 border-b px-4 pt-4">
                      <div className="relative h-48 w-full overflow-hidden rounded-xl">
                        <Image
                          src={course.thumbnail}
                          alt={course.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </figure>
                    <div className="card-body">
                      <h3 className="card-title">{course.title}</h3>
                      <p>{course.description}</p>
                      {hasAccess && (
                        <div className="flex flex-col gap-2">
                          <progress
                            className="progress progress-primary w-full"
                            value={progressPercentage}
                            max="100"
                          ></progress>
                          <div className="text-base-content/70 flex justify-between text-sm">
                            <span>{progressPercentage}% Complete</span>
                            <span>
                              {completedCount} of {totalChapters} chapters
                            </span>
                          </div>
                        </div>
                      )}
                      <div className="card-actions mt-4 justify-end">
                        {hasAccess ? (
                          <Link href={`/account/courses/${course.slug}`}>
                            <button className="btn btn-primary">
                              {progressPercentage === 100
                                ? 'Review Course'
                                : 'Continue Learning'}
                            </button>
                          </Link>
                        ) : (
                          <div className="flex gap-2">
                            <Link href={`/courses`}>
                              <button className="btn btn-ghost">
                                Learn More
                              </button>
                            </Link>
                            <form
                              action={async (formData: FormData) => {
                                'use server'
                                await purchaseCourse(formData)
                              }}
                            >
                              <input
                                type="hidden"
                                name="slug"
                                value={course.slug}
                              />
                              <input
                                type="hidden"
                                name="priceId"
                                value={
                                  process.env.NODE_ENV === 'production'
                                    ? course.priceId
                                    : course.priceId_test
                                }
                              />
                              <button className="btn btn-primary">
                                Purchase Course
                              </button>
                            </form>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )
              }),
            )}
          </div>

          {Object.keys(courses).length === 0 && (
            <div className="py-12 text-center">
              <h3 className="mb-2 text-xl font-semibold">No courses yet</h3>
              <p className="text-base-content/70 mb-4">
                You haven't purchased any courses yet.
              </p>
              <button className="btn btn-primary">Browse Courses</button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
