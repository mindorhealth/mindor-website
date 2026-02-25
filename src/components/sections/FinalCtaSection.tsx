import Container from '../ui/Container'
import Button from '../ui/Button'

interface FinalCtaSectionProps {
  locale?: 'ka' | 'en'
}

export default function FinalCtaSection({ locale = 'ka' }: FinalCtaSectionProps) {
  const content = {
    ka: {
      headline: 'მზად ხარ?',
      subtext: 'გაიარე ტესტი. გაარკვიე, რა გჭირდება. დაიწყე.',
      cta: 'ტესტის გავლა',
      note: 'უფასოა. 5 წუთი.',
    },
    en: {
      headline: 'Ready?',
      subtext: 'Take the assessment. Find out what you need. Begin.',
      cta: 'Take the assessment',
      note: 'Free. 5 minutes.',
    },
  }

  const t = content[locale]

  return (
    <section className="bg-background py-32 lg:py-48">
      <div className="border-t border-border" />

      <Container className="pt-32 lg:pt-48">
        <div className="reveal mx-auto max-w-2xl text-center">

          <h2 className="font-heading text-[clamp(3rem,8vw,6rem)] leading-[1.0] text-foreground">
            {t.headline}
          </h2>

          <p className="mt-8 font-body text-lg text-muted">
            {t.subtext}
          </p>

          <div className="mt-12 flex flex-col items-center gap-4">
            <Button variant="primary" size="lg">
              {t.cta}
            </Button>
            <span className="font-body text-xs text-muted">{t.note}</span>
          </div>

        </div>
      </Container>
    </section>
  )
}
