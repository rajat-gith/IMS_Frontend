import React, { useEffect, useState } from "react";
import "../css/HomeScreen.css";
import { Link } from "react-router-dom";

function HomeScreen() {
  const [products, setProducts] = useState(null);

  // useEffect(()=>{
  //   fetch('http://localhost:8000/api/products/')
  //   .then(res =>{
  //     return res.json();
  //   })
  //   .then((data)=>{
  //       console.log(data)
  //       setProducts(data)
  //   })
  // },[])

  return (
    <div className="HomeScreen">
      <div className="row_1">
        <Link className="card_row_1" to="/home/products">
          <h2>Products</h2>
          <img src="https://cdn3d.iconscout.com/3d/premium/thumb/product-5806313-4863042.png" alt="" />

        </Link>
        <Link className="card_row_1" to="/home/store">
          <h2>Store</h2>
          <img src="https://cdn3d.iconscout.com/3d/premium/thumb/shopping-store-4485535-3728231.png" alt="" />
        </Link>
        <Link className="card_row_1" to="/home/sales">
          <h2>Sales</h2>
          <img src="https://cdn3d.iconscout.com/3d/free/thumb/salesman-indicating-sales-growth-3181997-2670731.png" alt="" />
        </Link>
      </div>
      <div className="row_2">
        <Link className="card_row_2" to="/home/storeOwner">
          <h2>Store Owner</h2>
          <img src="https://cdn3d.iconscout.com/3d/premium/thumb/nft-owner-5112603-4269014.png" alt="" />
        </Link>
        <Link className="card_row_2" to="/home/contactus">
          <h2>Contact US</h2>
          <img src="https://cdn3d.iconscout.com/3d/premium/thumb/contact-book-4371904-3626667.png" alt="" />
        </Link>
        <Link className="card_row_2" to="/home/developerprofile">
          <h2>DevProfile</h2>
          <img src="https://cdn3d.iconscout.com/3d/premium/thumb/user-account-4924463-4098595.png" alt="" />
        </Link>
      </div>
    </div>
  );
}

export default HomeScreen;
