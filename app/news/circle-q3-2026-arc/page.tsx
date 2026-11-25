import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const card = { backgroundColor: 'rgba(227,200,150,0.04)', border: '1px solid rgba(227,200,150,0.15)' }
const gold = { color: '#E3C896' }

const stats = [
  { value: '$864.9M', label: 'Total revenue & reserve income (+17% YoY)' },
  { value: '$657.6M', label: 'Reserve income (−8% YoY)' },
  { value: '$73.3B', label: 'Avg. USDC in circulation (+8% YoY)' },
  { value: '$13.9T', label: 'USDC onchain volume (+49% YoY)' },
]

export default function CircleQ3ArcPage() {
  return (
    <main className="bg-[#070c16] min-h-screen text-gray-100">
      <Navbar />

      <article className="max-w-3xl mx-auto px-6 md:px-8 py-12">
        <div className="mb-8">
          <div className="inline-block text-xs px-3 py-1 rounded-full mb-4 border" style={{ backgroundColor: 'rgba(227,200,150,0.1)', borderColor: 'rgba(227,200,150,0.3)', color: '#E3C896' }}>
            Research
          </div>
          <h1 className="text-3xl md:text-4xl font-medium mb-3">
            <span style={gold}>Circle&apos;s Q3 2026</span>: What the Numbers Say About Arc
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
            <h2 className="text-lg font-medium text-gray-200 mb-3">The First Quarter With Arc Live</h2>
            <p>
              Circle reported its third-quarter 2026 results in early November — the first earnings covering a period in which Arc mainnet was live (from September 16). For anyone following Arc, the report matters less for its headline numbers than for what it reveals about why Circle built a chain in the first place.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-medium text-gray-200 mb-3">The Headline Numbers</h2>
            <div className="grid grid-cols-2 gap-3">
              {stats.map((s) => (
                <div key={s.value} className="rounded-xl p-3 text-center" style={card}>
                  <div className="text-lg font-medium" style={gold}>{s.value}</div>
                  <div className="text-xs text-gray-600">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-lg font-medium text-gray-200 mb-3">The Core Business Is Rate-Sensitive</h2>
            <p className="mb-3">
              Circle earns most of its money from interest on the reserves backing USDC. In Q3, reserve income fell 8% year over year to $657.6 million as the reserve return rate dropped from 4.15% to 3.54%. Average USDC circulation still grew 8% — but lower rates ate the gain.
            </p>
            <p>
              This is the clearest illustration of Arc&apos;s strategic purpose. A business that depends on interest rates is exposed to forces it can&apos;t control. Owning the settlement layer — and the activity, fees, and products built on it — is a way to diversify beyond &ldquo;hold reserves, earn yield.&rdquo;
            </p>
          </div>

          <div>
            <h2 className="text-lg font-medium text-gray-200 mb-3">The ARC Presale Filled the Gap</h2>
            <p>
              Total revenue still grew about 17%, and a big reason is one-off: roughly <strong className="text-gray-200">$182 million</strong> came from the private ARC token presale. That&apos;s worth flagging plainly — it is not recurring revenue, and it won&apos;t repeat next quarter. If you&apos;re new to ARC, start with <a href="/news/arc-token-explained" style={gold}>our explainer</a> (short version: there is no public sale, and anyone offering one is a scammer).
            </p>
          </div>

          <div>
            <h2 className="text-lg font-medium text-gray-200 mb-3">Arc&apos;s Own Metrics</h2>
            <div className="flex flex-col gap-3">
              <div className="rounded-xl p-4" style={card}>
                <div className="text-sm font-medium text-gray-200 mb-1">$30B+ of USDC moved across Arc</div>
                <p className="text-xs text-gray-500">Management&apos;s figure for cumulative USDC flow since mainnet launch. It&apos;s a throughput number, so it says more about Arc being used for settlement than about long-term adoption.</p>
              </div>
              <div className="rounded-xl p-4" style={card}>
                <div className="text-sm font-medium text-gray-200 mb-1">~$1.5B of assets on Arc</div>
                <p className="text-xs text-gray-500">As of late October, roughly $1.5 billion of USDC, EURC, and cirBTC sat on the chain — a modest base after about six weeks, and the number to track quarter over quarter.</p>
              </div>
              <div className="rounded-xl p-4" style={card}>
                <div className="text-sm font-medium text-gray-200 mb-1">USDC volume is booming everywhere</div>
                <p className="text-xs text-gray-500">USDC onchain transaction volume hit $13.9 trillion in the quarter, up 49%. Arc&apos;s challenge is capturing a growing share of that activity rather than just adding another venue for it.</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-medium text-gray-200 mb-3">Guidance and What to Watch in Q4</h2>
            <p className="mb-3">
              Circle kept its full-year 2026 guidance unchanged, including its 40% multi-year USDC circulation growth target and $310–330 million of &ldquo;other revenue.&rdquo; Q4 will be the first full quarter of Arc mainnet, so it&apos;s the cleaner test. Here&apos;s what we&apos;ll be looking for:
            </p>
            <ul className="list-disc pl-5 flex flex-col gap-2">
              <li>Growth in assets resting on Arc, not just volume passing through it</li>
              <li>Any Arc-specific revenue line beyond the one-time presale</li>
              <li>Live tokenized-fund and FX products from launch partners</li>
              <li>Updates on the proof-of-stake roadmap</li>
            </ul>
            <p className="mt-3">
              For the broader launch recap, see <a href="/news/arc-mainnet-two-months" style={gold}>Arc Mainnet, Two Months In</a>.
            </p>
          </div>

          <div className="rounded-xl p-4 mt-4" style={card}>
            <p className="text-xs text-gray-600 italic">
              Disclaimer: This article is for informational purposes only and does not constitute financial or investment advice, including about Circle (CRCL) stock. Figures are taken from Circle&apos;s reported Q3 2026 results and earnings call as covered publicly; consult Circle&apos;s SEC filings for authoritative numbers. ArcCRCL is an independent community hub and is not affiliated with Circle Internet Group.
            </p>
          </div>

        </div>
      </article>

      <Footer />
    </main>
  )
}
