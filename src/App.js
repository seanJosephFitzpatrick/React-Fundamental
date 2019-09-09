import React from "react";
import { Product, productData } from "../Imports/imports";

function App() {
  const productComponent = productData.map(item => <Product product={item} />);
  return <div>{productComponent}</div>;
}

export default App;
