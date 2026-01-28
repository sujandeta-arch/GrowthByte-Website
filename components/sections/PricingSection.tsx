import Link from 'next/link'

export default function PricingSection() {
  const packages = [
    {
      name: 'Starter',
      price: '$5-8K',
      description: 'Single channel focus',
      features: ['1 primary channel', 'Monthly reporting', 'Dedicated strategist'],
    },
    {
      name: 'Growth',
      price: '$10-15K',
      description: 'Multi-channel integration',
      features: ['2 primary channels', 'Weekly optimization', 'Full-time strategist', 'Quarterly reviews'],
      popular: true,
    },
    {
      name: 'Scale',
      price: '$18-25K+',
      description: 'Full-funnel transformation',
      features: ['All channels', 'AI optimization', 'Strategy team', 'Daily monitoring'],
    },
  ]

  return (
    <section id="pricing" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-label bg-primary/10 text-primary">
            Pricing
          </span>
          <h2>Simple Pricing</h2>
          <p className="section-subtitle">
            Month-to-month. No long-term contracts.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl p-6 relative ${
                pkg.popular
                  ? 'ring-2 ring-primary shadow-lg'
                  : 'border border-gray-200'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white px-3 py-1 rounded-full text-xs font-medium">
                  Popular
                </div>
              )}

              <h3 className="text-lg font-bold mb-1">{pkg.name}</h3>
              <p className="text-gray-500 text-sm mb-4">{pkg.description}</p>

              <div className="mb-6">
                <span className="text-3xl font-bold text-primary">{pkg.price}</span>
                <span className="text-gray-500 text-sm">/month</span>
              </div>

              <ul className="space-y-2 mb-6">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                    <svg className="w-4 h-4 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={`block text-center py-2.5 px-4 rounded-lg font-medium text-sm transition-colors ${
                  pkg.popular
                    ? 'bg-primary text-white hover:bg-primary-dark'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Get Started
              </Link>
            </div>
          ))}
        </div>

        {/* Enterprise note */}
        <p className="text-center text-gray-500 text-sm">
          Need custom enterprise solutions? <Link href="/contact" className="text-primary hover:underline">Let&apos;s talk</Link>
        </p>
      </div>
    </section>
  )
}
