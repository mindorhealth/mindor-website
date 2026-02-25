import Container from '../ui/Container'
import Button from '../ui/Button'

interface FinalCtaSectionProps {
  locale?: 'ka' | 'en'
}

export default function FinalCtaSection({ locale = 'ka' }: FinalCtaSectionProps) {
  const content = {
    ka: {
      headline: 'მზად ხარ ცვლილებისთვის?',
      subtext: 'გაიარე ტესტი, გაარკვიე რა გჭირდება და დაიწყე შენი გზა ჯანმრთელობისკენ.',
      cta: 'ტესტის გავლა',
      secondary: 'გაიგე მეტი',
    },
    en: {
      headline: 'Ready for change?',
      subtext: 'Take the quiz, find out what you need and start your journey to wellness.',
      cta: 'Take the quiz',
      secondary: 'Learn more',
    },
  }

  const t = content[locale]

  return (
    <section className="relative overflow-hidden bg-primary py-24 lg:py-32">
      {/* Decorative orbs */}
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, #ffffff 0%, transparent 70%)' }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, #ffffff 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <Container className="relative z-10 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-heading text-4xl text-white sm:text-5xl lg:text-6xl">
            {t.headline}
          </h2>
          <p className="mx-auto mt-6 max-w-xl font-body text-lg leading-relaxed text-white/80">
            {t.subtext}
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button
              variant="secondary"
              size="lg"
              className="bg-white text-primary hover:bg-secondary"
            >
              {t.cta}
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="text-white hover:bg-white/10"
            >
              {t.secondary}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
