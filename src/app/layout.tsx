import type { Metadata } from 'next'
import { Inter, Poppins, Source_Sans_3 } from 'next/font/google'
import './globals.css'
import React from 'react'
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

const sourceSans = Source_Sans_3({ 
  subsets: ['latin'],
  variable: '--font-source-sans',
  weight: ['300', '400', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://stacksolutions.dev'),
  title: 'StackSolutions - Professional Development Agency | Full-Stack Web & Mobile Development',
  description: 'Transform your business with cutting-edge technology solutions. Expert full-stack web development, Flutter mobile apps, AI automation, and SEO optimization services.',
  keywords: 'web development, mobile app development, Flutter, React, Next.js, AI automation, SEO optimization, digital transformation, software development agency',
  authors: [{ name: 'StackSolutions Team' }],
  creator: 'StackSolutions',
  publisher: 'StackSolutions',
  robots: 'index, follow',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' }
    ],
    apple: '/apple-touch-icon.png',
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#3B82F6'
      }
    ]
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://stacksolutions.dev',
    siteName: 'StackSolutions',
    title: 'StackSolutions - Professional Development Agency',
    description: 'Transform your business with cutting-edge technology solutions. Expert development services for web, mobile, and AI automation.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'StackSolutions - Professional Development Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'StackSolutions - Professional Development Agency',
    description: 'Transform your business with cutting-edge technology solutions.',
    images: ['/og-image.jpg'],
    creator: '@stacksolutions',
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

import SkipToContent from '@/components/SkipToContent'
import Analytics, { GoogleAnalytics } from '@/components/Analytics'
import MobileOptimization from '@/components/MobileOptimization'
import PerformanceMonitor from '@/components/PerformanceMonitor'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import LoadingStrategy from '@/components/LoadingStrategy'
import CookieConsent from '@/components/CookieConsent'
import { Suspense } from 'react'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} ${sourceSans.variable}`}>
      <head>
        <GoogleAnalytics />
        {/* Favicon and App Icons */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#3B82F6" />
        <meta name="msapplication-TileColor" content="#3B82F6" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        {/* Preload critical resources */}
        <link rel="preload" href="/fonts/inter.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/poppins.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/source-sans-3.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        {/* Preconnect to critical origins */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-source-sans antialiased">
        <LoadingStrategy />
        <SkipToContent />
        <Header />
        <div id="main-content" className="pt-16 lg:pt-20">
          {children}
        </div>
        <Footer />
        <Suspense fallback={null}>
          <Analytics />
        </Suspense>
        <MobileOptimization />
        <PerformanceMonitor />
        <CookieConsent />
      </body>
    </html>
  )
}