import { useRef } from 'react'
import Heading from '../ui/Heading'
import Button from '../ui/Button'
import Badge from '../ui/Badge'
import Container from '../ui/Container'
import Section from '../ui/Section'
import Icon from '../ui/Icon'
import useInView from '../../Hook/useInView'
import '../../Style/layout/components.css'

/* Servicios — Grid móvil 1 col, tablet 2, desktop 4.
   Tarjetas: icono + título + línea de beneficio + CTA secundario. */

const services = [
  {
    icon: 'development-icon',
    title: 'Desarrollo de software a medida',
    benefit: 'Entregamos módulos funcionales al 100% de los requisitos de tu negocio.',
    href: '#proceso',
  },
  {
    icon: 'design-icon',
    title: 'Landing pages profesionales',
    benefit: 'Tu presencia online en días: diseño limpio, rápido y optimizado para SEO.',
    href: '#proyectos',
  },
  {
    icon: 'browser-icon',
    title: 'Aplicaciones web',
    benefit: 'Plataformas robustas y accesibles para tus usuarios, en cualquier dispositivo.',
    href: '#proyectos',
  },
  {
    icon: 'mobile-icon',
    title: 'Aplicaciones móviles',
    benefit: 'Apps con experiencia de usuario fluida, móvil primero y rendimiento real.',
    href: '#proceso',
  },
  {
    icon: 'automation-icon',
    title: 'Automatización de procesos',
    benefit: 'Eliminamos tareas repetitivas con flujos automáticos que ahorran horas.',
    href: '#proyectos',
  },
  {
    icon: 'ai-icon',
    title: 'Integración de IA',
    benefit: 'Inteligencia de negocio: chatbots, recomendaciones y análisis con IA.',
    href: '#contacto',
  },
  {
    icon: 'dashboard-icon',
    title: 'Sistemas de gestión',
    benefit: 'Centralización de datos, reportes automáticos y control en tiempo real.',
    href: '#proyectos',
  },
  {
    icon: 'business-icon',
    title: 'Soluciones digitales para empresas',
    benefit: 'Estrategia digital completa desde la identidad hasta la automatización.',
    href: '#servicios',
  },
]

export default function ServicesSection() {
  const ref = useRef(null)
  const { inView, className: animClass } = useInView('fade-up', 0.15, ref)

  return (
    <Section id="servicios" className={`services-section ${animClass}`} ref={ref}>
      <Container>
        <Heading level={2} className="text-display-md services-title">
          Servicios — growth acceleration
        </Heading>
        <Badge variant="primary" className="services-badge">
          Kinetra
        </Badge>
        <p className="services-sub text-body" style={{ marginTop: 12, maxWidth: 720 }}>
          Desarrollamos el software que tu negocio necesita: entregas reales, calidad
          garantizada y un proceso diseñado para escala.
        </p>

        <ul className="grid grid-services services-list" aria-label="Lista de servicios">
          {services.map((svc) => (
            <li key={svc.title} className="services-item" data-inview={inView}>
              <Icon name={svc.icon} size="2rem" className="services-item-icon" />
              <h3 className="services-item-title">{svc.title}</h3>
              <p className="services-item-benefit text-body-sm">{svc.benefit}</p>
              <Button variant="secondary" href={svc.href} className="services-item-cta">
                Ver detalles →
              </Button>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  )
}
