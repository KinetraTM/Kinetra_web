import { useCallback, useEffect, useRef } from 'react'

/* Sonidos mecánicos sintetizados con Web Audio API, sin archivos externos. */

const makeNoise = (ctx, duration) => {
  const buffer = ctx.createBuffer(1, Math.floor(ctx.sampleRate * duration), ctx.sampleRate)
  const data = buffer.getChannelData(0)
  for (let i = 0; i < data.length; i += 1) data[i] = Math.random() * 2 - 1
  return buffer
}

export default function useSynthAudio(volume) {
  const ctxRef = useRef(null)
  const masterRef = useRef(null)
  const volumeRef = useRef(volume)

  useEffect(() => {
    volumeRef.current = volume
    if (masterRef.current) masterRef.current.gain.value = (volume / 100) * 0.32
  }, [volume])

  const ensureContext = useCallback(() => {
    if (!ctxRef.current) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext
      if (!AudioCtx) return null
      const ctx = new AudioCtx()
      const master = ctx.createGain()
      master.gain.value = (volumeRef.current / 100) * 0.32
      master.connect(ctx.destination)
      ctxRef.current = ctx
      masterRef.current = master
    }
    if (ctxRef.current.state === 'suspended') ctxRef.current.resume()
    return ctxRef.current
  }, [])

  const canPlay = () => volumeRef.current > 0 && masterRef.current

  const playClick = useCallback(() => {
    const ctx = ensureContext()
    if (!ctx || !canPlay()) return
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()
    osc.type = 'square'
    osc.frequency.setValueAtTime(1180, ctx.currentTime)
    osc.frequency.exponentialRampToValueAtTime(420, ctx.currentTime + 0.035)
    gain.gain.setValueAtTime(0.22, ctx.currentTime)
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05)
    osc.connect(gain).connect(masterRef.current)
    osc.start()
    osc.stop(ctx.currentTime + 0.055)
  }, [ensureContext])

  const playStatic = useCallback(
    (duration = 0.22) => {
      const ctx = ensureContext()
      if (!ctx || !canPlay()) return
      const source = ctx.createBufferSource()
      source.buffer = makeNoise(ctx, duration)
      const filter = ctx.createBiquadFilter()
      filter.type = 'bandpass'
      filter.frequency.value = 1800
      filter.Q.value = 0.7
      const gain = ctx.createGain()
      gain.gain.setValueAtTime(0.35, ctx.currentTime)
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration)
      source.connect(filter).connect(gain).connect(masterRef.current)
      source.start()
      source.stop(ctx.currentTime + duration)
    },
    [ensureContext]
  )

  const playPower = useCallback(
    (turningOn) => {
      const ctx = ensureContext()
      if (!ctx || !canPlay()) return
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()
      osc.type = 'sine'
      osc.frequency.setValueAtTime(turningOn ? 90 : 420, ctx.currentTime)
      osc.frequency.exponentialRampToValueAtTime(turningOn ? 520 : 45, ctx.currentTime + 0.32)
      gain.gain.setValueAtTime(0.001, ctx.currentTime)
      gain.gain.linearRampToValueAtTime(0.3, ctx.currentTime + 0.03)
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.36)
      osc.connect(gain).connect(masterRef.current)
      osc.start()
      osc.stop(ctx.currentTime + 0.37)
      playStatic(0.09)
    },
    [ensureContext, playStatic]
  )

  const playDegauss = useCallback(() => {
    const ctx = ensureContext()
    if (!ctx || !canPlay()) return
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()
    osc.type = 'triangle'
    osc.frequency.setValueAtTime(220, ctx.currentTime)
    osc.frequency.exponentialRampToValueAtTime(1100, ctx.currentTime + 0.24)
    osc.frequency.exponentialRampToValueAtTime(180, ctx.currentTime + 0.5)
    gain.gain.setValueAtTime(0.22, ctx.currentTime)
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.5)
    osc.connect(gain).connect(masterRef.current)
    osc.start()
    osc.stop(ctx.currentTime + 0.52)
    playStatic(0.45)
  }, [ensureContext, playStatic])

  return { playClick, playStatic, playPower, playDegauss }
}
