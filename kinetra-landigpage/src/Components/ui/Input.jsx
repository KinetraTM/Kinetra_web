import { forwardRef } from 'react'
import Label from './Label'
import '../../Style/layout/components.css'

/* Input text / email — agrupa Label (si existe) + campo */
const Input = forwardRef(
  ({ label, id, error, helper, className = '', ...props }, ref) => {
    const fieldId = id ?? `input-${label?.toLowerCase().replace(/\s+/g, '-') ?? Math.random().toString(36).slice(2)}`

    return (
      <div className={`form-group ${className}`.trim()} data-field>
        {label && (
          <Label htmlFor={fieldId}>{label}</Label>
        )}
        <input
          ref={ref}
          id={fieldId}
          className="form-input"
          type="text"
          {...props}
        />
        {error && <span className="form-error" role="alert">{error}</span>}
        {helper && !error && <span className="form-helper">{helper}</span>}
      </div>
    )
  }
)

Input.displayName = 'Input'
export default Input
