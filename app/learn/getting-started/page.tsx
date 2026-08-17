import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function GettingStartedPage() {
  return (
    <main className="bg-[#070c16] min-h-screen text-gray-100">
      <Navbar />

      <article className="max-w-3xl mx-auto px-6 md:px-8 py-12">
        <div className="mb-8">
          <div className="inline-block text-xs px-3 py-1 rounded-full mb-4 border" style={{ backgroundColor: 'rgba(227,200,150,0.1)', borderColor: 'rgba(227,200,150,0.3)', color: '#E3C896' }}>
            Learn
          </div>
          <h1 className="text-3xl md:text-4xl font-medium mb-3">
            Getting Started with <span style={{ color: '#E3C896' }}>Arc</span>: A Beginner's Guide
          </h1>
          <div className="flex items-center gap-3 text-xs text-gray-600">
            <span>By ArcCRCL</span>
            <span>•</span>
            <span>August 16, 2026</span>
            <span>•</span>
            <span>10 min read</span>
          </div>
        </div>

        <div className="flex flex-col gap-8 text-sm text-gray-400 leading-relaxed">

          <div className="rounded-xl p-5" style={{ backgroundColor: 'rgba(227,200,150,0.04)', border: '1px solid rgba(227,200,150,0.15)' }}>
            <p className="text-sm text-gray-300">
              This guide assumes zero crypto knowledge. If you already know what a wallet and USDC are, you can skip ahead to the "What Makes Arc Different" section.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-medium text-gray-200 mb-3">What Is a Blockchain?</h2>
            <p className="mb-3">
              Think of a blockchain as a public spreadsheet that nobody owns but everyone can read. When you send money on a blockchain, the transaction gets recorded on this spreadsheet permanently. No bank processes it, no company controls it — the network itself handles it.
            </p>
            <p>
              Different blockchains work differently. Bitcoin was the first. Ethereum added programmable applications. Arc is the newest — built specifically for moving dollars (stablecoins) quickly and cheaply.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-medium text-gray-200 mb-3">What Is a Wallet?</h2>
            <p className="mb-3">
              A crypto wallet is like a bank account you control entirely yourself. It has an address (a long string of letters and numbers) that people can send you money to, and a private key that proves you own it.
            </p>
            <p className="mb-3">
              You don't need to memorize any of this. Wallet apps handle it for you. The most common one is <strong className="text-gray-200">MetaMask</strong> — it's a browser extension or phone app that stores your wallet and lets you interact with blockchains like Arc.
            </p>
            <div className="rounded-xl p-4 mt-3" style={{ backgroundColor: 'rgba(227,200,150,0.04)', border: '1px solid rgba(227,200,150,0.15)' }}>
              <div className="text-sm font-medium text-gray-200 mb-2">Popular wallets that work with Arc:</div>
              <div className="flex flex-col gap-1">
                <p className="text-xs text-gray-500">🦊 <strong className="text-gray-400">MetaMask</strong> — the most widely used, available as a browser extension and mobile app</p>
                <p className="text-xs text-gray-500">🌈 <strong className="text-gray-400">Rainbow</strong> — a clean, beginner-friendly mobile wallet</p>
                <p className="text-xs text-gray-500">🔒 <strong className="text-gray-400">Ledger</strong> — a hardware device for maximum security (stores your keys offline)</p>
                <p className="text-xs text-gray-500">🔵 <strong className="text-gray-400">Coinbase Wallet</strong> — made by the exchange, easy if you already use Coinbase</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-medium text-gray-200 mb-3">What Is USDC?</h2>
            <p className="mb-3">
              USDC is a <strong className="text-gray-200">stablecoin</strong> — a digital dollar. 1 USDC is always worth $1. It's issued by Circle (the same company that built Arc) and is backed by real US dollars and Treasury bills held in reserve. You can think of it as digital cash that lives on a blockchain instead of in a bank.
            </p>
            <p className="mb-3">
              USDC is already used on over 30 blockchains and has more than $60 billion in circulation. It's not experimental — major institutions, payment companies, and millions of people use it every day.
            </p>
            <p>
              There are other stablecoins too. <strong className="text-gray-200">EURC</strong> is Circle's euro stablecoin (1 EURC = €1). On Arc, you'll be able to swap between USDC and EURC directly using something called <strong className="text-gray-200">StableFX</strong>.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-medium text-gray-200 mb-3">What Are Gas Fees?</h2>
            <p className="mb-3">
              Every time you do something on a blockchain — send money, interact with an app, deploy a contract — you pay a small fee called "gas." This fee compensates the network for processing your transaction.
            </p>
            <p className="mb-3">
              On most blockchains, gas fees are a constant source of frustration. On Ethereum, you need to hold ETH (a volatile cryptocurrency) just to send your USDC. The price of ETH fluctuates, so your transaction costs are unpredictable. If you only have USDC but no ETH, you literally can't move your own money.
            </p>
            <p>
              <strong className="text-gray-200">Arc fixes this.</strong> Gas on Arc is paid in USDC. No volatile token, no unpredictable costs, no "I need to buy ETH first" problem. The average transaction on Arc's testnet costs about $0.004 — less than half a penny.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-medium text-gray-200 mb-3">What Makes Arc Different?</h2>
            <p className="mb-3">
              If you've heard of Ethereum, Solana, or Base, you might wonder why Arc needs to exist. The short answer: those chains were built for general-purpose crypto. Arc was built specifically for stablecoin finance.
            </p>
            <div className="flex flex-col gap-3 mt-4">
              <div className="rounded-xl p-4" style={{ backgroundColor: 'rgba(227,200,150,0.04)', border: '1px solid rgba(227,200,150,0.15)' }}>
                <div className="text-sm font-medium text-gray-200 mb-1">Gas in USDC, not crypto</div>
                <p className="text-xs text-gray-500">You never need to buy a volatile token just to use the chain. Everything is denominated in dollars.</p>
              </div>
              <div className="rounded-xl p-4" style={{ backgroundColor: 'rgba(227,200,150,0.04)', border: '1px solid rgba(227,200,150,0.15)' }}>
                <div className="text-sm font-medium text-gray-200 mb-1">Instant finality</div>
                <p className="text-xs text-gray-500">Transactions are final in under a second. No waiting, no "pending" status, no wondering if it went through.</p>
              </div>
              <div className="rounded-xl p-4" style={{ backgroundColor: 'rgba(227,200,150,0.04)', border: '1px solid rgba(227,200,150,0.15)' }}>
                <div className="text-sm font-medium text-gray-200 mb-1">Institutional validators</div>
                <p className="text-xs text-gray-500">The network is secured by BlackRock, Visa, Mastercard, and other global institutions — not anonymous operators.</p>
              </div>
              <div className="rounded-xl p-4" style={{ backgroundColor: 'rgba(227,200,150,0.04)', border: '1px solid rgba(227,200,150,0.15)' }}>
                <div className="text-sm font-medium text-gray-200 mb-1">Works with existing wallets</div>
                <p className="text-xs text-gray-500">Arc is EVM-compatible, so MetaMask, Ledger, and every other Ethereum wallet works automatically — no new app to download.</p>
              </div>
              <div className="rounded-xl p-4" style={{ backgroundColor: 'rgba(227,200,150,0.04)', border: '1px solid rgba(227,200,150,0.15)' }}>
                <div className="text-sm font-medium text-gray-200 mb-1">Built-in stablecoin FX</div>
                <p className="text-xs text-gray-500">Swap between USDC and EURC (and eventually other stablecoins) directly on the chain — no third-party exchange needed for basic currency conversion.</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-medium text-gray-200 mb-3">How to Get USDC</h2>
            <div className="flex flex-col gap-3">
              <div className="rounded-xl p-4" style={{ backgroundColor: 'rgba(227,200,150,0.04)', border: '1px solid rgba(227,200,150,0.15)' }}>
                <div className="text-sm font-medium text-gray-200 mb-1">Buy on an exchange</div>
                <p className="text-xs text-gray-500">Coinbase, Kraken, Binance, and most major exchanges let you buy USDC directly with a bank account or debit card. Then withdraw it to your wallet on Arc.</p>
              </div>
              <div className="rounded-xl p-4" style={{ backgroundColor: 'rgba(227,200,150,0.04)', border: '1px solid rgba(227,200,150,0.15)' }}>
                <div className="text-sm font-medium text-gray-200 mb-1">On-ramp services</div>
                <p className="text-xs text-gray-500">Services like MoonPay and Transak let you buy USDC directly into your wallet with a credit card — no exchange account needed.</p>
              </div>
              <div className="rounded-xl p-4" style={{ backgroundColor: 'rgba(227,200,150,0.04)', border: '1px solid rgba(227,200,150,0.15)' }}>
                <div className="text-sm font-medium text-gray-200 mb-1">Receive it from someone</div>
                <p className="text-xs text-gray-500">If someone sends you USDC on Arc, it lands in your wallet automatically. Just share your wallet address.</p>
              </div>
              <div className="rounded-xl p-4" style={{ backgroundColor: 'rgba(227,200,150,0.04)', border: '1px solid rgba(227,200,150,0.15)' }}>
                <div className="text-sm font-medium text-gray-200 mb-1">Try testnet first (free)</div>
                <p className="text-xs text-gray-500">Not ready to use real money? Get free testnet USDC from <a href="https://faucet.circle.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#E3C896' }}>faucet.circle.com</a> and practice everything risk-free.</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-medium text-gray-200 mb-3">Staying Safe</h2>
            <div className="flex flex-col gap-3">
              <div className="rounded-xl p-4 border-l-4" style={{ backgroundColor: 'rgba(227,200,150,0.04)', borderColor: '#E3C896', borderTop: '1px solid rgba(227,200,150,0.12)', borderRight: '1px solid rgba(227,200,150,0.12)', borderBottom: '1px solid rgba(227,200,150,0.12)' }}>
                <div className="text-sm font-medium text-gray-200 mb-1">Never share your seed phrase or private key</div>
                <p className="text-xs text-gray-500">Your seed phrase (usually 12 or 24 words) is the master key to your wallet. Anyone who has it can take everything. No legitimate service, support team, or person will ever ask for it. If someone does, it's a scam — every time, no exceptions.</p>
              </div>
              <div className="rounded-xl p-4 border-l-4" style={{ backgroundColor: 'rgba(227,200,150,0.04)', borderColor: '#E3C896', borderTop: '1px solid rgba(227,200,150,0.12)', borderRight: '1px solid rgba(227,200,150,0.12)', borderBottom: '1px solid rgba(227,200,150,0.12)' }}>
                <div className="text-sm font-medium text-gray-200 mb-1">Double-check addresses before sending</div>
                <p className="text-xs text-gray-500">Blockchain transactions are irreversible. If you send money to the wrong address, there's no way to get it back. Always verify the first and last few characters of an address before confirming a transaction.</p>
              </div>
              <div className="rounded-xl p-4 border-l-4" style={{ backgroundColor: 'rgba(227,200,150,0.04)', borderColor: '#E3C896', borderTop: '1px solid rgba(227,200,150,0.12)', borderRight: '1px solid rgba(227,200,150,0.12)', borderBottom: '1px solid rgba(227,200,150,0.12)' }}>
                <div className="text-sm font-medium text-gray-200 mb-1">Be careful what you sign</div>
                <p className="text-xs text-gray-500">When a website or app asks you to "approve" or "sign" a transaction in your wallet, read what it's asking. Malicious sites can trick you into approving access to your funds. If you don't understand what you're approving, don't sign it.</p>
              </div>
              <div className="rounded-xl p-4 border-l-4" style={{ backgroundColor: 'rgba(227,200,150,0.04)', borderColor: '#E3C896', borderTop: '1px solid rgba(227,200,150,0.12)', borderRight: '1px solid rgba(227,200,150,0.12)', borderBottom: '1px solid rgba(227,200,150,0.12)' }}>
                <div className="text-sm font-medium text-gray-200 mb-1">Use a hardware wallet for large amounts</div>
                <p className="text-xs text-gray-500">If you're holding meaningful amounts of money onchain, a hardware wallet like Ledger keeps your private keys on a physical device that never touches the internet. It's the safest option for long-term storage.</p>
              </div>
              <div className="rounded-xl p-4 border-l-4" style={{ backgroundColor: 'rgba(227,200,150,0.04)', borderColor: '#E3C896', borderTop: '1px solid rgba(227,200,150,0.12)', borderRight: '1px solid rgba(227,200,150,0.12)', borderBottom: '1px solid rgba(227,200,150,0.12)' }}>
                <div className="text-sm font-medium text-gray-200 mb-1">Bookmark sites, don't Google them</div>
                <p className="text-xs text-gray-500">Phishing sites that look identical to real ones are a major threat. Bookmark the real URLs for your wallet, exchanges, and apps. Don't click links in DMs, emails, or ads — type the URL yourself or use your bookmark.</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-medium text-gray-200 mb-3">Glossary</h2>
            <div className="flex flex-col gap-2">
              {[
                ['Blockchain', 'A public, permanent ledger of transactions maintained by a decentralized network.'],
                ['Wallet', 'An app or device that stores your crypto and lets you send/receive it.'],
                ['USDC', 'A stablecoin pegged 1:1 to the US dollar, issued by Circle.'],
                ['Gas', 'The fee you pay for a transaction to be processed on the blockchain.'],
                ['Seed phrase', 'A set of 12 or 24 words that acts as the master backup for your wallet. Never share it.'],
                ['EVM', 'Ethereum Virtual Machine — the standard that Arc is compatible with, meaning Ethereum wallets and tools work on Arc.'],
                ['Stablecoin', 'A cryptocurrency designed to maintain a stable value, usually pegged to a currency like USD or EUR.'],
                ['CCTP', 'Cross-Chain Transfer Protocol — Circle\'s system for moving USDC between different blockchains natively.'],
                ['Finality', 'When a transaction is permanently confirmed and can\'t be reversed. Arc has sub-second deterministic finality.'],
                ['RWA', 'Real-World Asset — traditional assets (stocks, bonds, treasury bills) represented as tokens on a blockchain.'],
              ].map(([term, def]) => (
                <div key={term} className="flex gap-3">
                  <span className="text-xs font-medium text-gray-300 w-32 flex-shrink-0">{term}</span>
                  <span className="text-xs text-gray-500">{def}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-lg font-medium text-gray-200 mb-3">What's Next?</h2>
            <p>
              Arc mainnet launches <strong className="text-gray-200">September 16, 2026</strong>. In the meantime, you can practice with free testnet USDC at <a href="https://faucet.circle.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#E3C896' }}>faucet.circle.com</a>, explore our <a href="/news/what-is-arc" style={{ color: '#E3C896' }}>deep dive on what Arc is</a>, or browse the <a href="/projects" style={{ color: '#E3C896' }}>projects building on Arc</a>.
            </p>
          </div>

          <div className="rounded-xl p-4 mt-4" style={{ backgroundColor: 'rgba(227,200,150,0.04)', border: '1px solid rgba(227,200,150,0.15)' }}>
            <p className="text-xs text-gray-600 italic">
              Disclaimer: This guide is for educational purposes only and does not constitute financial advice. Always do your own research before using any blockchain or financial product.
            </p>
          </div>

        </div>
      </article>

      <Footer />
    </main>
  )
}