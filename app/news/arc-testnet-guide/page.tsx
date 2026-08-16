import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function ArcTestnetGuidePage() {
  return (
    <main className="bg-[#070c16] min-h-screen text-gray-100">
      <Navbar />

      <article className="max-w-3xl mx-auto px-6 md:px-8 py-12">
        <div className="mb-8">
          <div className="inline-block text-xs px-3 py-1 rounded-full mb-4 border" style={{ backgroundColor: 'rgba(227,200,150,0.1)', borderColor: 'rgba(227,200,150,0.3)', color: '#E3C896' }}>
            Guide
          </div>
          <h1 className="text-3xl md:text-4xl font-medium mb-3">
            Arc Testnet Is Live: Here's What You Can <span style={{ color: '#E3C896' }}>Actually Do</span> Right Now
          </h1>
          <div className="flex items-center gap-3 text-xs text-gray-600">
            <span>By ArcCRCL</span>
            <span>•</span>
            <span>August 16, 2026</span>
            <span>•</span>
            <span>6 min read</span>
          </div>
        </div>

        <div className="flex flex-col gap-8 text-sm text-gray-400 leading-relaxed">

          <div>
            <h2 className="text-lg font-medium text-gray-200 mb-3">Mainnet Is a Month Away — The Testnet Is Open Now</h2>
            <p>
              Arc mainnet launches September 16, but you don't have to wait until then to try it. The public testnet has been live since October 2025, and the numbers show real traction: <strong className="text-gray-200">13.6 million transactions per week</strong>, <strong className="text-gray-200">905,000 contracts deployed weekly</strong>, and <strong className="text-gray-200">42,000 new accounts each week</strong>. This isn't a ghost chain testnet — people are actively building.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-medium text-gray-200 mb-3">What You Need to Get Started</h2>
            <p className="mb-3">
              Arc is EVM-compatible, which means if you've ever used Ethereum, Base, or Arbitrum, you already have everything you need. No new wallet, no new tools, no new language.
            </p>
            <div className="flex flex-col gap-3">
              <div className="rounded-xl p-4" style={{ backgroundColor: 'rgba(227,200,150,0.04)', border: '1px solid rgba(227,200,150,0.15)' }}>
                <div className="text-sm font-medium text-gray-200 mb-1">1. A wallet</div>
                <p className="text-xs text-gray-500">MetaMask, Rainbow, or any EVM wallet works. Just add the Arc testnet RPC (available in the docs).</p>
              </div>
              <div className="rounded-xl p-4" style={{ backgroundColor: 'rgba(227,200,150,0.04)', border: '1px solid rgba(227,200,150,0.15)' }}>
                <div className="text-sm font-medium text-gray-200 mb-1">2. Testnet USDC</div>
                <p className="text-xs text-gray-500">Hit the faucet at <a href="https://faucet.circle.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#E3C896' }}>faucet.circle.com</a> to get free testnet USDC and EURC. Remember — gas on Arc is paid in USDC, not ETH.</p>
              </div>
              <div className="rounded-xl p-4" style={{ backgroundColor: 'rgba(227,200,150,0.04)', border: '1px solid rgba(227,200,150,0.15)' }}>
                <div className="text-sm font-medium text-gray-200 mb-1">3. The explorer</div>
                <p className="text-xs text-gray-500">Watch your transactions land at <a href="https://testnet.arcscan.app/" target="_blank" rel="noopener noreferrer" style={{ color: '#E3C896' }}>testnet.arcscan.app</a> — Arc's version of Etherscan.</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-medium text-gray-200 mb-3">What Can You Actually Do?</h2>

            <div className="flex flex-col gap-4">
              <div>
                <h3 className="text-base font-medium text-gray-300 mb-2">Send USDC (Experience Gas-in-USDC)</h3>
                <p>
                  The simplest thing to try, and the one that immediately shows you what's different about Arc. Send testnet USDC to another address — notice that the gas fee is deducted in USDC, not a separate token. No more "I need ETH to move my dollars." The average transaction cost on testnet right now is $0.004.
                </p>
              </div>

              <div>
                <h3 className="text-base font-medium text-gray-300 mb-2">Deploy a Smart Contract</h3>
                <p>
                  If you write Solidity, your existing contracts deploy to Arc with zero changes — same tooling (Hardhat, Foundry, Remix), same language, same ABIs. The docs have a <a href="https://docs.arc.network/arc/tutorials/deploy-on-arc" target="_blank" rel="noopener noreferrer" style={{ color: '#E3C896' }}>quickstart guide</a> that walks you through deployment step by step. Over 905,000 contracts were deployed on testnet last week alone.
                </p>
              </div>

              <div>
                <h3 className="text-base font-medium text-gray-300 mb-2">Try the App Kits</h3>
                <p>
                  Circle built pre-packaged <a href="https://www.arc.io/app-kits" target="_blank" rel="noopener noreferrer" style={{ color: '#E3C896' }}>App Kits</a> for common use cases — payments, wallets, FX. These are higher-level than raw smart contracts; think of them as starter templates that handle the boilerplate so you can focus on your product logic.
                </p>
              </div>

              <div>
                <h3 className="text-base font-medium text-gray-300 mb-2">Test CCTP (Cross-Chain Transfers)</h3>
                <p>
                  CCTP (Cross-Chain Transfer Protocol) lets you move USDC between Arc and other chains natively — no bridge, no wrapped tokens. The <a href="https://docs.arc.network/arc/references/sample-applications" target="_blank" rel="noopener noreferrer" style={{ color: '#E3C896' }}>sample apps</a> on GitHub include a working CCTP integration you can run locally.
                </p>
              </div>

              <div>
                <h3 className="text-base font-medium text-gray-300 mb-2">Join the Builder Community</h3>
                <p>
                  The <a href="https://discord.com/invite/buildonarc" target="_blank" rel="noopener noreferrer" style={{ color: '#E3C896' }}>Arc Discord</a> is where the core team and ecosystem builders are coordinating. If you're building something, this is where you go for support, feedback, and early visibility.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-medium text-gray-200 mb-3">For Builders: What to Start Working On</h2>
            <p className="mb-3">
              Arc's official site highlights several use cases they're actively encouraging builders to tackle. If you're looking for a project idea that aligns with where the ecosystem is headed:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="rounded-xl p-3" style={{ backgroundColor: 'rgba(227,200,150,0.04)', border: '1px solid rgba(227,200,150,0.12)' }}>
                <div className="text-xs font-medium text-gray-300">P2P Payments</div>
                <div className="text-xs text-gray-600">Instant, low-cost stablecoin transfers</div>
              </div>
              <div className="rounded-xl p-3" style={{ backgroundColor: 'rgba(227,200,150,0.04)', border: '1px solid rgba(227,200,150,0.12)' }}>
                <div className="text-xs font-medium text-gray-300">Stablecoin FX</div>
                <div className="text-xs text-gray-600">Real-time USDC/EURC exchange</div>
              </div>
              <div className="rounded-xl p-3" style={{ backgroundColor: 'rgba(227,200,150,0.04)', border: '1px solid rgba(227,200,150,0.12)' }}>
                <div className="text-xs font-medium text-gray-300">Treasury Management</div>
                <div className="text-xs text-gray-600">Programmable stablecoin treasury ops</div>
              </div>
              <div className="rounded-xl p-3" style={{ backgroundColor: 'rgba(227,200,150,0.04)', border: '1px solid rgba(227,200,150,0.12)' }}>
                <div className="text-xs font-medium text-gray-300">Prediction Markets</div>
                <div className="text-xs text-gray-600">Stablecoin-settled outcome markets</div>
              </div>
              <div className="rounded-xl p-3" style={{ backgroundColor: 'rgba(227,200,150,0.04)', border: '1px solid rgba(227,200,150,0.12)' }}>
                <div className="text-xs font-medium text-gray-300">Lending & Borrowing</div>
                <div className="text-xs text-gray-600">Automated collateral and risk management</div>
              </div>
              <div className="rounded-xl p-3" style={{ backgroundColor: 'rgba(227,200,150,0.04)', border: '1px solid rgba(227,200,150,0.12)' }}>
                <div className="text-xs font-medium text-gray-300">AI Agent Finance</div>
                <div className="text-xs text-gray-600">Autonomous agents settling onchain</div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-medium text-gray-200 mb-3">Testnet vs Mainnet — What Changes on Sept 16?</h2>
            <p className="mb-3">
              The testnet and mainnet are functionally the same chain architecture — same EVM compatibility, same USDC-native gas, same deterministic finality. What changes at mainnet:
            </p>
            <div className="flex flex-col gap-2">
              <p>• <strong className="text-gray-300">Real money</strong> — testnet USDC is free and worthless; mainnet USDC is the real thing</p>
              <p>• <strong className="text-gray-300">Founding validators go live</strong> — BlackRock, Visa, Mastercard, DTCC, and the rest of the institutional cohort start securing the network</p>
              <p>• <strong className="text-gray-300">Day-one apps launch</strong> — Aave, Uniswap, Morpho, MetaMask, Fireblocks, and others go live on mainnet</p>
              <p>• <strong className="text-gray-300">CCTP connects to other chains</strong> — real cross-chain USDC movement between Arc, Ethereum, Solana, and 30+ networks</p>
              <p>• <strong className="text-gray-300">RWAs arrive</strong> — BlackRock's BUIDL fund deploys, with DTCC asset tokenization expected in H2 2027</p>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-medium text-gray-200 mb-3">Quick Links</h2>
            <div className="flex flex-col gap-2">
              <a href="https://docs.arc.network/" target="_blank" rel="noopener noreferrer" className="text-sm hover:opacity-80" style={{ color: '#E3C896' }}>📄 Arc Documentation →</a>
              <a href="https://faucet.circle.com/" target="_blank" rel="noopener noreferrer" className="text-sm hover:opacity-80" style={{ color: '#E3C896' }}>🚰 Testnet Faucet →</a>
              <a href="https://testnet.arcscan.app/" target="_blank" rel="noopener noreferrer" className="text-sm hover:opacity-80" style={{ color: '#E3C896' }}>🔍 Testnet Explorer →</a>
              <a href="https://www.arc.io/app-kits" target="_blank" rel="noopener noreferrer" className="text-sm hover:opacity-80" style={{ color: '#E3C896' }}>🧰 App Kits & SDKs →</a>
              <a href="https://discord.com/invite/buildonarc" target="_blank" rel="noopener noreferrer" className="text-sm hover:opacity-80" style={{ color: '#E3C896' }}>💬 Arc Discord →</a>
            </div>
          </div>

          <div className="rounded-xl p-4 mt-4" style={{ backgroundColor: 'rgba(227,200,150,0.04)', border: '1px solid rgba(227,200,150,0.15)' }}>
            <p className="text-xs text-gray-600 italic">
              Disclaimer: This article is for informational purposes only and does not constitute financial advice. ArcCRCL is an independent community hub and is not affiliated with Circle Internet Group.
            </p>
          </div>

        </div>
      </article>

      <Footer />
    </main>
  )
}