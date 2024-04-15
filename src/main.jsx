import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import "./assets/css/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  // Removed from project to prevent double rendering, add me back
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);
