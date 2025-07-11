import React from 'react'

function Card({image, name, paragraph}) {
  return (
    <>  
        <div className="flex justify-center relative top-6">
            <img className="w-18 h-18 rounded-full" src={image} alt={"Avatar images"} />
        </div>
        <div className="bg-[#9f9fa940] p-6 h-[196px] ">
            <h2 className="text-primary-blue font-bold text-xl">{name}</h2>
            <p className="text-gray-500">{paragraph}</p>
        </div>
    </>
  )
}

export default Card