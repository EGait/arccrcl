import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const card = { backgroundColor: 'rgba(227,200,150,0.04)', border: '1px solid rgba(227,200,150,0.15)' }
const gold = { color: '#E3C896' }

export default function ArcTokenExplainedPage() {
  return (
    <main className="bg-[#070c16] min-h-screen text-gray-100">
      <Navbar />

      <article className="max-w-3xl mx-auto px-6 md:px-8 py-12">
        <div className="mb-8">
          <div className="inline-block text-xs px-3 py-1 rounded-full mb-4 border" style={{ backgroundColor: 'rgba(227,200,150,0.1)', borderColor: 'rgba(227,200,150,0.3)', color: '#E3C896' }}>
            Guide
          </div>
          <h1 className="text-3xl md:text-4xl font-medium mb-3">
            The <span style={gold}>ARC Token</span>: What Circle&apos;s 10 Billion Genesis Mint Does — and Doesn&apos;t — Mean
          </h1>
          <div className="flex items-center gap-3 text-xs text-gray-600">
            <span>By ArcCRCL</span>
            <span>•</span>
            <span>November 25, 2026</span>
            <span>•</span>
            <span>5 min read</span>
          </div>
        </div>

        <div className="flex flex-col gap-8 text-sm text-gray-400 leading-relaxed">

          <div className="rounded-xl p-4" style={{ backgroundColor: 'rgba(239,68,68,0.06)', border: '1px solid rgba(239,68,68,0.3)' }}>
            <div className="text-sm font-medium text-red-300 mb-1">⚠️ Scam warning</div>
            <p className="text-xs text-gray-400">
              ARC is <strong className="text-gray-200">not publicly available</strong>. It is not listed on any exchange and there is no public sale, airdrop, or claim page. Any site, DM, or &ldquo;support agent&rdquo; offering to sell you ARC or asking you to connect a wallet to claim it is a scam. Never share your seed phrase or private keys with anyone.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-medium text-gray-200 mb-3">What Happened</h2>
            <p>
              Alongside Arc&apos;s mainnet launch in September 2026, Circle minted the full initial supply of <strong className="text-gray-200">10 billion ARC tokens</strong>. Circle has been explicit that this was a technical milestone, not a commitment to a public token launch. Gas on Arc is still paid in USDC; you do not need ARC to use the network.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-medium text-gray-200 mb-3">Why Mint a Token at All?</h2>
            <p>
              Arc launched with a permissioned, proof-of-authority validator set — a curated group of institutions running the chain alongside Circle. Circle has described the ARC mint as groundwork for a potential transition to <strong className="text-gray-200">proof of stake</strong>, with 2027 floated as a possible timeframe. In a proof-of-stake design, a native token is what validators stake to secure the network and what gets slashed if they misbehave. Minting at genesis puts that piece in place without committing to a date.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-medium text-gray-200 mb-3">The Reported Allocation</h2>
            <p className="mb-3">
              According to coverage of Circle&apos;s ARC whitepaper from May 2026, the supply is split roughly as follows. Circle has said the tokenomics are subject to change.
            </p>
            <div className="grid grid-cols-3 gap-3">
              <div className="rounded-xl p-3 text-center" style={card}>
                <div className="text-lg font-medium" style={gold}>60%</div>
                <div className="text-xs text-gray-600">Ecosystem</div>
              </div>
              <div className="rounded-xl p-3 text-center" style={card}>
                <div className="text-lg font-medium" style={gold}>25%</div>
                <div className="text-xs text-gray-600">Circle</div>
              </div>
              <div className="rounded-xl p-3 text-center" style={card}>
                <div className="text-lg font-medium" style={gold}>15%</div>
                <div className="text-xs text-gray-600">Long-term reserve</div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-medium text-gray-200 mb-3">The Private Presale</h2>
            <p className="mb-3">
              ARC has already been sold — just not to the public. In May 2026, Circle reportedly raised around <strong className="text-gray-200">$222 million</strong> in a private ARC presale at a $3 billion fully diluted valuation, with a16z crypto reported as the largest participant and other institutional investors including Apollo funds, ARK Invest, and BlackRock named in coverage.
            </p>
            <p>
              That presale showed up in Circle&apos;s financials: in its Q3 2026 results, Circle recognized about <strong className="text-gray-200">$182 million</strong> of revenue from the ARC presale. (More on that in <a href="/news/circle-q3-2026-arc" style={gold}>our Q3 breakdown</a>.) What hasn&apos;t been disclosed is the share of supply sold or the vesting terms — the biggest gap in the public record.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-medium text-gray-200 mb-3">What It Means for You</h2>
            <ul className="list-disc pl-5 flex flex-col gap-2">
              <li><strong className="text-gray-200">You don&apos;t need ARC to use Arc.</strong> Fees are paid in USDC.</li>
              <li><strong className="text-gray-200">There&apos;s nothing to buy or claim.</strong> No token generation event has been announced.</li>
              <li><strong className="text-gray-200">Watch official channels only.</strong> If anything changes, it will be announced by Circle on circle.com and arc.io — not in a Telegram group or a reply under a tweet.</li>
            </ul>
          </div>

          <div className="rounded-xl p-4 mt-4" style={card}>
            <p className="text-xs text-gray-600 italic">
              Disclaimer: This article is for informational purposes only and does not constitute financial advice. Presale and allocation figures are as reported in public coverage and may change. ArcCRCL is an independent community hub and is not affiliated with Circle Internet Group or any projects mentioned.
            </p>
          </div>

        </div>
      </article>

      <Footer />
    </main>
  )
}
