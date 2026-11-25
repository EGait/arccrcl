import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const card = { backgroundColor: 'rgba(227,200,150,0.04)', border: '1px solid rgba(227,200,150,0.15)' }
const gold = { color: '#E3C896' }

export default function ArcMainnetTwoMonthsPage() {
  return (
    <main className="bg-[#070c16] min-h-screen text-gray-100">
      <Navbar />

      <article className="max-w-3xl mx-auto px-6 md:px-8 py-12">
        <div className="mb-8">
          <div className="inline-block text-xs px-3 py-1 rounded-full mb-4 border" style={{ backgroundColor: 'rgba(227,200,150,0.1)', borderColor: 'rgba(227,200,150,0.3)', color: '#E3C896' }}>
            Featured Research
          </div>
          <h1 className="text-3xl md:text-4xl font-medium mb-3">
            <span style={gold}>Arc Mainnet</span>, Two Months In: What Launched and What&apos;s Happened Since
          </h1>
          <div className="flex items-center gap-3 text-xs text-gray-600">
            <span>By ArcCRCL</span>
            <span>•</span>
            <span>November 25, 2026</span>
            <span>•</span>
            <span>6 min read</span>
          </div>
        </div>

        <div className="flex flex-col gap-8 text-sm text-gray-400 leading-relaxed">

          <div>
            <h2 className="text-lg font-medium text-gray-200 mb-3">It Shipped on Schedule</h2>
            <p>
              Arc&apos;s public mainnet went live on <strong className="text-gray-200">September 16, 2026</strong> — the date Circle had been pointing to for months. Circle framed the launch as an &ldquo;economic operating system for the internet&rdquo;: an open Layer 1 built specifically for stablecoin finance, with USDC as the native gas token. Heading into launch, Circle reported more than half a billion testnet transactions, nearly 3 million testnet wallets, and 100+ partners already active on private mainnet.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-medium text-gray-200 mb-3">What Was Live on Day One</h2>
            <div className="flex flex-col gap-3">
              <div className="rounded-xl p-4" style={card}>
                <div className="text-sm font-medium text-gray-200 mb-1">Institutional validators</div>
                <p className="text-xs text-gray-500">The founding validator cohort includes names like BlackRock, DTCC, Mastercard, and Visa, operating the network alongside Circle. Reported validator counts vary between outlets, so treat Circle&apos;s own materials as the source of truth for the exact roster.</p>
              </div>
              <div className="rounded-xl p-4" style={card}>
                <div className="text-sm font-medium text-gray-200 mb-1">Core DeFi from the start</div>
                <p className="text-xs text-gray-500">Aave, Uniswap, and Morpho were reported as participating from launch — meaning lending, swaps, and curated vaults were available without waiting months for DeFi to bootstrap.</p>
              </div>
              <div className="rounded-xl p-4" style={card}>
                <div className="text-sm font-medium text-gray-200 mb-1">100+ builders</div>
                <p className="text-xs text-gray-500">Circle said mainnet opened with more than 100 institutional and ecosystem builders. That includes regional on-ramps — Turkish exchange Paribu, for example, was a launch partner supporting USDC deposits and withdrawals over Arc.</p>
              </div>
              <div className="rounded-xl p-4" style={card}>
                <div className="text-sm font-medium text-gray-200 mb-1">A 10 billion ARC genesis mint</div>
                <p className="text-xs text-gray-500">Circle minted 10 billion ARC tokens at genesis, while stressing this is not a public token launch. We break down what that does and doesn&apos;t mean in <a href="/news/arc-token-explained" style={gold}>our ARC token explainer</a>.</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-medium text-gray-200 mb-3">The Early Numbers</h2>
            <p className="mb-3">
              The best public read on Arc&apos;s first weeks came from Circle&apos;s Q3 2026 earnings call in early November. Management said:
            </p>
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="rounded-xl p-3 text-center" style={card}>
                <div className="text-lg font-medium" style={gold}>$30B+</div>
                <div className="text-xs text-gray-600">USDC moved across Arc since launch</div>
              </div>
              <div className="rounded-xl p-3 text-center" style={card}>
                <div className="text-lg font-medium" style={gold}>~$1.5B</div>
                <div className="text-xs text-gray-600">USDC, EURC &amp; cirBTC on Arc (late Oct)</div>
              </div>
            </div>
            <p>
              The gap between those two numbers is the story: a lot of value is <em>flowing through</em> Arc relative to how much is <em>sitting on</em> it. That&apos;s consistent with Arc&apos;s pitch as a settlement and payments chain rather than a place to park capital. Be cautious with third-party TVL figures from launch week — some early estimates circulated without clear methodology, and incentive-driven deposits tend to overstate organic usage.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-medium text-gray-200 mb-3">What Arc Is Not (Yet)</h2>
            <p className="mb-3">
              Arc launched as a <strong className="text-gray-200">permissioned</strong> network: the validator set is curated, not open to anyone who wants to stake. That&apos;s a deliberate trade-off — it&apos;s what lets regulated institutions participate — but it means Arc is not decentralized in the way Ethereum is today.
            </p>
            <p>
              Circle has described the ARC genesis mint as a step toward a possible move from proof of authority to proof of stake, with 2027 floated as a timeframe. Nothing about that transition is confirmed, and how open the validator set eventually becomes is one of the most important open questions for the network.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-medium text-gray-200 mb-3">What to Watch Next</h2>
            <ul className="list-disc pl-5 flex flex-col gap-2">
              <li><strong className="text-gray-200">Resting balances vs. throughput.</strong> Does the ~$1.5B onchain grow meaningfully, or does Arc stay primarily a pass-through settlement layer?</li>
              <li><strong className="text-gray-200">Tokenized funds.</strong> BlackRock has been reported as planning to bring its BUIDL fund to Arc. Live institutional products would be a strong signal. Follow along on our <a href="/rwas" style={gold}>RWAs page</a>.</li>
              <li><strong className="text-gray-200">Consumer apps.</strong> FOMO was announced for launch day (<a href="/news/fomo-arc-launch" style={gold}>our coverage</a>); whether retail apps like it drive sustained activity matters as much as institutional flows.</li>
              <li><strong className="text-gray-200">The PoS roadmap.</strong> Any concrete timeline for opening up validation.</li>
            </ul>
          </div>

          <div className="rounded-xl p-4 mt-4" style={card}>
            <p className="text-xs text-gray-600 italic">
              Disclaimer: This article is for informational purposes only and does not constitute financial advice. Figures are as reported by Circle and public news coverage at the time of writing. ArcCRCL is an independent community hub and is not affiliated with Circle Internet Group or any projects mentioned.
            </p>
          </div>

        </div>
      </article>

      <Footer />
    </main>
  )
}
