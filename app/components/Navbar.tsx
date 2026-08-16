'use client'

import { useState } from 'react'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 border-b bg-[#070c16]/95 backdrop-blur-sm" style={{ borderColor: 'rgba(227,200,150,0.2)' }}>
        <div className="flex items-center justify-between px-6 py-4">
          <a href="/" className="flex items-center gap-2">
            <img src="/icon.png" alt="ArcCRCL" className="h-8 w-8 object-contain" />
            <span className="text-xl font-medium" style={{ color: '#E3C896' }}>ArcCRCL</span>
          </a>

          <div className="hidden md:flex gap-6">
            <a href="/" className="text-sm text-gray-500 hover:text-[#E3C896] transition-colors">Home</a>
            <a href="/projects" className="text-sm text-gray-500 hover:text-[#E3C896] transition-colors">Projects</a>
            <a href="/markets" className="text-sm text-gray-500 hover:text-[#E3C896] transition-colors">Markets</a>
            <a href="/news" className="text-sm text-gray-500 hover:text-[#E3C896] transition-colors">News</a>
            <a href="/learn" className="text-sm text-gray-500 hover:text-[#E3C896] transition-colors">Learn</a>
            <a href="/about" className="text-sm text-gray-500 hover:text-[#E3C896] transition-colors">About</a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
          >
            <span className={`block w-6 h-0.5 bg-gray-400 transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-gray-400 transition-all ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-gray-400 transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden border-t px-6 py-4 flex flex-col gap-4" style={{ borderColor: 'rgba(227,200,150,0.2)' }}>
            <a href="/" onClick={() => setMenuOpen(false)} className="text-sm text-gray-400 hover:text-[#E3C896] transition-colors">Home</a>
            <a href="/projects" onClick={() => setMenuOpen(false)} className="text-sm text-gray-400 hover:text-[#E3C896] transition-colors">Projects</a>
            <a href="/markets" onClick={() => setMenuOpen(false)} className="text-sm text-gray-400 hover:text-[#E3C896] transition-colors">Markets</a>
            <a href="/news" onClick={() => setMenuOpen(false)} className="text-sm text-gray-400 hover:text-[#E3C896] transition-colors">News</a>
            <a href="/learn" onClick={() => setMenuOpen(false)} className="text-sm text-gray-400 hover:text-[#E3C896] transition-colors">Learn</a>
            <a href="/about" onClick={() => setMenuOpen(false)} className="text-sm text-gray-400 hover:text-[#E3C896] transition-colors">About</a>
          </div>
        )}
      </nav>

      <div className="h-[65px]" />
    </>
  )
}