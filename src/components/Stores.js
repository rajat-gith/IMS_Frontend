import React, { useEffect, useState } from "react";
import "../css/Store.css";
import { Paper, Grid, Typography, Button, Modal, Card } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import ClearIcon from "@mui/icons-material/Clear";
import { Container } from "react-bootstrap";
import SearchBox from "./SearchBox";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
// import { Button } from "react-bootstrap";

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

function Stores({ stores, triggerValue }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="storeComponent">
      {stores.map((store) => (
        <Paper className="store_preview" key={store._id}>
          <Grid item className="StoreComponent" lg={12} container spacing={1}>
            <Grid className="grid" item sm={12} md={6} lg={4} xl={2.4} xs={12}>
              <Typography>Name: {store.name}</Typography>
            </Grid>
            <Grid className="grid" item sm={12} md={6} lg={4} xl={2.4} xs={12}>
              <Typography>Owner: {store.owner.owner_name}</Typography>
            </Grid>
            <Grid className="grid" item sm={12} md={6} lg={4} xl={2.4} xs={12}>
              <Typography>Tagline: {store.tagline}</Typography>
            </Grid>
            <Grid className="grid" item sm={12} md={6} lg={4} xl={2.4} xs={12}>
              {store.status == "A" ? (
                <div className="A_1">
                  <DoneIcon />
                </div>
              ) : (
                <div className="NA_1">
                  <ClearIcon />
                </div>
              )}
            </Grid>
            <Grid className="grid" item sm={12} md={6} lg={4} xl={2.4} xs={12}>
              <Button onClick={handleOpen}>Brands</Button>
            </Grid>
          </Grid>
          <Modal open={open} onClose={handleClose}>
            <Paper sx={{ ...style, width: 200 }}>
              <Typography variant="h5"> Brands</Typography>
              {/* <SearchBox></SearchBox> */}
              <div className="brands_details">
                <Paper elevation={3} sx={{ pt: 2 }}>
                  {store.brands.map((key) => (
                    <div className="brands" key={key._id}>
                      <Typography>{key._id}:</Typography>
                      <Typography>{key.name}</Typography>
                    </div>
                  ))}
                </Paper>
              </div>
              <Button onClick={handleClose}>Close</Button>
            </Paper>
          </Modal>
        </Paper>
      ))}
    </div>
  );
}

export default Stores;
