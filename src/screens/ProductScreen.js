import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Form } from "react-bootstrap";
import Product from "../components/Products";
import { useDispatch, useSelector } from "react-redux";
import "../css/ProductScreen.css";
import { listProducts, createProduct } from "../actions/productActions";
import { Link } from "react-router-dom";
import {
  PRODUCT_CREATE_REQUEST,
  PRODUCT_CREATE_RESET,
} from "../constants/productConstants";

import {
  Card,
  Box,
  Button,
  TableContainer,
  Table,
  Paper,
  TableHead,
  TableRow,
  TableCell,
  Modal,
  Container,
} from "@mui/material";
import SearchBox from "../components/SearchBox";

const style = {
  position: "absolute",

  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  padding: 4,
};

function ProductScreen() {
  const dispatch = useDispatch();
  const [product_name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [brand, setBrand] = useState("");
  const [colour, setColour] = useState("");
  const [cat, setCat] = useState("");
  const [price, setPrice] = useState("");
  const [desc, setDesc] = useState("");


  const navigate = useNavigate();
  const search = useLocation();
  const keyword = search.search;
  console.log(search.search)

  const productList = useSelector((state) => state.productList);
  const { error, loading, products } = productList;
  const handleClick = (e) => {
    navigate("/home/products");
  };

  const productCreate = useSelector((state) => state.productCreate);
  const {
    loading: loadingCreate,
    error: errrorCreate,
    success: successCreate,
    product: createdProduct,
  } = productCreate;

  useEffect(() => {
    console.log(products);
    dispatch(listProducts(keyword));
    if (products) {
      handleClick();
    }
  }, []);
  console.log(products);
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      createProduct(colour, cat, brand, quantity, price, product_name, desc)
    );
  };

  const [buttonDesc, setButtonDesc] = useState(false);

  return (
    <div className="ProductScreen">
      <h2>Products Panel</h2>
      <button onClick={handleOpen}>Add Product</button>
      {/* <h5>Click to Show Details of the Product</h5> */}
      <SearchBox></SearchBox>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...style, width: 200 }}>
          <h2 id="modal-modal-title">Product</h2>
          <Container id="modal-modal-description" component={Paper}>
            <Form className="addform" onSubmit={submitHandler}>
              <Form.Group controlId="name">
                <div className="group">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Product Name"
                    value={product_name}
                    onChange={(e) => setName(e.target.value)}
                  ></Form.Control>
                </div>
              </Form.Group>
              <Form.Group controlId="brand">
                <div className="group">
                  <Form.Label>Brand</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Product Brand."
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                  ></Form.Control>
                </div>
              </Form.Group>
              <Form.Group controlId="quantity">
                <div className="group">
                  <Form.Label>Quantity</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Product Quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                  ></Form.Control>
                </div>
              </Form.Group>
              <Form.Group controlId="price">
                <div className="group">
                  <Form.Label>Price</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Product Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  ></Form.Control>
                </div>
              </Form.Group>
              <Form.Group controlId="colour">
                <div className="group">
                  <Form.Label>Colour</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Product Colour"
                    value={colour}
                    onChange={(e) => setColour(e.target.value)}
                  ></Form.Control>
                </div>
              </Form.Group>
              <Form.Group controlId="cat">
                <div className="group">
                  <Form.Label>Category</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Product Cat"
                    value={cat}
                    onChange={(e) => setCat(e.target.value)}
                  ></Form.Control>
                </div>
              </Form.Group>
              <Form.Group controlId="desc">
                <div className="group">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Product Desc"
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}
                  ></Form.Control>
                </div>
              </Form.Group>
              <Button className="mt-3" type="submit" variant="primary">
                Register
              </Button>
            </Form>
          </Container>
          <Button onClick={handleClose}>Close</Button>
        </Box>
      </Modal>
      {products &&
        products.map((product) => (
          <Product product={product} triggerValue={buttonDesc} />
        ))}
    </div>
  );
}

export default ProductScreen;
