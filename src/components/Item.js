import { Button, Paper } from "@mui/material";
import React from "react";

function Item({ item }) {
  return (
    <Paper>
      <img src={item.image} alt="" style={{ width: "100%", height: "70vh" }} />
      <h2>REVISION</h2>
      {/* <p>{item.description}</p> */}

      <Button className="CheckButton">Check it out!</Button>
    </Paper>
  );
}

export default Item;
