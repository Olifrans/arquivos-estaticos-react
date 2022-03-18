


// import massa1 from "assets/sobre/logica.jpg";
// import massa2 from "assets/sobre/massa2.png";

import stylesTema from "styles/Tema.module.scss";
import styles from "./Sobre.module.scss";
import sobreNos from "assets/sobre/sobre_nos.jpg";
import sobreNos01 from "assets/sobre/sobre_nos01.jpg";
import sobreNos02 from "assets/sobre/sobre_nos02.jpg";

export default function Sobre(){

    const imagens = [sobreNos01, sobreNos02];


    return(

        <section>
            <h3 className={stylesTema.titulo}> Sobre Nós </h3>
            <div className={styles.sobreNos}>
                <img src="" alt="Livros de Tecnologias" />

                <div className={styles.sobreNos__texto}>
                    <p> Livros de Tecnológia Inovação!</p>
                    <p>Promovemos a pesquisa e o fomento de tecnologias para o desenvolvimento econômica e científico.</p>                    
                    <p>Com propósito propiciar a inclusão digital, social e educativa, assim como estimular a preservação do meio ambiente</p>
                </div>
            </div>
            
            <div className={styles.imagens}>
                {imagens.map((imagem, index) => (
                    <div key={index} className={styles.imagens__imagem}>
                        <img src={imagem} alt="imagem de massa" />
                    </div>
                ))}
            </div>


        </section>



    );
}