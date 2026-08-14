import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Arc News — ArcCRCL',
  description: 'The latest news on Circle\'s Arc blockchain and the wider stablecoin ecosystem.',
}

export default function NewsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
