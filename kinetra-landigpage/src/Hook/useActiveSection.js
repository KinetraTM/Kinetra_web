import { useEffect, useState } from 'react'

/* Hook activo: según el scroll, devuelve el id de la sección actual
   (para resaltar en el navbar y páginas de destino). */

export default function useActiveSection(ids = []) {
  const [activeId, setActiveId] = useState(ids[0] ?? null)

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY
      let current = ids[ids.length - 1]

      for (const id of ids) {
        const el = document.getElementById(id)
        if (!el) continue
        const offsetTop = el.offsetTop - 60 // headers sticky
        if (scrollY >= offsetTop) current = id
      }
      setActiveId(current)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [ids])

  return activeId
}
