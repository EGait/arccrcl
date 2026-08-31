import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FOMO Is Coming to Arc on Day One — Here\'s Why It Matters — ArcCRCL',
  description: 'Circle CEO Jeremy Allaire confirmed FOMO — the social trading app with 500K+ traders and $1.4M weekly revenue — will launch on Arc at mainnet on September 16.',
  openGraph: {
    title: 'FOMO Is Coming to Arc on Day One — Here\'s Why It Matters',
    description: 'Circle CEO confirmed FOMO will launch on Arc at mainnet — 500K+ traders, $1.4M weekly revenue, coming to Arc September 16.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FOMO Is Coming to Arc on Day One — Here\'s Why It Matters',
    description: 'Circle CEO confirmed FOMO will launch on Arc at mainnet — 500K+ traders, $1.4M weekly revenue, coming to Arc September 16.',
  },
}

export default function ArticleLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}