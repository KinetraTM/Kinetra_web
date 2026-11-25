import { Link } from 'react-router-dom'
import { testimonials } from '../../../data/channels'

/* CH 06 — TESTIMONIOS: reseñas en formato de emisiones grabadas. */

export default function TestimonialsChannel() {
  return (
    <section className="tv-channel tv-channel--testimonials">
      <p className="tv-eyebrow">[ CH 06 · TESTIMONIOS ]</p>
      <h2 className="tv-headline tv-headline--sm">Lo que dicen los espectadores</h2>
      <p className="tv-lead">
        Historias reales de negocios que digitalizaron sus procesos con nosotros.
      </p>

      <ul className="tv-quotes">
        {testimonials.map((item) => (
          <li key={item.name} className="tv-quote">
            <span className="tv-quote__mark" aria-hidden="true">
              “
            </span>
            <p>{item.text}</p>
            <footer>
              <strong>{item.name}</strong>
              <span>{item.role}</span>
            </footer>
          </li>
        ))}
      </ul>

      <Link to="/contacto" className="tv-btn tv-btn--primary">
        Ser el próximo caso
      </Link>
    </section>
  )
}
