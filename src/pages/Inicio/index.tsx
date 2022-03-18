import MenuNave from "components/Menu_Nave";
import menuDeLivros from "data/livros.json";
import styles from "./Inicio.module.scss";



export default function Inicio(){
    let livrosRecomendado = [...menuDeLivros];

    livrosRecomendado = livrosRecomendado.sort(()=> 0.5 - Math.random()).splice(0,3);

    return(
        <section>
            <MenuNave />
            <h3 className={styles.titulo}>Leituras Recomendada </h3>

            <div className={styles.recomendados}>
                {livrosRecomendado.map(item => (
                    <div key={item.id} className={styles.recomendado}>
                        <div className={styles.recomendado__imagem}>
                            <img  src={item.photo} alt={item.title} />
                            <button className={styles.recomendado__botao}>
                            Ver mais
                            </button>
                        </div>
                    </div>
                ))};
            </div>
        </section>
    );
}