import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import ProductGrid from './components/ProductGrid';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import Rice from './pages/Rice';
import Beverages from './pages/Beverages';
import Sauces from './pages/Sauces';
import Bakery from './pages/Bakery';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Carousel />
        <AboutUs />
        
        {/* Adding bottom margin to AboutUs and ProductGrid for better spacing */}
        <div className="mb-12">
          {/* Routes for different pages */}
          <Routes>
            <Route path="/" element={<ProductGrid />} />
            <Route path="/category/rice" element={<Rice />} />
            <Route path="/category/beverages" element={<Beverages />} />
            <Route path="/category/sauces" element={<Sauces />} />
            <Route path="/category/bakery" element={<Bakery />} />
          </Routes>
        </div>

        {/* Adding bottom margin to ContactForm to separate it from the footer */}
        <ContactForm className="mb-12" />

        {/* Footer will automatically separate */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
