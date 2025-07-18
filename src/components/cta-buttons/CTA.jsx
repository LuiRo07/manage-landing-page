import React from 'react'

function CTA({buttonType}) {

    const primaryCTA = "cursor-pointer inline-block w-auto whitespace-nowrap bg-orange-700 rounded-full text-white sm:py-4 py-2 px-4 text-sm sm:px-10 hover:opacity-80 hover:shadow-xl";
    const secondaryCTA = "cursor-pointer hover:text-orange-400 inline-block w-auto whitespace-nowrap py-2 px-4 text-sm sm:py-4 sm:px-10 bg-neutral-100 text-orange-700 rounded-full"

  return (
    <button className={buttonType == 'primary' ? primaryCTA : secondaryCTA}>Get Started</button>
  )
}

export default CTA