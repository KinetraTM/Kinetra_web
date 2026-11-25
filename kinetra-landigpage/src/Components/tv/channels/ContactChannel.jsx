import { useState } from 'react'
import { Link } from 'react-router-dom'

/* CH 08 — CONTACTO (formulario local, sin endpoint externo) */

export default function ContactChannel() {
  const [fields, setFields] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const update = (key) => (event) => setFields((prev) => ({ ...prev, [key]: event.target.value }))

  const submit = (event) => {
    event.preventDefault()
    window.console.log('Solicitud Kinetra:', fields)
    setSent(true)
  }

  return (
    <section className="tv-channel tv-channel--contact">
      <p className="tv-eyebrow">[ CH 08 · SINTONIZAR PROYECTO ]</p>
      <h2 className="tv-headline tv-headline--sm">Cuéntanos qué necesitas</h2>
      <p className="tv-lead">Respondemos en 24-48h. Sin compromiso y sin spam.</p>

      {sent ? (
        <div className="tv-sent" role="status">
          <span className="tv-sent__icon" aria-hidden="true">
            ✓
          </span>
          <h3>¡Señal recibida!</h3>
          <p>Hemos registrado tu mensaje. Te responderemos en las próximas 24-48h.</p>
          <button type="button" className="tv-btn tv-btn--ghost" onClick={() => setSent(false)}>
            Enviar otro mensaje
          </button>
        </div>
      ) : (
        <form className="tv-form" onSubmit={submit}>
          <label className="tv-field">
            <span>Tu nombre</span>
            <input
              type="text"
              required
              placeholder="Ana García"
              value={fields.name}
              onChange={update('name')}
            />
          </label>
          <label className="tv-field">
            <span>Email</span>
            <input
              type="email"
              required
              placeholder="tuemail@ejemplo.com"
              value={fields.email}
              onChange={update('email')}
            />
          </label>
          <label className="tv-field tv-field--wide">
            <span>Mensaje</span>
            <textarea
              required
              rows="3"
              placeholder="Cuéntanos sobre tu proyecto, plazos y objetivos..."
              value={fields.message}
              onChange={update('message')}
            />
          </label>
          <button type="submit" className="tv-btn tv-btn--primary tv-form__submit">
            Enviar transmisión
          </button>
        </form>
      )}

      <nav className="tv-footer-links" aria-label="Enlaces adicionales">
        <Link to="/webs">/webs</Link>
        <Link to="/terminos">/terminos</Link>
        <Link to="/privacidad">/privacidad</Link>
      </nav>
    </section>
  )
}
