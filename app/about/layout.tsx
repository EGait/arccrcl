import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About — ArcCRCL',
  description: 'ArcCRCL is your go-to hub for Arc news, projects and stablecoin FX.',
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
