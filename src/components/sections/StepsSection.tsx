import Container from '../ui/Container'

interface StepsSectionProps {
  locale?: 'ka' | 'en'
}

const steps = {
  ka: [
    {
      icon: '📋',
      title: 'გაიარე ტესტი',
      description: 'უპასუხე 5 მარტივ კითხვას შენი ჯანმრთელობის შეფასებისთვის.',
    },
    {
      icon: '🔬',
      title: 'მიიღე პირადი შედეგი',
      description: 'ჩვენი ალგორითმი გაანალიზებს შენს პასუხებს და შეარჩევს საუკეთესო გამოსავალს.',
    },
    {
      icon: '📦',
      title: 'შეუკვეთე პროდუქტი',
      description: 'შეარჩიე შენთვის შესაფერი პლანი და მიიღე სახლამდე მიტანით.',
    },
    {
      icon: '✨',
      title: 'იგრძენი სხვაობა',
      description: 'პირველი შედეგები ჩანს 2–4 კვირაში. გრძელვადიანი კეთილდღეობა 3 თვეში.',
    },
  ],
  en: [
    {
      icon: '📋',
      title: 'Take the quiz',
      description: 'Answer 5 simple questions to assess your health needs.',
    },
    {
      icon: '🔬',
      title: 'Get your personal result',
      description: 'Our algorithm analyses your answers and selects the best solution.',
    },
    {
      icon: '📦',
      title: 'Order your product',
      description: 'Choose the plan that suits you and receive it with home delivery.',
    },
    {
      icon: '✨',
      title: 'Feel the difference',
      description: 'First results visible in 2–4 weeks. Long-term wellbeing in 3 months.',
    },
  ],
}

export default function StepsSection({ locale = 'ka' }: StepsSectionProps) {
  const heading = {
    ka: 'როგორ მუშაობს',
    en: 'How it works',
  }
  const subtext = {
    ka: 'ოთხი მარტივი ნაბიჯი უკეთეს ჯანმრთელობამდე.',
    en: 'Four simple steps to better health.',
  }

  const currentSteps = steps[locale]

  return (
    <section className="bg-secondary py-20 lg:py-28">
      <Container>
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-4xl text-primary sm:text-5xl">{heading[locale]}</h2>
          <p className="mt-4 font-body text-lg text-muted">{subtext[locale]}</p>
        </div>

        {/* Steps */}
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {currentSteps.map((step, index) => (
            <div key={step.title} className="relative flex flex-col items-start">
              {/* Connector line (desktop only, not on last item) */}
              {index < currentSteps.length - 1 && (
                <div
                  className="absolute left-[calc(50%+2rem)] top-8 hidden h-px w-full bg-border lg:block"
                  aria-hidden="true"
                />
              )}

              {/* Step number badge */}
              <div className="relative mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-white shadow-md">
                <span className="text-2xl">{step.icon}</span>
                <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-accent font-body text-xs font-bold text-white">
                  {index + 1}
                </span>
              </div>

              <h3 className="font-heading text-xl text-primary">{step.title}</h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-muted">{step.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
