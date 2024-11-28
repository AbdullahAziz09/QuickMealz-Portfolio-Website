import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 mt-12">
      <div className="container mx-auto px-4">

        {/* Footer Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
          
          {/* About Us */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-blue-500">About Us</h3>
            <p className="text-gray-400">
              At QuickMealz, we are dedicated to providing premium grains and pulses with a focus on health, sustainability, and customer satisfaction.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-blue-500">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-blue-500">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-blue-500">About Us</a></li>
              <li><a href="#products" className="text-gray-400 hover:text-blue-500">Our Products</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-blue-500">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-blue-500">Contact</h3>
            <p className="text-gray-400">1234 Main St, London, United Kingdom</p>
            <p className="text-gray-400">Email: info@quickmealz.com</p>
            <p className="text-gray-400">Phone: +92 300 1234567</p>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-blue-500">Newsletter</h3>
            <p className="text-gray-400 mb-4">Stay updated with our latest products, offers, and news. Subscribe to our newsletter.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-3 w-full rounded-l-md text-gray-800 focus:outline-none"
              />
              <button className="p-3 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-12 border-t border-gray-700 pt-6 text-center">
          <div className="flex justify-center space-x-6 mb-4">
            <a href="#" className="text-gray-400 hover:text-blue-500">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-500">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-500">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-500">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
          <p className="text-gray-400 text-sm">
            &copy; 2024 QuickMealz. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
