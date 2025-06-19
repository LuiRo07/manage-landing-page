import React from 'react'

function Banner() {
  return (
    <div className="flex justify-around mt-8 mb-8 bg-orange-700 h-[20vh] items-center">
        <div>
            <h1>Simplify how your team works today.</h1>
        </div>
        <div>
            <button className="inline-block w-auto whitespace-nowrap py-4 px-6 bg-neutral-100 text-orange-700 rounded-full">
                Get Started </button>
        </div>
    </div>
  )
}

export default Banner