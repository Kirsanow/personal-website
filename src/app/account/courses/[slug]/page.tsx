import { courses } from '@/config'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { notFound, redirect } from 'next/navigation'

const Header = ({
  course,
  currentChapter,
}: {
  course: any
  currentChapter: any
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
                style={{ '--value': '65', '--size': '2rem' } as any}
              >
                <span className="text-xs">65%</span>
              </div>
              <span className="text-base-content/70 text-sm">
                Course Progress
              </span>
            </div>
            <div className="bg-base-content/10 h-4 w-[1px]"></div>
          </div>

          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="avatar btn btn-ghost btn-circle"
            >
              <div className="ring-base-300 ring-offset-base-100 w-8 rounded-full ring ring-offset-2">
                <img
                  src="https://api.dicebear.com/9.x/big-smile/svg"
                  alt="User avatar"
                  width={32}
                  height={32}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content menu-sm rounded-box bg-base-200 z-50  w-52 p-2 shadow-lg"
            >
              <li className="menu-title text-base-content/60 text-xs font-medium">
                Account
              </li>
              <li>
                <Link href="/account">Dashboard</Link>
              </li>
              <li>
                <Link href="/account/settings">Settings</Link>
              </li>
              <li className="menu-title text-base-content/60 text-xs font-medium">
                Course
              </li>
              <li>
                <a>Course Overview</a>
              </li>
              <li>
                <a>Resources</a>
              </li>
              <li>
                <a>Discussion</a>
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
}: {
  chapters: {
    title: string
    description: string
    video: string
    number: number
  }[]
  chapterNumber: number
  slug: string
}) => {
  return (
    <div className="bg-base-100 rounded-box shadow-xs border-base-300 border">
      <div className="p-4 pb-2 text-xs font-semibold tracking-wide opacity-60">
        Course Chapters
      </div>

      <div className="divide-base-200 divide-y">
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
              <div className="bg-primary/10 text-primary flex size-8 items-center justify-center rounded-lg font-semibold">
                {chapter.number}
              </div>
            </div>
            <div className="flex-grow">
              <div className="font-medium">
                Chapter {chapter.number}: {chapter.title}
              </div>
              <div className="text-base-content/60 flex items-center gap-2 text-xs">
                <span>20 min</span>
                <span className="bg-base-content/20 size-1 rounded-full"></span>
                <span className="text-success">Completed</span>
              </div>
            </div>
            <button className="btn btn-square btn-ghost btn-sm">
              <svg
                className="size-[1.2em]"
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
                  <path d="M6 3L20 12 6 21 6 3z"></path>
                </g>
              </svg>
            </button>
          </Link>
        ))}
      </div>
    </div>
  )
}

const VideoPlayer = () => {
  return (
    <div className="bg-base-300 rounded-box relative aspect-video w-full overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <button className="btn btn-circle btn-lg btn-primary">
          <svg
            className="size-8"
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
              <path d="M6 3L20 12 6 21 6 3z"></path>
            </g>
          </svg>
        </button>
      </div>
    </div>
  )
}

const Resources = () => {
  return (
    <div className="bg-base-100 rounded-box p-6 shadow-md">
      <h3 className="mb-4 text-lg font-semibold">Resources</h3>
      <div className="space-y-3">
        {['Course Slides', 'Exercise Files', 'Additional Reading'].map(
          (resource) => (
            <div
              key={resource}
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
                <span>{resource}</span>
              </div>
              <button className="btn btn-primary btn-sm">Download</button>
            </div>
          ),
        )}
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

  const course = Object.values(courses).find((course) => course.slug === slug)
  const currentChapter = course?.chapters.find(
    (c) => c.number === Number(chapter),
  )

  if (!course) {
    return notFound()
  }

  return (
    <>
      <Header course={course} currentChapter={currentChapter} />
      <div className="bg-base-200 min-h-screen p-4 lg:p-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Sidebar */}
          <div className="lg:col-span-3">
            <ChapterList
              chapters={course.chapters}
              chapterNumber={Number(chapter)}
              slug={slug}
            />
          </div>

          {/* Main Content */}
          <div className="space-y-8 lg:col-span-9">
            {/* Course Header */}
            <div className="bg-base-100 rounded-box shadow-xs border-base-300 border p-6">
              <h1 className="mb-2 text-2xl font-bold">
                {currentChapter?.title}
              </h1>
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
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </g>
                  </svg>
                  3 hours total
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
                      <path d="M12 20V10"></path>
                      <path d="M18 20V4"></path>
                      <path d="M6 20v-4"></path>
                    </g>
                  </svg>
                  Intermediate
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
                  {course.progress}% Complete
                </span>
              </div>
            </div>

            {/* Video Player */}
            <div className="bg-base-100 rounded-box p-6 shadow-md">
              <VideoPlayer />
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
            <Resources />
          </div>
        </div>
      </div>
    </>
  )
}
