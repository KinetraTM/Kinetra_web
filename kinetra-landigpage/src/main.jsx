import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ConsentProvider } from './Context/ConsentContext'
import './index.css'
import './Style/layout/cli-theme.css'
import './Style/layout/portfolio.css'
import './Style/tv/tv.css'
import './Style/tv/channels.css'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ConsentProvider>
      <App />
    </ConsentProvider>
  </StrictMode>,
);
