import OSDOverlay from './OSDOverlay'
import StaticBurst from './StaticBurst'

/* Vidrio del tubo: curvatura, scanlines, viñeta, OSD y ráfaga de nieve. */

export default function CRTScreen({ children, burst, degauss, colorMode, phase, osd }) {
  const classes = [
    'tv-screen',
    `tv-screen--mode-${colorMode}`,
    `tv-screen--${phase}`,
    degauss ? 'tv-screen--degauss' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={classes}>
      <div className="tv-screen__glass">
        <div className="tv-screen__content">{children}</div>
        {burst && <StaticBurst active />}
        <div className="tv-screen__scanlines" aria-hidden="true" />
        <div className="tv-screen__vignette" aria-hidden="true" />
        <OSDOverlay message={osd} />
        <div className="tv-screen__reflection" aria-hidden="true" />
      </div>
    </div>
  )
}
