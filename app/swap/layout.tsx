import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Swap on Arc — ArcCRCL',
  description: 'Onchain stablecoin FX and swaps on Arc.',
}

export default function SwapLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
