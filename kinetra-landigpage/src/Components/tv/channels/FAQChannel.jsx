import { Link } from 'react-router-dom'
import { faqs } from '../../../data/channels'

/* CH 07 — FAQ: acordeón nativo con estética de canal. */

export default function FAQChannel() {
  return (
    <section className="tv-channel tv-channel--faq">
      <p className="tv-eyebrow">[ CH 07 · FAQ ]</p>
      <h2 className="tv-headline tv-headline--sm">Preguntas frecuentes</h2>
      <p className="tv-lead">Las dudas más comunes antes de sintonizar un proyecto.</p>

      <div className="tv-faq">
        {faqs.map((faq, index) => (
          <details key={faq.q} className="tv-faq-item" name="tv-faq">
            <summary>
              <span className="tv-faq-item__num">0{index + 1}</span>
              <span>{faq.q}</span>
            </summary>
            <p>{faq.a}</p>
          </details>
        ))}
      </div>

      <Link to="/contacto" className="tv-btn tv-btn--primary">
        Hacer otra pregunta
      </Link>
    </section>
  )
}
