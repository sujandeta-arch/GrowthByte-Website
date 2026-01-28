import Link from 'next/link'

interface CTAProps {
  primary?: string
  secondary?: string
  primaryHref?: string
  secondaryHref?: string
  className?: string
}

export default function CTA({ 
  primary = "Schedule Your Free Strategy Session",
  secondary = "View Our Case Studies",
  primaryHref = "/contact",
  secondaryHref = "/#case-studies",
  className = ""
}: CTAProps) {
  return (
    <div className={`flex flex-col sm:flex-row gap-4 justify-center ${className}`}>
      <Link href={primaryHref} className="btn-primary">
        {primary}
      </Link>
      <Link href={secondaryHref} className="btn-secondary">
        {secondary}
      </Link>
    </div>
  )
}
