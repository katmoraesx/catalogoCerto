import React from "react";
import './DescricaoFilme.css';

const DescricaoFilme = ({ filme, onClose }) => {
  if (!filme) return null;

  const getEstrelas = (nota) => {
    const estrelas = Math.round(nota / 2); // converte de 10 para 5
    return '★'.repeat(estrelas) + '☆'.repeat(5 - estrelas);
  };

  return (
    <div className="descricao-overlay">
      <div className="descricao-box">
        <button className="fechar" onClick={onClose}>×</button>
        <h2>{filme.title}</h2>
        <img src={`https://image.tmdb.org/t/p/w300${filme.poster_path}`} alt={filme.title} />
        <p><strong>Descrição:</strong> {filme.overview}</p>
        <p><strong>Avaliação:</strong> {getEstrelas(filme.vote_average)} ({filme.vote_average}/10)</p>
      </div>
    </div>
  );
};

export default DescricaoFilme;
