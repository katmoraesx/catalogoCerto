import React from "react";
import Perfil from "../perfil/Perfil";
import estilos from './Perfis.module.css';

export default function Perfis() {
  const perfis = [
    { id: 1, nome: "Kat", imagem: "/" },
    { id: 2, nome: "Mi", imagem: "/imgs/leo.png" },
    { id: 3, nome: "Duda", imagem: "/imgs/clara.png" },
    { id: 4, nome: "Pam", imagem: "/imgs/guest.png" },
  ];

  return (
    <div className={estilos.container}>
      <h1 className={estilos.titulo}>Quem está assistindo?</h1>
      <div className={estilos.perfis}>
        {perfis.map(perfil => (
          <Perfil key={perfil.id} nome={perfil.nome} imagem={perfil.imagem} />
        ))}
      </div>
    </div>
  );
}
