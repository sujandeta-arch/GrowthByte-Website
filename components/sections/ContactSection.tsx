import Link from 'next/link'
import { CONTACT_INFO } from '@/lib/constants'

export default function ContactSection() {
  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-secondary-dark via-secondary to-secondary-dark text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-primary rounded-full blur-[100px]"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Headline */}
          <h2 className="text-white mb-4">Let&apos;s Grow Together</h2>

          {/* Single line value prop */}
          <p className="text-xl text-gray-300 mb-10">
            Book a free strategy call. No pressure, just possibilities.
          </p>

          {/* Primary CTA */}
          <Link href="/contact" className="btn-primary inline-block mb-8">
            Schedule Free Call
          </Link>

          {/* Divider */}
          <div className="flex items-center gap-4 max-w-md mx-auto mb-8">
            <div className="flex-1 h-px bg-white/10"></div>
            <span className="text-gray-500 text-sm">or stay in the loop</span>
            <div className="flex-1 h-px bg-white/10"></div>
          </div>

          {/* Newsletter - Secondary option */}
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-10">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm"
            />
            <button type="submit" className="btn-secondary whitespace-nowrap">
              Subscribe
            </button>
          </form>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-sm text-gray-400">
            <a
              href={CONTACT_INFO.emailHref}
              className="flex items-center gap-2 hover:text-primary transition-colors"
              aria-label={`Email us at ${CONTACT_INFO.email}`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>{CONTACT_INFO.email}</span>
            </a>
            <span className="hidden sm:block text-gray-600" aria-hidden="true">|</span>
            <a
              href={CONTACT_INFO.phoneHref}
              className="flex items-center gap-2 hover:text-primary transition-colors"
              aria-label={`Call us at ${CONTACT_INFO.phone}`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>{CONTACT_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
