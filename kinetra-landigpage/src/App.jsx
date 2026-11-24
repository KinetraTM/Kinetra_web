import { useEffect, useState } from 'react'
import { withoutBase } from './utils/basePath'
import TVChassis from './Components/tv/TVChassis'
import TermsPage from './Page/TermsPage'
import PrivacyPage from './Page/PrivacyPage'
import PortfolioPage from './Page/PortfolioPage'
import WebPreviewPage from './Page/WebPreviewPage'

/* Router simple basado en pathname (Sin librerías externas).
   Rutas: /, /webs, /webs/:slug, /terminos y /privacidad. */

export default function App() {
  const [route, setRoute] = useState(() => withoutBase(window.location.pathname))

  useEffect(() => {
    const onPop = () => setRoute(withoutBase(window.location.pathname))
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  const path = route.replace(/\/+$/, '') || '/'

  if (path.startsWith('/terminos')) return <TermsPage />
  if (path.startsWith('/privacidad')) return <PrivacyPage />
  if (path === '/webs') return <PortfolioPage />
  if (path.startsWith('/webs/')) return <WebPreviewPage slug={path.slice('/webs/'.length)} />
  return <TVChassis />
}
