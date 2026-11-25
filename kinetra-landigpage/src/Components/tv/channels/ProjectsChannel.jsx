import { useState } from 'react'
import { Link } from 'react-router-dom'
import { projects } from '../../../data/channels'

/* CH 05 — PROYECTOS (vitrina estilo emisión en vivo) */

export default function ProjectsChannel() {
  const [selectedId, setSelectedId] = useState(projects[0].id)
  const selected = projects.find((project) => project.id === selectedId) ?? projects[0]

  return (
    <section className="tv-channel tv-channel--projects">
      <p className="tv-eyebrow">[ CH 05 · PROYECTOS ]</p>
      <h2 className="tv-headline tv-headline--sm">Trabajos realizados</h2>

      <div className="tv-projects">
        <div className="tv-project-list" role="group" aria-label="Seleccionar proyecto">
          {projects.map((project) => (
            <button
              key={project.id}
              type="button"
              className={`tv-project-item ${project.id === selectedId ? 'is-active' : ''}`}
              onClick={() => setSelectedId(project.id)}
              aria-pressed={project.id === selectedId}
            >
              <span className="tv-project-item__code">{project.signal}</span>
              <span className="tv-project-item__title">{project.title}</span>
              <span className="tv-project-item__category">{project.category}</span>
            </button>
          ))}
        </div>

        <div className="tv-live-panel">
          <div className="tv-live-panel__head">
            <span className="tv-live">
              <span className="tv-live__dot" aria-hidden="true" /> EN VIVO
            </span>
            <span>{selected.signal}</span>
          </div>
          <div className="tv-live-panel__screen">
            <div className="tv-live-panel__bars" aria-hidden="true">
              {[30, 55, 72, 44, 88, 60, 35, 78].map((height, index) => (
                <span key={index} style={{ height: `${height}%` }} />
              ))}
            </div>
            <h3>{selected.title}</h3>
            <p>{selected.description}</p>
            <strong className="tv-live-panel__metric">{selected.metric}</strong>
          </div>
        </div>
      </div>

      <Link to="/contacto" className="tv-btn tv-btn--primary">
        Encargar uno similar
      </Link>
    </section>
  )
}
