/* eslint-disable react/jsx-key */
import { useState, useEffect } from "react";
import classes from "../components/Products.module.css";
import Skeleton from "react-loading-skeleton";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
      }

      return () => {
        componentMounted = false;
      };
    };

    getProducts();
  }, []);

  const Loading = () => {
    return (
      <div>
        <div>
          <Skeleton height={350} />
        </div>
        <div>
          <Skeleton height={350} />
        </div>
        <div>
          <Skeleton height={350} />
        </div>
        <div>
          <Skeleton height={350} />
        </div>
      </div>
    );
  };

  const filterProduct = (cat) => {
    const updatedList = data.filter((x) => x.category === cat);
    setFilter(updatedList);
  };

  const navigate = useNavigate();
  const prod = () => {
    navigate(`/products/${product.id}`);
  };

  const ShowProducts = () => {
    return (
      <div>
        <div className={classes.productBtn}>
          <button onClick={() => setFilter(data)}>All</button>
          <button onClick={() => filterProduct("men's clothing")}>
            Men`s Clothing
          </button>
          <button onClick={() => filterProduct("jewelery")}>Jewelries</button>
          <button onClick={() => filterProduct("women's clothing")}>
            Women`s `clothes
          </button>
        </div>
        <section className={classes.section}>
          {filter.map((product) => {
            return (
              <div>
                <div className={classes.productCards}>
                  <div className={classes.productCard} key={product.id}>
                    <img
                      src={product.image}
                      alt=""
                      className={classes.cardImage}
                    />
                    <div>
                      <p>{product.title}</p>
                      <p>${product.price}</p>
                      <button className={classes.buybtn} onClick={prod}>
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
      <h1>Latest Products</h1>
      <div className={classes.productsMain}>
        {loading ? <Loading /> : <ShowProducts />}
      </div>
    </div>
  );
};

export default Products;
