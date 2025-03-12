import './globals.css'
import './animations.css' // We'll create this file for animations
import Navigation from './components/navigation'
import { Suspense } from 'react'
import LoadingSpinner from './components/loading-spinner'

// Define custom font for Times New Roman
const timesNewRoman = {
  className: 'font-times-new-roman',
  style: {
    fontFamily: '"Times New Roman", Times, serif',
  },
}

export const metadata = {
  title: 'HopeSera - Fertility Solutions',
  description: 'Advanced fertility treatments and products for your fertility journey',
  keywords: 'fertility, women\'s health, reproductive health, fertility treatments',
  openGraph: {
    title: 'HopeSera - Fertility Solutions',
    description: 'Advanced fertility treatments and products for your fertility journey',
    images: ['/hopesarawide.jpeg'],
  },
  // Add Twitter metadata
  twitter: {
    card: 'summary_large_image',
    title: 'HopeSera - Fertility Solutions',
    description: 'Advanced fertility treatments and products for your fertility journey',
    images: ['/hopesarawide.jpeg'],
    creator: '@hopesera',
    site: '@hopesera'
  },
  // Add icons
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-icon.png', // Optional: Create this if you want a specific iOS icon
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Add explicit favicon link for older browsers */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-icon.png" /> {/* Optional */}
        
        {/* Twitter card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@hopesera" />
        <meta name="twitter:title" content="HopeSera - Fertility Solutions" />
        <meta name="twitter:description" content="Advanced fertility treatments and products for your fertility journey" />
        <meta name="twitter:image" content="https://hopesera.com/hopesarawide.jpeg" />
      </head>
      <body style={timesNewRoman.style} className="min-h-screen bg-gradient-to-br from-rose-50 to-indigo-50 bg-fixed">
        <div className="page-transition-wrapper">
          <Navigation />
          <Suspense fallback={<LoadingSpinner />}>
            <main className="fade-in-animation">
              {children}
            </main>
          </Suspense>
        </div>
      </body>
    </html>
  )
}
