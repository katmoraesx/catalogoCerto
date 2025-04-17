import { Link } from "react-router-dom";
import React, { useState } from "react";
import styles from './BarraNavegacao.module.css';
import { FaHome, FaFilm, FaTv, FaSearch } from "react-icons/fa";

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
    <nav className={styles.navbar}>
      <Link to="/" className={styles.logo}>Katflix</Link>

      <ul className={styles.menu}>
        <li><Link to="/" className={styles.link}><FaHome /> Início</Link></li>
        <li><Link to="/home" className={styles.link}><FaFilm /> Filmes</Link></li>
        <li><Link to="/series" className={styles.link}><FaTv /> Séries</Link></li>
      </ul>

      <div className={styles.search}>
        <input
          type="text"
          placeholder="Buscar..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          onKeyDown={teclaEnter}
          className={styles.campoBusca}
        />
        <button onClick={lidarComBusca} className={styles.botaoBuscar}>
          <FaSearch />
        </button>
      </div>
    </nav>
  );
}
