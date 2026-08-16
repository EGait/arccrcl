'use client'

import { useRouter } from 'next/navigation'
import { ownArticles } from '../data/ownArticles'

export default function FeaturedResearch() {
  const router = useRouter()

  if (ownArticles.length === 0) {
    return (
      <div className="px-6 py-12 border-b" style={{ borderColor: 'rgba(227,200,150,0.2)' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-xs font-medium uppercase tracking-widest mb-5" style={{ color: '#E3C896' }}>
            Featured Research
          </div>
          <div className="rounded-lg border px-6 py-10 text-center text-sm text-gray-500" style={{ borderColor: 'rgba(227,200,150,0.2)' }}>
            In-house deep dives on Arc are coming soon.
          </div>
        </div>
      </div>
    )
  }

  const featured = ownArticles[0]
  const rest = ownArticles.slice(1)

  return (
    <div className="px-6 py-12 border-b" style={{ borderColor: 'rgba(227,200,150,0.2)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-xs font-medium uppercase tracking-widest mb-5" style={{ color: '#E3C896' }}>
          Featured Research
        </div>

        {/* Main featured article */}
        <div
          onClick={() => router.push('/news/' + featured.slug)}
          className="rounded-2xl p-6 md:p-8 cursor-pointer transition-all hover:scale-[1.01] bg-white/[0.03] border border-white/[0.08] mb-4"
        >
          {featured.image && (
            <img src={featured.image} alt={featured.title} className="w-full rounded-xl mb-4 object-cover" style={{ maxHeight: '300px' }} />
          )}
          <div className="inline-block text-xs px-3 py-1 rounded-full mb-3 border border-white/[0.1]" style={{ color: '#E3C896' }}>
            {featured.tag}
          </div>
          <h2 className="text-xl md:text-2xl font-medium text-gray-100 mb-2">
            {featured.title}
          </h2>
          <p className="text-sm text-gray-500 mb-3">
            {featured.description}
          </p>
          <div className="flex items-center gap-3 text-xs text-gray-600">
            <span>{featured.date}</span>
            <span>•</span>
            <span>{featured.readTime}</span>
          </div>
        </div>

        {/* Additional articles in a grid */}
        {rest.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {rest.map((article: any) => (
              <div
                key={article.id}
                onClick={() => router.push('/news/' + article.slug)}
                className="rounded-2xl p-5 cursor-pointer transition-all hover:scale-[1.01] bg-white/[0.03] border border-white/[0.08]"
              >
                {article.image && (
                  <img src={article.image} alt={article.title} className="w-full rounded-xl mb-3 object-cover" style={{ maxHeight: '180px' }} />
                )}
                <div className="inline-block text-xs px-3 py-1 rounded-full mb-2 border border-white/[0.1]" style={{ color: '#E3C896' }}>
                  {article.tag}
                </div>
                <h3 className="text-base font-medium text-gray-100 mb-1">
                  {article.title}
                </h3>
                <p className="text-xs text-gray-500 mb-2">
                  {article.description}
                </p>
                <div className="flex items-center gap-3 text-xs text-gray-600">
                  <span>{article.date}</span>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}