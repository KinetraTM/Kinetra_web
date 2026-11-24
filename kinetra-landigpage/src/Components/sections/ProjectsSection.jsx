import { useRef } from 'react'
import Heading from '../ui/Heading'
import Container from '../ui/Container'
import Section from '../ui/Section'
import Button from '../ui/Button'
import Icon from '../ui/Icon'
import Badge from '../ui/Badge'
import useInView from '../../Hook/useInView'
import '../../Style/layout/components.css'

/* Proyectos — Grid de tarjetas (placeholder). Filtro de categoría. */

const projectCategories = [
  { label: 'Landing pages', key: 'landing' },
  { label: 'Apps web', key: 'web' },
  { label: 'Apps móviles', key: 'mobile' },
  { label: 'Automatización', key: 'automation' },
]

const projectCards = Array.from({ length: 6 }, (_, i) => ({
  id: `proyecto-${i + 1}`,
  title: i % 2 === 0 ? 'Sistema de gestión de clientes' : 'Landing para producto SaaS',
  subtitle: 'Digitalización de procesos internos',
  impact: 'Entrega en 3 semanas · 40% menos tiempo',
}))

export default function ProjectsSection() {
  const ref = useRef(null)
  const { inView, className: animClass } = useInView('fade-up', 0.2, ref)

  return (
    <Section id="proyectos" ref={ref} className={`projects-section ${animClass}`}>
      <Container>
        <Heading level={2} className="text-display-md projects-title">
          Proyectos y resultados
        </Heading>
        <p className="projects-sub text-body" style={{ maxWidth: 640 }}>
          Casos de uso, desafíos y métricas que impactamos con los clientes.
        </p>

        <nav className="projects-filters" aria-label="Filtrar proyectos">
          {projectCategories.map((c) => (
            <button key={c.key} className="projects-filter" data-active="true">
              {c.label}
            </button>
          ))}
        </nav>

        <ul className="grid grid-projects projects-list" aria-label="Lista de proyectos" data-inview={inView}>
          {projectCards.map((p) => (
            <li key={p.id} className="projects-item">
              <article className="project-card">
                <div className="project-card-media">
                  <Icon name="browser-icon" size="2.5rem" className="project-card-icon" />
                  <Badge variant="yellow" className="project-badge">
                    {p.impact.split('·')[0].trim()}
                  </Badge>
                </div>
                <h3 className="project-card-title">{p.title}</h3>
                <p className="project-card-sub text-body-sm">{p.subtitle}</p>
                <div className="project-card-footer">
                  <Button variant="secondary" href="#contacto" className="projects-cta">
                    Ver detalle del caso
                  </Button>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  )
}
