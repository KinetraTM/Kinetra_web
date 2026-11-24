import PortfolioNav from '../Components/layout/PortfolioNav'
import Container from '../Components/ui/Container'
import Heading from '../Components/ui/Heading'
import SiteMockup from '../Components/ui/SiteMockup'
import { websites } from '../data/portfolio'
import { withBase } from '../utils/basePath'
import '../Style/layout/portfolio.css'

/* Índice de posibles webs: cada tarjeta abre una vista previa navegable. */

export default function PortfolioPage() {
  return (
    <>
      <PortfolioNav current="webs" />
      <main className="portfolio-page">
        <Container>
          <Heading level={1} className="text-display-lg portfolio-title">
            Posibles webs
          </Heading>
          <p className="portfolio-intro text-body">
            Tres propuestas de sitio para distintos objetivos: producto, editorial y operación.
            Cada una se puede abrir para ver cómo quedaría la interfaz completa.
          </p>

          <div className="portfolio-grid" aria-label="Propuestas de webs">
            {websites.map((site) => (
              <a key={site.slug} className="portfolio-card" href={withBase(`/webs/${site.slug}`)}>
                <span className="portfolio-card__meta">
                  <span>{site.kind}</span>
                  <span>→ ./abrir</span>
                </span>
                <SiteMockup site={site} mini />
                <h2 className="portfolio-card__title">{site.name}</h2>
                <p className="portfolio-card__summary">{site.summary}</p>
              </a>
            ))}
          </div>
        </Container>
      </main>
    </>
  )
}
