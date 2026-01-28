import Link from 'next/link'
import { COMPANY_INFO, SOCIAL_LINKS } from '@/lib/constants'

export default function Footer() {
  const companyLinks = [
    { name: 'About', href: '/about' },
    { name: 'Case Studies', href: '/#case-studies' },
    { name: 'Blog', href: '/blog' },
  ]

  const serviceLinks = [
    { name: 'Growth Strategy', href: '/services#strategy' },
    { name: 'SEO', href: '/services#seo' },
    { name: 'Paid Ads', href: '/services#ppc' },
    { name: 'Social Media', href: '/services#social' },
    { name: 'Email Marketing', href: '/services#email' },
  ]

  const resourceLinks = [
    { name: 'FAQ', href: '/#faq' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <footer className="bg-secondary-dark text-white">
      {/* Main Footer */}
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="text-2xl font-bold text-primary inline-block hover:text-primary-light transition-colors mb-4">
              {COMPANY_INFO.name}
            </Link>
            <p className="text-gray-400 mb-5 text-sm leading-relaxed">
              AI-powered marketing for exponential growth.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href={SOCIAL_LINKS.linkedin}
                className="w-10 h-10 bg-white/5 hover:bg-primary rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a
                href={SOCIAL_LINKS.twitter}
                className="w-10 h-10 bg-white/5 hover:bg-primary rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200"
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-sm mb-4 text-white uppercase tracking-wider">Company</h3>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-primary transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-semibold text-sm mb-4 text-white uppercase tracking-wider">Services</h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-primary transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="font-semibold text-sm mb-4 text-white uppercase tracking-wider">Resources</h3>
            <ul className="space-y-2.5">
              {resourceLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-primary transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="container-custom py-5 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} GrowthByte. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
