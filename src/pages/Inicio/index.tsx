
import MenuNave from "components/Menu_Nave";
import menuDeLivros from "data/livros.json";
import styles from "./Inicio.module.scss";
import stylesTema from "styles/Tema.module.scss";
import colecaoDeLivrosWeb from "assets/colecaoweb01.webp";



export default function Inicio(){
    let livrosRecomendado = [...menuDeLivros];

    livrosRecomendado = livrosRecomendado.sort(()=> 0.5 - Math.random()).splice(0,3);

    return(
        <section>  
                      
            <h3 className={stylesTema.titulo}>Leituras Recomendada </h3>
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

            <h3 className={stylesTema.titulo} >Nossas coleções de livros disponiveis </h3>
            <div className={styles.nossaColecao}>
                <img src={colecaoDeLivrosWeb} alt="Coleção de Livros" />
                <div className={styles.nossaColecao__endereco}>
                    Rua Vergueiro, 77 <br /> <br /> Vila Mariana - SP
                </div>
            </div>

        </section>
    );
}