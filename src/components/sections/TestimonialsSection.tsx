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
      duration: '3 თვე',
      product: 'Energy+',
    },
    {
      quote:
        'ვარ 42 წლის, ტესტი ზუსტად იმ პრობლემებს დაარტყა, რაც მჭირდა. პროდუქტი ნამდვილად მუშაობს.',
      name: 'გიორგი თ.',
      duration: '2 თვე',
      product: 'Balance+',
    },
    {
      quote:
        'ექიმის რეკომენდაცია ძალიან მნიშვნელოვანი იყო ჩემთვის. ვენდობი ამ ბრენდს.',
      name: 'მარიამ ბ.',
      duration: '1 თვე',
      product: 'Calm+',
    },
  ],
  en: [
    {
      quote: 'My energy increased in the first week. Sleep is much better now and waking up became easy.',
      name: 'Nino G.',
      duration: '3 months',
      product: 'Energy+',
    },
    {
      quote: "I'm 42 and the quiz hit exactly the problems I needed. The product genuinely works.",
      name: 'Giorgi T.',
      duration: '2 months',
      product: 'Balance+',
    },
    {
      quote: "The doctor's recommendation was very important to me. I trust this brand.",
      name: 'Mariam B.',
      duration: '1 month',
      product: 'Calm+',
    },
  ],
}

export default function TestimonialsSection({ locale = 'ka' }: TestimonialsSectionProps) {
  const heading = {
    ka: 'რას ამბობენ ჩვენი მომხმარებლები',
    en: 'What our customers say',
  }
  const subtext = {
    ka: 'რეალური ადამიანები, რეალური შედეგები.',
    en: 'Real people, real results.',
  }

  const currentTestimonials = testimonials[locale]

  return (
    <section className="bg-background py-20 lg:py-28">
      <Container>
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-4xl text-primary sm:text-5xl">{heading[locale]}</h2>
          <p className="mt-4 font-body text-lg text-muted">{subtext[locale]}</p>
        </div>

        {/* Testimonial cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {currentTestimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="flex flex-col rounded-2xl border border-border bg-secondary p-8 shadow-sm"
            >
              {/* Stars */}
              <div className="flex gap-1 text-accent" aria-label="5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} aria-hidden="true">★</span>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="mt-4 flex-1 font-body text-base leading-relaxed text-foreground">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="mt-6 border-t border-border pt-4">
                <div className="flex items-center gap-3">
                  {/* Avatar placeholder */}
                  <div className="h-10 w-10 rounded-full bg-primary/20" aria-hidden="true" />
                  <div>
                    <p className="font-body text-sm font-semibold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="font-body text-xs text-muted">
                      {testimonial.product} · {testimonial.duration}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel indicator placeholder */}
        <div className="mt-8 flex justify-center gap-2" aria-label="Carousel navigation">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className={`h-2 rounded-full transition-all ${i === 0 ? 'w-6 bg-primary' : 'w-2 bg-border'}`}
              aria-hidden="true"
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
