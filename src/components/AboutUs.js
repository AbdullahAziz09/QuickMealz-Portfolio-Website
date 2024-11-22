// src/components/AboutUs.js
import React from 'react';

const AboutUs = () => {
  return (
    <div id="about" className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-300 flex items-center justify-center p-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        
        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center md:justify-start">
          <img
            src="https://via.placeholder.com/400"
            alt="About Us"
            className="rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Content Section */}
        <div className="md:w-1/2 mt-8 md:mt-0 text-center md:text-left px-4 md:px-8 space-y-6">
          <h2 className="text-4xl font-semibold text-blue-800 animate-fadeIn">About Us</h2>
          <p className="text-lg text-gray-700 animate-slideUp transition-opacity duration-500">
            At <span className="font-bold">QuickMealz</span>, we’re dedicated to providing top-quality grains and pulses. Our mission is to deliver healthy and sustainable food options that meet the highest standards.
          </p>
          <p className="text-lg text-gray-700 animate-slideUp delay-200 transition-opacity duration-500">
            Founded in 2023, our team is passionate about nourishing communities with wholesome products that enrich lives. We work closely with farmers and producers to ensure our products are sourced responsibly.
          </p>
          <button className="mt-4 py-3 px-6 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-transform duration-500 hover:scale-105">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
