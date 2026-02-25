'use client'

import { useState, useEffect } from 'react'
import Container from '../ui/Container'
import Button from '../ui/Button'

interface HeaderProps {
  locale?: 'ka' | 'en'
}

export default function Header({ locale = 'ka' }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { label: locale === 'ka' ? 'პროდუქტი' : 'Product', href: '#' },
    { label: locale === 'ka' ? 'ტესტი'    : 'Quiz',    href: '#' },
    { label: locale === 'ka' ? 'ჩვენ შესახებ' : 'About', href: '#' },
  ]

  const ctaLabel = locale === 'ka' ? 'ტესტის გავლა' : 'Take the quiz'

  return (
    <header
      className={[
        'sticky top-0 z-50 w-full transition-all duration-300',
        scrolled
          ? 'border-b border-border/60 bg-background/90 backdrop-blur-md'
          : 'bg-background',
      ].join(' ')}
    >
      <Container className="flex h-[72px] items-center justify-between">

        {/* Logo */}
        <a href="/" aria-label="Mindor" className="shrink-0">
          <span className="font-heading text-2xl tracking-tight text-primary">Mindor</span>
        </a>

        {/* Desktop nav */}
        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-body text-sm text-muted transition-colors duration-150 hover:text-foreground"
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

        {/* Mobile toggle */}
        <button
          className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] md:hidden"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span
            className={`block h-px w-5 bg-foreground transition-all duration-300 origin-center ${
              menuOpen ? 'translate-y-[6px] rotate-45' : ''
            }`}
          />
          <span
            className={`block h-px w-5 bg-foreground transition-all duration-300 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block h-px w-5 bg-foreground transition-all duration-300 origin-center ${
              menuOpen ? '-translate-y-[6px] -rotate-45' : ''
            }`}
          />
        </button>
      </Container>

      {/* Mobile drawer */}
      <div
        className={[
          'overflow-hidden border-b border-border/60 bg-background transition-all duration-300 md:hidden',
          menuOpen ? 'max-h-72 opacity-100' : 'max-h-0 opacity-0',
        ].join(' ')}
      >
        <Container className="flex flex-col gap-6 pb-8 pt-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-body text-base text-foreground"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <Button variant="primary" size="sm">
              {ctaLabel}
            </Button>
          </div>
        </Container>
      </div>
    </header>
  )
}
