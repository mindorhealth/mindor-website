import Container from '../ui/Container'
import Button from '../ui/Button'

interface StepsSectionProps {
  locale?: 'ka' | 'en'
}

const steps = {
  ka: [
    {
      n: '01',
      title: 'გაიარე ტესტი',
      description: 'ექიმის მიერ შემუშავებული 5 კითხვა შენი ჯანმრთელობის შეფასებისთვის.',
    },
    {
      n: '02',
      title: 'მიიღე შედეგი',
      description: 'პერსონალური ანალიზი, კონკრეტული რეკომენდაციებით.',
    },
    {
      n: '03',
      title: 'შეუკვეთე',
      description: 'შეარჩიე შენთვის შესაფერი პლანი. მიტანა — 1–2 სამუშაო დღეში.',
    },
    {
      n: '04',
      title: 'იგრძენი სხვაობა',
      description: 'პირველი შედეგები 2–4 კვირაში. სრული ეფექტი 3 თვეში.',
    },
  ],
  en: [
    {
      n: '01',
      title: 'Take the assessment',
      description: '5 doctor-developed questions to evaluate your health.',
    },
    {
      n: '02',
      title: 'Receive your result',
      description: 'A personal analysis with specific recommendations.',
    },
    {
      n: '03',
      title: 'Place your order',
      description: 'Choose the plan that fits you. Delivery in 1–2 working days.',
    },
    {
      n: '04',
      title: 'Feel the difference',
      description: 'First results in 2–4 weeks. Full effect in 3 months.',
    },
  ],
}

export default function StepsSection({ locale = 'ka' }: StepsSectionProps) {
  const heading = {
    ka: 'როგორ მუშაობს',
    en: 'How it works',
  }
  const cta = {
    ka: 'დაიწყე ახლა',
    en: 'Start now',
  }

  const currentSteps = steps[locale]

  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="border-t border-border" />

      <Container className="pt-24 lg:pt-32">

        {/* Heading */}
        <div className="reveal max-w-md">
          <h2 className="font-heading text-4xl text-foreground lg:text-5xl">{heading[locale]}</h2>
        </div>

        {/* Steps — numbered rows */}
        <div className="reveal delay-100 mt-16 divide-y divide-border">
          {currentSteps.map((step) => (
            <div
              key={step.n}
              className="grid grid-cols-[3rem_1fr] gap-8 py-8 lg:grid-cols-[4rem_1fr_1fr] lg:items-center lg:gap-12"
            >
              {/* Number */}
              <span className="font-body text-sm font-medium tabular-nums text-muted">
                {step.n}
              </span>

              {/* Title */}
              <p className="font-heading text-xl text-foreground lg:text-2xl">{step.title}</p>

              {/* Description — hidden on mobile, shown on desktop in third column */}
              <p className="col-start-2 mt-1 font-body text-sm leading-relaxed text-muted lg:col-start-3 lg:mt-0">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA below steps */}
        <div className="reveal delay-200 mt-14">
          <Button variant="primary" size="md">
            {cta[locale]}
          </Button>
        </div>

      </Container>
    </section>
  )
}
