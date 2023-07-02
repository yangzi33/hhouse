import React, { Component } from "react";
import { Grid } from "@mui/material";
import ProductCard from "./ProductCard";

export default class ProductTable extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { products, className = "" } = this.props;
    const tableStyle = {
      flex: "1",
      "margin-left": "10px",
      "margin-top": "20px",
      "max-width": "60%",
    };
    return (
      <Grid style={tableStyle} container spacing={1}>
        {products.map((product) => (
          <Grid item xs={3}>
            <ProductCard
              name={product.name}
              imagePath={product.imagePath}
              price={product.price}
            />
          </Grid>
        ))}
      </Grid>
    );
  }
}
