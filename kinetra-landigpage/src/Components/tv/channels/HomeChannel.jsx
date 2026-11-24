/* CH 01 — INICIO */

export default function HomeChannel({ onGoChannel }) {
  return (
    <section className="tv-channel tv-channel--home">
      <p className="tv-eyebrow">[ KINETRA · EMISIÓN PRINCIPAL ]</p>
      <h1 className="tv-headline">
        Software a medida que <span>digitaliza</span> y crece tu negocio
      </h1>
      <p className="tv-lead">
        Startups y empresas que necesitan una web, una app o un proceso automatizado sin miedo
        a la tecnología. Desarrollo a medida, IA y gestión integrada: entregado de la mano.
      </p>

      <div className="tv-actions">
        <button type="button" className="tv-btn tv-btn--primary" onClick={() => onGoChannel(3)}>
          Sintonizar Proyecto
        </button>
        <button type="button" className="tv-btn tv-btn--ghost" onClick={() => onGoChannel(1)}>
          Ver servicios
        </button>
      </div>

      <div className="tv-proof">
        <span className="tv-proof__dot" aria-hidden="true" />
        <strong>20+</strong> clientes digitalizados · señal estable desde 2020
      </div>

      <div className="tv-signal" aria-hidden="true">
        {[38, 62, 45, 80, 55, 92, 70, 48].map((height, index) => (
          <span key={index} style={{ height: `${height}%` }} />
        ))}
      </div>
    </section>
  )
}
