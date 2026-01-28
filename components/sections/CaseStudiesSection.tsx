export default function CaseStudiesSection() {
  const caseStudies = [
    {
      title: '147% Increase in Conversions | 68% Lower CPA | 3-Month Timeline',
      client: 'E-Commerce Brand',
      profile: 'Online fashion retailer, $2-3M annual revenue, strong social presence but struggling conversions',
      challenge: 'The client had good social media engagement but wasn\'t converting followers into buyers. Ad spend was high, conversions were low, and margins were being squeezed. They were doing social media, but they weren\'t doing sales effectively through social.',
      solution: 'We conducted a complete audit of their social funnel. We discovered significant disconnect between awareness content and conversion messaging. We rebuilt their content strategy with product-focused, high-converting content. We restructured their paid social targeting to focus on high-intent audiences. We implemented sophisticated retargeting sequences. We created dedicated landing pages optimized for social traffic.',
      results: [
        '147% increase in conversions',
        '68% lower cost per acquisition',
        '2X faster goal achievement',
        'Campaign timeline: 3 months',
      ],
      quote: 'GrowthByte didn\'t just run ads. They transformed our entire approach to social selling.',
      author: 'Kalyan M., CMO',
    },
    {
      title: '5X Increase in Qualified Leads | 212% ROI on Ad Spend | 6-Month Timeline',
      client: 'SaaS Company',
      profile: 'B2B SaaS platform, strong product, ranking on pages 2-3 for target keywords, struggling to generate qualified leads',
      challenge: 'The product was excellent, but prospects couldn\'t find them. Search rankings for target keywords were on pages 2-3, just out of sight. Organic traffic was low. Paid search budget was being wasted on poorly targeted campaigns. The sales team had inconsistent pipeline.',
      solution: 'We conducted technical SEO audit and implemented major optimizations (site architecture, page speed, schema markup). We rebuilt their content strategy around high-intent keywords. We restructured their Google Ads campaigns for better targeting and messaging. We integrated organic and paid strategies so they appeared in both SERPs and ads simultaneously. We built landing pages optimized for lead conversion.',
      results: [
        '5X increase in qualified leads',
        'Page 1 rankings for 34 target keywords',
        '212% ROI on ad spend',
        'Campaign timeline: 6 months',
      ],
      quote: 'The combination of SEO and paid search created a true lead generation machine.',
      author: 'Marcus T., VP Growth',
    },
    {
      title: '3X Pipeline Growth | 41% Lead-to-Opportunity Conversion | 4-Month Timeline',
      client: 'B2B Services Firm',
      profile: 'B2B professional services, long sales cycles (90-180 days), inconsistent lead flow, sales and marketing misaligned',
      challenge: 'Long sales cycles meant leads went cold between initial contact and sales follow-up. They had prospects in the pipeline, but conversion rates were low. Marketing sent leads to sales, but there was no follow-up system. Leads disappeared. Sales blamed marketing. Marketing blamed sales quality.',
      solution: 'We built a full-funnel strategy. SEO to generate awareness content. Content marketing to establish authority. LinkedIn ads to reach decision makers. Email automation to nurture leads across the long sales cycle. Sales enablement collateral (comparison guides, ROI calculators, case studies). Integrated CRM system to track prospects through the entire journey. Monthly strategy reviews to identify optimization opportunities.',
      results: [
        '3X pipeline growth',
        '41% lead-to-opportunity conversion rate',
        '89% email open rates',
        'Campaign timeline: 4 months',
      ],
      quote: 'Finally, marketing and sales are aligned. Our pipeline has never been healthier.',
      author: 'Jennifer K., CEO',
    },
    {
      title: '4X Revenue Growth in 90 Days | 850% Social Engagement Increase | Built from Ground Up',
      client: 'D2C Brand',
      profile: 'New D2C brand launching in competitive market, zero brand awareness, needed rapid growth',
      challenge: 'Launch in crowded market. Zero audience. Limited budget. Needed to build brand awareness AND drive immediate sales. Typical startup constraint: need growth fast, but can\'t spend a fortune.',
      solution: 'We built integrated launch campaign. Influencer partnerships to build credibility quickly. Paid social campaigns targeting lookalike audiences and competitors\' customers. Content marketing to establish brand story. Email list building from day one. Organic social strategy to build community. Product-focused landing pages for traffic from all channels. Daily optimization based on performance data.',
      results: [
        '4X revenue growth in 90 days',
        '12,000+ email subscribers built from ground up',
        '850% increase in social engagement',
      ],
      quote: 'GrowthByte helped us go from zero to market leader in our category.',
      author: 'David L., Founder',
    },
  ]

  return (
    <section id="case-studies" className="section-padding bg-gradient-to-b from-gray-50/50 via-white to-gray-50/30">
      <div className="container-custom">
        <div className="section-title">
          <span className="section-label bg-primary/10 text-primary mb-6">
            Case Studies
          </span>
          <h2 className="mb-6">
            Real Results From Real Clients
          </h2>
          <p className="section-subtitle">See how GrowthByte delivered exponential growth for SaaS, e-commerce, B2B, and D2C brands</p>
        </div>

        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <div className="mb-6">
                <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-semibold mb-3">
                  {study.client}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{study.title}</h3>
                <p className="text-gray-600 font-medium">{study.profile}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="font-bold text-lg mb-3 text-primary">Challenge</h4>
                  <p className="text-gray-600 leading-relaxed">{study.challenge}</p>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-3 text-primary">Solution</h4>
                  <p className="text-gray-600 leading-relaxed">{study.solution}</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-6 mb-6">
                <h4 className="font-bold text-lg mb-4">Results</h4>
                <ul className="grid md:grid-cols-2 gap-3">
                  {study.results.map((result, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700 font-medium">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <blockquote className="border-l-4 border-primary pl-6 italic text-gray-700">
                &ldquo;{study.quote}&rdquo; — <span className="font-semibold">{study.author}</span>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
