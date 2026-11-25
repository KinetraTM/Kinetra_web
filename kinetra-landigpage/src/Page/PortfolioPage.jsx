import { Link } from 'react-router-dom'
import PortfolioNav from '../components/layout/PortfolioNav'
import Container from '../components/ui/Container'
import Heading from '../components/ui/Heading'
import SiteMockup from '../components/ui/SiteMockup'
import { websites } from '../data/portfolio'
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
              <Link key={site.slug} className="portfolio-card" to={`/webs/${site.slug}`}>
                <span className="portfolio-card__meta">
                  <span>{site.kind}</span>
                  <span>→ ./abrir</span>
                </span>
                <SiteMockup site={site} mini />
                <h2 className="portfolio-card__title">{site.name}</h2>
                <p className="portfolio-card__summary">{site.summary}</p>
              </Link>
            ))}
          </div>
        </Container>
      </main>
    </>
  )
}
