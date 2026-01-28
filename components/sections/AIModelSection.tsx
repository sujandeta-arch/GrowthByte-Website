export default function AIModelSection() {
  const aiCapabilities = [
    '24/7 data monitoring and analysis',
    'Bid optimization across platforms',
    'Audience segmentation & targeting',
    'Performance prediction & forecasting',
    'Automated A/B testing',
    'Trend identification',
    'Real-time campaign adjustments',
    'Anomaly detection',
  ]

  const humanCapabilities = [
    'Strategic planning & roadmapping',
    'Creative concepting & ideation',
    'Brand storytelling & positioning',
    'Relationship building & trust',
    'Complex problem-solving',
    'Client communication & alignment',
    'Innovation & experimentation',
    'Ethical decision-making',
  ]

  return (
    <section id="ai-model" className="section-padding bg-gradient-to-br from-secondary-dark via-secondary to-secondary-dark text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="section-title">
          <span className="section-label bg-primary/20 text-primary-light mb-6">
            Our Advantage
          </span>
          <h2 className="mb-6 text-white">
            Our Competitive Advantage: AI + Human Model
          </h2>
          <p className="section-subtitle text-gray-300">
            The perfect combination of machine intelligence and human wisdom
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto mb-16">
          <div className="prose prose-lg max-w-none text-gray-300 leading-relaxed space-y-4">
            <p>
              The question isn&apos;t &quot;AI or humans?&quot; It&apos;s &quot;how do we combine them?&quot; We do both better than most.
            </p>
            <p>
              AI handles what machines do best: processing vast amounts of data, identifying patterns, optimizing in real-time, running experiments, predicting outcomes. Our machine learning algorithms run 24/7, analyzing campaign performance, adjusting bids, segmenting audiences, testing variations automatically.
            </p>
            <p>
              Humans handle what only humans can do: strategic thinking, creative ideation, relationship building, complex problem-solving, judgment calls. Our strategists and creative professionals use AI insights to inform decisions, but they make the decisions that matter most.
            </p>
            <p>
              The result? Campaigns that are simultaneously data-driven AND creatively compelling. Optimized AND innovative. Efficient AND effective.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="text-primary text-4xl">🤖</span>
              What AI Does Best
            </h3>
            <ul className="space-y-3">
              {aiCapabilities.map((capability, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300">{capability}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="text-primary text-4xl">🧠</span>
              What Humans Do Best
            </h3>
            <ul className="space-y-3">
              {humanCapabilities.map((capability, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300">{capability}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
