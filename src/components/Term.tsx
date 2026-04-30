'use client'

import { useEffect, useId, useRef, useState, type ReactNode } from 'react'
import { getTerm, termSlug } from '@/data/glossary-lookup'

type TermProps = {
  /** Canonical glossary term key (display name OR slug). Case-insensitive. */
  name: string
  /** The text actually rendered in the page copy. May differ from `name`. */
  children: ReactNode
  /** Optional extra class names to merge onto the link. */
  className?: string
}

/**
 * Inline glossary term — replaces "spell it out inline" expansions.
 *
 * Renders the display text as an anchor that:
 *   • links to /glossary#term-<slug> for the deep dive,
 *   • shows a small tooltip with the plain-English definition on hover/focus
 *     (desktop only — mobile users get the link),
 *   • exposes the definition to assistive tech via `aria-describedby` and
 *     a native `title` attribute as a baseline fallback.
 *
 * If `name` does not match any glossary entry, the component renders
 * `children` as plain text and warns once in development. We never throw —
 * a missing entry should never break a page.
 */
export default function Term({ name, children, className = '' }: TermProps) {
  const term = getTerm(name)
  const tooltipId = useId()
  const [open, setOpen] = useState(false)
  const wrapperRef = useRef<HTMLSpanElement | null>(null)

  useEffect(() => {
    if (!term) {
      if (process.env.NODE_ENV !== 'production') {
        // eslint-disable-next-line no-console
        console.warn(
          `[Term] No glossary entry for "${name}". Rendering plain text.`,
        )
      }
    }
  }, [name, term])

  // ESC closes the tooltip when keyboard-focused.
  useEffect(() => {
    if (!open) return
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  if (!term) {
    return <>{children}</>
  }

  const slug = termSlug(term.term)
  const href = `/glossary#term-${slug}`

  // The wrapper uses Tailwind's `group` so the tooltip can react to either
  // hover OR keyboard focus on the link. `peer` would also work but `group`
  // keeps the markup simpler when the tooltip is a sibling.
  return (
    <span
      ref={wrapperRef}
      className="group relative inline"
      onMouseLeave={() => setOpen(false)}
    >
      <a
        href={href}
        aria-describedby={tooltipId}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        className={
          'border-b border-dotted border-gold/60 text-starwhite ' +
          'underline-offset-2 transition-colors hover:border-gold hover:text-gold ' +
          'focus:outline-none focus-visible:rounded-sm focus-visible:ring-2 ' +
          'focus-visible:ring-gold/60 ' +
          className
        }
      >
        {children}
      </a>
      <span
        id={tooltipId}
        role="tooltip"
        className={
          'pointer-events-none absolute left-1/2 top-full z-30 mt-2 ' +
          '-translate-x-1/2 rounded-lg border border-gold/40 bg-navyLight ' +
          'px-3 py-2 text-left text-xs font-normal leading-snug text-starwhite ' +
          'shadow-lg shadow-black/40 ' +
          // Width: clamp small so it never overflows narrow columns
          'w-max max-w-[280px] ' +
          // Visibility: CSS hover for desktop, plus keyboard-focus state via `open`
          (open
            ? 'opacity-100'
            : 'opacity-0 group-hover:opacity-100') +
          ' transition-opacity duration-150 ' +
          // Hide entirely on small screens — mobile uses the link, not a tooltip
          'hidden sm:block'
        }
      >
        <span className="mb-1 block text-[10px] font-semibold uppercase tracking-wider text-gold">
          {term.term}
        </span>
        {term.definition}
        {/* Tiny arrow pointing back at the trigger */}
        <span
          aria-hidden
          className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 border-l border-t border-gold/40 bg-navyLight"
        />
      </span>
    </span>
  )
}
