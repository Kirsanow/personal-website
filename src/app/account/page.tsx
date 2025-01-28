import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { courses } from '../../../config'

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

export default function AccountPage() {
  return (
    <div className="min-h-screen p-4 md:p-8">
      {/* Hero section with user info */}
      <div className="card bg-base-100 mb-8 shadow-sm">
        <div className="card-body">
          <div className="flex flex-col items-center gap-6 md:flex-row">
            <div className="avatar">
              <div className="ring-primary ring-offset-base-100 w-24 rounded-full ring ring-offset-2">
                <Image
                  src={mockUserData.avatar}
                  alt="User avatar"
                  width={96}
                  height={96}
                />
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold">{mockUserData.name}</h1>
              <p className="text-base-content/70">{mockUserData.email}</p>
              <div className="badge badge-neutral mt-2">
                Member since {mockUserData.memberSince}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="stats mb-8 grid grid-cols-1 gap-4 shadow md:grid-cols-3">
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
      </div>

      {/* Courses Section */}
      <div>
        <div>
          <h2 className="card-title mb-6 text-2xl">Your Courses</h2>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {Object.values(courses).map((course) => (
              <div
                key={course.slug}
                className="card bg-base-100 border-base-300 border shadow-sm transition-shadow hover:shadow-md"
              >
                <figure className="px-4 pt-4">
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
                  <div className="flex flex-col gap-2">
                    <progress
                      className="progress progress-primary w-full"
                      value={course.progress}
                      max="100"
                    ></progress>
                    <div className="text-base-content/70 flex justify-between text-sm">
                      <span>{course.progress}% Complete</span>
                      <span>Last accessed: {course.lastAccessed}</span>
                    </div>
                  </div>
                  <div className="card-actions mt-4 justify-end">
                    <Link href={`/account/courses/${course.slug}`}>
                      <button className="btn btn-primary">
                        Continue Learning
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
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
