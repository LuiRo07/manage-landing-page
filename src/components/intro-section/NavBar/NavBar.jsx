import React, { useState, useEffect} from 'react'
import hamburgerIcon from '/images/mobile-nav-icons/icon-hamburger.svg'
import closeIcon from '/images/mobile-nav-icons/icon-close.svg'

function NavBar() {
  // State to manage the visibility of the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

   useEffect(() => {
    const handleResize = () => {
      const menu = document.querySelector('.mobile-nav-menu');
      if (window.innerWidth >= 640 && menu && !menu.classList.contains('hidden')) {
        menu.classList.add('hidden');
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

   const handleMenuToggle = () => {
        // Logic to toggle the visibility of the menu
        const menu = document.querySelector('.mobile-nav-menu');
        menu.classList.toggle('hidden');
        setIsMenuOpen(!isMenuOpen);
    }

  return (
    <nav className="py-8 z-3 relative">
      {/* navbar breaks if smaller */}
      <ul className="hidden sm:flex justify-between sm:justify-between sm:items-center sm:min-w-[768px]">
        <li><img className="min-w-fit" src="/images/business-logo/logo.svg" /></li>
        <li>
          <div className="hidden sm:flex sm:items-center sm:space-x-4 min-w-fit">
            <a href="#">Pricing</a>
            <a href="#">Product</a>
            <a href="#">About Us</a>
            <a href="#">Careers</a>
            <a href="#">Community</a>
          </div>
        </li>
        <li><a href="#" className="inline-block w-auto whitespace-nowrap bg-orange-700 rounded-full text-white py-4 px-6">Get Started</a></li>
      </ul>

        {/* mobile navbar */}
      <ul className="w-full flex justify-between sm:hidden">
        <li><a href="#"><img src="/images/business-logo/logo.svg" /></a></li>
        <li><button className="cursor-pointer" onClick={handleMenuToggle}><img src={isMenuOpen ? closeIcon : hamburgerIcon } /></button></li>
      </ul>

      {/* open nav menu */}
      <div className="mobile-nav-menu hidden bg-white text-[hsl(228,88%,59%)] p-6 mt-8 z-10">
          <ul className="flex flex-col items-center justify-center space-y-6 mt-6 p-4 font-[700]">
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Product</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Community</a></li>
              <li><a href="#">Get Started</a></li>
          </ul>
      </div>
    </nav>
  )
}

export default NavBar