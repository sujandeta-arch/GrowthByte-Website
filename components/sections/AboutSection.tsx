import Link from 'next/link'

export default function AboutSection() {
  const founders = [
    {
      name: 'Vinay Kumar',
      role: 'Co-Founder',
      title: 'AI/ML Product Leader | 10+ Years Building AI Solutions at Scale',
      specialization: 'Product strategy, AI/ML implementation, growth systems',
      background: 'BITS Pilani | Anvayaa | Kiraak Foods | Belong',
    },
    {
      name: 'SriHarsha Thota',
      role: 'Co-Founder',
      title: 'Ex-VP, Founding Engineer – MediBuddy | Angel Investor',
      specialization: 'Product development, go-to-market strategy, technical implementation',
      background: 'BITS Pilani | MediBuddy (Early stage to exit)',
    },
    {
      name: 'Raghu Gorrela',
      role: 'Co-Founder',
      title: 'Global Client Engagements & Strategic Partnerships',
      specialization: 'Client strategy, revenue operations, partnership development',
      background: 'BITS Pilani | XLRI Jamshedpur | Global business experience',
    },
  ]

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-gray-50/50 via-white to-gray-50/30">
      <div className="container-custom">
        <div className="section-title">
          <span className="section-label bg-primary/10 text-primary mb-6">
            About Us
          </span>
          <h2 className="mb-6">
            About GrowthByte: Our Story & Expertise
          </h2>
          <p className="section-subtitle">
            Built by product leaders who understand both technology and growth
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto mb-16">
          <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed space-y-4">
            <p>
              GrowthByte was founded by three engineers and product leaders frustrated with traditional marketing agencies. We&apos;d built AI products at scale. We&apos;d launched startups. We&apos;d managed real P&Ls. And we knew that traditional marketing—siloed, slow, manual—wasn&apos;t cutting it anymore.
            </p>
            <p>
              Vinay Kumar brought 10+ years of AI/ML product experience from companies like Anvayaa and Kiraak Foods. He understood how machine learning could transform marketing optimization. SriHarsha Thota built the founding engineering team at MediBuddy and saw firsthand how data-driven product decisions outperformed hunches. Raghu Gorrela managed global client engagements and understood what clients actually needed (results, not complexity).
            </p>
            <p>
              Together, we built GrowthByte on a simple premise: marketing should combine the efficiency of AI with the judgment of experienced humans. Not AI alone (too robotic, too impersonal). Not humans alone (too slow, too manual). Both.
            </p>
            <p>
              We started with a handful of clients. We delivered results. Word spread. Today, we&apos;ve helped 20+ brands generate $5M+ in client revenue while maintaining a 92% client retention rate and 4.8/5 customer satisfaction score.
            </p>
            <p>
              We&apos;re not a traditional agency. We&apos;re not a software company. We&apos;re a growth partner. We have skin in the game. We succeed when you succeed.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">Meet the Founders</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {founders.map((founder, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-primary-light rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-3xl font-bold text-white">{founder.name.charAt(0)}</span>
                </div>
                <h4 className="text-xl font-bold mb-1">{founder.name}</h4>
                <p className="text-primary font-semibold mb-2">{founder.role}</p>
                <p className="text-sm text-gray-600 mb-3">{founder.title}</p>
                <p className="text-sm font-medium text-gray-700 mb-2">Specialization:</p>
                <p className="text-sm text-gray-600 mb-3">{founder.specialization}</p>
                <p className="text-xs text-gray-500">{founder.background}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <Link href="/about" className="btn-primary">
            Learn More About Us
          </Link>
        </div>
      </div>
    </section>
  )
}
