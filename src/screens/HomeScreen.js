import React, { useEffect, useState } from "react";
import "../css/HomeScreen.css";
import { Link } from "react-router-dom";
import { Card, Grid } from "@mui/material";

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
    <Grid item className="HomeScreen" lg={12} container spacing={2}>
      <Grid
        className="grid"
        onClick={() => {
          alert("Clicked");
        }}
        item
        lg={4}
        xs={12}
        md={6}
      >
        <Link to="/home/products">
          <Card>
            <h2>Products</h2>
            <img
              src="https://cdn3d.iconscout.com/3d/premium/thumb/product-5806313-4863042.png"
              alt=""
            />
          </Card>
        </Link>
      </Grid>

      <Grid className="grid" item lg={4} xs={12} md={6}>
        <Link to="/home/store">
          <Card>
            <h2>Store</h2>
            <img
              src="https://cdn3d.iconscout.com/3d/premium/thumb/shopping-store-4485535-3728231.png"
              alt=""
            />
          </Card>
        </Link>
      </Grid>
      <Grid className="grid" item lg={4} xs={12} md={6}>
        <Link to="/home/sales">
          <Card>
            <h2>Sales</h2>
            <img
              src="https://cdn3d.iconscout.com/3d/free/thumb/salesman-indicating-sales-growth-3181997-2670731.png"
              alt=""
            />
          </Card>
        </Link>
      </Grid>
      <Grid className="grid" item lg={4} xs={12} md={6}>
        <Link to="/home/storeowner">
          <Card>
            <h2>Store Owner</h2>
            <img
              src="https://cdn3d.iconscout.com/3d/premium/thumb/nft-owner-5112603-4269014.png"
              alt=""
            />
          </Card>
        </Link>
      </Grid>
      <Grid className="grid" item lg={4} xs={12} md={6}>
        <Link to="/home/developerprofile">
          <Card>
            <h2>DevProfile</h2>
            <img
              src="https://cdn3d.iconscout.com/3d/premium/thumb/user-account-4924463-4098595.png"
              alt=""
            />
          </Card>
        </Link>
      </Grid>
      <Grid className="grid" item lg={4} xs={12} md={6}>
        <Link to="/home/contactus">
          <Card>
            <h2>Contact US</h2>
            <img
              src="https://cdn3d.iconscout.com/3d/premium/thumb/contact-book-4371904-3626667.png"
              alt=""
            />
          </Card>
        </Link>
      </Grid>
    </Grid>
  );
}

export default HomeScreen;
