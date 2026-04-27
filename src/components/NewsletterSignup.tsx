'use client'

import { useState, FormEvent } from 'react'
import { Mail, Check } from 'lucide-react'

type Props = {
  variant?: 'card' | 'inline' | 'full'
  heading?: string
  subheading?: string
  ctaLabel?: string
}

export default function NewsletterSignup({
  variant = 'card',
  heading = 'Get the Weekly Update',
  subheading = 'A 5-minute, plain-English summary of the past week in the ’Verse, plus Free Fly alerts. No spam, ever.',
  ctaLabel = 'Subscribe',
}: Props) {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address.')
      return
    }
    // Newsletter backend wires up later (Buttondown/ConvertKit). For now this
    // is a soft success state so the UX is testable end-to-end.
    setError(null)
    setSubmitted(true)
  }

  const wrapperClass =
    variant === 'full'
      ? 'rounded-3xl border border-gold/30 bg-gradient-to-br from-navyLight via-navyLight/80 to-navy p-8 sm:p-12'
      : variant === 'inline'
      ? 'rounded-2xl border border-white/10 bg-navyLight/40 p-6'
      : 'card-surface p-6 sm:p-8'

  return (
    <section
      id="newsletter"
      className={wrapperClass}
      aria-labelledby="newsletter-heading"
    >
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="md:max-w-md">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-gold">
            <Mail size={14} aria-hidden /> Newsletter
          </div>
          <h2
            id="newsletter-heading"
            className="heading-display text-2xl sm:text-3xl"
          >
            {heading}
          </h2>
          <p className="mt-2 text-sm text-muted">{subheading}</p>
        </div>

        {submitted ? (
          <div className="flex items-center gap-3 rounded-full bg-gold/10 px-5 py-3 text-gold">
            <Check size={18} aria-hidden />
            <span className="font-medium">You’re in. Check your inbox.</span>
          </div>
        ) : (
          <form
            onSubmit={onSubmit}
            className="flex w-full flex-col gap-2 sm:flex-row md:max-w-md"
            noValidate
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              name="email"
              required
              placeholder="you@example.com"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full flex-1 rounded-full border border-white/10 bg-navy px-5 py-3 text-base text-starwhite placeholder:text-muted/70 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/40"
            />
            <button
              type="submit"
              className="rounded-full bg-gold px-6 py-3 text-base font-semibold text-navy transition-colors hover:bg-goldDark"
            >
              {ctaLabel}
            </button>
          </form>
        )}
      </div>
      {error ? (
        <p className="mt-3 text-sm text-red-300" role="alert">
          {error}
        </p>
      ) : null}
    </section>
  )
}
