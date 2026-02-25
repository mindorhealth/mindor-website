import Container from '../ui/Container'

interface TestimonialsSectionProps {
  locale?: 'ka' | 'en'
}

const testimonials = {
  ka: [
    {
      quote:
        'პირველ კვირაში ენერგია გაიზარდა. ახლა ძილი ბევრად უკეთესია და გამოღვიძება ადვილი გახდა.',
      name: 'ნინო გ.',
      meta: 'Energy+ · 3 თვე',
    },
    {
      quote:
        'ვარ 42 წლის, ტესტი ზუსტად იმ პრობლემებს დაარტყა, რაც მჭირდა. პროდუქტი ნამდვილად მუშაობს.',
      name: 'გიორგი თ.',
      meta: 'Balance+ · 2 თვე',
    },
    {
      quote:
        'ექიმის რეკომენდაცია ჩემთვის ძალიან მნიშვნელოვანი იყო. ვენდობი ამ ბრენდს.',
      name: 'მარიამ ბ.',
      meta: 'Calm+ · 1 თვე',
    },
  ],
  en: [
    {
      quote: 'My energy increased in the first week. Sleep is much better now and waking up became easy.',
      name: 'Nino G.',
      meta: 'Energy+ · 3 months',
    },
    {
      quote: "I'm 42 and the quiz hit exactly the problems I needed. The product genuinely works.",
      name: 'Giorgi T.',
      meta: 'Balance+ · 2 months',
    },
    {
      quote: "The doctor's recommendation was very important to me. I trust this brand.",
      name: 'Mariam B.',
      meta: 'Calm+ · 1 month',
    },
  ],
}

export default function TestimonialsSection({ locale = 'ka' }: TestimonialsSectionProps) {
  const heading = {
    ka: 'ისინი\nშეიცვალნენ',
    en: 'Their\nexperience',
  }

  const current = testimonials[locale]

  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="border-t border-border" />

      <Container className="pt-24 lg:pt-32">

        {/* Section heading */}
        <div className="reveal max-w-xs">
          <h2
            className="font-heading text-4xl text-foreground lg:text-5xl"
            style={{ whiteSpace: 'pre-line' }}
          >
            {heading[locale]}
          </h2>
        </div>

        {/* Testimonials — horizontal stack on desktop */}
        <div className="reveal delay-100 mt-16 grid gap-0 divide-y divide-border lg:grid-cols-3 lg:divide-x lg:divide-y-0">
          {current.map((t) => (
            <div key={t.name} className="py-10 lg:px-10 lg:py-0 first:lg:pl-0 last:lg:pr-0">
              {/* Large open-quote mark */}
              <span
                className="block font-heading text-5xl leading-none text-primary/20 select-none"
                aria-hidden="true"
              >
                &ldquo;
              </span>

              <blockquote className="mt-4 font-body text-base italic leading-relaxed text-foreground">
                {t.quote}
              </blockquote>

              <div className="mt-8">
                <p className="font-body text-sm font-semibold text-foreground">{t.name}</p>
                <p className="mt-0.5 font-body text-xs text-muted">{t.meta}</p>
              </div>
            </div>
          ))}
        </div>

      </Container>
    </section>
  )
}
