import { useState } from "react";

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

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1000,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const Product = ({ product }) => {
  // const [quantity,setQuantity]=useState(null);
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="product_list">
      <Container className="product_preview" key={product._id}>
        <Card className="product_details">
          <h4>{product._id}</h4>
          <h4>{product.product_name}</h4>
          {product.quantity > 0 ? (
            <div className="A">In Stock</div>
          ) : (
            <div className="NA">Out Of Stock</div>
          )}
          <button onClick={handleOpen}>More Info</button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={{ ...style, width: 200 }}>
              <h2 id="modal-modal-title">{product.product_name}</h2>
              <TableContainer id="modal-modal-description" component={Paper}>
                <Table aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Product Id</TableCell>
                      <TableCell>{product._id}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Product Brand</TableCell>
                      <TableCell>{product.brand["name"]}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Quantity</TableCell>
                      <TableCell>{product.quantity}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Colour</TableCell>
                      <TableCell>{product.color}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Price</TableCell>
                      <TableCell>{product.price}</TableCell>
                    </TableRow>
                  </TableHead>
                </Table>
              </TableContainer>
              <Button onClick={handleClose}>Close</Button>
            </Box>
          </Modal>
        </Card>
      </Container>
    </div>
  );
};

export default Product;
