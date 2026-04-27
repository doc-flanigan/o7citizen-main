import type { GlossaryTerm } from '@/data/glossary'

const categoryColor: Record<GlossaryTerm['category'], string> = {
  Currency: 'bg-gold/15 text-gold',
  Ships: 'bg-blue-400/10 text-blue-200',
  Gameplay: 'bg-emerald-400/10 text-emerald-200',
  Community: 'bg-pink-400/10 text-pink-200',
  Technical: 'bg-purple-400/10 text-purple-200',
  Locations: 'bg-orange-400/10 text-orange-200',
}

export default function GlossaryCard({ term }: { term: GlossaryTerm }) {
  return (
    <article
      id={`term-${term.term.replace(/\s+/g, '-').toLowerCase()}`}
      className="card-surface flex h-full flex-col p-5 transition-colors hover:border-gold/30"
    >
      <div className="mb-3 flex items-center justify-between gap-3">
        <h3 className="heading-display text-xl text-starwhite">
          {term.term}
        </h3>
        <span
          className={`rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider ${categoryColor[term.category]}`}
        >
          {term.category}
        </span>
      </div>
      <p className="text-sm leading-relaxed text-starwhite/85">
        {term.definition}
      </p>
      {term.also ? (
        <p className="mt-3 text-xs text-muted">
          Also: <span className="text-starwhite/80">{term.also}</span>
        </p>
      ) : null}
    </article>
  )
}
