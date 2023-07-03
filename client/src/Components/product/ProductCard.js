import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function ProductCard(props) {
  const { name, price, imagePath } = props;
  const productTitleStyles = {
    "font-size": "18px",
  };
  const productPriceStyles = {
    "font-weight": "bold",
    "font-size": "20px",
  };
  return (
    <Card sx={{ maxWidth: 350, maxHeight: 300 }}>
      {/* <CardActionArea sx={{ height: "100%" }}> */}
      <CardActionArea disableSpacing>
        <CardMedia component="img" height="200" image={imagePath} />
        <CardContent>
          <Typography sx={productTitleStyles} noWrap gutterBottom>
            {name}
          </Typography>
          <Typography sx={productPriceStyles}>${price}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
