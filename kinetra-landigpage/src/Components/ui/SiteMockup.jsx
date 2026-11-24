/* Vista previa de una posible web. Es decorativa: no sustituye la navegación real. */

export default function SiteMockup({ site, mini = false }) {
  const { variant, preview } = site
  const { brand, headline, subline, cta, meta } = preview

  return (
    <div className={`mock mock--${variant} ${mini ? 'mock--mini' : ''}`} aria-label={`Vista previa de ${site.name}`}>
      <div className="mock__chrome" aria-hidden="true">
        <span className="mock__dots">● ● ●</span>
        <span className="mock__file">{brand.toLowerCase()}.tsx</span>
      </div>

      <div className="mock__body">
        {variant === 'producto' && (
          <>
            <div className="mock__top">
              <span className="mock__brand">{brand}</span>
              <span className="mock__nav">/producto /docs /precios</span>
            </div>
            <div className="mock__hero">
              <h4 className="mock__headline">{headline}</h4>
              <p className="mock__subline">{subline}</p>
              <span className="mock__cta">[ {cta} ]</span>
            </div>
            <div className="mock__tiles">
              <span>[ 01 ] Escalable</span>
              <span>[ 02 ] Observable</span>
              <span>[ 03 ] Seguro</span>
            </div>
          </>
        )}

        {variant === 'editorial' && (
          <>
            <div className="mock__top">
              <span className="mock__brand">{brand}</span>
              <span className="mock__nav">{meta}</span>
            </div>
            <div className="mock__editorial">
              <ol className="mock__index">
                <li>01 — Manifiesto</li>
                <li>02 — Proyectos</li>
                <li>03 — Estudio</li>
              </ol>
              <div className="mock__editorial-copy">
                <h4 className="mock__headline">{headline}</h4>
                <p className="mock__subline">{subline}</p>
                <span className="mock__cta">./{cta}</span>
              </div>
            </div>
          </>
        )}

        {variant === 'dashboard' && (
          <>
            <div className="mock__top">
              <span className="mock__brand">{brand}</span>
              <span className="mock__nav">● {meta}</span>
            </div>
            <h4 className="mock__headline mock__headline--sm">{headline}</h4>
            <p className="mock__subline">{subline}</p>
            <div className="mock__stats">
              <div className="mock__stat">
                <span className="mock__stat-label">Entregas</span>
                <strong>128</strong>
                <span className="mock__bar" style={{ width: '82%' }} />
              </div>
              <div className="mock__stat">
                <span className="mock__stat-label">Uptime</span>
                <strong>99.9%</strong>
                <span className="mock__bar" style={{ width: '96%' }} />
              </div>
              <div className="mock__stat">
                <span className="mock__stat-label">Tickets</span>
                <strong>04</strong>
                <span className="mock__bar" style={{ width: '28%' }} />
              </div>
            </div>
            <span className="mock__cta">[ {cta} ]</span>
          </>
        )}
      </div>
    </div>
  )
}
