import '../../Style/layout/typography.css'

/* Encabezados tipográficos: h1-h6 con variantes display/title */

const Heading = ({
  level = 1,
  size,
  className = '',
  style,
  children,
  ...props
}) => {
  const Tag = level === 1 ? 'h1' : level === 2 ? 'h2' : level === 3 ? 'h3' : level === 4 ? 'h4' : level === 5 ? 'h5' : 'h6'
  const sizeClass = `text-${size ?? (level <= 2 ? 'display-lg' : level === 3 ? 'display-md' : 'display-sm')}`

  return (
    <Tag className={`${sizeClass} ${className}`.trim()} style={style} {...props}>
      {children}
    </Tag>
  )
}

export default Heading
