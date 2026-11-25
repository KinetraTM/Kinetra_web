import { Link } from 'react-router-dom'

/* CH 404 — sin señal: fallback para cualquier ruta no registrada. */

export default function NotFoundChannel() {
  return (
    <section className="tv-channel tv-channel--no-signal">
      <p className="tv-eyebrow tv-eyebrow--error">[ CH 404 · SIN SEÑAL ]</p>
      <div className="tv-no-signal__display" aria-label="Error 404">
        <span>4</span>
        <span>0</span>
        <span>4</span>
      </div>
      <h2 className="tv-headline tv-headline--sm">No encontramos esa frecuencia</h2>
      <p className="tv-lead">
        La señal se perdió o el canal no existe. Vuelve a CH 01 · Inicio para seguir
        viendo la emisión de Kinetra.
      </p>

      <div className="tv-noise" aria-hidden="true">
        {Array.from({ length: 34 }, (_, index) => (
          <span key={index} />
        ))}
      </div>

      <Link to="/" className="tv-btn tv-btn--primary">
        Volver a CH 01
      </Link>
    </section>
  )
}
