import { useCallback, useEffect, useRef, useState } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import useSynthAudio from '../../hooks/useSynthAudio'
import { CHANNELS, getChannelIndex } from '../../data/channels'
import CRTScreen from './CRTScreen'
import ControlPanel from './ControlPanel'

/* Layout persistente: el chasis, la perilla de volumen y el estado de POWER
   viven aquí, fuera de las rutas. Solo el contenido del tubo cambia (Outlet). */

const clamp = (value, min, max) => Math.min(max, Math.max(min, value))
const wrapChannel = (value) => ((value % CHANNELS.length) + CHANNELS.length) % CHANNELS.length

export default function TVLayout() {
  const location = useLocation()
  const navigate = useNavigate()
  const channelIndex = getChannelIndex(location.pathname)
  const channel = Math.max(channelIndex, 0)
  const channelInfo = CHANNELS[channelIndex]

  const [power, setPower] = useState(true)
  const [phase, setPhase] = useState('on')
  const [volume, setVolume] = useState(0)
  const [colorMode] = useState(0)
  const [osd, setOsd] = useState(null)
  const [burst, setBurst] = useState(false)
  const [degauss] = useState(false)

  const timers = useRef([])
  const messageId = useRef(0)
  const transitioning = useRef(false)
  const powerRef = useRef(power)
  const channelRef = useRef(channelIndex)
  const previousLocationKey = useRef(location.key)

  useEffect(() => {
    powerRef.current = power
  }, [power])

  useEffect(() => {
    channelRef.current = channelIndex
  }, [channelIndex])

  const { playClick, playStatic, playPower } = useSynthAudio(volume)

  const later = useCallback((callback, delay) => {
    timers.current.push(window.setTimeout(callback, delay))
  }, [])

  useEffect(() => () => timers.current.forEach(window.clearTimeout), [])

  const showOsd = useCallback(
    (text, tone = 'cyan') => {
      messageId.current += 1
      const id = messageId.current
      setOsd({ id, text, tone })
      later(() => setOsd((current) => (current?.id === id ? null : current)), 2000)
    },
    [later]
  )

  /* Navegación secuencial: el router es la única fuente de verdad del canal. */
  const changeChannel = useCallback(
    (next) => {
      if (!powerRef.current || transitioning.current) return
      const target = wrapChannel(next)
      if (target === channelRef.current) return
      navigate(CHANNELS[target].path)
    },
    [navigate]
  )

  const adjustVolume = useCallback(
    (next) => {
      const target = clamp(next, 0, 100)
      if (target === volume) return
      setVolume(target)
      playClick()
      const filled = Math.round(target / 10)
      const bar = `${'█'.repeat(filled)}${'─'.repeat(10 - filled)} ${target}%`
      showOsd(`VOL ${bar}`, 'green')
    },
    [playClick, showOsd, volume]
  )

  const togglePower = useCallback(() => {
    if (transitioning.current) return
    transitioning.current = true

    if (power) {
      playPower(false)
      setPhase('collapse')
      later(() => {
        setPower(false)
        setPhase('off')
        setOsd(null)
        transitioning.current = false
      }, 430)
      return
    }

    setPower(true)
    setPhase('start')
    playPower(true)
    later(() => {
      setPhase('on')
      transitioning.current = false
      const info = CHANNELS[channelRef.current]
      showOsd(info ? `${info.code} · ${info.name}` : 'CH 404 · SIN SEÑAL', info ? 'cyan' : 'coral')
    }, 520)
  }, [later, playPower, power, showOsd])

  /* Ráfaga de nieve + OSD en cada cambio de ruta, sin reiniciar la tele. */
  useEffect(() => {
    if (previousLocationKey.current === location.key) return
    previousLocationKey.current = location.key
    if (!powerRef.current) return
    setBurst(true)
    playStatic()
    const info = CHANNELS[getChannelIndex(location.pathname)]
    showOsd(info ? `${info.code} · ${info.name}` : 'CH 404 · SIN SEÑAL', info ? 'cyan' : 'coral')
    later(() => setBurst(false), 220)
  }, [location.key, location.pathname, later, playStatic, showOsd])

  useEffect(() => {
    const onKeyDown = (event) => {
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes(event.target.tagName)) return
      if (event.key === 'ArrowUp') {
        event.preventDefault()
        changeChannel(channelRef.current - 1)
      } else if (event.key === 'ArrowDown') {
        event.preventDefault()
        changeChannel(channelRef.current + 1)
      } else if (/^[1-8]$/.test(event.key)) {
        event.preventDefault()
        changeChannel(Number(event.key) - 1)
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [changeChannel])

  return (
    <div className="tv-app">
      <div className="tv-app__vent" aria-hidden="true" />
      <div className="tv-body">
        <CRTScreen
          burst={burst}
          degauss={degauss}
          colorMode={colorMode}
          phase={phase}
          osd={osd}
        >
          <Outlet />
        </CRTScreen>

        <ControlPanel
          channel={channel}
          channelLabel={channelInfo?.code ?? 'CH --'}
          volume={volume}
          power={power}
          onChannelChange={changeChannel}
          onVolumeChange={adjustVolume}
          onPower={togglePower}
          onInteract={playClick}
        />
      </div>
      <div className="tv-app__feet" aria-hidden="true">
        <span />
        <span />
      </div>
    </div>
  )
}
