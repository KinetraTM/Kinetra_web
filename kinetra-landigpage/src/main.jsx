import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ThemeProvider } from './Context/ThemeContext'
import { ConsentProvider } from './Context/ConsentContext'
import './index.css'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ConsentProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ConsentProvider>
  </StrictMode>,
);
