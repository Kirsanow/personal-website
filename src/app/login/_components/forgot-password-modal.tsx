'use client'

import config from '@/config'
import { createClient } from '@/lib/supabase/client'
import { useState } from 'react'

export default function ForgotPasswordModal() {
  const [isPending, setIsPending] = useState(false)
  const [email, setEmail] = useState('')
  const [isSuccess, setIsSuccess] = useState(false)
  const handlePasswordReset = async (email: string) => {
    setIsPending(true)
    const supabase = createClient()
    await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${config.domainName}/update-password`,
    })
    setIsPending(false)
    setIsSuccess(true)
  }

  return (
    <>
      <button
        className="btn btn-link btn-primary text-primary w-fit px-0"
        onClick={() => {
          setIsSuccess(false)
          setEmail('')
          const modal = document.getElementById(
            'forgot-password-modal',
          ) as HTMLDialogElement
          modal?.showModal()
        }}
      >
        Forgot password?
      </button>
      <dialog id="forgot-password-modal" className="modal">
        {!isSuccess ? (
          <div className="modal-box">
            <h3 className="text-lg font-bold">Reset Password</h3>
            <p className="text-base-content/60">
              Enter your email to reset your password
            </p>

            <input
              className="input input-bordered mt-4 w-full"
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />

            <div className="modal-action">
              <button
                onClick={() => handlePasswordReset(email)}
                className="btn btn-primary"
                disabled={isPending}
              >
                {isPending ? 'Resetting...' : 'Reset Password'}
              </button>
              <button
                type="button"
                className="btn"
                onClick={() =>
                  (
                    document.getElementById(
                      'forgot-password-modal',
                    ) as HTMLDialogElement
                  )?.close()
                }
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <div className="modal-box">
            <h3 className="text-lg font-bold">Password Reset</h3>
            <p className="text-base-content/60">
              Check your email for a link to reset your password
            </p>
            <button
              className="btn btn-outline mt-4"
              onClick={() => {
                setIsSuccess(false)
                setEmail('')
                const modal = document.getElementById(
                  'forgot-password-modal',
                ) as HTMLDialogElement
                modal?.close()
              }}
            >
              Close
            </button>
          </div>
        )}
      </dialog>
    </>
  )
}
