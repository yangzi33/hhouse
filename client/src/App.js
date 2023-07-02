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
      <Box>
        <TopBar />
        <Box sx={{ display: "flex" }}>
          <ProductTable products={productData} />
        </Box>
      </Box>
    );
  }
}
