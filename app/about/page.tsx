import type { Metadata } from 'next'
import Link from 'next/link'
import AboutSection from '@/components/sections/AboutSection'

export const metadata: Metadata = {
  title: 'About GrowthByte | AI Marketing Agency | Meet Our Team',
  description: 'Founded by 3 product leaders frustrated with traditional marketing. We combine AI efficiency with human creativity.',
}

export default function AboutPage() {
  return (
    <>
      <div className="relative section-padding bg-gradient-to-br from-secondary-dark via-secondary to-secondary-dark text-white overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-primary/20 backdrop-blur-sm rounded-full text-primary-light text-sm font-semibold">
                Our Story
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 text-balance leading-tight">
              How GrowthByte Started & Why We Do This
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              We&apos;re not a traditional agency. We&apos;re not a software company. <span className="text-primary-light font-semibold">We&apos;re a growth partner.</span>
            </p>
          </div>
        </div>
      </div>
      
      <AboutSection />
      
      <div className="section-padding-sm bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Accelerate Your Growth?
            </h2>
            <p className="text-lg text-gray-600">
              Let&apos;s discuss how we can help you achieve exponential growth through AI-powered marketing.
            </p>
            <Link href="/contact" className="btn-primary inline-block">
              Work With Us
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
