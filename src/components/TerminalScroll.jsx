import { useEffect } from 'react'

// Mimics Terminal-like smooth snapping between sections and easing on wheel
export default function TerminalScroll() {
  useEffect(() => {
    let ticking = false
    let lastDelta = 0
    const step = 0.065 // lower = slower easing

    const onWheel = (e) => {
      // Allow native scroll on small screens to avoid motion sickness
      if (window.innerWidth < 768) return

      e.preventDefault()
      const delta = Math.sign(e.deltaY)
      lastDelta = delta

      if (!ticking) {
        ticking = true
        const start = window.scrollY
        const viewport = window.innerHeight
        const target = delta > 0
          ? Math.min(start + viewport, document.body.scrollHeight - viewport)
          : Math.max(start - viewport, 0)

        let t = 0
        const easeOutCubic = (x) => 1 - Math.pow(1 - x, 3)

        const animate = () => {
          t += step
          const y = start + (target - start) * easeOutCubic(Math.min(t, 1))
          window.scrollTo({ top: y, behavior: 'auto' })

          if (t < 1 && Math.sign(lastDelta) === delta) {
            requestAnimationFrame(animate)
          } else {
            ticking = false
          }
        }
        requestAnimationFrame(animate)
      }
    }

    window.addEventListener('wheel', onWheel, { passive: false })
    return () => window.removeEventListener('wheel', onWheel)
  }, [])

  return null
}
