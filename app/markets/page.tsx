import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { stablecoins } from '../data/stablecoins'
import { rwas } from '../data/rwas'

export default function MarketsPage() {
  return (
    <main className="bg-[#070c16] min-h-screen text-gray-100">
      <Navbar />

      <div className="px-6 md:px-8 py-12 border-b text-center" style={{ borderColor: 'rgba(227,200,150,0.2)' }}>
        <div className="inline-block text-xs px-3 py-1 rounded-full mb-4 border" style={{ backgroundColor: 'rgba(227,200,150,0.1)', borderColor: 'rgba(227,200,150,0.3)', color: '#E3C896' }}>
          Arc Financial Products
        </div>
        <h1 className="text-3xl md:text-4xl font-medium mb-3">
          <span style={{ color: '#E3C896' }}>Markets</span>
        </h1>
        <p className="text-gray-500 text-sm max-w-lg mx-auto">
          Stablecoins, yield products, and tokenized real-world assets on Arc — the financial building blocks of the ecosystem.
        </p>
      </div>

      <div className="px-6 md:px-8 py-10 max-w-5xl mx-auto">

        {/* Stablecoins Section */}
        <div className="mb-12">
          <div className="text-xs font-medium uppercase tracking-widest mb-2" style={{ color: '#E3C896' }}>
            Stablecoins
          </div>
          <p className="text-xs text-gray-600 mb-6">
            USDC is Arc's native gas token — the first blockchain where you pay fees in dollars, not a volatile cryptocurrency.
          </p>
          {stablecoins.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {stablecoins.map((coin: any) => (
                <div
                  key={coin.id}
                  className="rounded-2xl p-5 transition-all hover:scale-[1.02]"
                  style={{ backgroundColor: 'rgba(227,200,150,0.04)', border: '1px solid rgba(227,200,150,0.15)' }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{coin.icon}</span>
                    <div>
                      <div className="text-sm font-medium text-gray-200">{coin.name}</div>
                      <div className="text-xs text-gray-600">{coin.issuer} · Pegged to {coin.peg}</div>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed mb-3">{coin.description}</p>
                  {coin.highlight && (
                    <span className="text-xs px-2 py-0.5 rounded" style={{ backgroundColor: 'rgba(227,200,150,0.1)', color: '#E3C896' }}>
                      {coin.highlight}
                    </span>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="rounded-lg border px-6 py-10 text-center text-sm text-gray-500" style={{ borderColor: 'rgba(227,200,150,0.2)' }}>
              Stablecoin data coming soon.
            </div>
          )}
        </div>

        {/* Yield Section */}
        <div className="mb-12">
          <div className="text-xs font-medium uppercase tracking-widest mb-2" style={{ color: '#E3C896' }}>
            Yield & Treasury
          </div>
          <p className="text-xs text-gray-600 mb-6">
            Arc doesn't have staking tokens like Solana — yield comes through tokenized treasury products like Circle's USYC, offering onchain exposure to US Treasuries with 24/7 redemptions.
          </p>
          <div className="rounded-2xl p-5" style={{ backgroundColor: 'rgba(227,200,150,0.04)', border: '1px solid rgba(227,200,150,0.15)' }}>
            <div className="flex items-center gap-3 mb-3">
              <span className="text-2xl">📈</span>
              <div>
                <div className="text-sm font-medium text-gray-200">USYC</div>
                <div className="text-xs text-gray-600">Circle · Yield-bearing stablecoin</div>
              </div>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed mb-3">
              Circle's onchain yield-bearing asset backed by US Treasuries. Designed to serve as treasury, collateral, and capital markets infrastructure on Arc. Offers 24/7 near-instant redemptions at scale.
            </p>
            <span className="text-xs px-2 py-0.5 rounded" style={{ backgroundColor: 'rgba(227,200,150,0.1)', color: '#E3C896' }}>
              Primary yield product on Arc
            </span>
          </div>
        </div>

        {/* RWAs Section */}
        <div className="mb-12">
          <div className="text-xs font-medium uppercase tracking-widest mb-2" style={{ color: '#E3C896' }}>
            Real-World Assets
          </div>
          <p className="text-xs text-gray-600 mb-6">
            Tokenized funds and traditional financial assets launching on Arc — from BlackRock's BUIDL treasury fund to DTCC's securities tokenization initiative.
          </p>
          {rwas.length > 0 ? (
            <div className="flex flex-col gap-4">
              {rwas.map((rwa: any) => (
                <div
                  key={rwa.id}
                  className="rounded-2xl p-5 transition-all hover:scale-[1.01]"
                  style={{ backgroundColor: 'rgba(227,200,150,0.04)', border: '1px solid rgba(227,200,150,0.15)' }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{rwa.icon}</span>
                      <div>
                        <div className="text-sm font-medium text-gray-200">{rwa.name}</div>
                        <div className="text-xs text-gray-600">{rwa.issuer} · {rwa.category}</div>
                      </div>
                    </div>
                    <span className="text-xs px-2 py-0.5 rounded" style={{ backgroundColor: 'rgba(227,200,150,0.1)', color: '#E3C896' }}>
                      {rwa.status}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed">{rwa.description}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="rounded-lg border px-6 py-10 text-center text-sm text-gray-500" style={{ borderColor: 'rgba(227,200,150,0.2)' }}>
              RWA data coming soon.
            </div>
          )}
        </div>

      </div>

      <Footer />
    </main>
  )
}