import { ReactComponent as Logo } from "assets/logo.svg";
import styles from "./MenuNave.module.scss";

export default function MenuNave(){
    return(
        <nav className={styles.menu}>
            <Logo />
        </nav>
    );
}