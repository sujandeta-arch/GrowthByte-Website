import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { organizationSchema, websiteSchema } from '@/lib/structured-data'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
  adjustFontFallback: true,
})

export const metadata: Metadata = {
  title: {
    default: 'AI-Powered Marketing Agency | End-to-End Growth Solutions | GrowthByte',
    template: '%s | GrowthByte'
  },
  description: 'Transform your marketing with AI + human expertise. Multi-channel strategies that deliver exponential growth. Integrated SEO, PPC, Social, Email & Design.',
  keywords: ['AI marketing agency', 'marketing strategy', 'SEO services', 'PPC management', 'social media marketing', 'email marketing', 'growth marketing'],
  authors: [{ name: 'GrowthByte' }],
  creator: 'GrowthByte',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://growthbyte.com',
    siteName: 'GrowthByte',
    title: 'AI-Powered Marketing Agency | GrowthByte',
    description: 'Transform your marketing with AI + human expertise. Multi-channel strategies that deliver exponential growth.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI-Powered Marketing Agency | GrowthByte',
    description: 'Transform your marketing with AI + human expertise.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="antialiased bg-white text-secondary-dark">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-lg">
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
