import Container from '../ui/Container'

interface SymptomsSectionProps {
  locale?: 'ka' | 'en'
}

const symptoms = [
  { ka: 'დაღლილობა', en: 'Fatigue' },
  { ka: 'კონცენტრაციის სირთულე', en: 'Brain fog' },
  { ka: 'ძილის პრობლემები', en: 'Sleep disturbance' },
  { ka: 'ქრონიკული სტრესი', en: 'Chronic stress' },
  { ka: 'სახსრებისა და კუნთების ტკივილი', en: 'Joint & muscle pain' },
  { ka: 'სუსტი იმუნიტეტი', en: 'Low immunity' },
  { ka: 'განწყობის ცვლა', en: 'Mood fluctuation' },
  { ka: 'საჭმლის მონელების პრობლემები', en: 'Digestive issues' },
]

export default function SymptomsSection({ locale = 'ka' }: SymptomsSectionProps) {
  const heading = {
    ka: 'ეს სიმპტომები\nნაცნობია?',
    en: 'Do these symptoms\nsound familiar?',
  }
  const subtext = {
    ka: 'შენ არ ხარ მარტო. ეს სიგნალები ყოველდღიურია — მაგრამ ისინი ნორმა არ არის.',
    en: "You're not alone. These signals are common — but they don't have to be your normal.",
  }

  return (
    <section className="bg-background py-24 lg:py-32">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[1fr_2fr] lg:gap-24">

          {/* Left: heading + subtext */}
          <div className="reveal lg:sticky lg:top-32 lg:self-start">
            <h2 className="font-heading text-4xl text-foreground lg:text-5xl" style={{ whiteSpace: 'pre-line' }}>
              {heading[locale]}
            </h2>
            <p className="mt-6 font-body text-base leading-relaxed text-muted">
              {subtext[locale]}
            </p>
          </div>

          {/* Right: minimal list */}
          <div className="reveal">
            <ul className="divide-y divide-border">
              {symptoms.map((symptom, i) => (
                <li
                  key={symptom.en}
                  className="flex items-center justify-between py-5"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <span className="font-body text-lg text-foreground">{symptom[locale]}</span>
                  <span className="font-body text-xs text-muted tabular-nums">0{i + 1}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </Container>
    </section>
  )
}
