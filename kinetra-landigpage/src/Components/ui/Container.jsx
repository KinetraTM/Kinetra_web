import '../../Style/layout/components.css'

/* Contenedor: ancla max-width 1200px, centrado, padding responsivo. */
const Container = ({ className = '', children, ...props }) => (
  <div className={`container ${className}`.trim()} {...props}>
    {children}
  </div>
)

export default Container
