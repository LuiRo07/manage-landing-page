import React from 'react'
import CTA from '../cta-buttons/CTA';

function HeroSection() {
  return (
    <section className="w-full h-auto flex justify-between items-center mt-4">
      {/* left side */}
      <div className="mb-[20vh] self-end w-[35%]">
        <h1 className="font-bold text-5xl text-primary-blue mb-6">
          Bring everyone together to build better products.
        </h1>
        <p className="w-[70%] mb-6">
          Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.
        </p>
        <CTA buttonType={"primary"} />
      </div>
      {/* right side */}
      <div>
        <img src="/images/overlay-pattern/illustration-intro.svg" alt="Intro Illustration" />
      </div>
    </section>
  )
}

export default HeroSection