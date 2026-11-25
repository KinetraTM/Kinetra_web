import { Link } from 'react-router-dom'
import { websites } from '../../../data/portfolio'

/* CH 03 — WEBS: propuestas navegables emitidas dentro del tubo. */

export default function WebsChannel() {
  return (
    <section className="tv-channel tv-channel--webs">
      <p className="tv-eyebrow">[ CH 03 · WEBS ]</p>
      <h2 className="tv-headline tv-headline--sm">Tres señales, tres propuestas</h2>
      <p className="tv-lead">
        Ejemplos de sitios según el objetivo: producto, editorial u operación. Abre cada uno
        para ver la interfaz completa.
      </p>

      <ul className="tv-web-list">
        {websites.map((site, index) => (
          <li key={site.slug} className="tv-web">
            <span className="tv-web__index">0{index + 1}</span>
            <div className="tv-web__body">
              <h3>{site.name}</h3>
              <p>{site.summary}</p>
              <Link to={`/webs/${site.slug}`} className="tv-web__link">
                ./abrir vista previa →
              </Link>
            </div>
            <code className="tv-web__tag">{site.kind}</code>
          </li>
        ))}
      </ul>

      <div className="tv-actions">
        <Link to="/contacto" className="tv-btn tv-btn--primary">
          Quiero una web así
        </Link>
        <Link to="/proyectos" className="tv-btn tv-btn--ghost">
          Ver proyectos
        </Link>
      </div>
    </section>
  )
}
