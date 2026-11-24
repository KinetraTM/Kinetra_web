import { useCallback, useEffect, useRef, useState } from 'react'
import useSynthAudio from '../../hooks/useSynthAudio'
import { CHANNELS, COLOR_MODES } from '../../data/channels'
import CRTScreen from './CRTScreen'
import ControlPanel from './ControlPanel'
import HomeChannel from './channels/HomeChannel'
import ServicesChannel from './channels/ServicesChannel'
import ProjectsChannel from './channels/ProjectsChannel'
import ContactChannel from './channels/ContactChannel'

/* Chasis completo: estado de la tele, sincronización de efectos y audio. */

const clamp = (value, min, max) => Math.min(max, Math.max(min, value))
const wrapChannel = (value) => ((value % CHANNELS.length) + CHANNELS.length) % CHANNELS.length
const CHANNEL_VIEWS = [HomeChannel, ServicesChannel, ProjectsChannel, ContactChannel]

export default function TVChassis() {
  const [power, setPower] = useState(true)
  const [phase, setPhase] = useState('on')
  const [channel, setChannel] = useState(0)
  const [volume, setVolume] = useState(0)
  const [colorMode, setColorMode] = useState(0)
  const [osd, setOsd] = useState(null)
  const [burst, setBurst] = useState(false)
  const [degauss, setDegauss] = useState(false)

  const timers = useRef([])
  const messageId = useRef(0)
  const transitioning = useRef(false)
  const audio = useSynthAudio(volume)

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

  const changeChannel = useCallback(
    (next) => {
      if (!power || transitioning.current) return
      const target = wrapChannel(next)
      if (target === channel) return
      setChannel(target)
      setBurst(true)
      audio.playStatic()
      showOsd(`CH 0${target + 1} · ${CHANNELS[target].name}`, 'cyan')
      later(() => setBurst(false), 220)
    },
    [audio, channel, later, power, showOsd]
  )

  const adjustVolume = useCallback(
    (next) => {
      const target = clamp(next, 0, 100)
      if (target === volume) return
      setVolume(target)
      audio.playClick()
      const filled = Math.round(target / 10)
      const bar = `${'█'.repeat(filled)}${'─'.repeat(10 - filled)} ${target}%`
      showOsd(`VOL ${bar}`, 'green')
    },
    [audio, showOsd, volume]
  )

  const togglePower = useCallback(() => {
    if (transitioning.current) return
    transitioning.current = true

    if (power) {
      audio.playPower(false)
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
    audio.playPower(true)
    later(() => {
      setPhase('on')
      transitioning.current = false
      showOsd(`CH 0${channel + 1} · ${CHANNELS[channel].name}`, 'cyan')
    }, 520)
  }, [audio, channel, later, power, showOsd])

  const cycleColorMode = useCallback(() => {
    if (!power) return
    const next = (colorMode + 1) % COLOR_MODES.length
    setColorMode(next)
    audio.playClick()
    showOsd(`COLOR · ${COLOR_MODES[next].name}`, 'amber')
  }, [audio, colorMode, power, showOsd])

  const runDegauss = useCallback(() => {
    if (!power || degauss) return
    setDegauss(true)
    audio.playDegauss()
    showOsd('DEGAUSS · ESTABILIZANDO SEÑAL', 'coral')
    later(() => setDegauss(false), 500)
  }, [audio, degauss, later, power, showOsd])

  useEffect(() => {
    const onKeyDown = (event) => {
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes(event.target.tagName)) return
      if (event.key === 'ArrowUp') {
        event.preventDefault()
        changeChannel(channel - 1)
      } else if (event.key === 'ArrowDown') {
        event.preventDefault()
        changeChannel(channel + 1)
      } else if (/^[1-4]$/.test(event.key)) {
        event.preventDefault()
        changeChannel(Number(event.key) - 1)
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [changeChannel, channel])

  const ChannelView = CHANNEL_VIEWS[channel]

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
          <ChannelView onGoChannel={changeChannel} />
        </CRTScreen>

        <ControlPanel
          channel={channel}
          volume={volume}
          colorMode={colorMode}
          power={power}
          onChannelChange={changeChannel}
          onVolumeChange={adjustVolume}
          onPower={togglePower}
          onColorMode={cycleColorMode}
          onDegauss={runDegauss}
          onInteract={audio.playClick}
        />
      </div>
      <div className="tv-app__feet" aria-hidden="true">
        <span />
        <span />
      </div>
    </div>
  )
}
