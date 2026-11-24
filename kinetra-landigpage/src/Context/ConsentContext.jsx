import { createContext, useContext, useState } from 'react'

// El hook (useConsent) existe para consumo directo del contexto en productos futuros.
// oxlint-disable react/only-export-components

/* Estado de consentimiento para Términos y Privacidad (placeholder UI). */

const ConsentContext = createContext({
  hasConsent: false,
  setHasConsent: () => {},
})

// El hook de lectura (useConsent) se añade en Fase 7 si el producto lo requiere.
export function ConsentProvider({ children }) {
  const [hasConsent, setHasConsent] = useState(false)
  return <ConsentContext.Provider value={{ hasConsent, setHasConsent }}>{children}</ConsentContext.Provider>
}

export const useConsent = () => useContext(ConsentContext) // Hook antes de Fase 7
