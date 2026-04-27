'use client'

import { useMemo, useState } from 'react'
import { Search } from 'lucide-react'
import GlossaryCard from '@/components/GlossaryCard'
import CTAButton from '@/components/CTAButton'
import NewsletterSignup from '@/components/NewsletterSignup'
import { CATEGORIES, GLOSSARY, type GlossaryCategory } from '@/data/glossary'

type Filter = GlossaryCategory | 'All'

export default function GlossaryClient() {
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState<Filter>('All')

  const sorted = useMemo(
    () => [...GLOSSARY].sort((a, b) => a.term.localeCompare(b.term)),
    [],
  )

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return sorted.filter((t) => {
      const matchesFilter = filter === 'All' || t.category === filter
      if (!matchesFilter) return false
      if (!q) return true
      return (
        t.term.toLowerCase().includes(q) ||
        t.definition.toLowerCase().includes(q) ||
        (t.also?.toLowerCase().includes(q) ?? false)
      )
    })
  }, [sorted, query, filter])

  const grouped = useMemo(() => {
    const map = new Map<string, typeof filtered>()
    for (const term of filtered) {
      const letter = /[A-Za-z]/.test(term.term[0])
        ? term.term[0].toUpperCase()
        : '#'
      const arr = map.get(letter) ?? []
      arr.push(term)
      map.set(letter, arr)
    }
    return Array.from(map.entries()).sort(([a], [b]) => a.localeCompare(b))
  }, [filtered])

  const allLetters = useMemo(() => {
    const letters = new Set<string>()
    for (const t of sorted) {
      letters.add(/[A-Za-z]/.test(t.term[0]) ? t.term[0].toUpperCase() : '#')
    }
    return Array.from(letters).sort()
  }, [sorted])

  let cardCounter = 0

  return (
    <>
      <header className="border-b border-white/5 bg-navy pb-16 pt-32 sm:pt-40">
        <div className="container-wide">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Glossary
          </p>
          <h1 className="heading-display text-4xl sm:text-5xl">
            The Star Citizen dictionary,{' '}
            <span className="text-gold-gradient">plain English.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base text-muted">
            Every term, acronym, and piece of community slang you&rsquo;ll run
            into during your first hundred hours in the &lsquo;Verse. Search,
            filter, or jump by letter.
          </p>

          <div className="mt-8 flex flex-col gap-4">
            <label className="relative block">
              <span className="sr-only">Search the glossary</span>
              <Search
                size={18}
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted"
                aria-hidden
              />
              <input
                type="search"
                placeholder="Search 40+ terms — try 'UEC' or 'Free Fly'…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full rounded-full border border-white/10 bg-navyLight/60 py-3 pl-11 pr-4 text-base text-starwhite placeholder:text-muted/70 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/40"
              />
            </label>

            <div className="flex flex-wrap items-center gap-2">
              {(['All', ...CATEGORIES] as Filter[]).map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setFilter(cat)}
                  className={`rounded-full border px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider transition-all ${
                    filter === cat
                      ? 'border-gold bg-gold text-navy'
                      : 'border-white/10 bg-navyLight/40 text-starwhite/80 hover:border-gold/40 hover:text-gold'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <nav
              className="mt-2 flex flex-wrap gap-1.5 text-xs"
              aria-label="Jump to letter"
            >
              {allLetters.map((letter) => (
                <a
                  key={letter}
                  href={`#letter-${letter}`}
                  className="rounded-md border border-white/5 bg-navy/50 px-2.5 py-1 font-mono text-muted hover:border-gold/40 hover:text-gold"
                >
                  {letter}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <div className="container-wide pb-20 pt-12">
        {filtered.length === 0 ? (
          <div className="card-surface p-10 text-center">
            <h2 className="heading-display text-xl">No matches.</h2>
            <p className="mt-2 text-sm text-muted">
              Try a different search term or clear the category filter.
            </p>
            <button
              onClick={() => {
                setQuery('')
                setFilter('All')
              }}
              className="mt-4 rounded-full border border-gold/40 px-5 py-2 text-sm font-medium text-gold hover:bg-gold/10"
            >
              Clear filters
            </button>
          </div>
        ) : (
          grouped.map(([letter, terms]) => (
            <section
              key={letter}
              id={`letter-${letter}`}
              className="mb-12 scroll-mt-24"
            >
              <div className="mb-5 flex items-baseline gap-3 border-b border-white/5 pb-2">
                <h2 className="heading-display text-3xl text-gold">{letter}</h2>
                <span className="text-xs uppercase tracking-wider text-muted">
                  {terms.length} {terms.length === 1 ? 'term' : 'terms'}
                </span>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {terms.map((t) => {
                  cardCounter += 1
                  const showCta = cardCounter % 10 === 0
                  return (
                    <div key={t.term} className="contents">
                      <GlossaryCard term={t} />
                      {showCta ? (
                        <div className="card-surface flex flex-col items-start justify-center gap-3 bg-gradient-to-br from-gold/15 via-navyLight to-navy p-5">
                          <p className="text-xs font-semibold uppercase tracking-wider text-gold">
                            New to the &lsquo;Verse?
                          </p>
                          <p className="text-sm text-starwhite/90">
                            Use a referral code and start with 50,000 UEC free.
                          </p>
                          <CTAButton size="sm" trackingLabel="glossary-inline">
                            Claim 50,000 UEC
                          </CTAButton>
                        </div>
                      ) : null}
                    </div>
                  )
                })}
              </div>
            </section>
          ))
        )}

        <div className="mt-16">
          <NewsletterSignup variant="full" heading="Don't memorize jargon. Get it weekly." subheading="Each Friday we send the week's new terms, slang, and patch-note translations. 5 minutes, plain English." />
        </div>
      </div>
    </>
  )
}
