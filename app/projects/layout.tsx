import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Top Arc Projects — ArcCRCL',
  description: 'Discover the best projects building on Arc — DeFi, payments, stablecoins, and more.',
}

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
