import styles from "./Menu.module.scss";
import Buscador from "./Buscador";
import { useState } from "react";
import Filtros from "./Filtros";
import Ordenador from "./Ordenador";
import Itens from "./Itens";
import MenuNave from "components/Menu_Nave";

export default function Menu() {
    const [busca, setBusca] = useState("");
    const [filtro, setFiltro] = useState<number | null>(null);
    const [ordenador, setOrdenador] = useState("");

    return (
        <>           

            {/* <header className={styles.header}>
                <div className={styles.header__text}>React - Arquivos Estáticos</div>
            </header> */}



            <section className={styles.cardapio}>
                <h3 className={styles.cardapio__titulo}>Selecione Uma Tenologia</h3>

                <Buscador busca={busca} setBusca={setBusca} />
                <div className={styles.cardapio__filtros}>
                    <Filtros filtro={filtro} setFiltro={setFiltro} />
                    <Ordenador ordenador={ordenador} setOrdenador={setOrdenador} />
                </div>
                <Itens busca={busca} filtro={filtro} ordenador={ordenador} />

            </section>
        </>
    );
}
