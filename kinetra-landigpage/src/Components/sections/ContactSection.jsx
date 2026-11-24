import { useRef } from 'react'
import Heading from '../ui/Heading'
import Container from '../ui/Container'
import Section from '../ui/Section'
import Form from '../ui/Form'
import Input from '../ui/Input'
import Textarea from '../ui/Textarea'
import Select from '../ui/Select'
import Button from '../ui/Button'
import Card from '../ui/Card'
import Icon from '../ui/Icon'
import useInView from '../../Hook/useInView'
import useForm from '../../Hook/useForm'
import '../../Style/layout/components.css'

/* Contacto — Formulario: Nombre, Email, Teléfono, Tipo de consulta, Mensaje.
   Integra useForm + Skeleton de carga. Ready to wire with endpoint. */

export default function ContactSection({ onSuccess }) {
  const ref = useRef(null)
  const { className: animClass } = useInView('fade-up', 0.1, ref)

  const {
    fields,
    setField,
    errors,
    isSubmitting,
    isSent,
    isValid,
    submit,
  } = useForm({
    initialFields: {
      name: '',
      email: '',
      phone: '',
      consultType: '',
      message: '',
    },
    onSubmit: (data) => {
      // TODO (Fase 8): integración con endpoint de envío (p. ej., Webhook → CRM)
      window.console.log('Contacto enviado:', data)
    },
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    submit().then((ok) => {
      if (ok) onSuccess?.()
    })
  }

  return (
    <Section id="contacto" ref={ref} className={`contact-section ${animClass}`}>
      <Container>
        <Heading level={2} className="text-display-md contact-title">
          ¿Conoce cómo podemos ayudarte?
        </Heading>
        <p className="contact-sub text-body" style={{ maxWidth: 520 }}>
          Dinos tu proyecto y te respondemos en 24-48h. Sin compromiso.
        </p>

        <Card className="contact-form" aria-label="Formulario de contacto">
          {isSent ? (
            <div className="contact-success">
              <Icon name="check-icon" size="1.75rem" className="contact-success-icon" />
              <h3 className="contact-success-title">¡Gracias por escribirnos!</h3>
              <p className="contact-success-sub text-body-sm">
                Hemos recibido tu mensaje. Nos pondremos en contacto contigo en las próximas 24-48h.
              </p>
            </div>
          ) : (
            <Form onSubmit={handleSubmit} aria-label="Formulario de contacto">
              <div className="contact-grid">
                <Input
                  label="Tu nombre *"
                  placeholder="Ej. Ana García"
                  value={fields.name}
                  onChange={(e) => setField('name', e.target.value)}
                  error={errors.name}
                />
                <Input
                  label="Email *"
                  type="email"
                  placeholder="tuemail@ejemplo.com"
                  value={fields.email}
                  onChange={(e) => setField('email', e.target.value)}
                  error={errors.email}
                />
                <Input
                  label="Teléfono"
                  type="tel"
                  placeholder="+34 612 345 678"
                  value={fields.phone}
                  onChange={(e) => setField('phone', e.target.value)}
                />
                <Select
                  label="Tipo de consulta *"
                  options={[
                    { value: '', label: 'Selecciona una opción' },
                    { value: 'landing', label: 'Landing page profesional' },
                    { value: 'app-web', label: 'Aplicación web' },
                    { value: 'app-movil', label: 'Aplicación móvil' },
                    { value: 'automation', label: 'Automatización de procesos' },
                    { value: 'ia', label: 'Integración de IA' },
                    { value: 'gestion', label: 'Sistemas de gestión' },
                    { value: 'other', label: 'Otro / No estoy seguro' },
                  ]}
                  value={fields.consultType}
                  onChange={(e) => setField('consultType', e.target.value)}
                  error={errors.consultType}
                />
                <Textarea
                  label="Mensaje *"
                  placeholder="Cuéntanos qué necesitas: proyectos, objetivos, alcance, plazos..."
                  value={fields.message}
                  onChange={(e) => setField('message', e.target.value)}
                  error={errors.message}
                />
              </div>
              <div className="contact-actions">
                <Button type="submit" variant="primary" disabled={!isValid} className="contact-submit">
                  {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
                </Button>
                <span className="contact-guarantee text-body-sm">
                  Sin spam. Te respondemos en 24-48h.
                </span>
              </div>
            </Form>
          )}
        </Card>
      </Container>
    </Section>
  )
}
