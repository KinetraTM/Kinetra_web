import { forwardRef } from 'react'
import Label from './Label'
import Icon from './Icon'
import '../../Style/layout/components.css'

/* Select — muestra flecha nativa (Icon soporta modos futuros) */
const Select = forwardRef(
  ({ label, options, error, className = '', ...props }, ref) => (
    <div className={`form-group ${className}`.trim()} data-field>
      {label && <Label>{label}</Label>}
      <select ref={ref} className="form-select" {...props}>
        <option value="">— Selecciona una opción —</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      <span className="form-select-icon" aria-hidden="true">
        <Icon name="chevron-down" size="0.875rem" />
      </span>
      {error && <span className="form-error" role="alert">{error}</span>}
    </div>
  )
)

Select.displayName = 'Select'
export default Select
