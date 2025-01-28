import { courses } from '../../../../../config'
import Image from 'next/image'

const ChapterList = () => {
  return (
    <div className="bg-base-100 rounded-box shadow-md">
      <div className="p-4 pb-2 text-xs font-semibold tracking-wide opacity-60">
        Course Chapters
      </div>

      <div className="divide-base-200 divide-y">
        {[1, 2, 3].map((chapter) => (
          <div
            key={chapter}
            className="hover:bg-base-200 flex cursor-pointer items-center gap-4 p-4"
          >
            <div className="flex-shrink-0">
              <div className="bg-primary/10 text-primary flex size-8 items-center justify-center rounded-lg font-semibold">
                {chapter}
              </div>
            </div>
            <div className="flex-grow">
              <div className="font-medium">Chapter {chapter}: Introduction</div>
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
          </div>
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

export default async function CoursePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const course = Object.values(courses).find((course) => course.slug === slug)

  if (!course) {
    return <div>Course not found</div>
  }

  return (
    <div className=" min-h-screen p-4 lg:p-8">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        {/* Sidebar */}
        <div className="lg:col-span-3">
          <ChapterList />
        </div>

        {/* Main Content */}
        <div className="space-y-8 lg:col-span-9">
          {/* Course Header */}
          <div className="bg-base-100 rounded-box p-6 shadow-md">
            <h1 className="mb-2 text-2xl font-bold">{course.title}</h1>
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
                Chapter 1: Introduction
              </h2>
              <p className="text-base-content/70">
                In this chapter, we'll cover the fundamentals and set up our
                development environment. You'll learn the basic concepts and get
                ready for the more advanced topics ahead.
              </p>
            </div>
          </div>

          {/* Resources */}
          <Resources />
        </div>
      </div>
    </div>
  )
}
