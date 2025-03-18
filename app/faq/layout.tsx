import type { Metadata } from 'next'
import Navigation from '../components/navigation'
import Footer from '../components/footer'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions - HopeSera',
  description: 'Find answers to common questions about HopeSera products, services, and women\'s healthcare solutions.',
}

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navigation />
      <main>{children}</main>
      <Footer />
    </>
  )
} 