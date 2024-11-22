// src/components/ProductGrid.js
import React, { useState } from 'react';
import lotteDrinks from '../productassets/Lotte drinks.jpg'; 
import allinson from '../productassets/allinson.jpg';
import amoysauce from '../productassets/amoysauce.jpg';
import ANDAZrice from '../productassets/ANDAZrice.webp';
import Bakepaurler from '../productassets/Bakepaurler.png';
import bangbangpopcorn from '../productassets/bangbangpopcorn.webp';
import bangbangsauce from '../productassets/bangbangsauce.jpg';
import buldaksauce from '../productassets/buldaksauce.webp';
import microwavepopcorn from '../productassets/microwavepopcorn.webp';
import FGSRIRACHA from '../productassets/FGSRIRACHA.jpg';
import fincosalts from '../productassets/fincosalts.jpg';
import FREEZ from '../productassets/FREEZ.jpg';
import friedonions from '../productassets/friedonions.jpg';
import fryo from '../productassets/fryo.jpeg';
import goldkilichai from '../productassets/goldkilichai.png';
import imperialelephantrice from '../productassets/imperialelephantrice.jpg';
import kohkae from '../productassets/kohkae.jpg';
import koka from '../productassets/koka.jpg';
import koleecupnoodles from '../productassets/koleecupnoodles.webp';
import koleevercimili from '../productassets/koleevercimili.jpg';
import kooleenoodles from '../productassets/kooleenoodles.jpg';
import ktcoils from '../productassets/ktcoils.webp';
import kurkure from '../productassets/kurkure.jpg';
import lays from '../productassets/lays.jpg';
import Laziza from '../productassets/Laziza.jpg';
import Linghamsauces from '../productassets/Linghamsauces.webp';
import lotus from '../productassets/lotus.jpeg';
import Mitchell from '../productassets/Mitchell.png';
import mitchellsperiperi from '../productassets/mitchellsperiperi.png';
import mogumogu from '../productassets/mogumogu.jpg';
import NONGSHIMnoodles from '../productassets/NONGSHIMnoodles.jpg';
import pataks from '../productassets/pataks.webp';
import pearlriverbridgesauce from '../productassets/pearlriverbridgesauce.jpg';
import PlainBaketime from '../productassets/PlainBaketime.png';
import popularmaza from '../productassets/popularmaza.webp';
import quicejuice from '../productassets/quicejuice.jpg';
import Rajahspices from '../productassets/Rajahspices.webp';
import raminkimchi from '../productassets/raminkimchi.webp';
import rcchai from '../productassets/rcchai.jpg';
import SAMYANGBULDAKC from '../productassets/SAMYANGBULDAKC.jpg';
import sesamesnap from '../productassets/sesamesnap.jpg';
import shinramyun from '../productassets/shinramyun.jpg';
import slantix from '../productassets/slantix.jpg';
import sweeto from '../productassets/sweeto.jpg';
import Taqwarice from '../productassets/Taqwarice.jpeg';
import tentenpuddings from '../productassets/tentenpuddings.webp';
import tibetcreams from '../productassets/tibetcreams.webp';
import uniktea from '../productassets/uniktea.jpg';
import Unitedkingcrispino from '../productassets/Unitedkingcrispino.jpg';
import vinutdrinks from '../productassets/vinutdrinks.webp';
import whitepearlrice from '../productassets/whitepearlrice.png';
import whitepearlchakkiaata from '../productassets/whitepearlchakkiaata.jpg';
import wpapplejuice from '../productassets/wpapplejuice.jpg';
import yeo from '../productassets/yeo.png';
import yeoseasmyoil from '../productassets/yeoseasmyoil.webp';



const products = [
  { id: 1, name: 'Lotte Drinks', image: lotteDrinks }, 
  { id: 2, name: 'Allinson', image: allinson },
  { id: 3, name: 'Amoy Sauce', image: amoysauce },
  { id: 4, name: 'Andaz Rice', image: ANDAZrice },
  { id: 5, name: 'Bake Paurler', image: Bakepaurler },
  { id: 6, name: 'Bang Bang Pop Corn', image: bangbangpopcorn },
  { id: 7, name: 'Bang Bang Sauce', image: bangbangsauce },
  { id: 8, name: 'Buldak Sauce', image: buldaksauce },
  { id: 9, name: 'Microwave Pop Corn', image: microwavepopcorn },
  { id: 10, name: 'FG Sriracha', image: FGSRIRACHA },
  { id: 11, name: 'Finco Salts', image: fincosalts },
  { id: 12, name: 'FREEZ', image: FREEZ },
  { id: 13, name: 'Freid Onions', image: friedonions},
  { id: 14, name: 'Fry O', image: fryo },
  { id: 15, name: 'GoldKili Chai', image: goldkilichai },
  { id: 16, name: 'Elephant Rice', image: imperialelephantrice},
  { id: 17, name: 'Koh Kae', image: kohkae },
  { id: 18, name: 'Koka', image: koka},
  { id: 19, name: 'Ko Lee Cup Noodles', image: koleecupnoodles},
  { id: 20, name: 'Ko Lee Vermicelli', image: koleevercimili },
  { id: 21, name: 'Ko Lee Noodles', image: kooleenoodles },
  { id: 22, name: 'Ktc Oils', image: ktcoils },
  { id: 23, name: 'Kurkure', image: kurkure },
  { id: 24, name: 'Lays', image: lays },
  { id: 25, name: 'Laziza', image: Laziza },
  { id: 26, name: 'Lingham Sauces', image: Linghamsauces },
  { id: 27, name: 'Lotus', image: lotus },
  { id: 28, name: 'Mitchells', image: Mitchell },
  { id: 29, name: 'Mitchells Peri Peri', image: mitchellsperiperi },
  { id: 30, name: 'Mogu Mogu', image: mogumogu },
  { id: 31, name: 'Nongshim Noodles', image: NONGSHIMnoodles },
  { id: 32, name: 'Pataks', image: pataks },
  { id: 33, name: 'Pearl River Bridge Sauce', image: pearlriverbridgesauce },
  { id: 34, name: 'Plain Bake Time', image: PlainBaketime },
  { id: 35, name: 'Popular Maza', image: popularmaza },
  { id: 36, name: 'Quice juice', image: quicejuice },
  { id: 37, name: 'Rajah Spices', image: Rajahspices },
  { id: 38, name: 'Ramin Kimchi', image: raminkimchi },
  { id: 39, name: 'Rc Chai', image: rcchai },
  { id: 40, name: 'Samyang Buldak C', image: SAMYANGBULDAKC},
  { id: 41, name: 'Sesame Snap', image: sesamesnap },
  { id: 42, name: 'Shin ramyun', image: shinramyun },
  { id: 43, name: 'Slantix', image: slantix },
  { id: 44, name: 'Sweeto', image: sweeto },
  { id: 45, name: 'Taqwa Rice', image: Taqwarice },
  { id: 46, name: 'Ten ten Puddings', image: tentenpuddings },
  { id: 47, name: 'Tibet Creams', image: tibetcreams },
  { id: 48, name: 'Uniq Tea', image: uniktea },
  { id: 49, name: 'United King Crispino', image: Unitedkingcrispino },
  { id: 50, name: 'Vinut Drinks', image: vinutdrinks },
  { id: 51, name: 'White Pearl Rice', image: whitepearlrice },
  { id: 52, name: 'White pearl Chakki Aata', image: whitepearlchakkiaata },
  { id: 53, name: 'Wp Apple Juice', image: wpapplejuice},
  { id: 54, name: 'Yeo', image: yeo },
  { id: 55, name: 'Yeo Sesamy Oil', image: yeoseasmyoil },

];

const ProductGrid = () => {
  const [showAll, setShowAll] = useState(false);

  const displayedProducts = showAll ? products : products.slice(0, 8);

  return (
    <div id="products" className="w-full bg-gradient-to-br from-blue-100 to-blue-600 px-4 py-8">
      <h2 className="text-3xl font-semibold text-center text-white mb-8">
        Our Products
      </h2>
      
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 max-w-6xl mx-auto">
        {displayedProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white border border-blue-200 rounded-lg p-4 shadow-md hover:shadow-xl transition"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-t-md"
            />
            <h3 className="text-lg font-medium text-center text-blue-800 mt-4">
              {product.name}
            </h3>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <button
          onClick={() => setShowAll(!showAll)}
          className="bg-blue-700 text-white py-2 px-8 rounded-lg hover:bg-blue-800 transition"
        >
          {showAll ? 'Show Less' : 'Show More'}
        </button>
      </div>
    </div>
  );
};

export default ProductGrid;
