import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Programmable Money Hackathon: What\'s Being Built on Arc Right Now — ArcCRCL',
  description: 'Encode Club\'s 4-week Programmable Money Hackathon is the biggest active builder event on Arc — DeFi and AI agent tracks, with an accelerator for top teams.',
  openGraph: {
    title: 'The Programmable Money Hackathon: What\'s Being Built on Arc Right Now',
    description: 'Encode Club\'s 4-week hackathon is the biggest active builder event on Arc — submissions close August 22.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Programmable Money Hackathon: What\'s Being Built on Arc Right Now',
    description: 'Encode Club\'s 4-week hackathon is the biggest active builder event on Arc — submissions close August 22.',
  },
}

export default function ArticleLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}