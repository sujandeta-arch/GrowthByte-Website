import CTA from '@/components/CTA'

export default function Hero() {
  return (
    <>
      {/* Main Hero Section */}
      <section className="relative min-h-[85vh] flex items-center bg-gradient-to-br from-secondary-dark via-secondary to-secondary-dark text-white overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-primary rounded-full blur-[100px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-primary-light rounded-full blur-[80px]"></div>
        </div>

        <div className="container-custom relative z-10 py-16 md:py-20 lg:py-24">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-primary/10 backdrop-blur-sm rounded-full text-primary-light text-xs font-semibold tracking-wider uppercase border border-primary/20">
                AI-Powered Growth Marketing
              </span>
            </div>

            {/* Main Headline - 2 lines */}
            <h1 className="mb-6 leading-[1.1]">
              <span className="block">Your End-to-End AI-Powered</span>
              <span className="block">Marketing Partner</span>
            </h1>

            {/* Subheadline - 1 line */}
            <p className="text-hero text-gray-300 mb-8 font-normal">
              AI-Driven Insights + Human Creativity = Exponential Growth
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <CTA />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <a
          href="#value-proposition"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-60 hover:opacity-100 transition-opacity cursor-pointer"
          aria-label="Scroll to next section"
        >
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </section>

      {/* Value Proposition Section */}
      <section id="value-proposition" className="relative bg-secondary text-white section-padding scroll-mt-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Problem Statement */}
            <div className="text-center mb-12 md:mb-16">
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-4xl mx-auto mb-4 whitespace-nowrap">
                Fragmented marketing. Siloed agencies. Manual processes. Slow results.
              </p>
              <p className="text-xl md:text-2xl text-white font-semibold">
                GrowthByte is different.
              </p>
            </div>

            {/* Solution Cards */}
            <div className="grid md:grid-cols-2 gap-6 mb-12 md:mb-16">
              {/* Card 1 */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/10 hover:border-primary/30 transition-colors duration-200">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-3 text-white">Integrated Marketing</h3>
                <p className="text-gray-400 leading-relaxed">
                  AI + human strategy. One unified approach. All channels working together to move the needle.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 md:p-8 border border-white/10 hover:border-primary/30 transition-colors duration-200">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-3 text-white">Goal-First Optimization</h3>
                <p className="text-gray-400 leading-relaxed">
                  We reverse-engineer from your goals. SaaS, e-commerce, or B2B—we deploy what works fastest.
                </p>
              </div>
            </div>

            {/* Bottom Statement */}
            <div className="text-center">
              <div className="inline-block bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 rounded-xl px-6 md:px-8 py-5 md:py-6 border border-primary/15">
                <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
                  AI handles 24/7 data work. You handle strategic decisions.
                  <span className="text-primary-light font-semibold block mt-1">Together, we accelerate growth.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators Section */}
      <section className="bg-secondary-dark text-white py-12 md:py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-3xl mx-auto">
            <div className="group">
              <div className="text-3xl md:text-4xl font-bold text-primary-light mb-2 group-hover:scale-105 transition-transform duration-200">200%+</div>
              <div className="text-sm text-gray-500 font-medium uppercase tracking-wider">Average ROI on Ad Spend</div>
            </div>
            <div className="group">
              <div className="text-3xl md:text-4xl font-bold text-primary-light mb-2 group-hover:scale-105 transition-transform duration-200">3-6 Months</div>
              <div className="text-sm text-gray-500 font-medium uppercase tracking-wider">SEO Results Timeline</div>
            </div>
            <div className="group">
              <div className="text-3xl md:text-4xl font-bold text-primary-light mb-2 group-hover:scale-105 transition-transform duration-200">24/7</div>
              <div className="text-sm text-gray-500 font-medium uppercase tracking-wider">AI-Powered Optimization</div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
