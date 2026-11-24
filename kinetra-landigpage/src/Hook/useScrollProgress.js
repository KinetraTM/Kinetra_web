import { useEffect } from 'react'

/* Barra de progreso de scroll (consumidor del CSS .scroll-progress-bar) */

export default function useScrollProgress() {
  useEffect(() => {
    const el = document.querySelector('.scroll-progress-bar')
    if (!el) return undefined

    const onScroll = () => {
      const docHeight = document.documentElement.scrollHeight
      const viewportHeight = window.innerHeight
      const maxScroll = docHeight - viewportHeight
      const pct = maxScroll <= 0 ? 0 : (window.scrollY / maxScroll) * 100
      el.style.width = `${Math.min(pct, 100)}%`
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
}
