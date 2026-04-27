import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { SITE } from '@/lib/site'

type Variant = 'primary' | 'ghost' | 'subtle'
type Size = 'sm' | 'md' | 'lg'

type Props = {
  href?: string
  children?: React.ReactNode
  variant?: Variant
  size?: Size
  className?: string
  external?: boolean
  trackingLabel?: string
  showIcon?: boolean
}

const sizeClasses: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-gold text-navy hover:bg-goldDark hover:text-navy shadow-[0_8px_30px_-12px_rgba(240,192,64,0.6)] hover:shadow-[0_12px_36px_-12px_rgba(240,192,64,0.85)]',
  ghost:
    'border border-gold/60 text-gold hover:bg-gold/10 hover:border-gold',
  subtle:
    'bg-navyLight text-starwhite hover:bg-navyLight/70 border border-white/5',
}

export default function CTAButton({
  href = SITE.referralUrl,
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  external,
  trackingLabel,
  showIcon = true,
}: Props) {
  const isExternal = external ?? href.startsWith('http')
  const label = children ?? `Claim Your Free ${SITE.ueecBonus}`

  const classes = `inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-wide transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-navy ${sizeClasses[size]} ${variantClasses[variant]} ${className}`

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        data-track={trackingLabel}
      >
        <span>{label}</span>
        {showIcon ? <ArrowUpRight size={size === 'lg' ? 20 : 16} aria-hidden /> : null}
      </a>
    )
  }

  return (
    <Link href={href} className={classes} data-track={trackingLabel}>
      <span>{label}</span>
      {showIcon ? <ArrowUpRight size={size === 'lg' ? 20 : 16} aria-hidden /> : null}
    </Link>
  )
}
