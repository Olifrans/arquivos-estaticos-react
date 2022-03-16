import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Menu from "./pages/Menu";
import "normalize-css";

ReactDOM.render(
  <React.StrictMode>
    <div>
      <Menu />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
