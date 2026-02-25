import Container from '../ui/Container'

interface SymptomsSectionProps {
  locale?: 'ka' | 'en'
}

const placeholderSymptoms = [
  { icon: '😴', ka: 'დაღლილობა', en: 'Fatigue' },
  { icon: '🧠', ka: 'კონცენტრაციის სირთულე', en: 'Brain fog' },
  { icon: '😰', ka: 'სტრესი', en: 'Stress' },
  { icon: '😴', ka: 'ძილის პრობლემები', en: 'Sleep issues' },
  { icon: '💪', ka: 'სახსრების ტკივილი', en: 'Joint pain' },
  { icon: '🫀', ka: 'იმუნიტეტი', en: 'Low immunity' },
]

export default function SymptomsSection({ locale = 'ka' }: SymptomsSectionProps) {
  const heading = {
    ka: 'ეს სიმპტომები გიჩნდება?',
    en: 'Do you recognise these symptoms?',
  }
  const subtext = {
    ka: 'შენ არ ხარ მარტო. ეს სიგნალები იმაზე მეტყველებს, რომ შენი სხეული დახმარებას ითხოვს.',
    en: "You're not alone. These signals mean your body is asking for support.",
  }

  return (
    <section className="bg-background py-20 lg:py-28">
      <Container>
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-4xl text-primary sm:text-5xl">{heading[locale]}</h2>
          <p className="mt-4 font-body text-lg text-muted">{subtext[locale]}</p>
        </div>

        {/* Symptom grid */}
        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 lg:gap-6">
          {placeholderSymptoms.map((symptom) => (
            <div
              key={symptom.en}
              className="group flex flex-col items-center gap-3 rounded-2xl border border-border bg-secondary p-6 text-center transition-all duration-200 hover:-translate-y-1 hover:border-accent hover:shadow-md"
            >
              <span className="text-4xl" role="img" aria-label={symptom[locale]}>
                {symptom.icon}
              </span>
              <p className="font-body text-sm font-medium text-foreground">{symptom[locale]}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
