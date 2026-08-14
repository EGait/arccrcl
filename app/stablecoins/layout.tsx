import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Arc Stablecoins — ArcCRCL',
  description: 'Compare the stablecoins available on Arc, including USDC and EURC.',
}

export default function StablecoinsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
