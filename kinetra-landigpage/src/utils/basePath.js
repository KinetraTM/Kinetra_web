/* Utilidades para que las rutas internas respeten la base de Vite.
   En GitHub Pages BASE_URL es '/Kinetra_web/'; con dominio propio es '/'. */

const BASE = (import.meta.env.BASE_URL || '/').replace(/\/$/, '')

/** @param {string} path Ruta interna que empieza por '/' (o un ancla/URL externa). */
export const withBase = (path = '/') => {
  if (!path.startsWith('/')) return path
  if (path === '/') return `${BASE}/`
  if (BASE && path.startsWith(`${BASE}/`)) return path
  return `${BASE}${path}`
}

/** Quita el prefijo de la subruta antes de comparar con las rutas de la app. */
export const withoutBase = (pathname = '') => {
  if (BASE && (pathname === BASE || pathname.startsWith(`${BASE}/`))) {
    return pathname.slice(BASE.length) || '/'
  }
  return pathname
}
