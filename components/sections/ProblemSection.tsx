export default function ProblemSection() {
  const challenges = [
    {
      title: 'Scattered Across Multiple Agencies & Tools',
      description: 'Your marketing efforts are spread thin across different vendors. No unified strategy. Inconsistent messaging. Wasted budget. You\'re managing multiple agencies instead of growing your business. Result: confusion, inefficiency, and missed opportunities.',
    },
    {
      title: '"Just SEO" or "Just PPC" Approaches Miss the Bigger Picture',
      description: 'Traditional agencies specialize in one thing. Your growth requires integration. SEO alone won\'t scale. PPC without organic support wastes budget. Social without email follow-up leaves money on the table. The businesses winning today use coordinated, multi-channel strategies where each channel amplifies the others.',
    },
    {
      title: 'Traditional Marketing Is Too Slow for Today\'s Business Environment',
      description: 'Manual processes. Monthly reporting. Generic strategies. By the time you see results, the market has moved. Your competition is already ahead. Smart businesses need agile, data-driven marketing that adapts daily. Real-time optimization. Instant insights. Predictive analytics that help you stay ahead of the curve.',
    },
  ]

  return (
    <section id="problem" className="section-padding bg-gradient-to-b from-white via-gray-50/50 to-white">
      <div className="container-custom">
        <div className="section-title">
          <span className="section-label bg-primary/10 text-primary mb-6">
            The Problem
          </span>
          <h2 className="mb-6 text-balance">
            Why Most Marketing Falls Short (And How We&apos;re Different)
          </h2>
          <p className="section-subtitle">
            The Three Critical Marketing Challenges We Solve
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {challenges.map((challenge, index) => (
            <div key={index} className="group relative bg-white p-8 md:p-10 rounded-2xl border-2 border-gray-200 hover:border-primary/30 hover:shadow-xl transition-all duration-300">
              <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-bl-2xl rounded-tr-2xl flex items-center justify-center">
                <span className="text-primary text-3xl md:text-4xl font-bold">0{index + 1}</span>
              </div>
              <div className="pt-4">
                <h3 className="text-xl md:text-2xl font-bold mb-5 leading-tight pr-16">{challenge.title}</h3>
                <p className="text-gray-600 leading-relaxed text-base">{challenge.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
