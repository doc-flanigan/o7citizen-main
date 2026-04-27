import { GLOSSARY, type GlossaryTerm } from './glossary'

/**
 * Convert a glossary term display name into the URL slug used on the
 * glossary page (matching GlossaryCard's id attribute):
 *   "the 'Verse"  →  "the-'verse"
 *   "UEC"         →  "uec"
 */
export function termSlug(term: string): string {
  return term.replace(/\s+/g, '-').toLowerCase()
}

/**
 * Case-insensitive lookup of a glossary term by either its slug or its
 * display name (e.g. both "uec" and "UEC" resolve, as does "the-'verse"
 * and "the 'Verse").
 *
 * The "also" field is also searched so common alternative spellings work
 * (e.g. "Mobiglas" → mobiGlas, "Evocati" → EPTU, "Tonk" → Nova).
 */
export function getTerm(name: string): GlossaryTerm | undefined {
  if (!name) return undefined
  const needle = name.trim().toLowerCase()
  const needleSlug = termSlug(name.trim())

  for (const t of GLOSSARY) {
    const termLower = t.term.toLowerCase()
    if (termLower === needle) return t
    if (termSlug(t.term) === needleSlug) return t
    if (t.also) {
      const alts = t.also.split(',').map((a) => a.trim().toLowerCase())
      if (alts.includes(needle)) return t
    }
  }
  return undefined
}
