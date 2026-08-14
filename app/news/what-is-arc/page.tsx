import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function WhatIsArcPage() {
  return (
    <main className="bg-[#070c16] min-h-screen text-gray-100">
      <Navbar />

      <article className="max-w-3xl mx-auto px-6 md:px-8 py-12">
        <div className="mb-8">
          <div className="inline-block text-xs px-3 py-1 rounded-full mb-4 border" style={{ backgroundColor: 'rgba(227,200,150,0.1)', borderColor: 'rgba(227,200,150,0.3)', color: '#E3C896' }}>
            Featured Research
          </div>
          <h1 className="text-3xl md:text-4xl font-medium mb-3">
            What Is <span style={{ color: '#E3C896' }}>Arc</span>? Circle's Blockchain for the Future of Finance
          </h1>
          <div className="flex items-center gap-3 text-xs text-gray-600">
            <span>By ArcCRCL</span>
            <span>•</span>
            <span>August 14, 2026</span>
            <span>•</span>
            <span>8 min read</span>
          </div>
        </div>

        <div className="flex flex-col gap-8 text-sm text-gray-400 leading-relaxed">

          <div>
            <h2 className="text-lg font-medium text-gray-200 mb-3">The Short Version</h2>
            <p>
              Arc is a new Layer 1 blockchain built by Circle, the company behind USDC. It launches public mainnet on <strong className="text-gray-200">September 16, 2026</strong>. Unlike most blockchains, Arc is designed from the ground up for stablecoin finance — gas fees are paid in USDC, not a volatile token, and the chain is validated by institutions like BlackRock, Visa, and Mastercard rather than anonymous node operators.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-medium text-gray-200 mb-3">Why Does Arc Exist?</h2>
            <p className="mb-3">
              Circle has watched USDC grow to over $60 billion in circulation across 30+ blockchains — but none of those chains were actually built for stablecoins. Gas fees are denominated in volatile tokens. Privacy is all-or-nothing. And institutional users keep running into the same problems: unpredictable costs, compliance friction, and fragmented liquidity.
            </p>
            <p>
              Arc is Circle's answer: a chain purpose-built for stablecoin-native financial applications. The pitch is simple — what if the blockchain itself was designed around dollars instead of retrofitting dollars onto a blockchain designed for something else?
            </p>
          </div>

          <div>
            <h2 className="text-lg font-medium text-gray-200 mb-3">Key Features</h2>
            <div className="flex flex-col gap-4">
              <div className="rounded-xl p-4" style={{ backgroundColor: 'rgba(227,200,150,0.04)', border: '1px solid rgba(227,200,150,0.15)' }}>
                <div className="text-sm font-medium text-gray-200 mb-1">USDC-Native Gas</div>
                <p className="text-xs text-gray-500">Transaction fees are paid in USDC — no need to hold a separate volatile token just to use the chain. This makes cost planning predictable for businesses and eliminates the "I need ETH to move my USDC" problem.</p>
              </div>
              <div className="rounded-xl p-4" style={{ backgroundColor: 'rgba(227,200,150,0.04)', border: '1px solid rgba(227,200,150,0.15)' }}>
                <div className="text-sm font-medium text-gray-200 mb-1">EVM Compatible</div>
                <p className="text-xs text-gray-500">Arc runs the Ethereum Virtual Machine, so existing Solidity smart contracts, developer tools, and wallets (MetaMask, Ledger, etc.) work out of the box. No new language to learn.</p>
              </div>
              <div className="rounded-xl p-4" style={{ backgroundColor: 'rgba(227,200,150,0.04)', border: '1px solid rgba(227,200,150,0.15)' }}>
                <div className="text-sm font-medium text-gray-200 mb-1">Sub-Second Deterministic Finality</div>
                <p className="text-xs text-gray-500">Transactions are final in under a second with no probabilistic reorgs — critical for payments and settlement where "maybe final" isn't good enough.</p>
              </div>
              <div className="rounded-xl p-4" style={{ backgroundColor: 'rgba(227,200,150,0.04)', border: '1px solid rgba(227,200,150,0.15)' }}>
                <div className="text-sm font-medium text-gray-200 mb-1">StableFX Engine</div>
                <p className="text-xs text-gray-500">A native stablecoin-to-stablecoin FX engine built into the chain. Swap USDC to EURC (and eventually other stablecoins) without needing a third-party DEX for basic currency conversion.</p>
              </div>
              <div className="rounded-xl p-4" style={{ backgroundColor: 'rgba(227,200,150,0.04)', border: '1px solid rgba(227,200,150,0.15)' }}>
                <div className="text-sm font-medium text-gray-200 mb-1">Opt-In Privacy</div>
                <p className="text-xs text-gray-500">Confidential transfers for compliant use cases — businesses can keep sensitive payment data private on a public chain. Not privacy by default, but available when compliance requires it.</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-medium text-gray-200 mb-3">Who's Building on Arc?</h2>
            <p className="mb-3">
              Arc's founding validator cohort reads like a who's-who of global finance — this isn't a chain launched by crypto-native teams hoping institutions show up later. The institutions are literally running the validators from day one.
            </p>

            <div className="mb-4">
              <div className="text-xs font-medium uppercase tracking-widest mb-2" style={{ color: '#E3C896' }}>Founding Validators</div>
              <p>Circle, BlackRock, DTCC, Galaxy, Global Payments, ICE, Mastercard, MoneyGram, SBI Group, Standard Chartered, Sumitomo Corporation, and Visa.</p>
            </div>

            <div className="mb-4">
              <div className="text-xs font-medium uppercase tracking-widest mb-2" style={{ color: '#E3C896' }}>Day-One DeFi</div>
              <p>Aave (lending), Uniswap (DEX), Morpho (optimized lending), and Aerodrome are all confirmed to deploy on Arc at mainnet launch.</p>
            </div>

            <div className="mb-4">
              <div className="text-xs font-medium uppercase tracking-widest mb-2" style={{ color: '#E3C896' }}>Wallets & Infrastructure</div>
              <p>MetaMask, Ledger, Rainbow, Fireblocks, Coinbase, Kraken, Binance Wallet, Alchemy, Chainlink, LayerZero, QuickNode, Blockdaemon, and Amazon Web Services.</p>
            </div>

            <div className="mb-4">
              <div className="text-xs font-medium uppercase tracking-widest mb-2" style={{ color: '#E3C896' }}>Payments</div>
              <p>MoneyGram, Global Payments, Rain, Thunes, and Wirex — bridging traditional remittance and payment rails with stablecoin settlement.</p>
            </div>

            <p>
              In total, over 100 ecosystem and institutional builders are active on Arc's private mainnet ahead of the public launch.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-medium text-gray-200 mb-3">The Big Partnerships to Watch</h2>
            <p className="mb-3">
              <strong className="text-gray-200">BlackRock BUIDL:</strong> BlackRock is deploying its tokenized money-market fund (BUIDL) on Arc. This is one of the largest traditional asset managers putting a real product on a blockchain — not a pilot, not a proof of concept, but a live fund with USDC-native minting and redemption.
            </p>
            <p className="mb-3">
              <strong className="text-gray-200">DTCC:</strong> The Depository Trust & Clearing Corporation — the entity that settles most US stock and bond trades — is collaborating with Circle to tokenize DTC-custodied assets on Arc, starting in H2 2027. If this goes live, it could mean tokenized equities settling against stablecoins on Arc.
            </p>
            <p>
              <strong className="text-gray-200">Goldman Sachs & BNY:</strong> Both are listed among institutional partners, with BNY's involvement particularly notable given their role as one of the world's largest custodian banks.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-medium text-gray-200 mb-3">How Is Arc Different from Ethereum, Base, or Solana?</h2>
            <p className="mb-3">
              The easiest comparison is to Base (Coinbase's L2) — both are built by stablecoin-adjacent companies and target a similar audience. But Arc is an L1, not an L2, which means it doesn't inherit Ethereum's gas token, finality delays, or sequencer trust assumptions. Gas in USDC is native, not a Paymaster workaround.
            </p>
            <p>
              Compared to Solana, the architecture is completely different: Arc uses a permissioned validator set (institutions, not anonymous operators), EVM compatibility (not SVM), and deterministic finality (not optimistic confirmation). Arc isn't trying to be the fastest general-purpose chain — it's trying to be the most practical chain for moving dollars.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-medium text-gray-200 mb-3">Timeline</h2>
            <div className="flex flex-col gap-3">
              <div className="flex gap-4 items-start">
                <div className="text-xs font-medium whitespace-nowrap" style={{ color: '#E3C896' }}>May 2026</div>
                <p className="text-xs text-gray-500">Arc publicly announced alongside Circle's product vision for 2026</p>
              </div>
              <div className="flex gap-4 items-start">
                <div className="text-xs font-medium whitespace-nowrap" style={{ color: '#E3C896' }}>Oct 2025</div>
                <p className="text-xs text-gray-500">Public testnet launched — 100+ companies signed on</p>
              </div>
              <div className="flex gap-4 items-start">
                <div className="text-xs font-medium whitespace-nowrap" style={{ color: '#E3C896' }}>Aug 2026</div>
                <p className="text-xs text-gray-500">Founding validator cohort announced — private mainnet active</p>
              </div>
              <div className="flex gap-4 items-start">
                <div className="text-xs font-medium whitespace-nowrap" style={{ color: '#E3C896' }}>Sep 16, 2026</div>
                <p className="text-xs text-gray-500">Public mainnet launch</p>
              </div>
              <div className="flex gap-4 items-start">
                <div className="text-xs font-medium whitespace-nowrap" style={{ color: '#E3C896' }}>H2 2027</div>
                <p className="text-xs text-gray-500">DTCC asset tokenization integration expected</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-medium text-gray-200 mb-3">The Bottom Line</h2>
            <p>
              Arc is a bet that the next wave of blockchain adoption comes from institutions that need stablecoin rails, not retail users that want cheaper gas. Whether that thesis is right will depend on what happens after September 16 — the partnerships are in place, but commercial traction and real usage are what will determine if Arc becomes critical infrastructure or just another chain with impressive backers.
            </p>
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