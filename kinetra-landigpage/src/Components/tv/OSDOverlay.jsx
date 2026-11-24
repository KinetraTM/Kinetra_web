/* On-Screen Display: mensajes breves de canal, volumen, color y desmagnetizado. */

export default function OSDOverlay({ message }) {
  if (!message) return null

  return (
    <div key={message.id} className={`tv-osd tv-osd--${message.tone}`} role="status">
      <span className="tv-osd__marker" aria-hidden="true">
        ▸
      </span>
      {message.text}
    </div>
  )
}
