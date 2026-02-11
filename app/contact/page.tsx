import type { Metadata } from 'next'
import ContactForm from './ContactForm'

export const metadata: Metadata = {
  title: 'Contact GrowthByte | Schedule a Meeting | Growth Strategy Session',
  description: 'Ready to accelerate growth? Schedule a free strategy session with our team. No obligation.',
}

export default function ContactPage() {
  return (
    <div className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-semibold">
                Let&apos;s Connect
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Get In Touch
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
              Schedule Your Free Strategy Session
            </p>
          </div>

          <ContactForm />
        </div>
      </div>
    </div>
  )
}
