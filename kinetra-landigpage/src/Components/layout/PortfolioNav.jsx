import { Link } from 'react-router-dom'

/* Barra de ruta para las páginas del portafolio de posibles webs. */

const PortfolioNav = ({ current = 'webs' }) => (
  <nav className="portfolio-nav" aria-label="Navegación del portafolio">
    <div className="container portfolio-nav__inner">
      <Link className="portfolio-nav__brand" to="/">
        user@web:~$ <strong>Kinetra</strong>
      </Link>
      <ul>
        <li>
          <Link to="/">./inicio</Link>
        </li>
        <li>
          <Link to="/webs" aria-current={current === 'webs' ? 'page' : undefined}>
            /webs
          </Link>
        </li>
        <li>
          <Link to="/terminos">/terminos</Link>
        </li>
        <li>
          <Link to="/privacidad">/privacidad</Link>
        </li>
      </ul>
    </div>
  </nav>
)

export default PortfolioNav
