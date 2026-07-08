'use client'

import { useEffect } from 'react'

// Ports the mobile navigation drawer behaviour from the original script.js.
export default function NavInteractions() {
  useEffect(() => {
    const navToggle = document.getElementById('navToggle')
    const navMenu = document.getElementById('navMenu')
    const navBackdrop = document.getElementById('navBackdrop')

    if (!navToggle || !navMenu || !navBackdrop) return

    const setNav = (open: boolean) => {
      navToggle.setAttribute('aria-expanded', String(open))
      navToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu')
      navMenu.classList.toggle('is-open', open)
      navBackdrop.classList.toggle('is-open', open)
      document.body.classList.toggle('nav-open', open)
    }

    const onToggle = () => setNav(navToggle.getAttribute('aria-expanded') !== 'true')
    const onBackdrop = () => setNav(false)
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setNav(false)
    }
    const onResize = () => {
      if (window.innerWidth > 820) setNav(false)
    }
    const linkHandlers: Array<[Element, () => void]> = []

    navToggle.addEventListener('click', onToggle)
    navBackdrop.addEventListener('click', onBackdrop)
    document.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    navMenu.querySelectorAll('.nav__link').forEach((link) => {
      const handler = () => setNav(false)
      link.addEventListener('click', handler)
      linkHandlers.push([link, handler])
    })

    return () => {
      navToggle.removeEventListener('click', onToggle)
      navBackdrop.removeEventListener('click', onBackdrop)
      document.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
      linkHandlers.forEach(([link, handler]) => link.removeEventListener('click', handler))
    }
  }, [])

  return null
}
