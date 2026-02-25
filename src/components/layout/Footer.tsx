import Container from '../ui/Container'

interface FooterProps {
  locale?: 'ka' | 'en'
}

const links = {
  ka: [
    { label: 'პროდუქტი', href: '#' },
    { label: 'ტესტი', href: '#' },
    { label: 'ჩვენ შესახებ', href: '#' },
    { label: 'კონფიდენციალობა', href: '#' },
  ],
  en: [
    { label: 'Product', href: '#' },
    { label: 'Quiz', href: '#' },
    { label: 'About', href: '#' },
    { label: 'Privacy', href: '#' },
  ],
}

const rights = {
  ka: 'ყველა უფლება დაცულია.',
  en: 'All rights reserved.',
}

export default function Footer({ locale = 'ka' }: FooterProps) {
  return (
    <footer className="border-t border-border bg-[#F2EEE8]">
      <Container className="py-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

          {/* Logo */}
          <a href="/" className="font-heading text-xl text-primary" aria-label="Mindor">
            Mindor
          </a>

          {/* Nav links */}
          <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Footer navigation">
            {links[locale].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-body text-sm text-muted transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <p className="font-body text-xs text-muted">
            © {new Date().getFullYear()} Mindor. {rights[locale]}
          </p>

        </div>
      </Container>
    </footer>
  )
}
