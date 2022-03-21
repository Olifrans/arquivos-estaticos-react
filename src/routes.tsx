import MenuNave from "components/Menu_Nave";
import Inicio from "pages/Inicio";
import Menu from "pages/Menu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PaginaPadrao from "components/PaginaPadrao";
import Sobre from "pages/Sobre";
import Footer from "components/Footer";
import NotFound from "pages/NotFound";
import Livro from "pages/Livro";

export default function AppRouter() {
    return (
        <main className="container">
            <Router>
                <MenuNave />
                <Routes>
                    <Route path="/" element={<PaginaPadrao />}>
                        <Route index element={<Inicio />} />
                        <Route path="menu" element={<Menu />} />
                        <Route path="sobre" element={<Sobre />} />
                    </Route>
                    <Route path="livro/:id" element={<Livro />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer />
            </Router>
        </main>
    );
}
