import React from 'react'

function NavBar() {
  return (
    <nav className="p-8">
      <ul className="flex justify-around items-center">
        <li><a href="#"><img Src="/images/business-logo/logo.svg" /></a></li>
        <li>
          <div className="flex items-center space-x-6">
            <a href="#">Pricing</a>
            <a href="#">Product</a>
            <a href="#">About Us</a>
            <a href="#">Careers</a>
            <a href="#">Community</a>
          </div>
        </li>
        <li><a href="#" className="py-6 px-8 bg-orange-700 rounded-full">Get Started</a></li>
      </ul>
    </nav>
  )
}

export default NavBar