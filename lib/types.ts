// Common types for the application

export interface NavigationItem {
  name: string
  href: string
}

export interface Service {
  id: string
  title: string
  subtitle: string
  description: string
  features: string[]
}

export interface CaseStudy {
  title: string
  client: string
  profile: string
  challenge: string
  solution: string
  results: string[]
  quote: string
  author: string
}

export interface Founder {
  name: string
  role: string
  title: string
  specialization: string
  background: string
}

export interface CTAProps {
  primary?: string
  secondary?: string
  primaryHref?: string
  secondaryHref?: string
  className?: string
}
