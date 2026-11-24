import { useState } from 'react'
import '../../Style/layout/command-bar.css'

/* Consola interactiva ligera: navega entre secciones sin reemplazar el menú traditional. */

const TARGETS = {
  proyectos: 'proyectos',
  contacto: 'contacto',
  servicios: 'servicios',
  beneficios: 'beneficios',
  proceso: 'proceso',
  testimonios: 'testimonios',
  faq: 'faq',
  hero: 'hero',
}

const scrollToSection = (id) => {
  const element = document.getElementById(id)
  if (!element) return false
  element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  return true
}

export default function CommandBar() {
  const [value, setValue] = useState('')
  const [lines, setLines] = useState([
    { text: 'Kinetra CLI v1.0.0 — escribe "help" para ver los comandos.', kind: 'info' },
  ])

  const runCommand = (raw) => {
    const command = raw.trim().toLowerCase()
    if (!command) return

    if (command === 'clear') {
      setLines([])
      setValue('')
      return
    }

    const output = []

    if (command === 'webs') {
      output.push({ text: 'Abriendo ./webs', kind: 'info' })
      window.location.assign('/webs')
    } else if (command === 'help') {
      output.push({ text: 'Comandos: help | webs | proyectos | contacto | servicios | clear', kind: 'info' })
    } else if (TARGETS[command]) {
      const found = scrollToSection(TARGETS[command])
      output.push({
        text: found ? `Navegando a #${TARGETS[command]}` : `No se encontró la sección #${TARGETS[command]}`,
        kind: found ? 'info' : 'error',
      })
    } else {
      output.push({ text: `command not found: ${command}`, kind: 'error' })
    }

    setLines((current) =>
      [...current, { text: `$ ${command}`, kind: 'command' }, ...output].slice(-10)
    )
    setValue('')
  }

  return (
    <section className="command-bar" aria-label="Línea de comandos de Kinetra">
      {lines.length > 0 && (
        <div className="command-bar__output" aria-live="polite">
          {lines.map((line, index) => (
            <p key={`${index}-${line.text}`} className={`command-bar__line command-bar__line--${line.kind}`}>
              {line.text}
            </p>
          ))}
        </div>
      )}

      <form
        className="command-bar__form"
        onSubmit={(event) => {
          event.preventDefault()
          runCommand(value)
        }}
      >
        <label className="sr-only" htmlFor="kinetra-cli-input">
          Escribe un comando
        </label>
        <span className="command-bar__prompt" aria-hidden="true">
          user@web:~$
        </span>
        <input
          id="kinetra-cli-input"
          className="command-bar__input"
          type="text"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          placeholder="help"
          autoComplete="off"
          spellCheck="false"
        />
        <span className="command-bar__caret" aria-hidden="true">
          █
        </span>
      </form>
    </section>
  )
}
