import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Markets — Stablecoins, Yield & RWAs on Arc — ArcCRCL',
  description: 'Explore the financial products on Arc — USDC, EURC, USYC yield, BlackRock BUIDL, and tokenized real-world assets.',
}

export default function MarketsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}