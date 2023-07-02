import React, { Component } from "react";
import { Grid } from "@mui/material";
import "./App.css";
import productData from "./dummy-products.json";
import ProductCard from "./Components/product/ProductCard";

export default class App extends Component {
  render() {
    // console.log(productData.products);
    const productList = productData.products;
    console.log(productList);
    return (
      <div>
        <Grid container spacing="1">
          {productList.map((product) => {
            <Grid item xs={3}>
              <ProductCard
                name="name"
                price="11"
                imagePath="/product-img/sylv.jpg"
                // name={product.name}
                // price={product.price}
                // imagePath={product.imagePath}
              />
              ;
            </Grid>;
          })}
        </Grid>
      </div>
    );
  }
}
