import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-indigo-900 via-navy-800 to-sky-700 p-4 shadow-md fixed top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <a
          href="#home"
          className="text-3xl font-extrabold text-white"
        >
          QuickMealz
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          {['Home', 'About Us', 'Our Products', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '')}`} // Linking to sections
              className="text-lightblue-200 hover:text-white transition-colors duration-200 ease-in-out font-medium"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-lightblue-200 focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 bg-gradient-to-r from-indigo-900 via-navy-800 to-sky-700 p-4 rounded-lg shadow-lg">
          {['Home', 'About Us', 'Our Products', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '')}`} // Linking to sections
              className="block text-lightblue-200 py-2 px-4 hover:bg-lightblue-600 rounded transition duration-200"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
