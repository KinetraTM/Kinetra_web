import { useRef } from 'react'
import Heading from '../ui/Heading'
import Button from '../ui/Button'
import Badge from '../ui/Badge'
import Container from '../ui/Container'
import Section from '../ui/Section'
import useInView from '../../Hook/useInView'
import '../../Style/layout/components.css'

/* Hero principal — entiende el valor de Kinetra en menos de 5 segundos.
   Dual CTA: Principal (Servicios) + Secundario (Proyectos). */

const socialProofBadges = [
  { text: 'Clientes digitalizados', count: '20+' },
]

export default function HeroSection({ onServicesClick, onProjectsClick }) {
  const ref = useRef(null)
  const { inView, className: animClass } = useInView('fade-up', 0.2, ref)

  return (
    <Section id="hero" aria-label="Home" className="hero-section">
      <Container>
        <div className="hero-content" ref={ref} data-inview={inView}>
          <Badge variant="cyan">SIN CÓDIGO, SOLO RESULTADOS</Badge>
          <Heading level={1} className={animClass + ' hero-title'}>
            Software a medida que digitaliza y crece tu negocio
          </Heading>
          <p className="hero-sub text-body">
            Solucionamos startups y empresas que necesitan una web, una app o un proceso
            automatizado sin miedo a la tecnología. Desarrollo a medida, IA y gestión
            integrada, a entregar de la mano, con calidad y tiempo récord.
          </p>

          <div className="hero-ctas">
            <Button
              variant="primary"
              className="btn--lg hero-cta-primary"
              href="#servicios"
              onClick={onServicesClick}
            >
              Conoce nuestros servicios
            </Button>
            <Button
              variant="secondary"
              className="btn--lg hero-cta-secondary"
              href="#proyectos"
              onClick={onProjectsClick}
            >
              Ver nuestros proyectos
            </Button>
          </div>

          <div className="hero-social proof" aria-label="Propuesta de valor">
            {socialProofBadges.map((b) => (
              <span key={b.text} className="hero-proof-item">
                <strong>{b.count}</strong> {b.text}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}
