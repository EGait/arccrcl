import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Stablecoin Yield — ArcCRCL',
  description: 'Compare stablecoin yield and treasury products on Arc.',
}

export default function LSTsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
