import { Route, Routes } from 'react-router-dom'
import TVLayout from './components/tv/TVLayout'
import HomeChannel from './components/tv/channels/HomeChannel'
import ServicesChannel from './components/tv/channels/ServicesChannel'
import WebsChannel from './components/tv/channels/WebsChannel'
import ProcessChannel from './components/tv/channels/ProcessChannel'
import ProjectsChannel from './components/tv/channels/ProjectsChannel'
import TestimonialsChannel from './components/tv/channels/TestimonialsChannel'
import FAQChannel from './components/tv/channels/FAQChannel'
import ContactChannel from './components/tv/channels/ContactChannel'
import NotFoundChannel from './components/tv/channels/NotFoundChannel'
import TermsPage from './Page/TermsPage'
import PrivacyPage from './Page/PrivacyPage'
import WebPreviewPage from './Page/WebPreviewPage'

/* Todas las vistas viven dentro del Outlet del televisor: el chasis nunca se desmonta. */

const ScreenSection = ({ children }) => (
  <section className="tv-channel tv-channel--screen-page">{children}</section>
)

export default function App() {
  return (
    <Routes>
      <Route element={<TVLayout />}>
        <Route index element={<HomeChannel />} />
        <Route path="servicios" element={<ServicesChannel />} />
        <Route path="webs" element={<WebsChannel />} />
        <Route path="webs/:slug" element={<ScreenSection><WebPreviewPage /></ScreenSection>} />
        <Route path="proceso" element={<ProcessChannel />} />
        <Route path="proyectos" element={<ProjectsChannel />} />
        <Route path="testimonios" element={<TestimonialsChannel />} />
        <Route path="faq" element={<FAQChannel />} />
        <Route path="contacto" element={<ContactChannel />} />
        <Route path="terminos" element={<ScreenSection><TermsPage /></ScreenSection>} />
        <Route path="privacidad" element={<ScreenSection><PrivacyPage /></ScreenSection>} />
        <Route path="*" element={<NotFoundChannel />} />
      </Route>
    </Routes>
  )
}
