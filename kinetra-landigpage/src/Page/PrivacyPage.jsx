import Container from '../Components/ui/Container'
import Heading from '../Components/ui/Heading'
import '../Style/index.css'

/* Política de privacidad — Plantilla clara. Revisar con asesoría legal antes de publicar. */

export default function PrivacyPage() {
  return (
    <main className="privacy-page">
      <Container className="legal-page">
        <Heading level={1} className="text-display-lg">Política de privacidad</Heading>
        <p className="text-body" style={{ maxWidth: 720 }}>
          En Kinetra estamos comprometidos con la protección de su información. Esta política
          explica qué datos recopilamos, cómo se usan y con quién compartimos. Kinetra nunca
          vende datos personales de clientes. Puede contactarnos para ver, modificar o eliminar
          su información personal según corresponda a su jurisdicción.
        </p>
      </Container>
    </main>
  )
}
