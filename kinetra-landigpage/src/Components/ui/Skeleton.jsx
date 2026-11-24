import '../../Style/layout/components.css'

const Skeleton = ({ variant = 'text', className = '', style = {}, ...props }) => {
  const widths = {
    text: 'clamp(60%, 50vw, 120px)',
    card: '100%',
    title: 'clamp(200px, 40vw, 400px)',
    full: '100%',
  }
  return (
    <div
      className={`skeleton ${className}`.trim()}
      style={{ width: widths[variant], ...style }}
      {...props}
    />
  )
}

export default Skeleton
