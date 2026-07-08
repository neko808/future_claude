'use client'

import { useEffect } from 'react'

// Randomly flickers the numeric digits inside every `.memory__addr`,
// making the addresses look like live, changing memory readouts.
export default function MemoryFlicker() {
  useEffect(() => {
    const addrs = Array.from(
      document.querySelectorAll<HTMLElement>('.memory__addr'),
    )
    if (!addrs.length) return

    // Preserve each address's original characters so only digits flicker.
    const originals = addrs.map((el) => el.textContent ?? '')

    const flicker = () => {
      addrs.forEach((el, idx) => {
        const chars = originals[idx].split('')
        for (let i = 0; i < chars.length; i++) {
          // Only touch digits, and only some of them each tick.
          if (/\d/.test(chars[i]) && Math.random() < 0.3) {
            chars[i] = String(Math.floor(Math.random() * 10))
          }
        }
        el.textContent = chars.join('')
      })
    }

    const interval = window.setInterval(flicker, 120)
    return () => window.clearInterval(interval)
  }, [])

  return null
}
