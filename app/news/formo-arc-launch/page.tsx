import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function FomoArcLaunchPage() {
  return (
    <main className="bg-[#070c16] min-h-screen text-gray-100">
      <Navbar />

      <article className="max-w-3xl mx-auto px-6 md:px-8 py-12">
        <div className="mb-8">
          <div className="inline-block text-xs px-3 py-1 rounded-full mb-4 border" style={{ backgroundColor: 'rgba(227,200,150,0.1)', borderColor: 'rgba(227,200,150,0.3)', color: '#E3C896' }}>
            Breaking
          </div>
          <h1 className="text-3xl md:text-4xl font-medium mb-3">
            <span style={{ color: '#E3C896' }}>FOMO</span> Is Coming to Arc on Day One — Here's Why It Matters
          </h1>
          <div className="flex items-center gap-3 text-xs text-gray-600">
            <span>By ArcCRCL</span>
            <span>•</span>
            <span>August 18, 2026</span>
            <span>•</span>
            <span>5 min read</span>
          </div>
        </div>

        <div className="flex flex-col gap-8 text-sm text-gray-400 leading-relaxed">

          <div>
            <h2 className="text-lg font-medium text-gray-200 mb-3">Circle's CEO Just Confirmed It</h2>
            <p>
              Jeremy Allaire — Circle's CEO and the architect behind Arc — confirmed on X that <strong className="text-gray-200">FOMO will be live on Arc at mainnet launch on September 16</strong>. For anyone tracking Arc's ecosystem, this is one of the most significant consumer app announcements yet. FOMO isn't a testnet project or a hackathon demo — it's one of the fastest-growing crypto trading apps in the world, and it's bringing its entire user base to Arc from day one.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-medium text-gray-200 mb-3">What Is FOMO?</h2>
            <p className="mb-3">
              FOMO is a mobile-first social trading app built by former dYdX engineers Paul Erlanger, Sae Young Park, and Prashan Dharmasena. It launched in May 2025 and has grown explosively since — the kind of growth that gets an entire industry's attention.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
              <div className="rounded-xl p-3 text-center" style={{ backgroundColor: 'rgba(227,200,150,0.04)', border: '1px solid rgba(227,200,150,0.15)' }}>
                <div className="text-lg font-medium" style={{ color: '#E3C896' }}>500K+</div>
                <div className="text-xs text-gray-600">Traders</div>
              </div>
              <div className="rounded-xl p-3 text-center" style={{ backgroundColor: 'rgba(227,200,150,0.04)', border: '1px solid rgba(227,200,150,0.15)' }}>
                <div className="text-lg font-medium" style={{ color: '#E3C896' }}>$1.5B+</div>
                <div className="text-xs text-gray-600">Total Volume</div>
              </div>
              <div className="rounded-xl p-3 text-center" style={{ backgroundColor: 'rgba(227,200,150,0.04)', border: '1px solid rgba(227,200,150,0.15)' }}>
                <div className="text-lg font-medium" style={{ color: '#E3C896' }}>$1.4M</div>
                <div className="text-xs text-gray-600">Weekly Revenue</div>
              </div>
              <div className="rounded-xl p-3 text-center" style={{ backgroundColor: 'rgba(227,200,150,0.04)', border: '1px solid rgba(227,200,150,0.15)' }}>
                <div className="text-lg font-medium" style={{ color: '#E3C896' }}>#3</div>
                <div className="text-xs text-gray-600">On Solana by Revenue</div>
              </div>
            </div>
            <p>
              The app's core idea is simple: make onchain trading feel like a social media app. Users sign up with Apple ID or email, fund via Apple Pay, and start trading — no seed phrases, no bridges, no gas token management. A live social feed shows what top traders are buying in real time, with public P&amp;L and win rates that add accountability. Copy trading lets users mirror the trades of top performers automatically.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-medium text-gray-200 mb-3">Why FOMO + Arc Makes Sense</h2>
            <p className="mb-3">
              FOMO originally launched on Solana and has since expanded to Base, BNB Chain, and Monad. Adding Arc isn't just another chain integration — it's a natural alignment of product philosophy.
            </p>
            <div className="flex flex-col gap-3">
              <div className="rounded-xl p-4" style={{ backgroundColor: 'rgba(227,200,150,0.04)', border: '1px solid rgba(227,200,150,0.15)' }}>
                <div className="text-sm font-medium text-gray-200 mb-1">USDC-native gas eliminates friction</div>
                <p className="text-xs text-gray-500">FOMO's entire UX thesis is "no crypto complexity." Arc's USDC gas means FOMO users never need to acquire a separate gas token — their dollar balance just works. This is exactly the model FOMO already uses (sponsored gas, single USD balance), but on Arc it's native to the chain itself rather than an abstraction layer.</p>
              </div>
              <div className="rounded-xl p-4" style={{ backgroundColor: 'rgba(227,200,150,0.04)', border: '1px solid rgba(227,200,150,0.15)' }}>
                <div className="text-sm font-medium text-gray-200 mb-1">Sub-second finality = instant trades</div>
                <p className="text-xs text-gray-500">FOMO already built its reputation on speed. Arc's deterministic sub-second finality means trades on Arc settle faster than most centralized exchanges can process a withdrawal. For a social trading app where timing matters, this is a competitive edge.</p>
              </div>
              <div className="rounded-xl p-4" style={{ backgroundColor: 'rgba(227,200,150,0.04)', border: '1px solid rgba(227,200,150,0.15)' }}>
                <div className="text-sm font-medium text-gray-200 mb-1">Multi-chain unified balance</div>
                <p className="text-xs text-gray-500">FOMO already supports trading across multiple chains from a single balance. Arc's CCTP integration means USDC can flow seamlessly between Arc and FOMO's existing chains (Solana, Base, BNB) — no manual bridging, no wrapped tokens.</p>
              </div>
              <div className="rounded-xl p-4" style={{ backgroundColor: 'rgba(227,200,150,0.04)', border: '1px solid rgba(227,200,150,0.15)' }}>
                <div className="text-sm font-medium text-gray-200 mb-1">Circle's backing</div>
                <p className="text-xs text-gray-500">Having Circle's CEO personally announce FOMO's Arc integration isn't just a partnership — it signals that Circle sees FOMO as the kind of consumer-facing app that validates Arc's thesis. Institutional validators secure the chain, but consumer apps like FOMO are what drive actual usage.</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-medium text-gray-200 mb-3">FOMO's Rise: From Launch to $1.4M/Week in 14 Months</h2>
            <p className="mb-3">
              FOMO's growth trajectory has been one of the most watched in crypto over the past year. The company raised $17 million in a Series A in November 2025, led by Dragonfly, with angel investors including Raj Gokal (Solana co-founder), Marc Boiron (Polygon Labs CEO), and Balaji Srinivasan (former Coinbase CTO).
            </p>
            <p className="mb-3">
              By mid-July 2026, FOMO was generating around $1.39 million in weekly revenue — placing it third among all Solana protocols by revenue, behind only Pump.fun. That's nearly 10x its revenue from late 2025. The app has processed over $1.5 billion in total trading volume across 3.47 million transactions.
            </p>
            <p>
              In June 2026, FOMO expanded beyond spot trading into perpetual futures (for non-US users), routing execution through Hyperliquid. The perps cover crypto, equities, indices, commodities, and even pre-IPO names — a significant broadening from its memecoin trading roots.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-medium text-gray-200 mb-3">What This Means for Arc's Mainnet Launch</h2>
            <p className="mb-3">
              Most new chains launch with DeFi primitives (DEXs, lending protocols) and hope consumer apps follow eventually. Arc is launching with Aave, Uniswap, and Morpho AND a consumer app with 500,000+ active traders. That's a fundamentally different starting position.
            </p>
            <p className="mb-3">
              FOMO brings something the institutional partners don't: <strong className="text-gray-200">retail transaction volume from day one</strong>. BlackRock validates the chain's credibility. Visa and Mastercard validate the payments thesis. But FOMO validates that real people will actually use Arc to do things — and generate the transaction fees that make the network economically sustainable.
            </p>
            <p>
              For the Arc ecosystem, FOMO's integration also signals something broader: Arc isn't just for institutions. It's a chain where consumer apps can thrive alongside institutional infrastructure — and where the USDC-native gas model makes consumer UX genuinely better, not just marginally different.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-medium text-gray-200 mb-3">What to Expect on September 16</h2>
            <p>
              Based on Allaire's confirmation, FOMO should be available as an Arc trading option from the moment mainnet goes public. For existing FOMO users, this likely means Arc appears as another chain option alongside Solana, Base, and BNB — same app, same balance, new chain. For Arc users, it means a fully-featured trading app with social discovery, copy trading, and perps is available from day one, not months after launch. We'll be tracking the integration closely as mainnet approaches.
            </p>
          </div>

          <div className="rounded-xl p-4 mt-4" style={{ backgroundColor: 'rgba(227,200,150,0.04)', border: '1px solid rgba(227,200,150,0.15)' }}>
            <p className="text-xs text-gray-600 italic">
              Disclaimer: This article is for informational purposes only and does not constitute financial advice. ArcCRCL is an independent community hub and is not affiliated with Circle Internet Group, FOMO Labs, or any projects mentioned.
            </p>
          </div>

        </div>
      </article>

      <Footer />
    </main>
  )
}