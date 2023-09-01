import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Sneaker from "./components/Sneaker";
// import { Routes, Route } from "react-router-dom";
// import Product from "./components/Product";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      {/* <Routes>
        <Route path="/product" Component={Product} />
      </Routes> */}
      <Navbar />
      <Sneaker />
      <Products />
      <Footer />
    </>
  );
}

export default App;
