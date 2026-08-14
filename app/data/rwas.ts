// Tokenized real-world assets on Arc.
// Source: Circle Aug 5, 2026 press release, CNBC coverage, Circle product vision.

export const tokenizedStocks: any[] = []

export const rwas = [
  {
    id: 'blackrock-buidl',
    name: 'BlackRock BUIDL',
    issuer: 'BlackRock',
    category: 'Tokenized Treasury',
    icon: '🏦',
    logo: '',
    description: 'USD Institutional Digital Liquidity Fund — a tokenized money-market fund backed by US Treasury bills. Deploying on Arc at mainnet with 24/7 minting and redemption via USDC.',
    status: 'Launching at mainnet',
    url: 'https://www.blackrock.com',
  },
  {
    id: 'dtcc-tokenized-assets',
    name: 'DTCC Tokenized Assets',
    issuer: 'DTCC',
    category: 'Tokenized Securities',
    icon: '🏛️',
    logo: '',
    description: 'DTCC is collaborating with Circle to tokenize DTC-custodied assets on Arc, enabling stablecoin-native settlement against traditionally held securities. Expected to begin H2 2027.',
    status: 'In development (H2 2027)',
    url: 'https://www.dtcc.com',
  },
  {
    id: 'usyc',
    name: 'USYC',
    issuer: 'Circle',
    category: 'Tokenized Treasury',
    icon: '📈',
    logo: '',
    description: 'Circle\'s yield-bearing stablecoin backed by US Treasuries. Designed to serve as onchain treasury, collateral, and capital markets infrastructure on Arc.',
    status: 'Active (expanding to Arc)',
    url: 'https://www.circle.com',
  },
]