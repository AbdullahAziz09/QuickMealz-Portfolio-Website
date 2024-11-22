import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-800 via-blue-600 to-blue-400 p-4 shadow-lg fixed top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <a href="#home" className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-blue-200">
          QuickMealz
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8">
          <a href="#home" className="text-white hover:text-teal-200 transition-all duration-300">Home</a>
          <a href="#about" className="text-white hover:text-teal-200 transition-all duration-300">About Us</a>
          <a href="#products" className="text-white hover:text-teal-200 transition-all duration-300">Our Products</a>
          <a href="#contact" className="text-white hover:text-teal-200 transition-all duration-300">Contact</a>
        </div>

        {/* Mobile Menu Icon */}
        <button onClick={toggleMenu} className="md:hidden text-white focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 bg-gradient-to-r from-blue-800 via-blue-600 to-blue-400 p-4 rounded-lg shadow-lg">
          <a href="#home" className="block text-white py-2 px-4 hover:bg-blue-500 rounded" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#about" className="block text-white py-2 px-4 hover:bg-blue-500 rounded" onClick={() => setIsOpen(false)}>About Us</a>
          <a href="#products" className="block text-white py-2 px-4 hover:bg-blue-500 rounded" onClick={() => setIsOpen(false)}>Our Products</a>
          <a href="#contact" className="block text-white py-2 px-4 hover:bg-blue-500 rounded" onClick={() => setIsOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
