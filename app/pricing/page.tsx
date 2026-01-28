import type { Metadata } from 'next'
import PricingSection from '@/components/sections/PricingSection'

export const metadata: Metadata = {
  title: 'Marketing Agency Pricing | Packages & Investment | GrowthByte',
  description: 'Flexible pricing starting at $5K/month. Transparent costs, real results. Choose your investment level.',
}

export default function PricingPage() {
  return (
    <>
      <div className="relative section-padding bg-gradient-to-br from-secondary-dark via-secondary to-secondary-dark text-white overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-primary/20 backdrop-blur-sm rounded-full text-primary-light text-sm font-semibold">
                Pricing
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 text-balance leading-tight">
              Transparent Pricing for Growth-Focused Marketing
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Flexible engagement models that scale with your business
            </p>
          </div>
        </div>
      </div>
      <PricingSection />
    </>
  )
}
