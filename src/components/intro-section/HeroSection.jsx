import React from 'react'
import CTA from '../cta-buttons/CTA';

function HeroSection() {
  return (
    <div className="mb-[20vh] max-w-[30%]">
      <h1 className="font-bold text-5xl text-primary-blue mb-6">
        Bring everyone together to build better products.
      </h1>
      <p className="max-w-[70%] mb-6">
        Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.
      </p>
      <CTA buttonType={"primary"} />
    </div>
  )
}

export default HeroSection