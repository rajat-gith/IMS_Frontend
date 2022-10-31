import { useState } from "react";
import "../css/Product.css";
import ProductDesciptionComponent from "../components/ProductDesciptionComponent";

const Product = ({ products, triggerValue }) => {
  // const [quantity,setQuantity]=useState(null);
  
  return (
    <div className="product_list">
      {products.map((product) => (
        <div className="product_preview" key={product._id}>
          <div className="product_details">
            <h4>{product._id}</h4>
            <h4>{product.product_name}</h4>
            {product.quantity > 0 ? (
              <div className="A">In Stock</div>
            ) : (
              <div className="NA">Out Of Stock</div>
            )}
          </div>
          <ProductDesciptionComponent trigger={triggerValue}
          brand={product.brand["name"]}
          desc={product.description}
          color={product.color}
          category={product.category}
          quantity={product.quantity}
          price={product.price}>
            <h2>My PopUP</h2>
          </ProductDesciptionComponent>
        </div>
      ))}
    </div>
  );
};

export default Product;
