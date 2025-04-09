'use client'

import { useEffect, useState } from 'react'

export default function ParticlesBackground() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined' && !loaded) {
      const script = document.createElement('script')
      script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js'
      script.async = true
      script.onload = () => {
        if (window.particlesJS) {
          window.particlesJS('particles-js', {
            particles: {
              number: {
                value: 80,
                density: { enable: true, value_area: 800 },
              },
              color: { value: '#ffffff' },
              shape: {
                type: 'circle',
                stroke: { width: 0, color: '#000000' },
              },
              opacity: {
                value: 0.5,
                random: false,
              },
              size: {
                value: 3,
                random: true,
              },
              line_linked: {
                enable: true,
                distance: 150,
                color: '#ffffff',
                opacity: 0.4,
                width: 1,
              },
              move: {
                enable: true,
                speed: 3,
              },
            },
            interactivity: {
              events: {
                onhover: { enable: false, mode: 'repulse' },
                onclick: { enable: false, mode: 'push' },
              },
              modes: {
                repulse: { distance: 200, duration: 0.4 },
              },
            },
            retina_detect: true,
          })
          setLoaded(true)
        }
      }
      document.body.appendChild(script)
    }
  }, [loaded])

  return (
    <div
      id="particles-js"
      suppressHydrationWarning
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: '#000',
      }}
    />
  )
}
