import React, { useEffect, useState } from "react";
import Product from "../components/Products";
import { useDispatch, useSelector } from "react-redux";
import "../css/ProductScreen.css";
import { listProducts } from "../actions/productActions";

function ProductScreen() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { error, loading, products } = productList;
  useEffect(() => {
    // fetch("http://localhost:8000/api/products/")
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((data) => {
    //     console.log(data);
    //     setProducts(data);
    //   });
    dispatch(listProducts());
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
