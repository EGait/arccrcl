import type { Metadata, Viewport } from 'next'
import './globals.css'
import WalletProviderWrapper from './components/WalletProviderWrapper'
import ServiceWorker from './components/ServiceWorker'
import ChatWidget from './components/ChatWidget'

export const metadata: Metadata = {
  title: 'ArcCRCL — Your Hub for Circle Arc Blockchain News, Projects and Stablecoin FX',
  description: 'ArcCRCL is the community hub for Circle\'s Arc blockchain. Track Arc ecosystem projects, Circle USDC stablecoin FX, breaking news, and RWAs — all in one place.',
  manifest: '/manifest.json',
  keywords: ['Arc', 'Arc blockchain', 'ARC token', 'Circle', 'Circle blockchain', 'Circle Arc', 'USDC', 'EURC', 'stablecoin finance', 'Arc ecosystem', 'Arc projects', 'StableFX', 'CCTP', 'USYC'],
  authors: [{ name: 'ArcCRCL' }],
  creator: 'ArcCRCL',
  verification: {
    google: '_h04YZtfSVpN785-q_fgxfCBUyaXgUsU6LTcj4Ac0lI',
  },
  openGraph: {
    type: 'website',
    url: 'https://arccrcl.com',
    title: 'ArcCRCL — Your Hub for Circle Arc Blockchain News, Projects and Stablecoin FX',
    description: 'ArcCRCL is the community hub for Circle\'s Arc blockchain. Track Arc ecosystem projects, Circle USDC stablecoin FX, breaking news, and RWAs — all in one place.',
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
    title: 'ArcCRCL — Your Hub for Circle Arc Blockchain News, Projects and Stablecoin FX',
    description: 'ArcCRCL is the community hub for Circle\'s Arc blockchain. Track Arc ecosystem projects, Circle USDC stablecoin FX, breaking news, and RWAs — all in one place.',
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
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-NWDXCD8QRR"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-NWDXCD8QRR');
            `,
          }}
        />
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