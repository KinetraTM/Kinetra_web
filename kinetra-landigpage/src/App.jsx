import { useEffect, useState } from 'react'
import HomePage from './Page/index'
import TermsPage from './Page/TermsPage'
import PrivacyPage from './Page/PrivacyPage'

/* Router simple basado en pathname (Sin librerías externas).
   Navegación completa para /terminos y /privacidad. */

export default function App() {
  const [route, setRoute] = useState(() => window.location.pathname)

  useEffect(() => {
    const onPop = () => setRoute(window.location.pathname)
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  if (route.startsWith('/terminos')) return <TermsPage />
  if (route.startsWith('/privacidad')) return <PrivacyPage />
  return <HomePage />
}
