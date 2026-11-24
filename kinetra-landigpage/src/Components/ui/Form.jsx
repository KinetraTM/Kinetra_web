import '../../Style/layout/components.css'

/* Formulario: wrapper semántico para campos + botón de submit */
const Form = ({
  onSubmit,
  children,
  className = '',
  noValidate = true,
  ...props
}) => (
  <form
    className={`form ${className}`.trim()}
    onSubmit={onSubmit}
    noValidate={noValidate}
    {...props}
  >
    {children}
  </form>
)

export default Form
