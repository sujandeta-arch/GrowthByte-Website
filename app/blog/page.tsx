import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Growth Insights & Marketing Resources | GrowthByte Blog',
  description: 'AI marketing strategy blog with growth tips, case studies, and insights from GrowthByte.',
}

export default function BlogPage() {
  const featuredArticles = [
    {
      title: 'How We Reduced CPA by 68% for an E-Commerce Brand',
      type: 'Case Study',
      excerpt: 'Learn how integrated social media and email strategies transformed conversion rates and reduced acquisition costs.',
      slug: 'reduce-cpa-68-percent',
    },
    {
      title: 'The AI + Human Marketing Model: Why It Works Better',
      type: 'Thought Leadership',
      excerpt: 'Discover why combining AI efficiency with human creativity delivers superior marketing results.',
      slug: 'ai-human-marketing-model',
    },
    {
      title: 'Complete Guide to Multi-Channel Marketing Strategy',
      type: 'Beginner Guide',
      excerpt: 'A comprehensive guide to building integrated marketing strategies that amplify results across channels.',
      slug: 'multi-channel-marketing-guide',
    },
    {
      title: 'SEO vs PPC: When to Use Each',
      type: 'Comparison',
      excerpt: 'Understanding when to invest in organic search vs paid advertising for maximum ROI.',
      slug: 'seo-vs-ppc-comparison',
    },
    {
      title: 'Email Automation Sequences That Convert',
      type: 'How-To',
      excerpt: 'Proven email automation frameworks that nurture prospects and drive conversions.',
      slug: 'email-automation-sequences',
    },
    {
      title: 'Measuring Marketing ROI: What Actually Matters',
      type: 'Data-Driven',
      excerpt: 'Cut through vanity metrics and focus on the KPIs that drive real business growth.',
      slug: 'measuring-marketing-roi',
    },
  ]

  return (
    <div className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        <div className="text-center mb-20">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-semibold">
              Resources & Insights
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            Growth Insights & Marketing Resources
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Expert insights, case studies, and actionable strategies to accelerate your growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {featuredArticles.map((article, index) => (
            <Link
              key={index}
              href={`/blog/${article.slug}`}
              className="group bg-white border-2 border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:border-primary/20 transition-all duration-300 h-full flex flex-col"
            >
              <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-xs font-semibold mb-4 w-fit">
                {article.type}
              </span>
              <h2 className="text-xl md:text-2xl font-bold mb-4 group-hover:text-primary transition-colors leading-tight">
                {article.title}
              </h2>
              <p className="text-gray-600 text-base leading-relaxed mb-6 flex-grow">{article.excerpt}</p>
              <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-4 transition-all">
                Read More
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
          ))}
        </div>

        <div className="max-w-2xl mx-auto text-center bg-white rounded-3xl shadow-xl p-12 border border-gray-100">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-gray-600 mb-8">More articles coming soon. Subscribe to get notified when we publish new insights.</p>
          <form className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all bg-white text-gray-900 placeholder-gray-400"
            />
            <button type="submit" className="btn-primary whitespace-nowrap">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
