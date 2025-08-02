import React, { useState, useEffect } from 'react'
import NavBar from './NavBar/NavBar'
import HeroSection from './HeroSection'
import CTASection from '../cta-section/CTASection'

// contains the navbar, hero section, and bullet points
function IntroSection() {
  const desktopBG = '/images/overlay-pattern/bg-simplify-section-desktop.svg';
  const mobileBG = '/images/overlay-pattern/bg-tablet-pattern.svg';

  const getBG = () => window.innerWidth >= 640 ? desktopBG : mobileBG;
  const [backgroundImage, setBackgroundImage] = useState(getBG());

  useEffect(() => {
    const handleResize = () => window.innerWidth >= 640 ? setBackgroundImage(desktopBG) : setBackgroundImage(mobileBG);
    window.addEventListener('resize', handleResize);  
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="bg-[url('/images/overlay-pattern/bg-tablet-pattern.svg')] sm:bg-[url('/images/overlay-pattern/bg-simplify-section-desktop.svg')] bg-no-repeat bg-cover bg-center w-screen">
      <NavBar />
      <HeroSection />
      <CTASection />
    </section>
  )
}

export default IntroSection