import React from "react";
import estilos from './Perfil.module.css';
import { useNavigate } from "react-router-dom";

export default function Perfil({ nome, imagem }) {
  const navigate = useNavigate();

  const entrar = () => {
    navigate("/home");
  };

  return (
    <div className={estilos.card} onClick={entrar}>
      <img src={imagem} alt={nome} className={estilos.imagem} />
      <p className={estilos.nome}>{nome}</p>
    </div>
  );
}
