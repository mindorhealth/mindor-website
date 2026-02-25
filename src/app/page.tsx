import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/sections/HeroSection'
import SymptomsSection from '@/components/sections/SymptomsSection'
import ExplanationSection from '@/components/sections/ExplanationSection'
import DoctorSection from '@/components/sections/DoctorSection'
import StepsSection from '@/components/sections/StepsSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import FinalCtaSection from '@/components/sections/FinalCtaSection'

// Default locale — Georgian. Will be driven by Sanity / i18n in later prompts.
const locale = 'ka' as const

export default function HomePage() {
  return (
    <>
      <Header locale={locale} />
      <main>
        <HeroSection locale={locale} />
        <SymptomsSection locale={locale} />
        <ExplanationSection locale={locale} />
        <DoctorSection locale={locale} />
        <StepsSection locale={locale} />
        <TestimonialsSection locale={locale} />
        <FinalCtaSection locale={locale} />
      </main>
      <Footer locale={locale} />
    </>
  )
}
