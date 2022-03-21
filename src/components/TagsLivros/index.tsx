import classNames from "classnames";
import { TipoLivro } from "types/TipoLivro";
import styles from "./TagsLivros.module.scss";

export default function TagsLivros({
    category,
    size,
    serving,
    price,
}: TipoLivro) {
    return (
        <div className={styles.tags}>
            <div
                className={classNames({
                    [styles.tags__tipo]: true,
                    [styles[`tags__tipo__${category.label.toLowerCase()}`]]: true,
                })}
            >
                {category.label}
            </div>

            <div className={styles.tags__quantidade}>{size}gramas</div>
            
            <div className={styles.tags__qtdpessoas}>
                Serve {serving} Pessoa{serving === 1 ? "" : "s"}
            </div>

            <div className={styles.tags__valor}>R$ {price.toFixed(2)}</div>
        </div>
    );
}
