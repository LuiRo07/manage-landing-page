import React, { useState, useEffect} from 'react'
import CTA from '../cta-buttons/CTA';

// hero banner component
function Banner() {
  // loads the background image depending on screen size
    const desktopBG = '/images/svg/bg-simplify-section-desktop.svg'; 
    const mobileBG = '/images/overlay-pattern/bg-simplify-section-mobile.svg';
    
    const getBG = () => window.innerWidth >= 640 ? desktopBG : mobileBG;
    const [backgroundImage, setBackgroundImage] = useState(getBG());

  useEffect(() => {
    const handleResize = () => window.innerWidth >= 640 ? setBackgroundImage(desktopBG) : setBackgroundImage(mobileBG);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (
    <div className="bg-orange-700 py-20 bg-no-repeat" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="bg-no-repeat flex flex-col justify-center items-center sm:justify-around gap-4 sm:px-10">
          <div className="text-white text-center text-2xl opacity-80 w-[60%] font-semibold sm:w-[300px]">
              <h1>Simplify how your team works today.</h1>
          </div>
          <div>
              <CTA buttonType={"secondary"} />
          </div>
        </div>
    </div>
  )
}

export default Banner