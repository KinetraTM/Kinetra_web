import { createContext, useContext, useEffect, useState } from 'react'

// El hook (useTheme) existe para consumo directo del contexto en productos futuros.
// oxlint-disable react/only-export-components

/* Tema claro/oscuro (Opcional). Respecta prefers-color-scheme por defecto. */
const ThemeContext = createContext({ theme: 'light', toggleTheme: () => {} })

// El hook de lectura (useTheme) se añade en Fase 7 si el producto lo requiere.
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'dark'
    return localStorage.getItem('kinetra-theme') ?? 'dark'
  })

  useEffect(() => {
    if (theme === 'system') {
      const prefers = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
      document.documentElement.dataset.theme = prefers
    } else {
      document.documentElement.dataset.theme = theme
    }
    try {
      localStorage.setItem('kinetra-theme', theme)
    } catch {
      /* localStorage puede no estar disponible; sin impacto en el tema */
    }
  }, [theme])

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}

export const useTheme = () => useContext(ThemeContext) // Hook antes de Fase 7
