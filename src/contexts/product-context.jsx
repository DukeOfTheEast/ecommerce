// MyContext.js
import { createContext, useState } from "react";

const ProductContext = createContext();

export default ProductContext;

// MyContext.js (continued)
// eslint-disable-next-line react/prop-types
const ProductContextProvider = ({ children }) => {
  const [product, setProduct] = useState(/* initial state here */);

  const updateState = (newState) => {
    setProduct(newState);
  };

  return (
    <ProductContext.Provider value={{ product, updateState }}>
      {children}
    </ProductContext.Provider>
  );
};

export { ProductContextProvider };
