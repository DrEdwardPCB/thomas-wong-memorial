import React, { useState, useRef, useEffect } from 'react'

interface BackgroundMusicProps {
  audioSrc?: string
}

const BackgroundMusic: React.FC<BackgroundMusicProps> = ({
  audioSrc = '/audio/background-music.mp3',
}) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(0.3)
  const [isMuted, setIsMuted] = useState(false)
  const [showControls, setShowControls] = useState(false)
  const [hasInteracted, setHasInteracted] = useState(false)
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    // Set initial volume
    audio.volume = volume

    // Handle audio events
    const handleEnded = () => {
      setIsPlaying(false)
      // Loop the audio
      audio.currentTime = 0
      audio.play().catch(() => setIsPlaying(false))
    }

    const handlePlay = () => setIsPlaying(true)
    const handlePause = () => setIsPlaying(false)

    audio.addEventListener('ended', handleEnded)
    audio.addEventListener('play', handlePlay)
    audio.addEventListener('pause', handlePause)

    return () => {
      audio.removeEventListener('ended', handleEnded)
      audio.removeEventListener('play', handlePlay)
      audio.removeEventListener('pause', handlePause)
    }
  }, [])

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume
    }
  }, [volume, isMuted])

  // const setInitialPlay = async () => {
  //   console.log('setInitialPlay')
  //   if (audioRef.current) {
  //     console.log('audioRef.current is playing')
  //     await audioRef.current.play()
  //     setIsPlaying(true)
  //   } else {
  //     console.log('audioRef.current is null')
  //   }
  // }
  // useEffect(() => {
  //   setInitialPlay()
  // }, [])

  const togglePlay = async () => {
    const audio = audioRef.current
    if (!audio) return

    try {
      if (isPlaying) {
        audio.pause()
      } else {
        await audio.play()
      }
    } catch (error) {
      console.error('Error playing audio:', error)
      setIsPlaying(false)
    } finally {
      setHasInteracted(true)
    }
  }

  const toggleMute = () => {
    setIsMuted(!isMuted)
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value)
    setVolume(newVolume)
    if (newVolume > 0 && isMuted) {
      setIsMuted(false)
    }
  }

  return (
    <>
      {/* Hidden audio element */}
      <audio ref={audioRef} src={audioSrc} preload="metadata" />

      {/* Floating music controls */}
      <div className="fixed right-6 bottom-6 z-50">
        {/* Main control button */}
        <button
          onClick={togglePlay}
          onMouseEnter={() => setShowControls(true)}
          className={`flex justify-center items-center w-14 h-14 rounded-full border border-gray-200 shadow-lg backdrop-blur-sm transition-all duration-300 bg-white/90 hover:shadow-xl group ${!hasInteracted ? 'animate-bounce' : ''}`}
          aria-label={isPlaying ? 'Pause background music' : 'Play background music'}
        >
          {isPlaying ? (
            <svg className="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
            </svg>
          ) : (
            <svg className="w-6 h-6 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>

        {/* Extended controls */}
        {showControls && (
          <div
            className="absolute bottom-16 right-0 bg-white/95 backdrop-blur-sm rounded-lg shadow-xl border border-gray-200 p-4 min-w-[200px]"
            onMouseLeave={() => setShowControls(false)}
          >
            <div className="space-y-3">
              {/* Volume control */}
              <div className="flex items-center space-x-3">
                <button
                  onClick={toggleMute}
                  className="text-gray-600 transition-colors hover:text-gray-800"
                  aria-label={isMuted ? 'Unmute' : 'Mute'}
                >
                  {isMuted ? (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                    </svg>
                  )}
                </button>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={volume}
                  onChange={handleVolumeChange}
                  className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  style={{
                    background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${volume * 100}%, #e5e7eb ${volume * 100}%, #e5e7eb 100%)`,
                  }}
                />
              </div>

              {/* Status text */}
              <div className="text-sm text-center text-gray-600">
                {isPlaying ? 'Music playing' : 'Music paused'}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default BackgroundMusic
