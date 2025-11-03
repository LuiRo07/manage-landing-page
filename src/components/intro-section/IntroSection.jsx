import NavBar from './NavBar/NavBar'
import HeroSection from './HeroSection'
import CTASection from '../cta-section/CTASection'

// contains the navbar, hero section, and bullet points
function IntroSection() {
  return (
    <section className="bg-[url('/images/overlay-pattern/bg-tablet-pattern.svg')] sm:bg-[url('/images/overlay-pattern/bg-simplify-section-desktop.svg')] bg-no-repeat w-screen">
      <NavBar />
      <HeroSection />
      <CTASection />
    </section>
  )
}

export default IntroSection