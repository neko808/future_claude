'use client'

import { useEffect } from 'react'

// Scrambles the hero title on load: random letters flash quickly, then
// resolve left-to-right into the real text ("BUILT FOR THE VOID").
export default function HeroTitleScramble() {
  useEffect(() => {
    const el = document.querySelector<HTMLElement>('.hero__title')
    if (!el) return

    const finalText = el.textContent ?? ''
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const randomChar = () => chars[Math.floor(Math.random() * chars.length)]

    // How many letters (from the left) are locked to their final value.
    let revealed = 0

    const render = () => {
      let out = ''
      for (let i = 0; i < finalText.length; i++) {
        const c = finalText[i]
        // Keep spaces/punctuation stable, and lock already-revealed letters.
        if (c === ' ' || i < revealed) {
          out += c
        } else {
          out += randomChar()
        }
      }
      el.textContent = out
    }

    let interval = 0

    // Hide the title until the scramble kicks in.
    el.style.visibility = 'hidden'

    // Wait for the hero background entrance (0.8s delay + 1.2s fade) to finish.
    const startDelay = window.setTimeout(() => {
      el.style.visibility = 'visible'
      interval = window.setInterval(() => {
        render()
        // Reveal one real letter per frame for a short, snappy resolve.
        revealed++

        if (revealed > finalText.length) {
          el.textContent = finalText
          window.clearInterval(interval)
        }
      }, 35)
    }, 2000)

    return () => {
      window.clearTimeout(startDelay)
      window.clearInterval(interval)
      el.textContent = finalText
      el.style.visibility = 'visible'
    }
  }, [])

  return null
}
