import React, { useState } from "react";
import { Button, Grid, Paper, Typography } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import ClearIcon from "@mui/icons-material/Clear";

function StoreOwner({ Owners }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  console.log(Owners);
  return (
    <div className="StoreOwnerComponent">
      <Paper>
        {Array.isArray(Owners)
          ? Owners.map((owner) => (
              <Paper className="store_preview" key={owner._id}>
                <Grid
                  item
                  className="StoreComponent"
                  lg={12}
                  container
                  spacing={1}
                >
                  <Grid
                    className="grid"
                    item
                    sm={12}
                    md={6}
                    lg={4}
                    xl={2.4}
                    xs={12}
                  >
                    <Typography>Name: {owner.owner_name}</Typography>
                  </Grid>
                  <Grid
                    className="grid"
                    item
                    sm={12}
                    md={6}
                    lg={4}
                    xl={2.4}
                    xs={12}
                  >
                    <Typography>Tagline: {owner.tagline}</Typography>
                  </Grid>
                  <Grid
                    className="grid"
                    item
                    sm={12}
                    md={6}
                    lg={4}
                    xl={2.4}
                    xs={12}
                  >
                    {owner.owner_status == "A" ? (
                      <div className="A_1">
                        <DoneIcon />
                      </div>
                    ) : (
                      <div className="NA_1">
                        <ClearIcon />
                      </div>
                    )}
                  </Grid>
                  <Grid
                    className="grid"
                    item
                    sm={12}
                    md={6}
                    lg={4}
                    xl={2.4}
                    xs={12}
                  >
                    <Button onClick={handleOpen}>Stores</Button>
                  </Grid>
                </Grid>
              </Paper>
            ))
          : null}
      </Paper>
    </div>
  );
}

export default StoreOwner;
