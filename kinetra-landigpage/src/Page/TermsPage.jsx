import Container from '../Components/ui/Container'
import Heading from '../Components/ui/Heading'
import '../Style/index.css'

/* Términos y condiciones — Plantilla clara. Revisar con asesoría legal antes de publicar. */

export default function TermsPage() {
  return (
    <main className="terms-page">
      <Container className="legal-page">
        <Heading level={1} className="text-display-lg">Términos y condiciones</Heading>
        <p className="text-body" style={{ maxWidth: 720 }}>
          Bienvenido a la página de Kinetra. Estos términos regulan el uso de nuestros servicios
          de software a medida, landing pages y consultoría tecnológica. Al usar nuestro sitio,
          acceso o servicio, usted acepta estos términos. Kinetra se reserva el derecho de
          modificarlos en cualquier momento; las versiones vigentes se publicarán aquí.
        </p>
      </Container>
    </main>
  )
}
