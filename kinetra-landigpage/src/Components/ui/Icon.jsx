import { withBase } from '../../utils/basePath'
import '../../Style/layout/components.css'

/* Icon wrapper — usado con svg inline desde Asset/icons/ */
const Icon = ({
  name,
  size = '1.25rem',
  className = '',
  style = {},
  ...props
}) => (
  <svg
    width={size}
    height={size}
    fill="currentColor"
    className={`icon icon--${name} ${className}`.trim()}
    style={style}
    role="img"
    aria-hidden="true"
    {...props}
  >
    <use href={`${withBase('/icons.svg')}#${name}`} />
  </svg>
)

export default Icon
