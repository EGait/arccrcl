import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Arc Testnet Is Live: Here\'s What You Can Actually Do Right Now — ArcCRCL',
  description: 'A practical guide to Arc\'s public testnet — get testnet USDC, deploy contracts, try CCTP, and explore what\'s possible before mainnet launches September 16.',
  openGraph: {
    title: 'Arc Testnet Is Live: Here\'s What You Can Actually Do Right Now',
    description: 'A practical guide to Arc\'s public testnet — get testnet USDC, deploy contracts, try CCTP, and explore what\'s possible before mainnet launches September 16.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arc Testnet Is Live: Here\'s What You Can Actually Do Right Now',
    description: 'A practical guide to Arc\'s public testnet — get testnet USDC, deploy contracts, try CCTP, and explore what\'s possible before mainnet launches September 16.',
  },
}

export default function ArticleLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}