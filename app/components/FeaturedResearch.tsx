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

  return (
    <div className="px-6 py-12 border-b" style={{ borderColor: 'rgba(227,200,150,0.2)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-xs font-medium uppercase tracking-widest mb-5" style={{ color: '#E3C896' }}>
          Featured Research
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {ownArticles.map((article: any) => (
            <div
              key={article.id}
              onClick={() => router.push('/news/' + article.slug)}
              className="rounded-2xl p-5 cursor-pointer transition-all hover:scale-[1.02] bg-white/[0.03] border border-white/[0.08] flex flex-col"
            >
              {article.image && (
                <img src={article.image} alt={article.title} className="w-full rounded-xl mb-3 object-cover" style={{ height: '160px' }} />
              )}
              <div className="inline-block self-start text-xs px-3 py-1 rounded-full mb-2 border border-white/[0.1]" style={{ color: '#E3C896' }}>
                {article.tag}
              </div>
              <h3 className="text-base font-medium text-gray-100 mb-2 flex-1">
                {article.title}
              </h3>
              <p className="text-xs text-gray-500 mb-3">
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
      </div>
    </div>
  )
}