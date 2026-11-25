import { NavLink } from 'react-router-dom'
import RotaryKnob from './RotaryKnob'
import { CHANNELS, NAV_CHANNELS } from '../../data/channels'

/* Panel físico: perillas, botones, LED y altavoz.
   La NAV usa NavLink: la ruta activa enciende el indicador del botón. */

const channelRotation = (value) => -135 + (value / (CHANNELS.length - 1)) * 270
const volumeRotation = (value) => -135 + (value / 100) * 270

export default function ControlPanel({
  channel,
  channelLabel,
  volume,
  power,
  onChannelChange,
  onVolumeChange,
  onPower,
  onInteract,
}) {
  const handleNavClick = (event) => {
    onInteract?.()
    if (!power) event.preventDefault()
  }

  const step = (delta) => {
    onInteract?.()
    onChannelChange(channel + delta)
  }

  return (
    <aside className="tv-controls" aria-label="Panel de controles del televisor">
      <button
        type="button"
        className="tv-controls__brand"
        onClick={() => {
          onInteract?.()
          onChannelChange(0)
        }}
        aria-label="KINETRA — volver a CH 01 Inicio"
      >
        KINETRA
        <span>TRINITRON 2000</span>
      </button>

      <div className="tv-controls__knobs">
        <RotaryKnob
          label="CH SELECTOR"
          display={channelLabel}
          value={channel}
          min={0}
          max={CHANNELS.length - 1}
          step={1}
          rotationFor={channelRotation}
          onChange={onChannelChange}
          onTap={() => onChannelChange(channel + 1)}
          onInteract={onInteract}
          disabled={!power}
        />
        <RotaryKnob
          label="VOL / AUDIO"
          display={`${volume}%`}
          value={volume}
          min={0}
          max={100}
          step={5}
          rotationFor={volumeRotation}
          onChange={onVolumeChange}
          onTap={() => onVolumeChange(volume + 5)}
          onInteract={onInteract}
        />
      </div>

      <div className="tv-controls__buttons">
        <button
          type="button"
          className={`tv-physical-btn tv-physical-btn--power ${power ? 'is-on' : ''}`}
          onClick={onPower}
          aria-pressed={power}
        >
          <span className={`tv-led ${power ? 'tv-led--on' : ''}`} aria-hidden="true" />
          POWER
        </button>
      </div>

      <div className="tv-controls__nav" aria-label="Navegación por secciones">
        {NAV_CHANNELS.map((section) => (
          <NavLink
            key={section.id}
            to={section.path}
            onClick={handleNavClick}
            className={({ isActive }) =>
              `tv-nav-btn tv-physical-btn${isActive ? ' is-active' : ''}`
            }
          >
            {section.navLabel}
          </NavLink>
        ))}
      </div>

      <div className="tv-controls__stepper">
        <button
          type="button"
          className="tv-step-btn"
          onClick={() => step(-1)}
          aria-label="Canal anterior"
        >
          CH ▲
        </button>
        <button
          type="button"
          className="tv-step-btn"
          onClick={() => step(1)}
          aria-label="Canal siguiente"
        >
          CH ▼
        </button>
      </div>

      <div className="tv-speaker" aria-hidden="true">
        {Array.from({ length: 14 }, (_, index) => (
          <span key={index} />
        ))}
      </div>
      <p className="tv-controls__hint">↑ ↓ o teclas 1-8</p>
    </aside>
  )
}
