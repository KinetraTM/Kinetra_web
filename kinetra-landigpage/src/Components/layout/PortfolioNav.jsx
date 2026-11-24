/* Barra de ruta para las páginas del portafolio de posibles webs. */

const PortfolioNav = ({ current = 'webs' }) => (
  <nav className="portfolio-nav" aria-label="Navegación del portafolio">
    <div className="container portfolio-nav__inner">
      <a className="portfolio-nav__brand" href="/">
        user@web:~$ <strong>Kinetra</strong>
      </a>
      <ul>
        <li>
          <a href="/">./inicio</a>
        </li>
        <li>
          <a href="/webs" aria-current={current === 'webs' ? 'page' : undefined}>
            /webs
          </a>
        </li>
        <li>
          <a href="/terminos">/terminos</a>
        </li>
        <li>
          <a href="/privacidad">/privacidad</a>
        </li>
      </ul>
    </div>
  </nav>
)

export default PortfolioNav
