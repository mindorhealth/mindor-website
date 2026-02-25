import Container from '../ui/Container'
import Button from '../ui/Button'
import NeuralWave from '../ui/NeuralWave'

interface HeroSectionProps {
  locale?: 'ka' | 'en'
}

export default function HeroSection({ locale = 'ka' }: HeroSectionProps) {
  const content = {
    ka: {
      eyebrow: 'კლინიკურად შემუშავებული',
      headline: 'ჯანმრთელობა, რომელიც იწყება შენი სხეულის გაგებით',
      subtext:
        'გაიარე ჩვენი ექიმის მიერ შემუშავებული ტესტი. მიიღე პერსონალური რეკომენდაცია. იგრძენი სხვაობა.',
      cta: 'ტესტის გავლა',
      sub: 'უფასოა · 5 წუთი',
    },
    en: {
      eyebrow: 'Clinically developed',
      headline: 'Wellness that begins with understanding your body',
      subtext:
        'Take our doctor-developed assessment. Receive a personal recommendation. Feel the difference.',
      cta: 'Take the assessment',
      sub: 'Free · 5 minutes',
    },
  }

  const t = content[locale]

  return (
    <section className="bg-background">
      <Container className="py-24 lg:py-36">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">

          {/* Left: text */}
          <div className="animate-fade-in-up">
            <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              {t.eyebrow}
            </p>

            <h1 className="mt-6 font-heading text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.08] text-foreground">
              {t.headline}
            </h1>

            <p className="mt-8 max-w-md font-body text-lg leading-relaxed text-muted">
              {t.subtext}
            </p>

            <div className="mt-12 flex flex-col gap-5 sm:flex-row sm:items-center">
              <Button variant="primary" size="lg">
                {t.cta}
              </Button>
              <span className="font-body text-sm text-muted">{t.sub}</span>
            </div>
          </div>

          {/* Right: neural wave illustration */}
          <div
            className="animate-fade-in-up delay-200 flex items-center justify-center"
            aria-hidden="true"
          >
            <div className="relative h-[360px] w-[360px] lg:h-[440px] lg:w-[440px]">
              <NeuralWave />
            </div>
          </div>

        </div>
      </Container>

      {/* Bottom rule */}
      <div className="border-t border-border" />
    </section>
  )
}
