'use client'

import { signOut } from '@/actions/supabase'
import { useEffect, useRef } from 'react'

export default function SettingsModal({
  children,
}: {
  children?: React.ReactNode
}) {
  const dialogRef = useRef<HTMLDialogElement>(null)

  const showModal = () => {
    dialogRef.current?.showModal()
  }

  const closeModal = () => {
    dialogRef.current?.close()
  }

  return (
    <>
      {/* Trigger button */}
      <div onClick={showModal}>
        {children || (
          <button className="btn btn-ghost btn-circle">
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
                <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                <circle cx="12" cy="12" r="3" />
              </g>
            </svg>
          </button>
        )}
      </div>

      {/* Modal */}
      <dialog ref={dialogRef} className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button
              className="btn btn-sm btn-circle btn-ghost absolute top-2 right-2"
              onClick={closeModal}
            >
              ✕
            </button>
          </form>

          <h3 className="mb-4 text-lg font-bold">Settings</h3>

          {/* Settings Content */}
          <div className="space-y-4">
            {/* Theme Settings */}
            <div>
              <label className="label">
                <span className="label-text font-medium">Theme</span>
              </label>
              <select className="select select-bordered w-full">
                <option>Light</option>
                <option>Dark</option>
                <option>System</option>
              </select>
            </div>

            {/* Email Notifications */}
            <div>
              <label className="label">
                <span className="label-text font-medium">
                  Email Notifications
                </span>
              </label>
              <div className="space-y-2">
                <label className="label cursor-pointer justify-start gap-3">
                  <input type="checkbox" className="checkbox checkbox-sm" />
                  <span className="label-text">Course updates</span>
                </label>
                <label className="label cursor-pointer justify-start gap-3">
                  <input type="checkbox" className="checkbox checkbox-sm" />
                  <span className="label-text">New courses available</span>
                </label>
                <label className="label cursor-pointer justify-start gap-3">
                  <input type="checkbox" className="checkbox checkbox-sm" />
                  <span className="label-text">Learning reminders</span>
                </label>
              </div>
            </div>

            {/* Account Settings */}
            <div>
              <label className="label">
                <span className="label-text font-medium">Account</span>
              </label>
              <div className="space-y-2">
                <button className="btn btn-outline btn-block btn-sm">
                  Change Password
                </button>
                <button className="btn btn-outline btn-error btn-block btn-sm">
                  Delete Account
                </button>
                <button
                  onClick={async () => {
                    await signOut()
                  }}
                  className="btn btn-outline btn-block btn-sm"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>

          {/* Modal Actions */}
          <div className="modal-action">
            <form method="dialog" className="flex gap-2">
              <button className="btn btn-ghost" onClick={closeModal}>
                Cancel
              </button>
              <button
                className="btn btn-primary"
                onClick={() => {
                  // Save settings here
                  closeModal()
                }}
              >
                Save Changes
              </button>
            </form>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop" onClick={closeModal}>
          <button>close</button>
        </form>
      </dialog>
    </>
  )
}
