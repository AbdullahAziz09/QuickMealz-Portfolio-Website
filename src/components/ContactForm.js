import React from 'react';

const ContactForm = () => {
  return (
    <div id="contact" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-900 via-blue-800 to-blue-700 p-0">
      <div className="w-full max-w-4xl bg-white shadow-2xl rounded-lg overflow-hidden flex flex-col sm:flex-row">

        {/* Left Card: Company Details */}
        <div className="flex flex-col justify-center p-8 bg-gradient-to-b from-blue-800 to-blue-600 sm:w-2/3 text-white">
          <h2 className="text-3xl font-bold mb-4">Our Company</h2>
          <p className="text-lg mb-6">
            QuickMealz delivers exceptional service, providing top-quality grains and pulses, nourishing communities with sustainable and healthy options.
          </p>
          <div className="mb-4">
            <p className="font-medium">Contact Number:</p>
            <p className="text-lg font-semibold">+92 300 1234567</p>
          </div>
          <div className="mb-4">
            <p className="font-medium">Email:</p>
            <p className="text-lg font-semibold">info@quickmealz.com</p>
          </div>
          <div>
            <p className="font-medium">Address:</p>
            <p className="text-lg font-semibold">1234 Main St, London, United Kingdom</p>
          </div>
        </div>

        {/* Right Card: WhatsApp Button */}
        <div className="flex items-center justify-center bg-gradient-to-br from-teal-400 to-blue-600 sm:w-1/3 p-6 relative group">
          <a
            href="https://wa.me/923001234567"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-[#25D366] text-white font-semibold py-4 px-8 rounded-lg shadow-2xl transform group-hover:scale-105 transition-transform duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-3"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20.52 3.48a10.35 10.35 0 00-16.6 12.17l-1.6 5.85 5.97-1.58a10.35 10.35 0 0012.24-16.6zm-9.13 14.16c-1.52 0-2.92-.41-4.14-1.13l-.3-.18-2.69.71.73-2.61-.2-.34a8.5 8.5 0 1114.47-2.5 8.5 8.5 0 01-8.07 6.05zm4.63-6.27c-.26-.13-1.52-.75-1.75-.83-.24-.08-.41-.13-.58.13-.17.25-.67.82-.83.98-.16.16-.3.18-.55.06-.26-.13-1.1-.41-2.09-1.29-.77-.68-1.29-1.51-1.43-1.77-.15-.26-.02-.41.12-.54.13-.13.26-.3.38-.45.13-.15.17-.25.26-.42.09-.17.04-.31-.02-.44-.06-.13-.58-1.4-.8-1.92-.2-.48-.41-.42-.57-.43l-.48-.01c-.17 0-.45.06-.68.31-.24.25-.9.87-.9 2.13s.92 2.48 1.05 2.66c.13.17 1.81 2.78 4.38 3.9.61.26 1.08.42 1.44.54.61.19 1.16.16 1.6.1.49-.07 1.52-.62 1.73-1.22.21-.6.21-1.12.15-1.22-.06-.09-.23-.17-.48-.3z"/>
            </svg>
            <span className="text-xl">WhatsApp Us</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
