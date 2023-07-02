import React, { Component } from "react";
import { Grid } from "@mui/material";

export default class SideBar extends Component {
  render() {
    const sideBarStyles = {
      height: "100%",
      border: "2px black",
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
