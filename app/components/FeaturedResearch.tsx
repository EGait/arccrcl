'use client'

import { useRouter } from 'next/navigation'
import { ownArticles } from '../data/ownArticles'

export default function FeaturedResearch() {
  const router = useRouter()
  const article = ownArticles[0]

  if (!article) {
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
        <div
          onClick={() => router.push('/news/' + article.slug)}
          className="rounded-2xl p-6 md:p-8 cursor-pointer transition-all hover:scale-[1.01] bg-white/[0.03] border border-white/[0.08]"
        >
          {article.image && (
            <img src={article.image} alt={article.title} className="w-full rounded-xl mb-4 object-cover" style={{ maxHeight: '300px' }} />
          )}
          <div className="inline-block text-xs px-3 py-1 rounded-full mb-3 border border-white/[0.1]" style={{ color: '#E3C896' }}>
            {article.tag}
          </div>
          <h2 className="text-xl md:text-2xl font-medium text-gray-100 mb-2">
            {article.title}
          </h2>
          <p className="text-sm text-gray-500 mb-3">
            {article.description}
          </p>
          <div className="flex items-center gap-3 text-xs text-gray-600">
            <span>{article.date}</span>
            <span>•</span>
            <span>{article.readTime}</span>
          </div>
        </div>
      </div>
    </div>
  )
}