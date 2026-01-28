import type { Metadata } from 'next'
import ServicesSection from '@/components/sections/ServicesSection'

export const metadata: Metadata = {
  title: 'Marketing Services | SEO, PPC, Social Media, Email | GrowthByte',
  description: 'End-to-end marketing services: SEO, PPC, social media, email marketing, content design, and marketing strategy.',
  keywords: ['SEO services', 'PPC management', 'social media marketing', 'email marketing', 'content design', 'marketing strategy'],
}

export default function ServicesPage() {
  return (
    <>
      <div className="relative section-padding bg-gradient-to-br from-secondary-dark via-secondary to-secondary-dark text-white overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-primary/20 backdrop-blur-sm rounded-full text-primary-light text-sm font-semibold">
                Our Services
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 text-balance leading-tight">
              Our End-to-End Marketing Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Comprehensive solutions designed to accelerate your growth across all channels
            </p>
          </div>
        </div>
      </div>
      <ServicesSection />
    </>
  )
}
