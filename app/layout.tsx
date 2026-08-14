import type { Metadata, Viewport } from 'next'
import './globals.css'
import WalletProviderWrapper from './components/WalletProviderWrapper'
import ServiceWorker from './components/ServiceWorker'
import ChatWidget from './components/ChatWidget'

export const metadata: Metadata = {
  title: 'ArcCRCL — Your Daily Hub for Arc News, Projects and Stablecoin FX',
  description: 'ArcCRCL is your daily hub for everything on Circle\'s Arc blockchain. Discover ecosystem projects, read breaking news, compare stablecoin rails, and track the ARC token — all in one place.',
  manifest: '/manifest.json',
  keywords: ['Arc', 'ARC token', 'Circle', 'Arc blockchain news', 'Arc ecosystem projects', 'stablecoin finance', 'USDC', 'CCTP', 'StableFX'],
  authors: [{ name: 'ArcCRCL' }],
  creator: 'ArcCRCL',
  verification: {
    google: '_h04YZtfSVpN785-q_fgxfCBUyaXgUsU6LTcj4Ac0lI',
  },
  openGraph: {
    type: 'website',
    url: 'https://arccrcl.com',
    title: 'ArcCRCL — Your Daily Hub for Arc News, Projects and Stablecoin FX',
    description: 'ArcCRCL is your daily hub for everything on Circle\'s Arc blockchain. Discover ecosystem projects, read breaking news, compare stablecoin rails, and track the ARC token — all in one place.',
    siteName: 'ArcCRCL',
    images: [
      {
        url: 'https://arccrcl.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ArcCRCL — The hub for everything Arc',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ArcCRCL',
    creator: '@ArcCRCL',
    title: 'ArcCRCL — Your Daily Hub for Arc News, Projects and Stablecoin FX',
    description: 'ArcCRCL is your daily hub for everything on Circle\'s Arc blockchain. Discover ecosystem projects, read breaking news, compare stablecoin rails, and track the ARC token — all in one place.',
    images: ['https://arccrcl.com/og-image.png'],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'ArcCRCL',
  },
  other: {
    'mobile-web-app-capable': 'yes',
  },
}

export const viewport: Viewport = {
  themeColor: '#E3C896',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/icons/icon-192.png" type="image/png" />
        <link rel="apple-touch-icon" href="/icons/icon-192.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body style={{ backgroundColor: '#070c16' }}>
        <ServiceWorker />
        <WalletProviderWrapper>
          {children}
        </WalletProviderWrapper>
        <ChatWidget />
      </body>
    </html>
  )
}