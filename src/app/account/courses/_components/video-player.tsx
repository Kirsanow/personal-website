'use client'

import { useEffect, useState } from 'react'

const VideoPlayer = ({ videoId }: { videoId: string }) => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  // Extract video ID from YouTube URL
  const getYouTubeVideoId = (url: string) => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
    const match = url.match(regExp)
    return match && match[2].length === 11 ? match[2] : null
  }

  // const videoId = getYouTubeVideoId(videoId)
  const embedUrl = videoId
    ? `https://www.youtube.com/embed/${videoId}?autoplay=0&modestbranding=1&rel=0&showinfo=0`
    : ''

  if (!isClient) {
    return (
      <div className="bg-base-300 rounded-box relative aspect-video w-full overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="loading loading-spinner loading-lg"></div>
        </div>
      </div>
    )
  }

  if (!videoId) {
    return (
      <div className="bg-base-300 rounded-box relative aspect-video w-full overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-base-content/70">Invalid video URL</div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-base-300 rounded-box relative aspect-video w-full overflow-hidden">
      <iframe
        className="absolute inset-0 h-full w-full"
        src={embedUrl}
        title="Course Video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  )
}

export default VideoPlayer
