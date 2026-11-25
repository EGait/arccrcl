import type { Metadata } from 'next'
import { ownArticles } from '../data/ownArticles'

// Builds page metadata for an in-house article from its ownArticles entry,
// so titles and descriptions live in one place.
export function articleMetadata(slug: string): Metadata {
  const a = ownArticles.find((x) => x.slug === slug)
  if (!a) throw new Error(`No ownArticles entry for slug "${slug}"`)
  return {
    title: `${a.title} — ArcCRCL`,
    description: a.description,
    alternates: { canonical: `https://arccrcl.com/news/${slug}` },
    openGraph: { title: a.title, description: a.description, type: 'article' },
    twitter: { card: 'summary_large_image', title: a.title, description: a.description },
  }
}
