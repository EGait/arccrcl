'use client'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { lsts } from '../data/lsts'

export default function LSTsPage() {
  

  const visitSite = (url: string) => {
    window.open(url, '_blank')
  }

  return (
    <main className="bg-[#070c16] min-h-screen text-gray-100">
      <Navbar />

      <div className="px-6 md:px-8 py-12 border-b text-center" style={{ borderColor: 'rgba(227,200,150,0.2)' }}>
        <div className="inline-block text-xs px-3 py-1 rounded-full mb-4 border" style={{ backgroundColor: 'rgba(227,200,150,0.1)', borderColor: 'rgba(227,200,150,0.3)', color: '#E3C896' }}>
          Stablecoin Yield
        </div>
        <h1 className="text-3xl md:text-4xl font-medium mb-3">
          Arc{' '}
          <span style={{ color: '#E3C896' }}>Yield &amp; Treasury</span>
        </h1>
        <p className="text-gray-500 text-sm max-w-lg mx-auto">
          Arc doesn't have LSTs like Solana — its yield story runs through tokenized treasury products like Circle's USYC. This page tracks yield-bearing options on Arc as they launch.
        </p>
      </div>

      <div className="px-6 md:px-8 py-8 max-w-5xl mx-auto">
        <div className="rounded-2xl p-5 mb-8" style={{ backgroundColor: 'rgba(227,200,150,0.05)', border: '1px solid rgba(227,200,150,0.2)' }}>
          <div className="text-xs font-medium mb-2" style={{ color: '#E3C896' }}>What's different about yield on Arc?</div>
          <p className="text-xs text-gray-500 leading-relaxed">
            Arc doesn't have a native staking token to lock up like Solana's SOL — gas is paid in USDC and the chain is secured by a permissioned validator set of financial institutions. Yield instead comes through tokenized money-market and treasury products, like Circle's USYC, that plug directly into Arc's stablecoin rails.
          </p>
        </div>

        <div className="text-xs font-medium uppercase tracking-widest mb-4" style={{ color: '#E3C896' }}>
          Top Yield Products on Arc
        </div>

        {/* Desktop table view */}
        <div className="hidden md:block rounded-2xl overflow-hidden" style={{ border: '1px solid rgba(227,200,150,0.15)' }}>
          <div className="grid grid-cols-12 px-4 py-3 text-xs font-medium uppercase tracking-widest" style={{ backgroundColor: 'rgba(227,200,150,0.08)', color: '#E3C896', borderBottom: '1px solid rgba(227,200,150,0.15)' }}>
            <div className="col-span-4">Token</div>
            <div className="col-span-2 text-right">APY</div>
            <div className="col-span-2 text-right">SOL Staked</div>
            <div className="col-span-2 text-right">TVL</div>
            <div className="col-span-2 text-right">Actions</div>
          </div>

          {lsts.map((lst: any, index: number) => (
            <div
              key={lst.id}
              className="grid grid-cols-12 px-4 py-4 items-center"
              style={{
                borderBottom: index < lsts.length - 1 ? '1px solid rgba(227,200,150,0.08)' : 'none',
                backgroundColor: index % 2 === 0 ? 'rgba(227,200,150,0.02)' : 'transparent'
              }}
            >
              <div className="col-span-4 flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center text-lg flex-shrink-0 overflow-hidden" style={{ backgroundColor: 'rgba(227,200,150,0.1)' }}>
                  {lst.logo ? (
                    <img
                      src={lst.logo}
                      alt={lst.name}
                      className="w-full h-full object-cover rounded-xl"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none'
                        const sibling = e.currentTarget.nextElementSibling as HTMLElement
                        if (sibling) sibling.style.display = 'block'
                      }}
                    />
                  ) : null}
                  <span style={{ display: lst.logo ? 'none' : 'block' }}>{lst.icon}</span>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-200">{lst.name}</div>
                  <div className="text-xs text-gray-600">{lst.symbol}</div>
                </div>
              </div>
              <div className="col-span-2 text-right">
                <span className="text-sm font-medium" style={{ color: '#E3C896' }}>{lst.apy}</span>
              </div>
              <div className="col-span-2 text-right">
                <span className="text-xs text-gray-300">{lst.solStaked}</span>
              </div>
              <div className="col-span-2 text-right">
                <span className="text-xs text-gray-300">{lst.tvl}</span>
              </div>
              <div className="col-span-2 flex items-center justify-end gap-2">
                <button
                  onClick={() => visitSite(lst.website)}
                  className="text-xs px-3 py-1.5 rounded-lg transition-colors text-gray-500 hover:text-gray-300"
                  style={{ border: '1px solid rgba(227,200,150,0.15)' }}
                >
                  Visit
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile card view */}
        <div className="md:hidden flex flex-col gap-3">
          {lsts.map((lst: any) => (
            <div
              key={lst.id}
              className="rounded-2xl p-4"
              style={{ backgroundColor: 'rgba(227,200,150,0.03)', border: '1px solid rgba(227,200,150,0.15)' }}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-xl overflow-hidden" style={{ backgroundColor: 'rgba(227,200,150,0.1)' }}>
                    {lst.logo ? (
                      <img
                        src={lst.logo}
                        alt={lst.name}
                        className="w-full h-full object-cover rounded-xl"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none'
                          const sibling = e.currentTarget.nextElementSibling as HTMLElement
                          if (sibling) sibling.style.display = 'block'
                        }}
                      />
                    ) : null}
                    <span style={{ display: lst.logo ? 'none' : 'block' }}>{lst.icon}</span>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-200">{lst.name}</div>
                    <div className="text-xs text-gray-600">{lst.symbol}</div>
                  </div>
                </div>
                <span className="text-sm font-medium" style={{ color: '#E3C896' }}>{lst.apy}</span>
              </div>
              <div className="flex gap-4 text-xs mb-3">
                <div>
                  <span className="text-gray-600">SOL Staked </span>
                  <span className="text-gray-300">{lst.solStaked}</span>
                </div>
                <div>
                  <span className="text-gray-600">TVL </span>
                  <span className="text-gray-300">{lst.tvl}</span>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => visitSite(lst.website)}
                  className="px-3 py-2 text-xs rounded-lg transition-colors text-gray-500 hover:text-gray-300"
                  style={{ border: '1px solid rgba(227,200,150,0.15)' }}
                >
                  Visit
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
<Footer />
    </main>
  )
}