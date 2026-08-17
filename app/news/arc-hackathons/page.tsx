import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function ArcHackathonsPage() {
  return (
    <main className="bg-[#070c16] min-h-screen text-gray-100">
      <Navbar />

      <article className="max-w-3xl mx-auto px-6 md:px-8 py-12">
        <div className="mb-8">
          <div className="inline-block text-xs px-3 py-1 rounded-full mb-4 border" style={{ backgroundColor: 'rgba(227,200,150,0.1)', borderColor: 'rgba(227,200,150,0.3)', color: '#E3C896' }}>
            Ecosystem
          </div>
          <h1 className="text-3xl md:text-4xl font-medium mb-3">
            The Programmable Money Hackathon: What's Being Built on <span style={{ color: '#E3C896' }}>Arc</span> Right Now
          </h1>
          <div className="flex items-center gap-3 text-xs text-gray-600">
            <span>By ArcCRCL</span>
            <span>•</span>
            <span>August 17, 2026</span>
            <span>•</span>
            <span>5 min read</span>
          </div>
        </div>

        <div className="flex flex-col gap-8 text-sm text-gray-400 leading-relaxed">

          <div>
            <h2 className="text-lg font-medium text-gray-200 mb-3">A Month to Build Something Real</h2>
            <p>
              The <strong className="text-gray-200">Programmable Money Hackathon</strong> is a 4-week online hackathon organized by Encode Club, running from July 13 through August 22, 2026. It's the largest active Arc-focused builder event right now — and it's not a weekend sprint. Teams have a full month to build working products on Arc with a path to production. Submissions close August 22.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-medium text-gray-200 mb-3">What Makes This One Different</h2>
            <p className="mb-3">
              Most crypto hackathons hand out prize money and move on. This one leads into something bigger: the top teams (up to 8) win spots in an <strong className="text-gray-200">8-week accelerator program</strong> — weekly workshops from founders and industry experts, 1-on-1 calls to track progress and set goals, and a builder cohort working alongside you as you take your project from hackathon to launch.
            </p>
            <p>
              Encode is also explicitly welcoming existing startups and projects — not just fresh hackathon ideas. The pitch is: come build something you'll still be working on in six months. That framing attracts a different caliber of builder than a typical weekend event.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-medium text-gray-200 mb-3">Two Tracks</h2>
            <div className="flex flex-col gap-4">
              <div className="rounded-xl p-5" style={{ backgroundColor: 'rgba(227,200,150,0.04)', border: '1px solid rgba(227,200,150,0.15)' }}>
                <div className="text-sm font-medium text-gray-200 mb-2">DeFi</div>
                <p className="text-xs text-gray-500 mb-3">
                  Stablecoin-native lending, borrowing, swaps, liquidity, FX, and yield — plus payments, treasury, and fintech infrastructure. This track is about building the financial primitives that Arc was designed for: products where USDC-native gas, sub-second finality, and StableFX aren't nice-to-haves but core to why the product works.
                </p>
                <div className="text-xs text-gray-600">
                  <span className="text-gray-400 font-medium">What judges are looking for:</span> Lending protocols, DEX mechanics, FX applications, payroll systems, treasury management tools, payment infrastructure
                </div>
              </div>
              <div className="rounded-xl p-5" style={{ backgroundColor: 'rgba(227,200,150,0.04)', border: '1px solid rgba(227,200,150,0.15)' }}>
                <div className="text-sm font-medium text-gray-200 mb-2">Agentic Economy</div>
                <p className="text-xs text-gray-500 mb-3">
                  Autonomous AI agents that hold wallets, pay, settle, and coordinate economic activity on Arc. This is the track that reflects where the Arc builder community is heading — in previous hackathons, 97% of submissions incorporated AI agents as primary users of financial infrastructure. Arc's cheap gas and instant finality make agent-driven micro-transactions economically viable for the first time.
                </p>
                <div className="text-xs text-gray-600">
                  <span className="text-gray-400 font-medium">What judges are looking for:</span> AI agents that transact autonomously, agent-to-agent commerce, nanopayment systems, content monetization, automated market makers driven by AI
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-medium text-gray-200 mb-3">What Teams Are Building With</h2>
            <p className="mb-3">
              The hackathon is built around Circle's full developer stack on Arc. Teams are expected to demonstrate clear use of these tools:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="rounded-xl p-3" style={{ backgroundColor: 'rgba(227,200,150,0.04)', border: '1px solid rgba(227,200,150,0.12)' }}>
                <div className="text-xs font-medium text-gray-300">Circle Wallets</div>
                <div className="text-xs text-gray-600">Embedded and developer-controlled wallets</div>
              </div>
              <div className="rounded-xl p-3" style={{ backgroundColor: 'rgba(227,200,150,0.04)', border: '1px solid rgba(227,200,150,0.12)' }}>
                <div className="text-xs font-medium text-gray-300">Smart Contracts</div>
                <div className="text-xs text-gray-600">Solidity on Arc's EVM</div>
              </div>
              <div className="rounded-xl p-3" style={{ backgroundColor: 'rgba(227,200,150,0.04)', border: '1px solid rgba(227,200,150,0.12)' }}>
                <div className="text-xs font-medium text-gray-300">CCTP</div>
                <div className="text-xs text-gray-600">Cross-chain USDC transfers</div>
              </div>
              <div className="rounded-xl p-3" style={{ backgroundColor: 'rgba(227,200,150,0.04)', border: '1px solid rgba(227,200,150,0.12)' }}>
                <div className="text-xs font-medium text-gray-300">Circle Gateway</div>
                <div className="text-xs text-gray-600">Cross-chain USDC routing</div>
              </div>
              <div className="rounded-xl p-3" style={{ backgroundColor: 'rgba(227,200,150,0.04)', border: '1px solid rgba(227,200,150,0.12)' }}>
                <div className="text-xs font-medium text-gray-300">Paymaster</div>
                <div className="text-xs text-gray-600">Sponsored gas for users</div>
              </div>
              <div className="rounded-xl p-3" style={{ backgroundColor: 'rgba(227,200,150,0.04)', border: '1px solid rgba(227,200,150,0.12)' }}>
                <div className="text-xs font-medium text-gray-300">Nanopayments</div>
                <div className="text-xs text-gray-600">High-frequency micro-transactions</div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-medium text-gray-200 mb-3">Submission Requirements</h2>
            <p className="mb-3">
              This isn't a pitch competition — teams need to ship working code:
            </p>
            <div className="flex flex-col gap-2">
              <p>• <strong className="text-gray-300">Functional MVP</strong> with working frontend and backend</p>
              <p>• <strong className="text-gray-300">3-minute video pitch</strong> covering core functionality and use of Circle tools</p>
              <p>• <strong className="text-gray-300">Code repository</strong> (public link)</p>
              <p>• <strong className="text-gray-300">Deployed on Arc</strong> testnet</p>
            </div>
            <p className="mt-3">
              Submissions close <strong className="text-gray-200">August 22, 2026</strong> — deadlines are "Anywhere on Earth" (UTC-12), so if it's still that day somewhere in the world, you're on time.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-medium text-gray-200 mb-3">Why This Matters for the Arc Ecosystem</h2>
            <p className="mb-3">
              The Programmable Money Hackathon is the last major builder event before Arc mainnet launches on September 16. The timing is deliberate — teams building now will have working products ready to deploy on mainnet the moment it goes live. The accelerator winners will have eight weeks of structured support to take their hackathon MVP to a real product.
            </p>
            <p>
              For anyone tracking the Arc ecosystem, the projects that emerge from this hackathon are worth watching closely. The winning teams from previous Arc hackathons have consistently pointed toward where the ecosystem is heading: AI-driven finance, cross-chain USDC infrastructure, and enterprise treasury automation. We'll be covering the winners and standout projects once results are announced.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-medium text-gray-200 mb-3">Get Involved</h2>
            <div className="flex flex-col gap-3">
              <a href="https://www.encodeclub.com/programmes/arc-hackathon" target="_blank" rel="noopener noreferrer" className="text-sm hover:opacity-80" style={{ color: '#E3C896' }}>📋 Hackathon details & registration (Encode Club) →</a>
              <a href="https://community.arc.io/" target="_blank" rel="noopener noreferrer" className="text-sm hover:opacity-80" style={{ color: '#E3C896' }}>🏠 Arc House community →</a>
              <a href="https://discord.com/invite/buildonarc" target="_blank" rel="noopener noreferrer" className="text-sm hover:opacity-80" style={{ color: '#E3C896' }}>💬 Build on Circle Discord →</a>
              <a href="https://docs.arc.network/" target="_blank" rel="noopener noreferrer" className="text-sm hover:opacity-80" style={{ color: '#E3C896' }}>📄 Arc documentation →</a>
            </div>
          </div>

          <div className="rounded-xl p-4 mt-4" style={{ backgroundColor: 'rgba(227,200,150,0.04)', border: '1px solid rgba(227,200,150,0.15)' }}>
            <p className="text-xs text-gray-600 italic">
              Disclaimer: This article is for informational purposes only and does not constitute financial advice. ArcCRCL is an independent community hub and is not affiliated with Circle Internet Group or Encode Club.
            </p>
          </div>

        </div>
      </article>

      <Footer />
    </main>
  )
}