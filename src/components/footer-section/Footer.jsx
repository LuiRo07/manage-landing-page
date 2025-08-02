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
      <div className="w-[85%] max-w-[1200px] h-auto flex flex-col gap-6 sm:grid sm:grid-cols-4">
        {/* container for logo */}
        <div className="sm:w-fit order-4 flex justify-center sm:col-start-1">
          <Logo />
        </div>
        {/* list of icons */}
        <div className="sm:max-w-[200px] order-3 sm:row-start-2 sm:self-end mb-4">
          <IconSocial />
        </div>
        {/* list of links */}
        <div className="order-2 sm:row-span-2 sm:col-span-2 px-6">
          <ul className="grid grid-cols-2 gap-4">
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
          <div className="order-1 sm:col-start-4 sm:row-span-2">
            {/* bug: on submit without email validation, signifier needs proper email input */}
            <form className="flex gap-2.5" onSubmit={handleSubmit}>
              <label>
                <input placeholder="Enter your email" className="bg-light-gray border-2 px-6 py-2 rounded-full w-full max-w-xs text-primary-blue focus:text-primary-red focus:outline-primary-red" />
              </label>
              <p className="hidden peer-invalid:inline-block mt-2 text-sm text-red-700">Please insert a valid email</p>
              <button type="submit" className="bg-primary-red cursor-pointer text-white py-2 px-6 rounded-full ml-2 hover:bg-orange-400">Go</button>
            </form>
          </div>
          <p className="order-5 mt-4 text-center">Copyright 2020. All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer