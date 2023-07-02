import React, { Component } from "react";
import { Grid } from "@mui/material";

export default class SideBar extends Component {
  render() {
    const sideBarStyles = {
      height: "100%",
      width: "20%",
      position: "sticky",
      border: "2px solid black",
      "padding-left": "10px",
    };
    return (
      <Grid style={sideBarStyles}>
        <div>SideBar</div>
        <div>SideBar</div>
        <div>SideBar</div>
        <div>SideBar</div>
        <div>SideBar</div>
      </Grid>
    );
  }
}
