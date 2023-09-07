// import Navbar from "./components/Navbar";
// import Products from "./components/Products";
// import Sneaker from "./components/Sneaker";
import { Routes, Route } from "react-router-dom";
// import Product from "./components/Product";
// import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProductOne from "./components/ProductOne";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<ProductOne />} />
      </Routes>
    </>
  );
}

export default App;
