import { useState } from 'react'
import Button from '../ui/Button'
import Heading from '../ui/Heading'
import '../../Style/layout/components.css'

/* Navbar — logo + menú principal + CTA.
   Móvil: menú hamburger con estado local. */

const NavLinks = () => [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Testimonios', href: '#testimonios' },
  { label: 'FAQ', href: '#faq' },
]

const Navbar = ({ onCtaClick, ctaLabel = 'Solicita una sesión' }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen((v) => !v)

  return (
    <nav className="navbar" aria-label="Navegación principal">
      <div className="navbar-container">
        <a className="navbar-logo" href="#hero" aria-label="Kinetra">
          <span className="navbar-logo-text">
            <Heading level={3} className="navbar-brand-text">
              Kinetra
            </Heading>
          </span>
        </a>

        <ul className={`navbar-menu ${isOpen ? 'navbar-menu--open' : ''}`} data-testid="navbar-menu">
          {NavLinks().map((link) => (
            <li key={link.href} className="navbar-item">
              <a href={link.href} className="navbar-link" onClick={() => setIsOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}

          <li className="navbar-cta">
            <Button
              variant="primary"
              href="#contacto"
              onClick={() => {
                setIsOpen(false)
                onCtaClick?.()
              }}
            >
              {ctaLabel}
            </Button>
          </li>
        </ul>

        <button
          className="navbar-toggle"
          aria-label="Abrir menú principal"
          aria-expanded={isOpen}
          aria-controls="navbar-menu"
          onClick={toggleMenu}
        >
          <span className="navbar-toggle-icon" />
        </button>
      </div>
    </nav>
  )
}

export default Navbar
