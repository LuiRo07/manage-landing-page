import React from 'react'

function CTA({buttonType}) {

    const primaryCTA = "cursor-pointer inline-block w-auto whitespace-nowrap bg-orange-700 rounded-full text-white py-4 px-10 hover:opacity-80 hover:shadow-xl";
    const secondaryCTA = "cursor-pointer hover:text-orange-400 inline-block w-auto whitespace-nowrap py-4 px-10 bg-neutral-100 text-orange-700 rounded-full"

  return (
    <button className={buttonType == 'primary' ? primaryCTA : secondaryCTA}>Get Started</button>
  )
}

export default CTA