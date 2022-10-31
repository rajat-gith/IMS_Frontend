import React, { useEffect, useState } from "react";
import Product from "../components/Products";
import "../css/ProductScreen.css";

function ProductScreen() {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    fetch("http://localhost:8000/api/products/")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  }, []);
  const [buttonDesc, setButtonDesc] = useState(false);

  return (
    <div className="ProductScreen">
      <h2>Products Panel</h2>
      <button onClick={() => setButtonDesc(true)}>
        Click to Show Product Description
      </button>
      {/* <h5>Click to Show Details of the Product</h5> */}
      <button onClick={() => setButtonDesc(false)}>Collapse</button>
      <div className="product_list">
        {products && <Product products={products} triggerValue={buttonDesc} />}
      </div>
    </div>
  );
}

export default ProductScreen;
