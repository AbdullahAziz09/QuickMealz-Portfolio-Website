import React, { useState, useEffect } from "react";
import Rice1 from "../assests/Rice.png";
import Rice2 from "../assests/Rice1.png";
import Rice3 from "../assests/Rice2.png";
import Rice4 from "../assests/Rice4.png";
import Rice5 from "../assests/Rice5.png";
import Rice6 from "../assests/Rice6.png";
import Rice7 from "../assests/Rice7.png";
import Rice8 from "../assests/Rice8.png";
import Rice9 from "../assests/Rice9.png";
import Rice10 from "../assests/Rice10.png";
import Rice11 from "../assests/Rice11.png";
import Rice12 from "../assests/Rice12.png";
import Rice13 from "../assests/Rice13.png";
import Rice14 from "../assests/Rice14.png";
import Rice15 from "../assests/Rice15.png";
import Rice16 from "../assests/Rice16.png";
import Rice19 from "../assests/Rice19.png";

const images = [
  { src: Rice1, bgColor: "#f9f6f2" },
  { src: Rice2, bgColor: "#e8e4e1" },
  { src: Rice3, bgColor: "#d7d4d0" },
  { src: Rice4, bgColor: "#d7d4d0" },
  { src: Rice5, bgColor: "#d7d4d0" },
  { src: Rice6, bgColor: "#d7d4d0" },
  { src: Rice7, bgColor: "#d7d4d0" },
  { src: Rice8, bgColor: "#d7d4d0" },
  { src: Rice9, bgColor: "#d7d4d0" },
  { src: Rice10, bgColor: "#d7d4d0" },
  { src: Rice11, bgColor: "#d7d4d0" },
  { src: Rice12, bgColor: "#d7d4d0" },
  { src: Rice13, bgColor: "#d7d4d0" },
  { src: Rice14, bgColor: "#d7d4d0" },
  { src: Rice15, bgColor: "#d7d4d0" },
  { src: Rice16, bgColor: "#d7d4d0" },
  { src: Rice19, bgColor: "#d7d4d0" },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentImage = images[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div
      id="home"
      className="carousel-container w-full h-screen flex items-center justify-center transition-colors duration-700 mt-8"
      style={{ backgroundColor: currentImage.bgColor }}
    >
      <div className="carousel-content relative w-11/12 md:w-3/4 lg:w-2/3 h-4/5 overflow-hidden rounded-lg shadow-xl flex items-center justify-center p-4 md:p-6 lg:p-8">
        <img
          src={currentImage.src}
          alt={`Slide ${currentIndex + 1}`}
          className="w-auto h-auto max-w-full max-h-full object-contain"
        />
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-600 transition-all duration-300 z-10"
        >
          &#8592;
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-600 transition-all duration-300 z-10"
        >
          &#8594;
        </button>
        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-1.5">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-2.5 h-2.5 rounded-full border border-gray-300 ${
                index === currentIndex
                  ? "bg-gray-900 scale-125 shadow-sm"
                  : "bg-gray-400"
              } transition-all duration-300`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
