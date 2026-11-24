import RotaryKnob from "./RotaryKnob";
import { CHANNELS } from "../../data/channels";
import { NavLinks } from "../layout/Navbar";

/* Panel físico: perillas, botones, LED y altavoz. */

const channelRotation = (value) => -135 + value * 90;
const volumeRotation = (value) => -135 + (value / 100) * 270;

/* Derivamos las secciones del panel de TV de las rutas del Navbar. */
const NAV_SECTIONS = NavLinks().map((link) => ({
  key: link.href.startsWith("#") ? link.href.slice(1) : link.href,
  label: link.label,
  href: link.href,
}));

const navigateToSection = (href) => {
  const id = href.startsWith("#") ? href.slice(1) : null;
  if (id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  } else if (href.startsWith("/")) {
    window.location.assign(href);
  }
};
export default function ControlPanel({
  channel,
  volume,
  power,
  onChannelChange,
  onVolumeChange,
  onPower,
  onInteract,
}) {
  return (
    <aside
      className="tv-controls"
      aria-label="Panel de controles del televisor"
    >
      <div className="tv-controls__brand">
        KINETRA
        <span>TRINITRON 2000</span>
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
          className={`tv-physical-btn tv-physical-btn--power ${power ? "is-on" : ""}`}
          onClick={onPower}
          aria-pressed={power}
        >
          <span
            className={`tv-led ${power ? "tv-led--on" : ""}`}
            aria-hidden="true"
          />
          POWER
        </button>
      </div>

      <div className="tv-controls__nav" aria-label="Navegación por secciones">
        {NAV_SECTIONS.map((section) => (
          <button
            key={section.key}
            type="button"
            className="tv-nav-btn tv-physical-btn"
            onClick={() => navigateToSection(section.href)}
            aria-label={`Navegar a ${section.label}`}
          >
            {section.label}
          </button>
        ))}
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
  );
}
