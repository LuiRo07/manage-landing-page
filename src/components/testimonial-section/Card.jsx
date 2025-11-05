import React from 'react'

function Card({image, name, paragraph}) {
  return (
    <div className="h-[380px] flex flex-col">  
        {/* profile image */}
        <div className="flex justify-center pt-6 relative top-7">
            <img className="w-16 h-16 sm:w-18 sm:h-18 rounded-full" src={image} alt={"Avatar images"} />
        </div>
        {/* text body */}
        <div className="bg-[#9f9fa940] p-4 sm:p-6 text-center flex-1 flex flex-col justify-center overflow-hidden">
          <h2 className="text-primary-blue font-bold text-base sm:text-xl lg:text-xl mb-3 sm:mb-4">{name}</h2>
          <p className="text-gray-500 sm:text-sm lg:text-base leading-relaxed line-clamp-4">{paragraph}</p>
        </div>
    </div>
  )
}

export default Card