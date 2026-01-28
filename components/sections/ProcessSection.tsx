export default function ProcessSection() {
  const steps = [
    {
      week: 'Week 1',
      title: 'Discovery & Audit',
      description: 'Deep dive into your business, competitors, and current marketing performance.',
    },
    {
      week: 'Weeks 2-3',
      title: 'Strategy Development',
      description: 'Custom growth strategy with channel priorities, timelines, and KPIs.',
    },
    {
      week: 'Week 4+',
      title: 'Launch & Execute',
      description: 'Campaigns go live with tracking, optimization, and weekly iteration.',
    },
    {
      week: 'Ongoing',
      title: 'Optimize & Scale',
      description: 'AI-powered daily optimization. Monthly strategy reviews. Quarterly planning.',
    },
  ]

  return (
    <section id="process" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-label bg-primary/10 text-primary">
            Process
          </span>
          <h2>How We Work</h2>
          <p className="section-subtitle">
            From audit to results in weeks, not months
          </p>
        </div>

        {/* Process Steps */}
        <div className="max-w-3xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-gray-100 hover:border-primary/20 hover:shadow-md transition-all duration-200"
              >
                <div className="flex items-start gap-4">
                  {/* Step number */}
                  <div className="w-10 h-10 bg-primary text-white rounded-lg flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {index + 1}
                  </div>

                  {/* Content */}
                  <div>
                    <span className="text-xs font-medium text-primary uppercase tracking-wider">{step.week}</span>
                    <h3 className="text-lg font-semibold mt-1 mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
