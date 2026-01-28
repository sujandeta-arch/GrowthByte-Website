'use client'

import Link from 'next/link'
import { useState, useCallback } from 'react'
import { NAVIGATION_ITEMS } from '@/lib/constants'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMenu = useCallback(() => {
    setMobileMenuOpen((prev) => !prev)
  }, [])

  const closeMenu = useCallback(() => {
    setMobileMenuOpen(false)
  }, [])

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <nav className="container-custom">
        {/* 64dp height on mobile, 72dp on desktop - Material Design app bar */}
        <div className="flex items-center justify-between h-16 md:h-[72px]">
          <Link href="/" className="flex items-center group">
            <span className="text-xl md:text-2xl font-bold text-primary group-hover:text-primary-dark transition-colors">
              GrowthByte
            </span>
          </Link>

          {/* Desktop Navigation - 32dp gap between items */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
            {NAVIGATION_ITEMS.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-secondary-dark hover:text-primary transition-colors font-medium text-sm tracking-wide relative group py-2"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
              </Link>
            ))}
            <Link href="/contact" className="btn-primary text-sm ml-4">
              Get Started
            </Link>
          </nav>

          {/* Mobile menu button - 48dp touch target */}
          <button
            type="button"
            className="lg:hidden p-3 -mr-3"
            onClick={toggleMenu}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation - 16dp padding, 12dp gap between items */}
        {mobileMenuOpen && (
          <nav className="lg:hidden py-4 space-y-3 border-t border-gray-100" aria-label="Mobile navigation">
            {NAVIGATION_ITEMS.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-secondary-dark hover:text-primary transition-colors font-medium py-2"
                onClick={closeMenu}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-2">
              <Link
                href="/contact"
                className="btn-primary block text-center"
                onClick={closeMenu}
              >
                Get Started
              </Link>
            </div>
          </nav>
        )}
      </nav>
    </header>
  )
}
