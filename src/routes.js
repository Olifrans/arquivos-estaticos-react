
import MenuNave from "components/Menu_Nave";
import Inicio from "pages/Inicio";
import Menu from "pages/Menu";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import PaginaPadrao from "components/PaginaPadrao";

export default function AppRouter(){
    return(
        <main>
            <Router>
                <MenuNave />
                
                <Routes>
                    <Route path="/" element={<PaginaPadrao />}>
                        <Route index element={<Inicio />} />    
                        <Route path="menu" element={<Menu />} />    
                    </Route>                                
                </Routes>
            </Router>    
        </main>           
    );
}