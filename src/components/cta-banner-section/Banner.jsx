import React from 'react'

// hero banner component
function Banner() {
  return (
    <div className="flex justify-around mt-8 bg-orange-700 bg-[url('/images/overlay-pattern/bg-simplify-section-desktop.svg')] bg-cover bg-no-repeat h-[20vh] items-center">
        <div className="text-white text-2xl opacity-80 font-semibold w-[300px]">
            <h1>Simplify how your team works today.</h1>
        </div>
        <div>
            <button type="button" className="cursor-pointer hover:text-orange-400 inline-block w-auto whitespace-nowrap py-4 px-6 bg-neutral-100 text-orange-700 rounded-full">
                Get Started </button>
        </div>
    </div>
  )
}

export default Banner