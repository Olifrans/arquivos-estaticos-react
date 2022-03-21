import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "normalize-css";
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
