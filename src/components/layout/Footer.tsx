import Container from '../ui/Container'

interface FooterProps {
  locale?: 'ka' | 'en'
}

const footerLinks = {
  ka: {
    company: 'კომპანია',
    product: 'პროდუქტი',
    legal: 'სამართლებრივი',
    links: {
      company: ['ჩვენ შესახებ', 'კონტაქტი', 'ბლოგი'],
      product: ['პროდუქტი', 'ტესტი', 'შედეგები'],
      legal: ['კონფიდენციალობა', 'პირობები', 'დაბრუნება'],
    },
    rights: 'ყველა უფლება დაცულია.',
  },
  en: {
    company: 'Company',
    product: 'Product',
    legal: 'Legal',
    links: {
      company: ['About', 'Contact', 'Blog'],
      product: ['Product', 'Quiz', 'Results'],
      legal: ['Privacy', 'Terms', 'Returns'],
    },
    rights: 'All rights reserved.',
  },
}

export default function Footer({ locale = 'ka' }: FooterProps) {
  const t = footerLinks[locale]

  return (
    <footer className="border-t border-border bg-secondary">
      <Container className="py-12 lg:py-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <a href="/" className="font-heading text-2xl text-primary">
              Mindor
            </a>
            <p className="mt-3 max-w-xs font-body text-sm text-muted">
              {locale === 'ka'
                ? 'ბუნებრივი ჯანმრთელობა, შენი პირობებით.'
                : 'Natural wellness, on your terms.'}
            </p>
          </div>

          {/* Company links */}
          <div>
            <h3 className="font-body text-sm font-semibold uppercase tracking-wider text-primary">
              {t.company}
            </h3>
            <ul className="mt-4 space-y-2">
              {t.links.company.map((label) => (
                <li key={label}>
                  <a href="#" className="font-body text-sm text-muted hover:text-primary">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Product links */}
          <div>
            <h3 className="font-body text-sm font-semibold uppercase tracking-wider text-primary">
              {t.product}
            </h3>
            <ul className="mt-4 space-y-2">
              {t.links.product.map((label) => (
                <li key={label}>
                  <a href="#" className="font-body text-sm text-muted hover:text-primary">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal links */}
          <div>
            <h3 className="font-body text-sm font-semibold uppercase tracking-wider text-primary">
              {t.legal}
            </h3>
            <ul className="mt-4 space-y-2">
              {t.links.legal.map((label) => (
                <li key={label}>
                  <a href="#" className="font-body text-sm text-muted hover:text-primary">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6 text-center">
          <p className="font-body text-xs text-muted">
            © {new Date().getFullYear()} Mindor. {t.rights}
          </p>
        </div>
      </Container>
    </footer>
  )
}
