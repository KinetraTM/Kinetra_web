import { useRef } from 'react'
import Heading from '../ui/Heading'
import Container from '../ui/Container'
import Section from '../ui/Section'
import Icon from '../ui/Icon'
import useInView from '../../Hook/useInView'
import '../../Style/layout/components.css'

/* FAQ — Acordeón accesible. Usa <details> + ARIA. */

const faqs = [
  {
    q: '¿Cuánto tiempo lleva en realizar un proyecto con Kinetra?',
    a: 'Desde 4 semanas (landing/desarrollo rápido) hasta 8-12 semanas (apps completas, sistemas de gestión). Estimamos fechas realistas desde el inicio.',
  },
  {
    q: '¿Necesito saber programar o tener conocimientos técnicos?',
    a: 'Nada. Nosotros nos encargamos de todo: diseño, desarrollo, pruebas y entrega. Su rol es dar datos, acudir a reuniones y validar los resultados.',
  },
  {
    q: '¿Qué incluye el servicio de soporte técnico?',
    a: 'Actualizaciones, correcciones de bugs y optimizaciones de rendimiento. Se programa asignación por tickets a través de email o portales de tarea.',
  },
  {
    q: '¿Qué pasa si no tenemos claras mis ideas al iniciar?',
    a: 'El diagnóstico del proceso (_Process) es el primer paso: diseñamos junto a usted y adjustamos los alcances a medida que avanza.',
  },
  {
    q: '¿Tiene Kinetra presencia en todos los países?',
    a: 'Trabajamos remota y remotamente: diseñamos un servicio para los clientes que necesitan presencia online. Queremos aplicar conmosques de Kinetra de cualquier origen.',
  },
  {
    q: '¿Puedo pagar por etapas?',
    a: 'Sí. Estructuramos el contrato en hitos con pagos aprobados en cada entrega (25-30-25-20). Todo confirmado por Agreement beforehand.',
  },
  {
    q: '¿Dónde puedo ver ejemplos de tu trabajo?',
    a: 'En el apartado de Proyectos; que también puedes pedir de capturar casos parciales. Estamos construyendo cada vez más historias.',
  },
]

export default function FAQSection() {
  const ref = useRef(null)
  const { className: animClass } = useInView('fade-up', 0.2, ref)

  return (
    <Section id="faq" ref={ref} className={`faq-section ${animClass}`} aria-labelledby="faq-title">
      <Container>
        <Heading level={2} id="faq-title" className="text-display-md faq-title">
          Preguntas frecuentes
        </Heading>
        <div className="faq-grid" role="group" aria-label="Preguntas y respuestas frecuentes">
          {faqs.map((faq, i) => (
            <details
              key={i}
              className="faq-item"
              name={`faq-${i}`}
              aria-label={`Pregunta frecuente ${i + 1}`}
            >
              <summary className="faq-question">
                <span className="faq-question-text">{faq.q}</span>
                <Icon name="chevron-down-icon" size="1.25rem" className="faq-icon" aria-hidden="true" />
              </summary>
              <div className="faq-answer">
                <p className="text-body">{faq.a}</p>
              </div>
            </details>
          ))}
        </div>
      </Container>
    </Section>
  )
}
