export default function TractionSection() {
  const stats = [
    { value: '20+', label: 'Brands Served', description: 'Across e-commerce, SaaS, B2B services, D2C, and more' },
    { value: '$5M+', label: 'Client Revenue Generated', description: 'Real impact on real business results' },
    { value: '3X', label: 'Average ROI', description: 'Proven ability to deliver multiplied returns' },
    { value: '92%', label: 'Client Retention Rate', description: 'When results are real, clients stick around' },
    { value: '4.8/5', label: 'Customer Satisfaction', description: 'Our clients trust us and recommend us' },
    { value: '3-6', label: 'Months to Results', description: 'Real results, not overpromises. Fast, but realistic.' },
  ]

  return (
    <section id="traction" className="section-padding bg-gradient-to-b from-white via-primary/5 to-white">
      <div className="container-custom">
        <div className="section-title">
          <span className="section-label bg-primary text-white mb-6">
            Our Track Record
          </span>
          <h2 className="mb-6">
            Proven Results Across Industries
          </h2>
          <p className="section-subtitle">
            Real numbers from real clients who trusted us with their growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-8 text-center border border-primary/20">
              <div className="text-5xl md:text-6xl font-bold text-primary mb-3">{stat.value}</div>
              <h3 className="text-xl font-bold mb-2">{stat.label}</h3>
              <p className="text-gray-600 text-sm">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
