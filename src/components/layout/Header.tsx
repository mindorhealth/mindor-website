'use client'

import { useState } from 'react'
import Container from '../ui/Container'
import Button from '../ui/Button'

interface HeaderProps {
  locale?: 'ka' | 'en'
}

export default function Header({ locale = 'ka' }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { label: locale === 'ka' ? 'მთავარი' : 'Home', href: '#' },
    { label: locale === 'ka' ? 'პროდუქტი' : 'Product', href: '#' },
    { label: locale === 'ka' ? 'ტესტი' : 'Quiz', href: '#' },
    { label: locale === 'ka' ? 'ჩვენ შესახებ' : 'About', href: '#' },
  ]

  const ctaLabel = locale === 'ka' ? 'დაიწყე' : 'Get Started'

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2" aria-label="Mindor">
          <span className="font-heading text-2xl text-primary">Mindor</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a
              key={link.href + link.label}
              href={link.href}
              className="font-body text-sm text-foreground/70 transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex">
          <Button variant="primary" size="sm">
            {ctaLabel}
          </Button>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="flex flex-col gap-1.5 p-2 md:hidden"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span
            className={`block h-0.5 w-6 bg-foreground transition-transform duration-200 ${menuOpen ? 'translate-y-2 rotate-45' : ''}`}
          />
          <span
            className={`block h-0.5 w-6 bg-foreground transition-opacity duration-200 ${menuOpen ? 'opacity-0' : ''}`}
          />
          <span
            className={`block h-0.5 w-6 bg-foreground transition-transform duration-200 ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`}
          />
        </button>
      </Container>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-border bg-background md:hidden">
          <Container className="flex flex-col gap-4 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href + link.label}
                href={link.href}
                className="font-body text-base text-foreground/70 hover:text-primary"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button variant="primary" size="sm" className="self-start">
              {ctaLabel}
            </Button>
          </Container>
        </div>
      )}
    </header>
  )
}
