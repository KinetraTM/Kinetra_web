import { forwardRef } from 'react'
import '../../Style/layout/components.css'

/* Botón base — variantes: primary (CTA Yellow) y secondary (azul) */
const Button = forwardRef(
  (
    {
      variant = 'primary',
      size = 'md',
      children,
      href,
      target = '_blank',
      rel,
      onClick,
      disabled = false,
      type = 'button',
      className = '',
      style,
      ...props
    },
    ref
  ) => {
    const classes = `btn btn--${variant} btn--${size} ${className}`.trim()

    if (href) {
      return (
        <a
          ref={ref}
          href={href}
          target={target}
          rel={rel ?? 'noopener noreferrer'}
          className={classes}
          style={style}
          onClick={onClick}
          {...props}
        >
          {children}
        </a>
      )
    }

    return (
      <button
        ref={ref}
        type={type}
        className={classes}
        style={style}
        onClick={onClick}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
export default Button
