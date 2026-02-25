import Container from '../ui/Container'

interface ExplanationSectionProps {
  locale?: 'ka' | 'en'
}

export default function ExplanationSection({ locale = 'ka' }: ExplanationSectionProps) {
  const content = {
    ka: {
      eyebrow: 'მეცნიერება',
      headline: 'სხეული საუბრობს. ჩვენ ვუსმენთ.',
      body: 'თანამედროვე ცხოვრების ტემპი, გარემოს დაბინძურება და კვების ხარისხი ამცირებს ჩვენი სხეულის რეზერვებს. Mindor-ის ფორმულა შემუშავებულია სამედიცინო კვლევების საფუძველზე, სპეციალურად ამ ბალანსის აღსადგენად.',
      items: [
        { label: 'ბუნებრივი წარმოშობის', desc: 'მხოლოდ სერტიფიცირებული ინგრედიენტები' },
        { label: 'კლინიკურად შემოწმებული', desc: 'დადასტურებული ეფექტი კვლევებში' },
        { label: 'ინდივიდუალური', desc: 'თქვენი კონკრეტული საჭიროებებისთვის' },
      ],
    },
    en: {
      eyebrow: 'The science',
      headline: 'Your body speaks.\nWe listen.',
      body: "The pace of modern life, environmental pollution and diet quality deplete the body's reserves. Mindor's formula is developed on the basis of medical research, specifically to restore this balance.",
      items: [
        { label: 'Natural origin', desc: 'Only certified ingredients' },
        { label: 'Clinically tested', desc: 'Confirmed efficacy in research' },
        { label: 'Individual', desc: 'For your specific needs' },
      ],
    },
  }

  const t = content[locale]

  return (
    <section className="bg-background py-24 lg:py-32">
      {/* Full-width top rule */}
      <div className="border-t border-border" />

      <Container className="pt-24 lg:pt-32">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-32">

          {/* Left */}
          <div className="reveal">
            <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              {t.eyebrow}
            </p>
            <h2
              className="mt-6 font-heading text-4xl text-foreground lg:text-5xl"
              style={{ whiteSpace: 'pre-line' }}
            >
              {t.headline}
            </h2>
            <p className="mt-8 font-body text-base leading-relaxed text-muted">{t.body}</p>
          </div>

          {/* Right: feature rows */}
          <div className="reveal delay-200">
            <ul className="divide-y divide-border">
              {t.items.map((item) => (
                <li key={item.label} className="py-8">
                  <p className="font-heading text-xl text-foreground">{item.label}</p>
                  <p className="mt-2 font-body text-sm text-muted">{item.desc}</p>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </Container>
    </section>
  )
}
