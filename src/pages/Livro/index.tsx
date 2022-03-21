import styles from "./Livros.module.scss";
import { useParams, useNavigate, Routes, Route } from "react-router-dom";
import menuDeLivrosDisponiveis from "data/livros.json";
import TagsLivros from "components/TagsLivros";
import NotFound from "pages/NotFound";
import PaginaPadrao from "components/PaginaPadrao";

export default function Livro() {
    const { id } = useParams();
    const navigate = useNavigate();
    const livro = menuDeLivrosDisponiveis.find((item) => item.id === Number(id));

    if (!livro) {
        return <NotFound />;
    }

    return (
        <Routes>
            <Route path="*" element={<PaginaPadrao />}>
                <Route
                    index
                    element={
                        <>
                            <button className={styles.voltar} onClick={() => navigate(-1)}>
                                {"<Voltar para a página anterior"}
                            </button>

                            <section className={styles.container}>
                                <h1 className={styles.titulo}>{livro.title}</h1>

                                <div className={styles.imagem}>
                                    <img src={livro.photo} alt={livro.title} />
                                </div>

                                <div className={styles.conteudo}>
                                    <p className={styles.conteudo__descricao}>
                                        {" "}
                                        {livro.description}
                                    </p>

                                    <TagsLivros {...livro} />
                                </div>
                            </section>
                        </>
                    }
                />
            </Route>
        </Routes>
    );
}
