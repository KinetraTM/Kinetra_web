import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ConsentProvider } from './Context/ConsentContext'
import './index.css'
import './Style/layout/cli-theme.css'
import './Style/layout/portfolio.css'
import './Style/tv/tv.css'
import './Style/tv/channels.css'

/* Recupera la ruta profunda que GitHub Pages redirigió a través de 404.html. */
const redirectedPath = window.sessionStorage.getItem('gh-pages-redirect')
if (redirectedPath) {
  window.sessionStorage.removeItem('gh-pages-redirect')
  window.history.replaceState(null, '', redirectedPath)
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ConsentProvider>
      <App />
    </ConsentProvider>
  </StrictMode>,
);
