import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import SignIn from "./Components/sign-in/SignIn";
import SignUp from "./Components/sign-up/SignUp";
import ProductCard from "./Components/product/ProductCard";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

// For Local testing only
// Remove for deployment
// root.use(express.static(__dirname));

// root.get("/*", function (req, res) {
//   res.sendFile(path.join(__dirname, "index.html"));
// });

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
