export default function SolutionSection() {
  const pillars = [
    {
      title: 'One Integrated Plan Across All Channels',
      description: 'We don\'t do "SEO services" or "PPC management" in isolation. We reverse-engineer from your business goals and build a unified strategy where SEO, PPC, social media, email, content, and design all work together. Every tactic supports every other tactic. Every channel drives toward the same goal. This integrated approach is why our clients see 3X average ROI compared to traditional siloed approaches.',
    },
    {
      title: 'Machine Learning Optimization Running 24/7',
      description: 'Your campaigns don\'t sleep. Neither does our AI. Machine learning algorithms analyze performance data in real-time, identifying opportunities, optimizing bids, adjusting audiences, and testing variations automatically. We catch trends before competitors do. We identify what\'s working and scale it immediately. Our AI technology reduces manual tasks by 70%, freeing our team to focus on strategic decisions that require human judgment and creativity.',
    },
    {
      title: 'Strategic Thinking & Creative Execution That Only Humans Provide',
      description: 'AI handles the data. Humans handle the strategy. Our team brings 10+ years of combined experience building growth at scale. We understand psychology, market dynamics, and business strategy. We tell your brand story in ways that resonate. We build relationships with your stakeholders. We solve complex problems that require judgment, creativity, and contextual thinking. The combination of machine intelligence and human wisdom is unbeatable.',
    },
  ]

  return (
    <section id="solution" className="section-padding bg-gradient-to-b from-white via-primary/5 to-white">
      <div className="container-custom">
        <div className="section-title">
          <span className="section-label bg-primary text-white mb-6">
            The Solution
          </span>
          <h2 className="mb-6 text-balance">
            The GrowthByte Solution: AI-Powered Marketing That Actually Works
          </h2>
          <p className="section-subtitle">
            Three Pillars of Our Approach
          </p>
        </div>

        <div className="space-y-16 md:space-y-20">
          {pillars.map((pillar, index) => (
            <div key={index} className="max-w-5xl mx-auto">
              <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-primary to-primary-dark text-white rounded-2xl flex items-center justify-center font-bold text-2xl md:text-3xl shadow-lg">
                    {index + 1}
                  </div>
                </div>
                <div className="flex-1 space-y-4">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-secondary-dark leading-tight">
                    {pillar.title}
                  </h3>
                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
