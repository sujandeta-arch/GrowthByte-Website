'use client'

import { useState, useCallback } from 'react'

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = useCallback((index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index))
  }, [])

  const faqs = [
    {
      question: 'How long until we see results?',
      answer: 'PPC shows results in 2-4 weeks. Email marketing in 30 days. SEO takes 3-6 months but compounds over time. Most clients see positive ROI within 90 days.',
    },
    {
      question: 'Do you require long-term contracts?',
      answer: 'No. We work on month-to-month retainers. If we deliver value, you stay. If not, you\'re free to leave anytime.',
    },
    {
      question: 'What\'s the minimum budget?',
      answer: '$5,000 per month minimum. Under $10,000 we focus on 1-2 high-ROI channels. Above $10,000 enables full multi-channel integration.',
    },
    {
      question: 'What metrics do you track?',
      answer: 'Revenue, pipeline, customer acquisition cost, lifetime value, conversion rates, and ROI. Not vanity metrics like followers or impressions.',
    },
    {
      question: 'Can you work with our existing team?',
      answer: 'Yes. We can augment your team, audit existing efforts, or manage strategy while your team or other agencies execute.',
    },
    {
      question: 'What if results don\'t meet expectations?',
      answer: 'We offer a 90-day trial period. If you\'re not seeing traction, we pivot strategy together. No long-term lock-in ever.',
    },
  ]

  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-label bg-primary/10 text-primary">
            FAQ
          </span>
          <h2>Common Questions</h2>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-2xl mx-auto space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden hover:border-gray-300 transition-colors duration-200"
            >
              <button
                type="button"
                className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors duration-200"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span className="font-medium">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-5 pb-4 text-gray-600 text-sm leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
