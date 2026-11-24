import '../../Style/layout/components.css'
import '../../Style/utils/reset.css'

/* Sección base: padding vertical responsivo, grid columnas, scroll-margin. */
const Section = ({
  className = '',
  children,
  id,
  tag = 'section',
  columns = 1,
  ...props
}) => {
  const classNames = [
    'kinetra-section',
    id ? `kinetra-section--${id}` : '',
    `grid-cols-${columns}`,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const SectionTag = tag

  return (
    <SectionTag id={id} className={classNames} {...props}>
      {children}
    </SectionTag>
  )
}

export default Section
