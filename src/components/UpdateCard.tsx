import Link from 'next/link'
import { Clock, Calendar, ArrowRight } from 'lucide-react'

export type WeeklyUpdate = {
  slug: string
  date: string
  title: string
  summary: string
  readMinutes?: number
  tag?: string
  href?: string
}

export default function UpdateCard({
  update,
  featured = false,
}: {
  update: WeeklyUpdate
  featured?: boolean
}) {
  const dateLabel = new Date(update.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })

  const minutes = update.readMinutes ?? 5
  const href = update.href ?? `/weekly-update#${update.slug}`

  if (featured) {
    return (
      <article className="card-surface relative overflow-hidden p-8 sm:p-10">
        <div className="absolute right-0 top-0 h-40 w-40 -translate-y-12 translate-x-12 rounded-full bg-gold/10 blur-3xl" />
        <div className="relative flex flex-col gap-4">
          <div className="flex flex-wrap items-center gap-2 text-xs text-muted">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/30 bg-gold/10 px-3 py-1 font-semibold uppercase tracking-wider text-gold">
              <Clock size={12} aria-hidden /> {minutes}-minute read
            </span>
            <span className="inline-flex items-center gap-1.5 text-muted">
              <Calendar size={12} aria-hidden /> {dateLabel}
            </span>
            {update.tag ? (
              <span className="rounded-full bg-navy px-3 py-1 text-xs text-starwhite/70">
                {update.tag}
              </span>
            ) : null}
          </div>
          <h3 className="heading-display text-2xl sm:text-3xl">
            {update.title}
          </h3>
          <p className="text-base text-starwhite/85">{update.summary}</p>
          <Link
            href={href}
            className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-gold hover:text-goldDark"
          >
            Read this week’s update <ArrowRight size={14} aria-hidden />
          </Link>
        </div>
      </article>
    )
  }

  return (
    <article className="card-surface flex h-full flex-col p-6">
      <div className="mb-2 flex flex-wrap items-center gap-2 text-xs text-muted">
        <span className="inline-flex items-center gap-1.5">
          <Calendar size={12} aria-hidden /> {dateLabel}
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-gold/10 px-2.5 py-0.5 font-semibold text-gold">
          <Clock size={12} aria-hidden /> {minutes} min
        </span>
      </div>
      <h3 className="heading-display text-lg">{update.title}</h3>
      <p className="mt-2 text-sm text-starwhite/80">{update.summary}</p>
      <Link
        href={href}
        className="mt-auto pt-4 text-sm font-medium text-gold hover:text-goldDark"
      >
        Read update →
      </Link>
    </article>
  )
}
