
import MenuNave from "components/Menu_Nave";
import Inicio from "pages/Inicio";
import Menu from "pages/Menu";
import styles from "./Routes.module.scss";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

export default function AppRouter(){
    return(
        <main>
            <Router>
                <MenuNave />

                <header className={styles.header}>
                    <div className={styles.header__text}>React - Arquivos Estáticos</div>
                </header>

                <Routes>
                    <Route path="/" element={<Inicio />} />
                    <Route path="/menu" element={<Menu />} />                
                </Routes>
            </Router>    

        </main>
           
    );
}