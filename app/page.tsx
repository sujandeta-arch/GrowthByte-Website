import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import Hero from '@/components/sections/Hero'
import ServicesSection from '@/components/sections/ServicesSection'

// Lazy load below-the-fold sections for better initial load performance
const WhyChooseSection = dynamic(() => import('@/components/sections/WhyChooseSection'))
const ProcessSection = dynamic(() => import('@/components/sections/ProcessSection'))
const PricingSection = dynamic(() => import('@/components/sections/PricingSection'))
const FAQSection = dynamic(() => import('@/components/sections/FAQSection'))
const ContactSection = dynamic(() => import('@/components/sections/ContactSection'))

export const metadata: Metadata = {
  title: 'AI-Powered Marketing Agency | End-to-End Growth Solutions | GrowthByte',
  description: 'Transform your marketing with AI + human expertise. Multi-channel strategies that deliver exponential growth. Integrated SEO, PPC, Social, Email & Design.',
  openGraph: {
    title: 'AI-Powered Marketing Agency | GrowthByte',
    description: 'Transform your marketing with AI + human expertise. Multi-channel strategies that deliver exponential growth.',
  },
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <WhyChooseSection />
      <ProcessSection />
      <PricingSection />
      <FAQSection />
      <ContactSection />
    </>
  )
}
