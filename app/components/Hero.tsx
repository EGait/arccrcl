'use client'

import { useRouter } from 'next/navigation'
import HeroChat from './HeroChat'

export default function Hero() {
  const router = useRouter()

  const buttons = [
    { label: 'Projects', href: '/projects', primary: true },
    { label: 'Markets', href: '/markets' },
    { label: 'News', href: '/news' },
    { label: 'Learn', href: '/learn' },
  ]

  return (
    <div
      className="text-center px-6 py-10 md:py-16 border-b"
      style={{
        borderColor: 'rgba(227,200,150,0.2)',
        background: 'linear-gradient(180deg, #010c24 0%, #0d2340 20%, #163756 45%, #315879 70%, #4d7a97 88%, #5d8a9c 100%)',
      }}
    >
      <img
        src="/icon.png"
        alt="ArcCRCL"
        className="w-14 h-14 md:w-16 md:h-16 mx-auto mb-3 object-contain"
      />
      <div className="inline-block text-xs md:text-sm px-3 py-1 rounded-full mb-4 border" style={{ backgroundColor: 'rgba(227,200,150,0.1)', borderColor: 'rgba(227,200,150,0.3)', color: '#E3C896' }}>
        Your Arc universe, all in one place
      </div>
      <h1 className="text-4xl md:text-6xl font-medium leading-tight mb-3">
        The hub for everything{' '}
        <span style={{ color: '#E3C896' }}>Arc</span>
      </h1>
      <p className="text-gray-500 text-sm md:text-base max-w-md md:max-w-xl mx-auto mb-5 leading-relaxed">
        Top projects, breaking news, and stablecoin FX — all in one place for the Arc ecosystem.
      </p>
      <div className="flex flex-wrap gap-2 justify-center">
        {buttons.map((btn) => (
          <button
            key={btn.label}
            onClick={() => router.push(btn.href)}
            className="text-sm md:text-base px-4 py-2 md:px-6 md:py-2.5 rounded-lg font-medium hover:opacity-90 transition-opacity border"
            style={btn.primary
              ? { backgroundColor: '#E3C896', color: '#070c16', borderColor: '#E3C896' }
              : { borderColor: '#E3C896', color: '#E3C896' }
            }
          >
            {btn.label}
          </button>
        ))}
      </div>

      <div className="mt-8">
        <HeroChat compact />
      </div>
    </div>
  )
}