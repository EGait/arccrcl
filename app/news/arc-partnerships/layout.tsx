import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Institutions Behind Arc: Why Wall Street Is Running the Validators — ArcCRCL',
  description: 'BlackRock, Visa, Mastercard, DTCC — why the world\'s biggest financial institutions are validating Circle\'s Arc blockchain, and what it means for the ecosystem.',
  openGraph: {
    title: 'The Institutions Behind Arc: Why Wall Street Is Running the Validators',
    description: 'BlackRock, Visa, Mastercard, DTCC — why the world\'s biggest financial institutions are validating Circle\'s Arc blockchain.',
    images: [{ url: 'https://arccrcl.com/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Institutions Behind Arc: Why Wall Street Is Running the Validators',
    description: 'BlackRock, Visa, Mastercard, DTCC — why the world\'s biggest financial institutions are validating Circle\'s Arc blockchain.',
  },
}

export default function ArticleLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}