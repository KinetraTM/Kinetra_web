import { useRef } from 'react'

/* Perilla genérica: clic, arrastre vertical, rueda y teclado. */

const clamp = (value, min, max) => Math.min(max, Math.max(min, value))

export default function RotaryKnob({
  label,
  display,
  value,
  min,
  max,
  step = 1,
  rotationFor,
  onChange,
  onTap,
  onInteract,
  disabled = false,
}) {
  const dragRef = useRef(null)

  const commit = (next) => {
    const rounded = clamp(Math.round(next / step) * step, min, max)
    if (rounded !== value) {
      onChange(rounded)
      onInteract?.()
    }
  }

  const handlePointerDown = (event) => {
    if (disabled) return
    dragRef.current = { startY: event.clientY, startValue: value, moved: false }
    try {
      event.currentTarget.setPointerCapture(event.pointerId)
    } catch {
      /* Captura opcional según navegador */
    }
  }

  const handlePointerMove = (event) => {
    if (!dragRef.current) return
    const delta = dragRef.current.startY - event.clientY
    if (Math.abs(delta) > 3) dragRef.current.moved = true
    commit(dragRef.current.startValue + (delta / 8) * step)
  }

  const handlePointerUp = () => {
    if (!dragRef.current) return
    const wasTap = !dragRef.current.moved
    dragRef.current = null
    if (wasTap) {
      onTap?.()
      onInteract?.()
    }
  }

  const handleWheel = (event) => {
    if (disabled) return
    event.preventDefault()
    commit(value + (event.deltaY < 0 ? step : -step))
  }

  const handleKeyDown = (event) => {
    if (disabled) return
    if (['ArrowUp', 'ArrowRight'].includes(event.key)) {
      event.preventDefault()
      commit(value + step)
    } else if (['ArrowDown', 'ArrowLeft'].includes(event.key)) {
      event.preventDefault()
      commit(value - step)
    } else if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      onTap?.()
      onInteract?.()
    }
  }

  return (
    <div className="tv-knob-unit">
      <div
        className={`tv-knob ${disabled ? 'tv-knob--disabled' : ''}`}
        role="slider"
        tabIndex={disabled ? -1 : 0}
        aria-label={label}
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={value}
        aria-valuetext={display}
        aria-disabled={disabled}
        style={{ '--knob-rotation': `${rotationFor(value)}deg` }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        onWheel={handleWheel}
        onKeyDown={handleKeyDown}
      >
        <span className="tv-knob__face">
          <span className="tv-knob__mark" aria-hidden="true" />
        </span>
        <span className="tv-knob__ticks" aria-hidden="true" />
      </div>
      <span className="tv-knob__label">{label}</span>
      <span className="tv-knob__display">{display}</span>
    </div>
  )
}
