/* eslint-disable react/jsx-key */
import { useState, useEffect } from "react";
import classes from "../components/Products.module.css";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState("");

  const navigate = useNavigate();

  const viewItem = () => {
    navigate("/product");
  };

  // const [filteredProducts, setFilteredProducts] = useState([]);

  const getProducts = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        ` ${
          category === ""
            ? "https://dummyjson.com/products"
            : `https://dummyjson.com/products/category/${category}`
        }`
      );
      const data = await response.json();
      setData(data);
      setLoading(false);
      console.log(data, "response");
    } catch (error) {
      console.log(error);
    }
  };
  const getCategories = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://dummyjson.com/products/categories");
      const data = await response.json();
      setCategories(data);
      setLoading(false);
      console.log(data, "response");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category]);
  useEffect(() => {
    getCategories();
  }, []);
  console.log(categories, "filter");
  const Loading = () => {
    return (
      <div>
        <div className={classes.center}>
          <div className={classes.wave}></div>
          <div className={classes.wave}></div>
          <div className={classes.wave}></div>
          <div className={classes.wave}></div>
          <div className={classes.wave}></div>
          <div className={classes.wave}></div>
          <div className={classes.wave}></div>
          <div className={classes.wave}></div>
          <div className={classes.wave}></div>
          <div className={classes.wave}></div>
        </div>
      </div>
    );
  };

  const ShowProducts = () => {
    return (
      <div>
        <div className={classes.productBtn} style={{ overflowX: "scroll" }}>
          <button onClick={() => setCategory("")}>All</button>
          {categories?.map((item, idx) => (
            <button onClick={() => setCategory(item)} key={idx}>
              {item}
            </button>
          ))}
        </div>
        <section className={classes.section}>
          {data?.products?.map((product) => {
            return (
              <div key={product?.id}>
                <div className={classes.productCards}>
                  <div className={classes.productCard}>
                    <img
                      src={product?.images[0] || ""}
                      alt=""
                      className={classes.cardImage}
                    />
                    <div>
                      <p>{product?.title}</p>
                      <p>${product?.price}</p>
                      <button className={classes.buybtn} onClick={viewItem}>
                        Buy now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </section>
      </div>
    );
  };

  return (
    <div className={classes.products}>
      <div className="latest">
        <h1>Latest Products</h1>
        <div>
          <input
            type="text"
            placeholder="Type items"
            value={""}
            // onChange={updateFilterValue}
          />
          <button>Search</button>
        </div>
      </div>

      <div className={classes.productsMain}>
        {loading ? <Loading /> : <ShowProducts />}
      </div>
    </div>
  );
};

export default Products;
