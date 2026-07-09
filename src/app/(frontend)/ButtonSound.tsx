'use client'

import { useEffect } from 'react'

// Plays a short UI click sound whenever a button (or .btn element) is clicked.
export default function ButtonSound() {
  useEffect(() => {
    const audio = new Audio('/assets/chirps2.mov')
    audio.preload = 'auto'

    const onClick = (e: MouseEvent) => {
      const target = e.target as Element | null
      if (!target?.closest('button, .btn')) return
      // Restart from the beginning so rapid clicks each play the sound once.
      audio.currentTime = 0
      void audio.play().catch(() => {})
    }

    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  return null
}
