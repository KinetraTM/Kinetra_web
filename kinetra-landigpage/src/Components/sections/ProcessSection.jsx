import { useRef } from 'react'
import Heading from '../ui/Heading'
import Container from '../ui/Container'
import Section from '../ui/Section'
import Icon from '../ui/Icon'
import Badge from '../ui/Badge'
import useInView from '../../Hook/useInView'
import '../../Style/layout/components.css'

/* Proceso de trabajo — Timeline vertical móvil / horizontal desktop.
   5 pasos: Diagnóstico → Diseño → Desarrollo → Pruebas → Soporte */

const steps = [
  { num: 1, title: 'Diagnóstico y estrategia', text: 'Entendemos tu negocio, objetivos y requisitos para definir la solución ideal.' },
  { num: 2, title: 'Diseño UI/UX', text: 'Wireframes y prototipos que validamos contigo antes del desarrollo.' },
  { num: 3, title: 'Desarrollo de software', text: 'Desarrollo agile con entregables semanales y seguimiento continuo.' },
  { num: 4, title: 'Pruebas y lanzamiento', text: 'QA interno, validación de usuarios y despliegue optimizado.' },
  { num: 5, title: 'Soporte técnico continuo', text: 'Te acompañamos después del lanzamiento con mantenimiento asistido.' },
]

export default function ProcessSection() {
  const ref = useRef(null)
  const { inView, className: animClass } = useInView('fade-up', 0.2, ref)

  return (
    <Section id="proceso" ref={ref} className={`process-section ${animClass}`}>
      <Container>
        <Heading level={2} className="text-display-md process-title">
          Nuestro proceso de trabajo
        </Heading>
        <p className="process-sub text-body" style={{ maxWidth: 640 }}>
          Metodología ágil y transparente: resultados claros en cada entrega, sin sorpresas.
        </p>

        <div className="timeline timeline-vertical" aria-label="Timeline de proceso de trabajo" data-inview={inView}>
          {steps.map((step, idx) => (
            <div key={step.num} className="timeline-item" data-step={step.num}>
              <div className="timeline-dot">
                <div className="timeline-num">{step.num}</div>
              </div>
              <div className="timeline-line" />
              <article className="timeline-card">
                <Icon name="check-icon" size="1.25rem" className="timeline-card-icon" />
                <h3 className="timeline-card-title">{step.title}</h3>
                <p className="timeline-card-text">{step.text}</p>
                {idx === steps.length - 1 && (
                  <Badge variant="cyan" className="timeline-badge">
                    Objetivo de Kinetra
                  </Badge>
                )}
              </article>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
