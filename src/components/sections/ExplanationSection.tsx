import Container from '../ui/Container'

interface ExplanationSectionProps {
  locale?: 'ka' | 'en'
}

export default function ExplanationSection({ locale = 'ka' }: ExplanationSectionProps) {
  const content = {
    ka: {
      headline: 'რატომ ხდება ეს?',
      body: 'თანამედროვე ცხოვრების რიტმი ხშირად ართმევს ჩვენს სხეულს საჭირო ნივთიერებებს. სტრესი, ცუდი კვება და ძილის ნაკლებობა ერთდ მოქმედებს ჯანმრთელობაზე. Mindor-ის ფორმულა შემუშავებულია სპეციალურად ამ ბალანსის აღსადგენად.',
      listItems: [
        'ბუნებრივი ინგრედიენტები',
        'კლინიკურად შემოწმებული',
        'ინდივიდუალური მიდგომა',
        'ხილული შედეგი 30 დღეში',
      ],
    },
    en: {
      headline: 'Why does this happen?',
      body: "The pace of modern life often depletes our body's essential nutrients. Stress, poor diet and lack of sleep act together on our health. Mindor's formula is specially developed to restore this balance.",
      listItems: [
        'Natural ingredients',
        'Clinically tested',
        'Individual approach',
        'Visible results in 30 days',
      ],
    },
  }

  const t = content[locale]

  return (
    <section className="bg-secondary py-20 lg:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Text column */}
          <div>
            <h2 className="font-heading text-4xl text-primary sm:text-5xl">{t.headline}</h2>
            <p className="mt-6 font-body text-lg leading-relaxed text-muted">{t.body}</p>

            <ul className="mt-8 space-y-3">
              {t.listItems.map((item) => (
                <li key={item} className="flex items-center gap-3 font-body text-base text-foreground">
                  <span
                    className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs text-white"
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Visual placeholder */}
          <div className="flex items-center justify-center">
            <div className="relative h-80 w-80 rounded-3xl bg-gradient-to-br from-primary/10 via-accent/10 to-primary/5 lg:h-96 lg:w-96">
              {/* Inner decorative ring */}
              <div className="absolute inset-6 rounded-2xl border-2 border-dashed border-primary/20" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-center">
                <div className="h-16 w-16 rounded-full bg-primary/10" />
                <p className="font-body text-sm text-muted">
                  {locale === 'ka' ? 'ილუსტრაცია / ვიზუალი' : 'Illustration / Visual'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
