import React from 'react'
import NavBar from './NavBar/NavBar'
import HeroSection from './HeroSection'

function IntroSection() {
  return (
    <section className="w-screen h-screen bg-[url('/images/overlay-pattern/bg-simplify-section-desktop.svg')] bg-cover bg-no-repeat">
      <NavBar />
      <div className="w-full h-auto flex justify-center items-center mt-4">
        <HeroSection />
        <div className="w-full h-auto flex justify-center max-w-2xl">
          <img src="/images/overlay-pattern/illustration-intro.svg" alt="Intro Illustration" className="w-3/4 h-auto" />
        </div>
      </div>
    </section>
  )
}

export default IntroSection