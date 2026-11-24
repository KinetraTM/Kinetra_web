import { useCallback, useMemo, useState } from 'react'

/* Hook de formularios: validación ligera, estados de carga/error/ok.
   Reglas: required, type (email/phone), minLength */

const validateField = (name, value, rule) => {
  if (!value) return rule.required ? (rule.message ?? `${name} es requerido`) : ''
  if (rule.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
    return rule.message ?? 'Ingresa un email válido'
  }
  if (rule.type === 'phone' && !/^\+?\d[\d\s().-]{5,19}$/.test(value)) {
    return rule.message ?? 'Ingresa un teléfono válido'
  }
  if (rule.minLength && value.length < rule.minLength) {
    return rule.message ?? `Mínimo ${rule.minLength} caracteres`
  }
  return ''
}

export default function useForm({ initialFields = {}, rules = {}, onSubmit }) {
  const [fields, setFields] = useState(initialFields)
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSent, setIsSent] = useState(false)

  const setField = (name, value) => setFields((f) => ({ ...f, [name]: value }))

  const validate = useCallback(() => {
    const nextErrors = {}
    Object.entries(rules).forEach(([name, rule]) => {
      const msg = validateField(name, String((fields[name] ?? '').trim()), rule)
      if (msg) nextErrors[name] = msg
    })
    setErrors(nextErrors)
    return nextErrors
  }, [fields, rules])

  const submit = useCallback(async () => {
    const nextErrors = validate()
    if (Object.keys(nextErrors).length > 0) return false
    setIsSubmitting(true)
    setErrors({})
    try {
      await onSubmit(fields)
      setIsSent(true)
      setIsSubmitting(false)
      return true
    } catch (err) {
      setIsSubmitting(false)
      setErrors({ form: err?.message ?? 'Error al enviar. Intenta de nuevo más tarde.' })
      return false
    }
  }, [fields, onSubmit, validate])

  const isValid = useMemo(
    () =>
      Object.keys(rules).every(
        (name) => !validateField(name, String((fields[name] ?? '').trim()), rules[name])
      ),
    [fields, rules]
  )

  return { fields, setField, errors, isSubmitting, isSent, isValid, submit }
}
