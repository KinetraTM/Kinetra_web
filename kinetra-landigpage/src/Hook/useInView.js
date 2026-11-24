import { useEffect, useState } from 'react'

/* Hook de intersección: devuelve { inView, className } para animaciones
   que entran con scroll (fade-up / fade-down). */

export default function useInView(direction = 'up', threshold = 0.2, ref = { current: null }) {
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return undefined

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold, rootMargin: '0px 0px -60px 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [ref, threshold])

  const className = inView ? `animate-in fade-${direction}` : ''
  return { inView, className }
}
