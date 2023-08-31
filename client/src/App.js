import React, { Component } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import DrawerNav from "./Components/appbar/DrawerNav";
import productData from "./dummy-data.json";
import ProductTable from "./Components/product/ProductTable";
import TopBar from "./Components/appbar/TopBar";

export default class App extends Component {
  render() {
    return (
      // <Box sx={{ backgroundColor: "#F6F1EB" }}>
      <Box>
        <TopBar />
        <Box
          container
          sx={{
            display: "flex",
            "margin-left": "20%",
            "margin-right": "20%",
            maxWidth: "60%",
            "padding-top": "10px",
          }}
        >
          <ProductTable products={productData} />
        </Box>
      </Box>
    );
  }
}
