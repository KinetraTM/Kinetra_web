import { forwardRef } from 'react'
import Label from './Label'
import '../../Style/layout/components.css'

const Textarea = forwardRef(
  ({ label, id, error, helper, className = '', ...props }, ref) => {
    const fieldId = id ?? `textarea-${label?.toLowerCase().replace(/\s+/g, '-') ?? Math.random().toString(36).slice(2)}`

    return (
      <div className={`form-group ${className}`.trim()} data-field>
        {label && <Label htmlFor={fieldId}>{label}</Label>}
        <textarea ref={ref} id={fieldId} className="form-textarea" {...props} />
        {error && <span className="form-error" role="alert">{error}</span>}
        {helper && !error && <span className="form-helper">{helper}</span>}
      </div>
    )
  }
)

Textarea.displayName = 'Textarea'
export default Textarea
