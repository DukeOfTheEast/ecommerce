/* eslint-disable react/jsx-key */
import { useState, useEffect, createContext, useContext } from "react";
import classes from "../components/Products.module.css";
import { useNavigate } from "react-router-dom";
import ProductContext from "../contexts/product-context";

const Products = () => {
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState("");
  const [search, setSearch] = useState("");
  const { updateState } = useContext(ProductContext);

  const navigate = useNavigate();

  const handleclick = (product) => {
    navigate("/product");
    updateState(product);
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

  const searchProducts = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://dummyjson.com/products/search?q=${search}`
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

  function handleRefresh() {
    setSearch("");
    getProducts();
  }
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
            <button
              className={classes.btnCat}
              onClick={() => setCategory(item)}
              key={idx}
            >
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
                      <button
                        className={classes.buybtn}
                        onClick={() => handleclick(product)}
                      >
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
      <div className={classes.latest}>
        <h1>Latest Products</h1>
        <div className={classes.latestInput}>
          <input
            className={classes.prodSearch}
            type="text"
            placeholder="Type items"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            // onChange={updateFilterValue}
          />
          <button onClick={() => searchProducts()}>Search</button>
          <button onClick={handleRefresh}>Refresh</button>
        </div>
      </div>

      <div className={classes.productsMain}>
        {loading ? <Loading /> : <ShowProducts />}
      </div>
    </div>
  );
};

export const UserContext = createContext();
export default Products;
