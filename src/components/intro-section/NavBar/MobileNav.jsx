import React from 'react'

function MobileNav() {
    const handleMenuToggle = () => {
        // Logic to toggle the visibility of the menu
        const menu = document.querySelector('.mobile-nav-menu');
        menu.classList.toggle('hidden');
    }

  return (
    <nav>
        <div className="p-4">
            <ul className="w-full flex justify-between">
                <li><a href="#"><img src="/images/business-logo/logo.svg" /></a></li>
                <li><button className="cursor-pointer" onClick={handleMenuToggle}><img src="/images/mobile-nav-icons/icon-hamburger.svg" /></button></li>
            </ul>

            {/* open nav menu */}
            <div className="mobile-nav-menu hidden bg-white text-[hsl(228,88%,59%)] p-6 mt-8">
                <ul className="flex flex-col items-center justify-center space-y-6 mt-6 p-4 font-[700]">
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">Product</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Community</a></li>
                    <li><a href="#">Get Started</a></li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default MobileNav