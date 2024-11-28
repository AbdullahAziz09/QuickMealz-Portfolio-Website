import React, { useState } from 'react';
import imperialelephantrice from '../productassets/imperialelephantrice.jpg';
import whitepearlrice from '../productassets/whitepearlrice.png';
import Taqwarice from '../productassets/Taqwarice.jpeg';
import { FiArrowLeft } from 'react-icons/fi';  // Import the React Icon

const Rice = () => {
  // Initial product list
  const allProducts = [
    { id: 1, name: 'Imperial Elephant Rice', image: imperialelephantrice },
    { id: 2, name: 'White Pearl Rice', image: whitepearlrice },
    { id: 3, name: 'Taqwa Rice', image: Taqwarice },
    { id: 4, name: 'Imperial Elephant Rice', image: imperialelephantrice },
    { id: 5, name: 'White Pearl Rice', image: whitepearlrice },
    { id: 6, name: 'Taqwa Rice', image: Taqwarice },
    { id: 7, name: 'Imperial Elephant Rice', image: imperialelephantrice },
    { id: 8, name: 'White Pearl Rice', image: whitepearlrice },
  ];

  // State for showing products
  const [visibleProducts, setVisibleProducts] = useState(4);

  // Function to handle "Show More" button click
  const handleShowMore = () => {
    setVisibleProducts(prevVisibleProducts => prevVisibleProducts + 4);
  };

  // Function to handle "Show Less" button click
  const handleShowLess = () => {
    setVisibleProducts(prevVisibleProducts => prevVisibleProducts - 4);
  };

  // Get the products to display based on visibleProducts state
  const productsToDisplay = allProducts.slice(0, visibleProducts);

  return (
    <div className="p-8">
      {/* Back Button */}
      <div className="flex justify-start mb-6">
        <a href="/" className="flex items-center text-blue-600 hover:text-blue-800">
          <FiArrowLeft className="text-3xl bg-blue-100 rounded-full p-2 mr-2" />
          <span className="font-semibold text-lg">Back</span>
        </a>
      </div>

      {/* Title */}
      <h2 className="text-3xl font-semibold text-center mb-8">Rice Products</h2>

      {/* Product Cards */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-7xl mx-auto">
        {productsToDisplay.map((product) => (
          <div key={product.id} className="bg-white border border-blue-200 rounded-lg shadow-md p-4">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-t-md"
            />
            <h3 className="text-lg font-medium text-center text-blue-800 mt-4">{product.name}</h3>
          </div>
        ))}
      </div>

      {/* Show More / Show Less Button */}
      <div className="text-center mt-8">
        {visibleProducts < allProducts.length ? (
          <button
            onClick={handleShowMore}
            className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition mr-4"
          >
            Show More
          </button>
        ) : (
          <button
            onClick={handleShowLess}
            className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition mr-4"
          >
            Show Less
          </button>
        )}
      </div>
    </div>
  );
};

export default Rice;
