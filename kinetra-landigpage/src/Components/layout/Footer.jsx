import { withBase } from "../../utils/basePath";
import Button from "../ui/Button";
import Icon from "../ui/Icon";
import Heading from "../ui/Heading";
import Container from "../ui/Container";
import "../../Style/layout/components.css";

/* Footer — logo + columns (servicios, páginas, legal, social) + CTA */
const Footer = ({ onContactClick = () => {} }) => (
  <footer className="footer" id="footer">
    <Container className="footer-top" id="footer-top">
      <div className="footer-brand">
        <Heading level={3} className="text-display-lg footer-brand-text">
          Kinetra
        </Heading>
        <p className="footer-brand-tagline text-body-sm">
          Software a medida que digitaliza tu negocio.
        </p>
        <Button
          variant="primary"
          href="#contacto"
          onClick={onContactClick}
          className="footer-cta"
        >
          Conoce nuestros servicios
        </Button>
      </div>

      <nav className="footer-columns" aria-label="Enlaces">
        <div>
          <h4 className="footer-col-title">Servicios</h4>
          <ul className="footer-col-list">
            {[
              "Desarrollo de software",
              "Landing pages",
              "Aplicaciones web",
              "Aplicaciones móviles",
            ].map((s) => (
              <li key={s}>
                <a href="#servicios">{s}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="footer-col-title">Páginas</h4>
          <ul className="footer-col-list">
            {[
              { label: "Inicio", href: "#hero" },
              { label: "Posibles webs", href: withBase("/webs") },
              { label: "Servicios", href: "#servicios" },
              { label: "Proceso", href: "#proceso" },
              { label: "Proyectos", href: "#proyectos" },
              { label: "Testimonios", href: "#testimonios" },
              { label: "FAQ", href: "#faq" },
            ].map((p) => (
              <li key={p.href}>
                <a href={p.href}>{p.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="footer-col-title">Legal</h4>
          <ul className="footer-col-list">
            <li>
              <a href={withBase("/terminos")} className="footer-legal">
                Términos y condiciones
              </a>
            </li>
            <li>
              <a href={withBase("/privacidad")} className="footer-legal">
                Política de privacidad
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="footer-col-title">Síguenos</h4>
          <ul className="footer-col-list footer-social">
            {[
              {
                name: "github-icon",
                href: "https://github.com/",
                label: "GitHub",
              },
              { name: "x-icon", href: "https://x.com/", label: "X" },
              {
                name: "whatsapp-icon",
                href: "https://linkedin.com/",
                label: "whatsapp",
              },
              {
                name: "instagram-icon",
                href: "https://linkedin.com/",
                label: "instagram",
              },
            ].map((s) => (
              <li key={s.name}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                >
                  <Icon name={s.name} size="1.25rem" />
                  <span className="sr-only">{s.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <div className="footer-copy">
        <p className="footer-copy-text">
          © 2026 Kinetra. Reservados todos los derechos.
        </p>
      </div>
    </Container>
  </footer>
);

export default Footer;
