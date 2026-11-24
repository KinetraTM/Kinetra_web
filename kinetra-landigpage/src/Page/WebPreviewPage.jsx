import PortfolioNav from '../components/layout/PortfolioNav'
import Container from '../components/ui/Container'
import Heading from '../components/ui/Heading'
import SiteMockup from '../components/ui/SiteMockup'
import { getWebsite, websites } from '../data/portfolio'
import '../Style/layout/portfolio.css'

/* Vista previa de una posible web, con datos y enlaces a las demás propuestas. */

export default function WebPreviewPage({ slug }) {
  const site = getWebsite(slug)

  return (
    <>
      <PortfolioNav current="preview" />
      <main className="preview-page">
        <Container>
          {site ? (
            <>
              <a className="preview-back" href="/webs">
                ← cd ../webs
              </a>

              <Heading level={1} className="text-display-lg preview-title">
                {site.name}
              </Heading>
              <p className="preview-kind">
                {site.kind} · {site.preview.meta}
              </p>

              <SiteMockup site={site} />

              <p className="preview-description text-body">{site.description}</p>

              <div className="preview-columns">
                <section>
                  <h2>Stack sugerido</h2>
                  <ul>
                    {site.stack.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </section>
                <section>
                  <h2>Qué incluye</h2>
                  <ul>
                    {site.highlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </section>
              </div>

              <nav className="preview-other" aria-label="Otras propuestas">
                <span>Otras propuestas:</span>
                {websites
                  .filter((other) => other.slug !== site.slug)
                  .map((other) => (
                    <a key={other.slug} href={`/webs/${other.slug}`}>
                      ./{other.slug}
                    </a>
                  ))}
              </nav>
            </>
          ) : (
            <div className="preview-missing">
              <Heading level={1} className="text-display-lg preview-title">
                Sitio no encontrado
              </Heading>
              <p className="text-body">No existe una propuesta con esa ruta.</p>
              <a className="preview-back" href="/webs">
                ← cd ../webs
              </a>
            </div>
          )}
        </Container>
      </main>
    </>
  )
}
