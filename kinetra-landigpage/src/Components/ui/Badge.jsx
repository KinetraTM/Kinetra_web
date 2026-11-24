import '../../Style/layout/components.css'

/* Badges: etiquetas de categorías/servicios */
const Badge = ({ variant = 'blue', children, className = '', ...props }) => (
  <span className={`badge badge--${variant} ${className}`.trim()} {...props}>
    {children}
  </span>
)

export default Badge
