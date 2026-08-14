// Stablecoins on Arc — USDC is native gas, others expected at/after mainnet.
// Source: Circle product vision, Arc documentation, WEEX ecosystem overview.

export const stablecoins = [
  {
    id: 'usdc',
    name: 'USDC',
    issuer: 'Circle',
    icon: '💵',
    logo: '',
    peg: 'USD',
    description: 'The native gas token on Arc. USDC is used to pay all transaction fees, eliminating the need for a separate volatile token.',
    marketCap: '$60B+',
    chains: ['Arc', 'Ethereum', 'Solana', 'Base', 'Arbitrum', '30+ chains'],
    highlight: 'Native gas token on Arc',
    url: 'https://www.circle.com/usdc',
  },
  {
    id: 'eurc',
    name: 'EURC',
    issuer: 'Circle',
    icon: '💶',
    logo: '',
    peg: 'EUR',
    description: 'Circle\'s euro-backed stablecoin. Expected on Arc to power the StableFX engine for onchain EUR/USD foreign exchange.',
    marketCap: '$200M+',
    chains: ['Ethereum', 'Solana', 'Base', 'Arc (expected)'],
    highlight: 'Euro stablecoin for StableFX',
    url: 'https://www.circle.com/eurc',
  },
  {
    id: 'usyc',
    name: 'USYC',
    issuer: 'Circle',
    icon: '📈',
    logo: '',
    peg: 'USD (yield-bearing)',
    description: 'Circle\'s onchain yield-bearing asset backed by US Treasuries. Offers 24/7 near-instant redemptions at scale — the primary yield product on Arc.',
    marketCap: 'Growing',
    chains: ['Ethereum', 'Solana', 'BNB Chain', 'Arc (expected)'],
    highlight: 'Onchain treasury yield',
    url: 'https://www.circle.com',
  },
]