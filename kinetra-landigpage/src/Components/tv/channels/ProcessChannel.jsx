import { Link } from 'react-router-dom'
import { processSteps } from '../../../data/channels'

/* CH 04 — PROCESO: secuencia de emisión, paso a paso. */

export default function ProcessChannel() {
  return (
    <section className="tv-channel tv-channel--process">
      <p className="tv-eyebrow">[ CH 04 · PROCESO ]</p>
      <h2 className="tv-headline tv-headline--sm">Del diagnóstico a la emisión</h2>
      <p className="tv-lead">
        Metodología ágil y transparente: una señal clara en cada entrega, sin sorpresas.
      </p>

      <ol className="tv-process">
        {processSteps.map((step) => (
          <li key={step.num} className="tv-process-step">
            <span className="tv-process-step__num">{step.num}</span>
            <div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          </li>
        ))}
      </ol>

      <Link to="/contacto" className="tv-btn tv-btn--primary">
        Iniciar sintonía
      </Link>
    </section>
  )
}
