import styles from "./Item.module.scss";
import { TipoLivro } from "types/TipoLivro";
import TagsLivros from "components/TagsLivros";
import { useNavigate } from "react-router-dom";

export default function Item(props: TipoLivro) {
    
    const { id, title, description, photo } = props;
    const navigate = useNavigate();

    return (
        <div className={styles.item} onClick={() => navigate(`/livro/${id}`)}>
            <div className={styles.item__imagem}>
                <img src={photo} alt={title} />
            </div>

            <div className={styles.item__descricao}>
                <div className={styles.item__titulo}>
                    <h2> {title} </h2>
                    <p> {description} </p>
                </div>
                <TagsLivros {...props} />
            </div>
        </div>
    );
}
