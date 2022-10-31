import React, { useEffect, useState } from "react";
import "../css/ProductDescrptionComponent.css";
import Axios from "axios";

function ProductDesciptionComponent({
  trigger,
  brand,
  desc,
  color,
  category,
  quantity,
  price,
}) {
  return trigger ? (
    <div className="ProductDesc">
      <div className="desc">
        <h4>Description:</h4>
        <p>{desc}</p>
      </div>
      <div className="short_details">
        <div className="fields">
          <h4>Category:</h4>
          <h5>{category}</h5>
        </div>
        <div className="fields">
          <h4>Quantity:</h4>
          <h5>{quantity}</h5>
        </div>
        <div className="fields">
          <h4>Brand:</h4>
          <h5>{brand}</h5>
        </div>
        <div className="fields">
          <h4>Color:</h4>
          <h5>{color}</h5>
        </div>
        <div className="fields">
          <h4>Price:</h4>
          <h5>{price}</h5>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default ProductDesciptionComponent;
