import React from 'react'
import CTA from '../cta-buttons/CTA';

function HeroSection() {
  return (
    <section className="w-full h-auto flex flex-col sm:flex-row sm:justify-between sm:items-center my-4">
      {/* left side */}
      <div className="text-center sm:text-left sm:mb-[20vh] sm:self-end sm:w-[35%] order-2 sm:order-1">
        <h1 className="font-bold text-4xl sm:text-5xl text-primary-blue mb-6">
          Bring everyone together to build better products.
        </h1>
        <p className="mb-4 sm:w-[70%] sm:mb-6">
          Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.
        </p>
        <CTA buttonType={"primary"} />
      </div>
      {/* right side */}
      <div className="order-1 sm:order-2">
        <img src="/images/overlay-pattern/illustration-intro.svg" alt="Intro Illustration" />
      </div>
    </section>
  )
}

export default HeroSection