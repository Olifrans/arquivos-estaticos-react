import stylesTema from "styles/Tema.module.scss";
import styles from "./Sobre.module.scss";
import sobreNos from "assets/colecao08.jpg";
import sobreNos01 from "assets/sobre_nos01.jpg";
import sobreNos02 from "assets/sobre_nos02.jpg";
const imagens = [sobreNos01, sobreNos02];

export default function Sobre() {
    return (
        <section>
            <h3 className={stylesTema.titulo}> Sobre Nós </h3>
            <div className={styles.sobreNos}>

                <img src={sobreNos} alt="Livros de Tecnologias" />
                <div className={styles.sobreNos__texto}>
                    <p> Livros de Tecnológia Inovação!</p>
                    <p>
                        Promovemos a pesquisa e o fomento de tecnologias para o
                        desenvolvimento econômica e científico.
                    </p>
                    <p>
                        Com propósito propiciar a inclusão digital, social e educativa,
                        assim como estimular a preservação do meio ambiente
                    </p>
                </div>
            </div>
            <div className={styles.imagens}>
                {imagens.map((imagem, index) => (
                    <div key={index} className={styles.imagens__imagem}>
                        <img src={imagem} alt="imagem de livro" />
                    </div>
                ))}
            </div>          
        </section>
    );
}
