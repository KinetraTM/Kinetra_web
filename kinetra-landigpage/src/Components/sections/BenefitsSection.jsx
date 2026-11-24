import { useRef } from 'react'
import Heading from '../ui/Heading'
import Container from '../ui/Container'
import Section from '../ui/Section'
import Badge from '../ui/Badge'
import useInView from '../../Hook/useInView'
import '../../Style/layout/components.css'

/* Beneficios — Bento layout responsive (grid 1, 2, 4 cols). */

const benefits = [
  {
    tag: 'benefits',
    title: 'Ahorro de tiempo y costos',
    sub: 'Nos enfocamos en lo esencial: tu software funciona desde el día 1.',
  },
  {
    tag: 'quality',
    title: 'Calidad de código y arquitectura',
    sub: 'Pruebas reales, CI/CD, documentación técnica: la base para escalar.',
  },
  {
    tag: 'security',
    title: 'Seguridad y cumplimiento',
    sub: 'Controles de acceso, backups y prácticas de desarrollo seguro embebidos.',
  },
  {
    tag: 'scalability',
    title: 'Escalabilidad a futuro',
    sub: 'El arquitectura es escalable desde el inicio, sin necesidad de rehacerlo.',
  },
  {
    tag: 'customer-experience',
    title: 'Experiencia de cliente',
    sub: 'Diseñamos interfaces intuitivas que guían al usuario hacia acciones claras.',
  },
  {
    tag: 'automation',
    title: 'Automatización de tareas',
    sub: 'Procesos repetitivos eliminados, reduciendo errores humanos y retrasos.',
  },
  {
    tag: 'cost-efficiency',
    title: 'Eficiencia de costos',
    sub: 'Rentabilidad a corto plazo gracias a desarrollo ágil y sin overhead innecesario.',
  },
  {
    tag: 'trust',
    title: 'Confianza técnica',
    sub: 'Equipo comprometido y seguimiento continuo: tú llevas la deuda técnica a cero.',
  },
]

export default function BenefitsSection() {
  const ref = useRef(null)
  const { inView, className: animClass } = useInView('fade-up', 0.2, ref)

  return (
    <Section id="beneficios" className={`benefits-section ${animClass}`}>
      <Container>
        <Heading level={2} className="text-display-md benefits-title">
          Beneficios de trabajar con Kinetra
        </Heading>
        <p className="benefits-sub text-body" style={{ maxWidth: 640 }}>
          Resultados medibles desde el primer día: menos errores, más tiempo libre y una
          plataforma que crece contigo.
        </p>

        <div ref={ref} className="grid grid-bento benefits-grid" aria-label="Beneficios de Kinetra" data-inview={inView}>
          {benefits.map((b) => (
            <div key={b.tag} className={`bento-card benefits-item benefits-${b.tag}`}>
              <Badge variant="green">{b.tag}</Badge>
              <h3 className="bento-card-title">{b.title}</h3>
              <p className="bento-card-text">{b.sub}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
