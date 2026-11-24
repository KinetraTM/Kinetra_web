import { useEffect, useRef } from 'react'

/* Ráfaga de nieve a COLOR sobre canvas, usada al cambiar de canal. */

const COLORS = ['#00F0FF', '#FF2A6D', '#FFB800', '#05FFA1', '#8B5CF6', '#F8FAFC']

export default function StaticBurst({ active }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    if (!active) return undefined
    const canvas = canvasRef.current
    if (!canvas) return undefined
    const ctx = canvas.getContext('2d')
    let frame
    let ticks = 0

    const draw = () => {
      const cell = 4
      ctx.globalAlpha = 1
      ctx.fillStyle = '#0B1021'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      for (let y = 0; y < canvas.height; y += cell) {
        for (let x = 0; x < canvas.width; x += cell) {
          if (Math.random() > 0.3) {
            ctx.globalAlpha = 0.35 + Math.random() * 0.65
            ctx.fillStyle = COLORS[Math.floor(Math.random() * COLORS.length)]
            ctx.fillRect(x, y, cell, cell)
          }
        }
      }

      ctx.globalAlpha = 0.6
      ctx.fillStyle = '#00F0FF'
      ctx.fillRect(0, Math.random() * canvas.height, canvas.width, 2)
      ctx.globalAlpha = 1

      ticks += 1
      if (ticks < 14) frame = requestAnimationFrame(draw)
    }

    draw()
    return () => cancelAnimationFrame(frame)
  }, [active])

  if (!active) return null

  return <canvas ref={canvasRef} width={320} height={200} className="tv-static" aria-hidden="true" />
}
