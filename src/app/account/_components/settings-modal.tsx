'use client'

import { signOut } from '@/actions/supabase'
import { useEffect, useRef } from 'react'
import Image from 'next/image'

export default function SettingsModal({
  children,
  avatarUrl,
}: {
  children?: React.ReactNode
  avatarUrl?: string
}) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const showModal = () => {
    dialogRef.current?.showModal()
  }

  const closeModal = () => {
    dialogRef.current?.close()
  }

  const handleAvatarClick = () => {
    fileInputRef.current?.click()
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      // Handle avatar upload here
      console.log('Upload avatar:', file)
    }
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
        <div className="modal-box max-w-sm">
          <form method="dialog">
            <button
              className="btn btn-sm btn-circle btn-ghost absolute top-2 right-2"
              onClick={closeModal}
            >
              ✕
            </button>
          </form>

          <div className="flex flex-col items-center space-y-6 py-4">
            {/* Avatar Section */}
            <div className="text-center">
              <div className="relative inline-block">
                <div
                  className="bg-base-300 size-24 cursor-pointer overflow-hidden rounded-full"
                  onClick={handleAvatarClick}
                >
                  {avatarUrl ? (
                    <Image
                      src={avatarUrl}
                      alt="Profile"
                      width={96}
                      height={96}
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-12 opacity-50"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3s-3-1.34-3-3s1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22c.03-1.99 4-3.08 6-3.08c1.99 0 5.97 1.09 6 3.08c-1.29 1.94-3.5 3.22-6 3.22z"
                        />
                      </svg>
                    </div>
                  )}
                </div>
                <input
                  type="file"
                  ref={fileInputRef}
                  className="hidden"
                  accept="image/*"
                  onChange={handleFileChange}
                />
                <div className="absolute right-0 bottom-0">
                  <button className="btn btn-circle btn-sm btn-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-4"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M21 6.5l-4 4V7c0-.55-.45-1-1-1H9.82L21 17.18V6.5zM3.27 2L2 3.27L4.73 6H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.21 0 .39-.08.54-.18L19.73 21L21 19.73L3.27 2z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <p className="text-base-content/70 mt-2 text-sm">
                Click to change avatar
              </p>
            </div>

            {/* Account Actions */}
            <div className="w-full space-y-3">
              <button className="btn btn-outline btn-block">
                Change Password
              </button>
              <button
                onClick={async () => {
                  await signOut()
                  closeModal()
                }}
                className="btn btn-outline btn-error btn-block"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop" onClick={closeModal}>
          <button>close</button>
        </form>
      </dialog>
    </>
  )
}
