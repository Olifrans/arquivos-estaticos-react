
import Inicio from "pages/Inicio";
import Menu from "pages/Menu";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

export default function AppRouter(){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/menu" element={<Menu />} />                
            </Routes>
        </Router>        
    );
}