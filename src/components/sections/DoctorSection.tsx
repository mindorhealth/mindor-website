import Container from '../ui/Container'

interface DoctorSectionProps {
  locale?: 'ka' | 'en'
}

const stats = [
  { number: '15+', ka: 'წლის გამოცდილება', en: 'years experience' },
  { number: '3000+', ka: 'პაციენტი', en: 'patients' },
  { number: '12', ka: 'გამოქვეყნებული კვლევა', en: 'published studies' },
]

export default function DoctorSection({ locale = 'ka' }: DoctorSectionProps) {
  const content = {
    ka: {
      eyebrow: 'ჩვენი ექსპერტი',
      name: 'დოქტ. [სახელი გვარი]',
      title: 'ინტეგრაციული მედიცინის სპეციალისტი',
      bio: 'თბილისის სახელმწიფო სამედიცინო უნივერსიტეტის კურსდამთავრებული, ევროპული კვლევების ავტორი. სპეციალიზირებულია ბუნებრივი და პრევენციული მედიცინის სფეროში.',
    },
    en: {
      eyebrow: 'Our expert',
      name: 'Dr. [First Last]',
      title: 'Integrative Medicine Specialist',
      bio: 'Graduate of Tbilisi State Medical University and author of European research. Specialises in natural and preventive medicine.',
    },
  }

  const t = content[locale]

  return (
    <section className="bg-background py-20 lg:py-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Photo placeholder */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              {/* Decorative border */}
              <div className="absolute -inset-2 rounded-3xl border-2 border-primary/20" />
              <div className="relative h-80 w-64 overflow-hidden rounded-2xl bg-gradient-to-b from-secondary to-border sm:h-96 sm:w-72">
                <div className="absolute inset-0 flex flex-col items-center justify-end gap-2 p-6">
                  {/* Avatar placeholder */}
                  <div className="mb-4 h-24 w-24 rounded-full border-4 border-white bg-primary/20" />
                  <p className="font-body text-sm text-muted">
                    {locale === 'ka' ? 'ექიმის ფოტო' : 'Doctor photo'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Text column */}
          <div>
            <p className="font-body text-sm font-medium uppercase tracking-widest text-accent">
              {t.eyebrow}
            </p>
            <h2 className="mt-3 font-heading text-4xl text-primary sm:text-5xl">{t.name}</h2>
            <p className="mt-2 font-body text-base font-medium text-accent">{t.title}</p>
            <p className="mt-6 font-body text-lg leading-relaxed text-muted">{t.bio}</p>

            {/* Credibility stats */}
            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-border pt-8">
              {stats.map((stat) => (
                <div key={stat.number} className="text-center">
                  <p className="font-heading text-3xl text-primary">{stat.number}</p>
                  <p className="mt-1 font-body text-xs text-muted">{stat[locale]}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
