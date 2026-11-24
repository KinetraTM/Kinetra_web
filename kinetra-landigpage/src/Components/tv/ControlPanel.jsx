import RotaryKnob from './RotaryKnob'
import { CHANNELS, COLOR_MODES } from '../../data/channels'

/* Panel físico: perillas, botones, LED y altavoz. */

const channelRotation = (value) => -135 + value * 90
const volumeRotation = (value) => -135 + (value / 100) * 270

export default function ControlPanel({
  channel,
  volume,
  colorMode,
  power,
  onChannelChange,
  onVolumeChange,
  onPower,
  onColorMode,
  onDegauss,
  onInteract,
}) {
  return (
    <aside className="tv-controls" aria-label="Panel de controles del televisor">
      <div className="tv-controls__brand">
        KINETRA
        <span>TRINITRON 2000 · COLOR</span>
      </div>

      <div className="tv-controls__knobs">
        <RotaryKnob
          label="CH SELECTOR"
          display={CHANNELS[channel].code}
          value={channel}
          min={0}
          max={3}
          step={1}
          rotationFor={channelRotation}
          onChange={onChannelChange}
          onTap={() => onChannelChange(channel + 1)}
          onInteract={onInteract}
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
        <button type="button" className="tv-physical-btn" onClick={onColorMode}>
          COLOR MODE
          <small>{COLOR_MODES[colorMode].short}</small>
        </button>
        <button type="button" className="tv-physical-btn" onClick={onDegauss}>
          DEGAUSS
        </button>
      </div>

      <div className="tv-controls__stepper">
        <button
          type="button"
          className="tv-step-btn"
          onClick={() => onChannelChange(channel - 1)}
          aria-label="Canal anterior"
        >
          CH ▲
        </button>
        <button
          type="button"
          className="tv-step-btn"
          onClick={() => onChannelChange(channel + 1)}
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
      <p className="tv-controls__hint">↑ ↓ o teclas 1-4</p>
    </aside>
  )
}
