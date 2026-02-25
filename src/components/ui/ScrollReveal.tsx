'use client'

import { useEffect } from 'react'

/**
 * Mounts once and wires IntersectionObserver to every .reveal element.
 * Elements receive the `.is-visible` class when they enter the viewport,
 * triggering the CSS transition defined in globals.css.
 */
export default function ScrollReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('.reveal')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement
            // Respect existing inline delay or add stagger by index
            if (!el.style.transitionDelay) {
              el.style.transitionDelay = `${i * 80}ms`
            }
            el.classList.add('is-visible')
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return null
}
