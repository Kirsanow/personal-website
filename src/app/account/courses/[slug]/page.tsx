import { courses } from '@/config'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { notFound, redirect } from 'next/navigation'
import VideoPlayer from '../_components/video-player'
import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'
import CompletionButton from '../_components/completion-button'
import SettingsModal from '../../_components/settings-modal'
import {
  ArrowTopRightOnSquareIcon,
  QuestionMarkCircleIcon,
} from '@heroicons/react/24/outline'
import { hasCourseAccess } from '@/actions/user'
import { checkUserData } from '@/app/login/_actions'
import FeedbackSupport from '@/components/FeedbackSupport'
const Header = ({
  course,
  currentChapter,
  progress,
  userData,
}: {
  course: any
  currentChapter: any
  progress: number
  userData: any
}) => {
  return (
    <div className="border-base-300 bg-base-100/80 sticky top-0 z-50 border-b backdrop-blur-xl">
      <div className="flex h-16 items-center justify-between px-4 lg:px-8">
        <div className="flex items-center gap-4">
          <Link href="/account" className="btn btn-outline btn-primary btn-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-5"
              viewBox="0 0 24 24"
            >
              <g
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              >
                <path d="m12 19-7-7 7-7M5 12h14" />
              </g>
            </svg>
            Back to Dashboard
          </Link>
          <div className="hidden items-center gap-2 lg:flex">
            <div className="bg-base-content/10 h-4 w-[1px]"></div>
            <div className="badge badge-neutral badge-soft">
              Chapter {currentChapter?.number} of {course.chapters.length}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-4 lg:flex">
            <div className="flex items-center gap-2">
              <div
                className="radial-progress text-primary"
                style={{ '--value': progress, '--size': '2rem' } as any}
              >
                <span className="text-xs">{progress}%</span>
              </div>
              <span className="text-base-content/70 text-sm">
                Course Progress
              </span>
            </div>
            <div className="bg-base-content/10 h-4 w-[1px]"></div>
          </div>

          <SettingsModal userData={userData} />

          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="avatar btn btn-ghost btn-circle"
            >
              <div className="ring-base-300 ring-offset-base-100 w-8 rounded-full ring ring-offset-2">
                <img
                  src={userData?.avatar_url || ''}
                  alt="User avatar"
                  width={32}
                  height={32}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content menu-sm rounded-box bg-base-200 z-50 w-52 p-2 shadow-lg"
            >
              <li className="menu-title text-base-content/60 text-xs font-medium">
                Account
              </li>
              <li>
                <Link href="/account/courses">Dashboard</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

const ChapterList = ({
  chapters,
  chapterNumber,
  slug,
  progress,
}: {
  chapters: {
    title: string
    description: string
    video: string
    number: number
    minutes: number
  }[]
  chapterNumber: number
  slug: string
  progress: { [key: number]: boolean }
}) => {
  return (
    <div className="bg-base-100 rounded-box border-base-300 flex h-full max-h-[80vh] flex-col border shadow-xs">
      <div className="flex-shrink-0 p-4 pb-2 text-xs font-semibold tracking-wide opacity-60">
        Course Chapters
      </div>

      <div className="divide-base-200 flex-grow divide-y overflow-y-auto">
        {chapters.map((chapter) => (
          <Link
            key={chapter.number}
            href={`/account/courses/${slug}?chapter=${chapter.number}`}
            className={cn(
              'hover:bg-base-200 flex cursor-pointer items-center gap-4 p-4',
              chapterNumber === chapter.number && 'bg-base-200',
            )}
          >
            <div className="flex-shrink-0">
              <div
                className={cn(
                  'flex size-8 items-center justify-center rounded-lg font-semibold',
                  progress[chapter.number]
                    ? 'bg-success/10 text-success'
                    : 'bg-primary/10 text-primary',
                )}
              >
                {progress[chapter.number] ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M20 6L9 17l-5-5"
                    />
                  </svg>
                ) : (
                  chapter.number
                )}
              </div>
            </div>
            <div className="flex-grow">
              <div className="font-medium">
                Chapter {chapter.number}: {chapter.title}
              </div>
              <div className="text-base-content/60 flex items-center gap-2 text-xs">
                <span>{chapter.minutes} min</span>
                <span className="bg-base-content/20 size-1 rounded-full"></span>
                <span
                  className={
                    progress[chapter.number]
                      ? 'text-success'
                      : 'text-base-content/60'
                  }
                >
                  {progress[chapter.number] ? 'Completed' : 'Not completed'}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

const Resources = ({
  resources,
}: {
  resources: { title: string; url: string }[]
}) => {
  return (
    <div className="bg-base-100 rounded-box p-6 shadow-md">
      <h3 className="mb-4 text-lg font-semibold">Resources</h3>
      <div className="space-y-3">
        {resources.length > 0 ? (
          resources.map((resource) => (
            <div
              key={resource.title}
              className="bg-base-200 flex items-center justify-between rounded-lg p-3"
            >
              <div className="flex items-center gap-3">
                <svg
                  className="text-primary size-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
                    <polyline points="13 2 13 9 20 9"></polyline>
                  </g>
                </svg>
                <span>{resource.title}</span>
              </div>
              <Link
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm flex items-center gap-2"
              >
                <ArrowTopRightOnSquareIcon className="size-4" />
                Open
              </Link>
            </div>
          ))
        ) : (
          <div className="text-base-content/60">
            No resources in this chapter
          </div>
        )}
      </div>
    </div>
  )
}

const ComingSoonAlert = () => {
  return (
    <div className="alert bg-warning/10 text-warning-content mb-4 shadow-sm">
      <div className="flex items-center gap-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-6 flex-shrink-0"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 9v4m0 4h.01M12 2a10 10 0 1 0 0 20a10 10 0 0 0 0-20Z"
          />
        </svg>
        <div className="flex items-center gap-2">
          <span className="font-semibold">Course in Progress</span>
          <div className="dropdown dropdown-hover">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-circle btn-ghost btn-xs text-warning-content/70"
            >
              <QuestionMarkCircleIcon className="size-4" />
            </div>
            <div
              tabIndex={0}
              className="dropdown-content card card-compact bg-base-200 text-base-content z-[1] w-64 p-2 shadow"
            >
              <div className="card-body">
                <p className="text-sm">
                  This course is actively being developed. New chapters and
                  content will be added regularly. Stay tuned for updates!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>

export default async function CoursePage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>
  searchParams: SearchParams
}) {
  const { slug } = await params
  const { chapter } = await searchParams

  if (!chapter) {
    redirect(`/account/courses/${slug}?chapter=1`)
  }

  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  const userData = await checkUserData()

  const hasAccess = await hasCourseAccess(user.id, slug)

  if (!hasAccess) {
    redirect('/account')
  }

  // Get chapter completion data
  const { data: chapterProgress } = await supabase
    .from('chapter_progress')
    .select('chapter_number, completed')
    .eq('user_id', user.id)
    .eq('course_slug', slug)

  // Create a map of chapter numbers to completion status
  const progress = (chapterProgress || []).reduce(
    (acc, curr) => {
      if (curr.completed) {
        acc[curr.chapter_number] = true
      }
      return acc
    },
    {} as { [key: number]: boolean },
  )
  const course = Object.values(courses).find((course) => course.slug === slug)

  // Calculate overall progress
  const completedCount = Object.values(progress).filter(Boolean).length
  const totalChapters = course?.chapters.length || 0
  const progressPercentage = Math.round((completedCount / totalChapters) * 100)

  const currentChapter = course?.chapters.find(
    (c) => c.number === Number(chapter),
  )

  if (!course) {
    return notFound()
  }

  return (
    <>
      <Header
        course={course}
        currentChapter={currentChapter}
        progress={progressPercentage}
        userData={userData}
      />
      <FeedbackSupport />
      <div className="bg-base-200 min-h-screen p-4 lg:p-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Sidebar */}
          <div className="lg:col-span-3">
            <ComingSoonAlert />
            <ChapterList
              chapters={course.chapters}
              chapterNumber={Number(chapter)}
              slug={slug}
              progress={progress}
            />
          </div>

          {/* Main Content */}
          <div className="space-y-8 lg:col-span-9">
            {/* Course Header */}
            <div className="bg-base-100 rounded-box border-base-300 border p-6 shadow-xs">
              <div className="flex items-center justify-between">
                <h1 className="mb-2 text-2xl font-bold">
                  {currentChapter?.title}
                </h1>
                <CompletionButton
                  courseSlug={slug}
                  chapterNumber={Number(chapter)}
                  initialCompleted={progress[Number(chapter)] || false}
                />
              </div>
              <div className="text-base-content/70 flex items-center gap-4 text-sm">
                <span className="flex items-center gap-1">
                  <svg
                    className="size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <g
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth="2"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path d="M12 20V10"></path>
                      <path d="M18 20V4"></path>
                      <path d="M6 20v-4"></path>
                    </g>
                  </svg>
                  Beginner
                </span>
                <span className="flex items-center gap-1">
                  <svg
                    className="size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <g
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth="2"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                    </g>
                  </svg>
                  {progressPercentage}% Complete
                </span>
              </div>
            </div>

            {/* Video Player */}
            <div className="rounded-box bg-base-100 p-6 shadow-md">
              <VideoPlayer videoId={currentChapter?.video || ''} />
              <div className="mt-4">
                <h2 className="mb-2 text-xl font-semibold">
                  {currentChapter?.title}
                </h2>
                <p className="text-base-content/70">
                  {currentChapter?.description}
                </p>
              </div>
            </div>

            {/* Resources */}
            <Resources resources={currentChapter?.resources || []} />
          </div>
        </div>
      </div>
    </>
  )
}
