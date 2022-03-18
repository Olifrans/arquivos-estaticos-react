import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Menu from "./pages/Menu";
import "normalize-css";
import Inicio from "pages/Inicio";
import AppRouter from "routes";


//Forma java script de redirectio de pages
//const componentAtual = window.location.pathname === "/" ? <Inicio /> : <Menu />;

ReactDOM.render(
    <React.StrictMode>
        <div>
            <AppRouter />           
        </div>
    </React.StrictMode>,
    document.getElementById("root")
);
