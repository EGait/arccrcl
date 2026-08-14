'use client'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function AboutPage() {
  return (
    <main className="bg-[#070c16] min-h-screen text-gray-100">
      <Navbar />

      <div className="px-6 md:px-8 py-12 border-b text-center" style={{ borderColor: 'rgba(227,200,150,0.2)' }}>
        <div className="inline-block text-xs px-3 py-1 rounded-full mb-4 border" style={{ backgroundColor: 'rgba(227,200,150,0.1)', borderColor: 'rgba(227,200,150,0.3)', color: '#E3C896' }}>
          About
        </div>
        <h1 className="text-3xl md:text-4xl font-medium mb-3">
          About{' '}
          <span style={{ color: '#E3C896' }}>ArcCRCL</span>
        </h1>
        <p className="text-gray-500 text-sm max-w-md mx-auto">
          Your go-to hub for everything happening on Circle's Arc blockchain.
        </p>
      </div>

      <div className="max-w-2xl mx-auto px-6 md:px-8 py-12">
        <div className="flex flex-col gap-8 text-sm text-gray-400 leading-relaxed">
          <div>
            <h2 className="text-base font-medium text-gray-200 mb-3">Our Mission</h2>
            <p>
              ArcCRCL is built to be the one place Arc users actually need. We bring together the best projects, breaking news, stablecoin FX rates, and ecosystem data — all in one clean, fast hub built for the Arc community.
            </p>
          </div>

          <div>
            <h2 className="text-base font-medium text-gray-200 mb-3">What We Offer</h2>
            <div className="flex flex-col gap-3 text-gray-500">
              <p>📰 <strong className="text-gray-400">Daily News</strong> — Stay up to date with the latest Arc and stablecoin infrastructure news.</p>
              <p>🔭 <strong className="text-gray-400">Project Directory</strong> — Browse a curated directory of the best projects building on Arc.</p>
              <p>⚡ <strong className="text-gray-400">Stablecoin FX</strong> — Track onchain stablecoin swaps and FX rates on Arc.</p>
              <p>🏦 <strong className="text-gray-400">RWAs &amp; Tokenized Assets</strong> — Follow tokenized funds and real-world assets launching on Arc.</p>
              <p>💵 <strong className="text-gray-400">Stablecoins</strong> — Browse and compare the stablecoins available on Arc.</p>
            </div>
          </div>

          <div>
            <h2 className="text-base font-medium text-gray-200 mb-3">Contact</h2>
            <p>
              Have a project you want featured? Want to get in touch?
            </p>
            <button
              onClick={() => window.location.href = 'mailto:hello@arccrcl.com'}
              className="mt-3 text-xs px-4 py-2 rounded-lg transition-colors"
              style={{ backgroundColor: 'rgba(227,200,150,0.1)', border: '1px solid rgba(227,200,150,0.3)', color: '#E3C896' }}
            >
              hello@arccrcl.com
            </button>
          </div>

          <div>
            <h2 className="text-base font-medium text-gray-200 mb-3">Follow Us</h2>
            <button
              onClick={() => window.open('https://x.com/ArcCRCL', '_blank')}
              className="text-xs px-4 py-2 rounded-lg transition-colors"
              style={{ backgroundColor: 'rgba(227,200,150,0.1)', border: '1px solid rgba(227,200,150,0.3)', color: '#E3C896' }}
            >
              𝕏 @ArcCRCL
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
