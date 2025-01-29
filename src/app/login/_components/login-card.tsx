'use client'
import Link from 'next/link'
import { useActionState, useState } from 'react'
import { signInWithEmail, signUpNewUser } from '../_actions'

export default function LoginCard() {
  const [isLogin, setIsLogin] = useState(true)
  const [state, formAction, isPending] = useActionState(
    async (_state: any, formData: FormData) => {
      try {
        const action = isLogin ? signInWithEmail : signUpNewUser
        const result = await action(formData)
        if (result?.error) {
          return { error: result.error }
        }
        return { error: '' }
      } catch (error) {
        console.error('Auth error:', error)
        return { error: 'An unexpected error occurred' }
      }
    },
    { error: '' },
  )

  return (
    <div className="w-full max-w-md">
      {/* Logo and Title */}
      <div className="mb-8 text-center">
        <h1 className="mb-2 mt-8 text-2xl font-bold">
          {isLogin ? 'Welcome back' : 'Create an account'}
        </h1>
        <p className="text-base-content/60">
          {isLogin
            ? 'Sign in to continue learning'
            : 'Sign up to start learning'}
        </p>
      </div>

      {/* Login Card */}
      <div className="card bg-base-100 border-base-300 border shadow-sm">
        <div className="card-body">
          {/* Social Login */}
          <button
            className="btn btn-outline btn-primary mb-4 gap-2"
            disabled={isPending}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-5"
              viewBox="0 0 48 48"
            >
              <path
                fill="#FFC107"
                d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
              />
              <path
                fill="#FF3D00"
                d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691z"
              />
              <path
                fill="#4CAF50"
                d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
              />
              <path
                fill="#1976D2"
                d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
              />
            </svg>
            Continue with Google
          </button>

          <div className="divider text-base-content/50 text-xs">
            OR CONTINUE WITH EMAIL
          </div>

          {/* Email Login Form */}
          <form action={formAction} className="space-y-4">
            <fieldset className="fieldset" disabled={isPending}>
              <label className="fieldset-label">Email</label>
              <input
                type="email"
                name="email"
                className="input input-bordered w-full"
                placeholder="Email"
                required
              />

              <label className="fieldset-label">Password</label>
              <input
                type="password"
                name="password"
                className="input input-bordered w-full"
                placeholder="Password"
                required
                minLength={6}
              />

              <button
                className={`btn btn-primary mt-4 w-full`}
                disabled={isPending}
              >
                {isPending ? 'Please wait...' : isLogin ? 'Sign In' : 'Sign Up'}
              </button>
            </fieldset>
          </form>

          {state?.error && (
            <div className="alert alert-error mt-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 shrink-0 stroke-current"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>{state.error}</span>
            </div>
          )}
        </div>
      </div>

      {/* Sign Up Link */}
      <div className="mt-6 text-center text-sm">
        {isLogin ? (
          <>
            Don't have an account?{' '}
            <button
              onClick={() => setIsLogin(false)}
              className="link link-hover link-primary font-medium"
              disabled={isPending}
            >
              Sign up for free
            </button>
          </>
        ) : (
          <>
            Already have an account?{' '}
            <button
              onClick={() => setIsLogin(true)}
              className="link link-hover link-primary font-medium"
              disabled={isPending}
            >
              Sign in
            </button>
          </>
        )}
      </div>
    </div>
  )
}
