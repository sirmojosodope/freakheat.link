import React, { useRef, useState } from 'react'

const BackgroundVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isMuted, setIsMuted] = useState(true)

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  return (
    <>
      <video
        ref={videoRef}
        autoPlay
        loop
        muted={isMuted}
        playsInline
      >
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <button className="mute-toggle" onClick={toggleMute}>
        {isMuted ? '🔇' : '🔊'}
      </button>
    </>
  )
}

export default BackgroundVideo
