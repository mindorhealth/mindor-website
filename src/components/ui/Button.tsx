import { ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
  children: ReactNode
  className?: string
}

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-primary text-white hover:bg-accent focus-visible:outline-primary',
  secondary:
    'bg-transparent text-primary border border-primary hover:bg-primary hover:text-white focus-visible:outline-primary',
  ghost:
    'bg-transparent text-muted hover:text-primary focus-visible:outline-primary',
}

const sizeClasses: Record<Size, string> = {
  sm: 'px-5 py-2.5 text-sm tracking-wide',
  md: 'px-7 py-3.5 text-sm tracking-wide',
  lg: 'px-9 py-4 text-base tracking-wide',
}

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}: ButtonProps) {
  return (
    <button
      className={[
        'inline-flex items-center justify-center font-body font-medium',
        'transition-colors duration-300',
        'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
        'disabled:pointer-events-none disabled:opacity-40',
        variantClasses[variant],
        sizeClasses[size],
        className,
      ].join(' ')}
      {...props}
    >
      {children}
    </button>
  )
}
