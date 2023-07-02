import React, { Component } from "react";
import { Grid } from "@mui/material";
import "./App.css";
import productData from "./dummy-data.json";
import ProductCard from "./Components/product/ProductCard";
import ProductTable from "./Components/product/ProductTable";
import SideBar from "./Components/appbar/SideBar";

export default class App extends Component {
  render() {
    // console.log(productData.products);
    return (
      <div>
        <SideBar />
        <ProductTable className="product-table" products={productData} />
      </div>
    );
  }
}
