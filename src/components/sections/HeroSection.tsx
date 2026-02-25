import Container from '../ui/Container'
import Button from '../ui/Button'

interface HeroSectionProps {
  locale?: 'ka' | 'en'
}

export default function HeroSection({ locale = 'ka' }: HeroSectionProps) {
  const content = {
    ka: {
      headline: 'გამოჯანმრთელება იწყება შენგან',
      subtext:
        'აღმოაჩინე შენი პირადი გზა ბუნებრივი ჯანმრთელობისკენ. მიიღე ტესტი და გაარკვიე, რა გჭირდება.',
      cta: 'დაიწყე ახლავე',
    },
    en: {
      headline: 'Healing begins with you',
      subtext:
        'Discover your personal path to natural wellness. Take the quiz and find out what you need.',
      cta: 'Get started now',
    },
  }

  const t = content[locale]

  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden bg-gradient-to-br from-secondary via-background to-secondary">
      {/* Decorative gradient orbs */}
      <div
        className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full opacity-30"
        style={{
          background: 'radial-gradient(circle, var(--color-accent) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-32 -right-32 h-[30rem] w-[30rem] rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, var(--color-primary) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <Container className="relative z-10 py-24 text-center lg:py-32">
        <div className="mx-auto max-w-3xl">
          {/* Eyebrow */}
          <p className="mb-4 font-body text-sm font-medium uppercase tracking-widest text-accent">
            Mindor
          </p>

          {/* Headline */}
          <h1 className="font-heading text-5xl leading-tight text-primary sm:text-6xl lg:text-7xl">
            {t.headline}
          </h1>

          {/* Subtext */}
          <p className="mx-auto mt-6 max-w-xl font-body text-lg leading-relaxed text-muted sm:text-xl">
            {t.subtext}
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button variant="primary" size="lg">
              {t.cta}
            </Button>
            <Button variant="ghost" size="lg">
              {locale === 'ka' ? 'გაიგე მეტი' : 'Learn more'}
            </Button>
          </div>

          {/* Trust badge */}
          <p className="mt-8 font-body text-xs text-muted">
            {locale === 'ka'
              ? '✓ უფასო ტესტი · ✓ პერსონალური შედეგები · ✓ ექსპერტის მიერ შემოწმებული'
              : '✓ Free quiz · ✓ Personalised results · ✓ Expert reviewed'}
          </p>
        </div>
      </Container>
    </section>
  )
}
