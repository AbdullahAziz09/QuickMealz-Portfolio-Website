import React from 'react';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import ProductGrid from './components/ProductGrid';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Carousel/>
      <AboutUs/>
      <ProductGrid/>
      <ContactForm/>
      <Footer/>
      
    </div>
  );
}

export default App;
