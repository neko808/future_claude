'use client'

import { useEffect, useRef, useState } from 'react'

// Background music for the site with an on/off control rendered in the hero.
export default function AudioToggle() {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    const audio = new Audio('/assets/echoes_of_the_past.mp3')
    audio.loop = true
    audio.preload = 'auto'
    audioRef.current = audio

    // Try to start automatically; most browsers block audio until a user
    // gesture, in which case this rejects and the toggle stays "off".
    audio
      .play()
      .then(() => setPlaying(true))
      .catch(() => setPlaying(false))

    return () => {
      audio.pause()
      audioRef.current = null
    }
  }, [])

  const toggle = () => {
    const audio = audioRef.current
    if (!audio) return
    if (audio.paused) {
      void audio.play().then(() => setPlaying(true)).catch(() => {})
    } else {
      audio.pause()
      setPlaying(false)
    }
  }

  return (
    <button
      type="button"
      className="audio-toggle"
      onClick={toggle}
      aria-pressed={playing}
      aria-label={playing ? 'Mute music' : 'Play music'}
      title={playing ? 'Mute music' : 'Play music'}
    >
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M4 9v6h4l5 4V5L8 9H4z"
          fill="currentColor"
        />
        {playing ? (
          <>
            <path
              d="M16 8.5a5 5 0 0 1 0 7"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            <path
              d="M18.5 6a8.5 8.5 0 0 1 0 12"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </>
        ) : (
          <path
            d="M16 9.5l5 5M21 9.5l-5 5"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        )}
      </svg>
    </button>
  )
}
