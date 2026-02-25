import Container from '../ui/Container'

interface DoctorSectionProps {
  locale?: 'ka' | 'en'
}

const stats = [
  { number: '15+', ka: 'წელი', en: 'years' },
  { number: '3 000+', ka: 'პაციენტი', en: 'patients' },
  { number: '12', ka: 'კვლევა', en: 'studies' },
]

export default function DoctorSection({ locale = 'ka' }: DoctorSectionProps) {
  const content = {
    ka: {
      eyebrow: 'ექსპერტი',
      name: 'დოქტ. [სახელი გვარი]',
      title: 'ინტეგრაციული მედიცინის სპეციალისტი',
      bio: 'თბილისის სახელმწიფო სამედიცინო უნივერსიტეტის კურსდამთავრებული. ევროპული სამეცნიერო ჟურნალების ავტორი. Mindor-ის ფორმულის შემქმნელი.',
      quote: '„სიმპტომებს ვუსმენ, სხეულს ვამკურნალებ."',
    },
    en: {
      eyebrow: 'The expert',
      name: 'Dr. [First Last]',
      title: 'Integrative Medicine Specialist',
      bio: 'Graduate of Tbilisi State Medical University. Author in European scientific journals. Creator of the Mindor formula.',
      quote: '"I listen to symptoms. I treat the body."',
    },
  }

  const t = content[locale]

  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="border-t border-border" />

      <Container className="pt-24 lg:pt-32">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.2fr] lg:gap-24">

          {/* Left: photo placeholder — clean, no decorative borders */}
          <div className="reveal flex justify-center lg:justify-start">
            <div className="relative overflow-hidden rounded-sm bg-[#EAE6DF]"
                 style={{ width: '100%', maxWidth: '380px', aspectRatio: '3/4' }}>
              {/* Placeholder text, centred */}
              <div className="absolute inset-0 flex items-end p-8">
                <p className="font-body text-xs text-muted">
                  {locale === 'ka' ? 'ექიმის ფოტო' : 'Doctor photo'}
                </p>
              </div>
            </div>
          </div>

          {/* Right: bio */}
          <div className="reveal delay-200 flex flex-col justify-center">
            <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              {t.eyebrow}
            </p>

            <h2 className="mt-5 font-heading text-3xl text-foreground lg:text-4xl">{t.name}</h2>
            <p className="mt-2 font-body text-sm font-medium tracking-wide text-muted">{t.title}</p>

            <blockquote className="mt-8 border-l-2 border-primary pl-5 font-heading text-xl italic text-foreground lg:text-2xl">
              {t.quote}
            </blockquote>

            <p className="mt-8 font-body text-base leading-relaxed text-muted">{t.bio}</p>

            {/* Stats — plain, typographic */}
            <div className="mt-12 grid grid-cols-3 gap-8 border-t border-border pt-10">
              {stats.map((stat) => (
                <div key={stat.number}>
                  <p className="font-heading text-3xl text-foreground">{stat.number}</p>
                  <p className="mt-1 font-body text-xs uppercase tracking-wider text-muted">
                    {stat[locale]}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </Container>
    </section>
  )
}
