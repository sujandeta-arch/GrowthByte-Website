// JSON-LD structured data for SEO

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'GrowthByte',
  url: 'https://growthbyte.com',
  logo: 'https://growthbyte.com/logo.png',
  description: 'AI-powered marketing agency delivering exponential growth through integrated strategies.',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+91-8904879011',
    contactType: 'Customer Service',
    email: 'harsha@thinkbyte.ai',
  },
  sameAs: [
    'https://www.linkedin.com/company/growthbyte',
    'https://twitter.com/growthbyte',
  ],
}

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'GrowthByte',
  url: 'https://growthbyte.com',
  description: 'AI-powered marketing agency delivering exponential growth through integrated strategies.',
  publisher: {
    '@type': 'Organization',
    name: 'GrowthByte',
  },
}

export const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Marketing Agency Services',
  provider: {
    '@type': 'Organization',
    name: 'GrowthByte',
  },
  areaServed: 'Worldwide',
  availableChannel: {
    '@type': 'ServiceChannel',
    serviceUrl: 'https://growthbyte.com/contact',
  },
}
