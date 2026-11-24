import { forwardRef } from 'react'
import '../../Style/layout/components.css'

/* Tarjeta glass/surface: elemento contenedor reutilizable. */
const Card = forwardRef(
  ({ className = '', children, tag = 'article', ...props }, ref) => {
    const Tag = tag
    return (
      <Tag ref={ref} className={`card ${className}`.trim()} {...props}>
        {children}
      </Tag>
    )
  }
)

Card.displayName = 'Card'
export default Card
