'use client'

export default function FeaturedResearch() {
  return (
    <div className="px-6 py-12 border-b" style={{ borderColor: 'rgba(227,200,150,0.2)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-5">
          <div className="text-xs font-medium uppercase tracking-widest" style={{ color: '#E3C896' }}>
            Featured Research
          </div>
        </div>
        <div
          className="rounded-lg border px-6 py-10 text-center text-sm text-gray-500"
          style={{ borderColor: 'rgba(227,200,150,0.2)', backgroundColor: 'rgba(227,200,150,0.04)' }}
        >
          In-house deep dives on Arc are coming soon.
        </div>
      </div>
    </div>
  )
}
