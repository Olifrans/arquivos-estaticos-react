import React from "react";
import styles from "./Ordenador.module.scss";
import opcoes from "./opcoes.json";
import { useState } from "react";
import classNames from "classnames";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

interface Props {
  ordenador: string;
  setOrdenador: React.Dispatch<React.SetStateAction<string>>;
}

export default function Ordenador({ ordenador, setOrdenador }: Props) {
  const [aberto, setAberto] = useState(false);

  return (
    <button
      onClick={() => setAberto(!aberto)}
      className={styles.ordenador}
      onBlur={() => setAberto(false)}
    >
      <span> Ordenador Por</span>

      {aberto ? (
        <MdKeyboardArrowUp size={30} />
      ) : (
        <MdKeyboardArrowDown size={30} />
      )}

      <div
        className={classNames({
          [styles.ordenador__options]: true,
          [styles["ordenador__options--ativo"]]: aberto,
        })}
      >
        {opcoes.map((opcao) => (
          <div
            className={styles.ordenador__option}
            key={opcao.value}
            onClick={() => setOrdenador(opcao.value)}
          >
            {opcao.nome}
          </div>
        ))}
      </div>
    </button>
  );
}
