import { useRef } from 'react'
import Heading from '../ui/Heading'
import Container from '../ui/Container'
import Section from '../ui/Section'
import useInView from '../../Hook/useInView'
import '../../Style/layout/components.css'

/* Testimonios — Placeholder para ejemplos reales. Grid de tarjetas. */

const testimonials = Array.from({ length: 4 }, (_, i) => ({
  name: `Cliente ${i + 1}`,
  role: 'Fundador / CEO',
  company: 'Empresa tecnológica',
  caseText: 'Crecimos un 250% en tres meses con la solución digital que diseñamos juntos.',
  photo: null, // Fase 4: URL relativa de foto local
}))

export default function TestimonialsSection() {
  const ref = useRef(null)
  const { className: animClass } = useInView('fade-up', 0.2, ref)

  return (
    <Section id="testimonios" ref={ref} className={`testimonials-section ${animClass}`}>
      <Container>
        <Heading level={2} className="text-display-md testimonials-title">
          Lo que nuestros clientes dicen
        </Heading>
        <p className="testimonials-sub text-body" style={{ maxWidth: 640 }}>
          Cientos de negocios digitalizados: historias, resultados y confianza.
        </p>

        <div className="grid grid-testimonials testimonials-list" aria-label="Testimonios de clientes" data-testimonials-placeholder>
          {testimonials.map((t) => (
            <article key={t.name} className="testimonial-card">
              <div className="testimonial-card-header">
                <div className="testimonial-person">
                  <span className="testimonial-name">{t.name}</span>
                  <span className="testimonial-role text-body-sm">{t.role} · {t.company}</span>
                </div>
              </div>
              <p className="testimonial-text">"{t.caseText}"</p>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  )
}
