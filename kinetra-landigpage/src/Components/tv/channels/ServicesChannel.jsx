import { Link } from 'react-router-dom'
import { services } from '../../../data/channels'

/* CH 02 — SERVICIOS */

export default function ServicesChannel() {
  return (
    <section className="tv-channel tv-channel--services">
      <p className="tv-eyebrow">[ CH 02 · SERVICIOS ]</p>
      <h2 className="tv-headline tv-headline--sm">Lo que podemos construir juntos</h2>
      <p className="tv-lead">
        Tres líneas de trabajo, una misma promesa: entregas reales, calidad comprobada y un
        proceso pensado para escalar.
      </p>

      <ul className="tv-services">
        {services.map((service) => (
          <li key={service.index} className="tv-service">
            <span className="tv-service__index">{service.index}</span>
            <div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </div>
            <code className="tv-service__tag">{service.tag}</code>
          </li>
        ))}
      </ul>

      <Link to="/contacto" className="tv-btn tv-btn--primary">
        Solicitar cotización
      </Link>
    </section>
  )
}
