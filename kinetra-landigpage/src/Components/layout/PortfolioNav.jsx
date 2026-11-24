/* Barra de ruta para las páginas del portafolio de posibles webs. */
import { withBase } from '../../utils/basePath'

const PortfolioNav = ({ current = 'webs' }) => (
  <nav className="portfolio-nav" aria-label="Navegación del portafolio">
    <div className="container portfolio-nav__inner">
      <a className="portfolio-nav__brand" href={withBase('/')}>
        user@web:~$ <strong>Kinetra</strong>
      </a>
      <ul>
        <li>
          <a href={withBase('/')}>./inicio</a>
        </li>
        <li>
          <a href={withBase('/webs')} aria-current={current === 'webs' ? 'page' : undefined}>
            /webs
          </a>
        </li>
        <li>
          <a href={withBase('/terminos')}>/terminos</a>
        </li>
        <li>
          <a href={withBase('/privacidad')}>/privacidad</a>
        </li>
      </ul>
    </div>
  </nav>
)

export default PortfolioNav
