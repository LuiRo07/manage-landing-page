import React from 'react'
import IconSocial from './IconSocial';
import Logo from './Logo';

function Footer() {

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const emailInput = e.target.querySelector('input[type="email"]');
    const errorMessage = e.target.querySelector('.error-message');

    // Validate email input
    if (emailInput.validity.valid) {
      errorMessage.classList.add('hidden');
      // Here you can handle the valid email submission, e.g., send it to a server
      console.log('Email submitted:', emailInput.value);
    } else {
      errorMessage.classList.remove('hidden');
    }   
  }

  return (
    <div className="bg-primary-blue text-light-gray grid place-items-center py-8">
      <div className="w-[85%] max-w-[1200px] gap-6 h-auto flex flex-col items-center sm:grid sm:grid-cols-4 sm:gap-2">
        {/* container for logo */}
        <div className="sm:w-fit order-4 sm:order-1 flex justify-center sm:col-start-1">
          <Logo />
        </div>
        {/* list of icons */}
        <div className="sm:max-w-[200px] order-3 sm:order-1 sm:row-start-2 sm:self-end mb-4">
          <IconSocial />
        </div>
        {/* list of links */}
        <div className="order-2 sm:order-1 sm:row-span-2 sm:col-span-2 px-6">
          <ul className="grid grid-cols-2 gap-2">
            <li><a className="hover:text-primary-red" href="#">Home</a></li>
            <li><a className="hover:text-primary-red" href="#">Careers</a></li>
            <li><a className="hover:text-primary-red" href="#">Pricing</a></li>
            <li><a className="hover:text-primary-red" href="#">Community</a></li>
            <li><a className="hover:text-primary-red" href="#">Products</a></li>
            <li><a className="hover:text-primary-red" href="#">Privacy Policy</a></li>
            <li><a className="hover:text-primary-red" href="#">About Us</a></li>
          </ul>
        </div>
          {/* newsletter */}
          <div className="order-1 sm:order-1 sm:col-start-4">
            {/* bug: on submit without email validation, signifier needs proper email input */}
            <form className="flex flex-wrap gap-2.5" onSubmit={handleSubmit}>
              <label>
                <input placeholder="Enter your email" className="bg-light-gray border-2 px-6 py-2 rounded-full w-[10.5rem] text-primary-blue focus:text-primary-red focus:outline-primary-red text-sm" />
              </label>
              <p className="hidden peer-invalid:inline-block mt-2 text-sm text-red-700">Please insert a valid email</p>
              <button type="submit" className="bg-primary-red cursor-pointer text-white px-6 py-2 rounded-full ml-2 hover:bg-orange-400 text-sm">Go</button>
            </form>
          </div>
          <p className="sm:order-1 order-5 mt-4 text-center">Copyright 2020. All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer