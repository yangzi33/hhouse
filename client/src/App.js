import React, { Component } from "react";
import { Grid } from "@mui/material";
import "./App.css";
import productData from "./dummy-data.json";
import ProductCard from "./Components/product/ProductCard";
import ProductTable from "./Components/product/ProductTable";
import TopBar from "./Components/appbar/TopBar";
import SideBar from "./Components/appbar/SideBar";
import PersistentDrawerLeft from "./Components/appbar/PersistentDrawer";

export default class App extends Component {
  render() {
    // console.log(productData.products);
    const appContainer = { display: "flex" };
    return (
      <>
        {/* <TopBar /> */}
        <PersistentDrawerLeft />
        <div style={appContainer}>
          {/* <SideBar /> */}
          <ProductTable className="product-table" products={productData} />
        </div>
      </>
    );
  }
}
