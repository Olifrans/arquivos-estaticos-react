import { ReactComponent as Logo } from "assets/logo.svg";
import styles from "./MenuNave.module.scss";
import {Link} from "react-router-dom";

export default function MenuNave(){
    const rotas = [
        {
            labe: "Inicio",
            to: "/"
        },
        {
            labe: "Menu",
            to: "/menu"
        },
        {
            labe: "Sobre",
            to: "/sobre"
        }
    ];

    return(
        <nav className={styles.menu}>
            <Logo />
            <ul className={styles.menu__list}>
                {rotas.map((rota, index)=>(
                    <li key={index} className={styles.menu__link}>

                        <Link to={rota.to}>
                            {rota.labe}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}