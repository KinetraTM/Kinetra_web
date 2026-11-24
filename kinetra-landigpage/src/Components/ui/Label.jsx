import '../../Style/layout/components.css'

const Label = ({ children, htmlFor, className = '', ...props }) => (
  <label className={`form-label ${className}`.trim()} htmlFor={htmlFor} {...props}>
    {children}
  </label>
)

export default Label
