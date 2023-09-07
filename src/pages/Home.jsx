// import React from 'react'

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Sneaker from "../components/Sneaker";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Sneaker />
      <Products />
      <Footer />
    </div>
  );
};

export default Home;
