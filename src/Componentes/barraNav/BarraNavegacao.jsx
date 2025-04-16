import React, { useState } from "react";
import styles from './BarraNavegacao.module.css';

export function BarraNavegacao({ aoBuscar }) {
  const [busca, setBusca] = useState("");

  const lidarComBusca = () => {
    if (busca.trim() !== "") {
      aoBuscar(busca);
    }
  };

  const teclaEnter = (e) => {
    if (e.key === "Enter") {
      lidarComBusca();
    }
  };

  return (
    <nav className={styles.conteiner}>
      <span className={styles.logo}>Katflix</span>
      <ul className={styles.menu}>
        <li>Início</li>
        <li>Filmes</li>
        <li>Séries</li>
        <li>
          <input 
            type="text" 
            placeholder="Buscar filme..." 
            value={busca} 
            onChange={(e) => setBusca(e.target.value)} 
            onKeyDown={teclaEnter}
            className={styles['campo-busca']}
          />
          <button onClick={lidarComBusca} className={styles['botao-buscar']}>
            Buscar
          </button>
        </li>
      </ul>
    </nav>
  );
}
