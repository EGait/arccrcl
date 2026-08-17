import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Getting Started with Arc: A Beginner\'s Guide — ArcCRCL',
  description: 'New to crypto? Learn the basics — what wallets, USDC, gas fees, and stablecoins are, why Arc is different, and how to stay safe. No jargon, no hype.',
  openGraph: {
    title: 'Getting Started with Arc: A Beginner\'s Guide',
    description: 'New to crypto? Learn the basics — wallets, USDC, gas fees, and how to stay safe on Arc.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Getting Started with Arc: A Beginner\'s Guide',
    description: 'New to crypto? Learn the basics — wallets, USDC, gas fees, and how to stay safe on Arc.',
  },
}

export default function LearnLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}