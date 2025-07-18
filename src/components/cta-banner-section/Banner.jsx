import React from 'react'
import CTA from '../cta-buttons/CTA';

// hero banner component
function Banner() {
  return (
    <div className="flex flex-col justify-center items-center sm:justify-around h-[24vh] gap-4 mt-8 bg-orange-700 bg-[url('/images/overlay-pattern/bg-simplify-section-desktop.svg')] bg-cover bg-no-repeat h-[20vh] items-center">
        <div className="text-white text-center text-2xl opacity-80 w-[60%] font-semibold sm:w-[300px]">
            <h1>Simplify how your team works today.</h1>
        </div>
        <div>
            <CTA buttonType={"secondary"} />
        </div>
    </div>
  )
}

export default Banner