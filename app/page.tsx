// app/page.tsx
import Hero from '@/app/components/Hero'
import Features from '@/app/components/Features'
import HowItWorks from '@/app/components/HowItWorks'
import CtaSection from '@/app/components/CtaSection'
// import Testimonials from '@/components/Testimonials' // Optional

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      {/* <Testimonials /> */}
      <CtaSection />
    </>
  )
}