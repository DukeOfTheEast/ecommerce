import { useContext } from "react";
import ProductContext from "../contexts/product-context";
import classes from "../components/ProductOne.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ProductOne = () => {
  const { product: data } = useContext(ProductContext);

  return (
    <div>
      <Navbar />
      <div className={classes.prodOne}>
        <img className={classes.oneImg} src={data?.images[0]} alt="" />
        <div>
          <p>Name: {data?.title}</p>
          <p>Description: {data?.description}</p>
          <p>Price: ${data?.price}</p>
          <div className={classes.imgExtra}>
            <img src={data?.images[1]} alt="" />
            <img src={data?.images[2]} alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductOne;
