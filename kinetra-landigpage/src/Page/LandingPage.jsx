import { useScrollProgress, useActiveSection } from '../Hook'
import Navbar from '../Components/layout/Navbar'
import Footer from '../Components/layout/Footer'
import HeroSection from '../Components/sections/HeroSection'
import ServicesSection from '../Components/sections/ServicesSection'
import BenefitsSection from '../Components/sections/BenefitsSection'
import ProcessSection from '../Components/sections/ProcessSection'
import ProjectsSection from '../Components/sections/ProjectsSection'
import TestimonialsSection from '../Components/sections/TestimonialsSection'
import FAQSection from '../Components/sections/FAQSection'
import ContactSection from '../Components/sections/ContactSection'
import CommandBar from '../components/ui/CommandBar'
import '../Style/index.css'

const SECTION_IDS = [
  'hero',
  'servicios',
  'beneficios',
  'proceso',
  'proyectos',
  'testimonios',
  'faq',
  'contacto',
]

/* LandingPage — compone Navbar + sections + Footer.
   Se encarga de scroll a sección, progreso de scroll y CTA. */

const scrollToId = (id) => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function LandingPage() {
  useScrollProgress()
  const activeSection = useActiveSection(SECTION_IDS)

  return (
    <main className="kinetra-landing" data-active-section={activeSection ?? 'hero'}>
      <div className="scroll-progress-bar" aria-hidden="true" />

      <Navbar onCtaClick={() => scrollToId('servicios')} />

      <HeroSection
        onServicesClick={() => scrollToId('servicios')}
        onProjectsClick={() => scrollToId('proyectos')}
      />

      <ServicesSection />
      <BenefitsSection />
      <ProcessSection />
      <ProjectsSection />
      <TestimonialsSection />
      <FAQSection />

      <ContactSection onSuccess={() => scrollToId('footer')} />

      <CommandBar />

      <Footer onContactClick={() => scrollToId('contacto')} />
    </main>
  )
}
