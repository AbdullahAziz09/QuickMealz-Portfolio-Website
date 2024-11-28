import React from 'react';
import { Link } from 'react-router-dom';
import lotteDrinks from '../productassets/Lotte drinks.jpg';
import allinson from '../productassets/allinson.jpg';
import amoysauce from '../productassets/amoysauce.jpg';
import ANDAZrice from '../productassets/ANDAZrice.webp';

// Define categories and images for each
const categories = [
  { id: 1, name: 'Rice', image: ANDAZrice },
  { id: 2, name: 'Beverages', image: lotteDrinks },
  { id: 3, name: 'Sauces', image: amoysauce },
  { id: 4, name: 'Bakery', image: allinson },
];

const ProductGrid = () => {
  return (
    <div
     id="ourproducts"
      className="w-full bg-gradient-to-b from-cyan-900 via-blue-800 to-cyan-700 px-6 py-12"
    >
      {/* Section Title */}
      <h2 className="text-4xl font-bold text-center text-teal-200 mb-10">
        Discover Our Categories
      </h2>

      {/* Category Cards */}
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 max-w-7xl mx-auto">
        {categories.map((category) => (
          <Link
            key={category.id}
            to={`/category/${category.name.toLowerCase()}`}
            className="bg-white bg-opacity-80 backdrop-blur-lg rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 p-4 flex flex-col items-center"
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-48 object-cover rounded-lg shadow-md"
            />
            <h3 className="text-xl font-semibold text-blue-700 mt-6">
              {category.name}
            </h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
