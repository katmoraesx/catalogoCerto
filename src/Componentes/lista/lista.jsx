import axios from "axios";
import React, { useState, useEffect } from "react";
import Card from "../card/card";
import estilos from './lista.module.css';
import DescricaoFilme from "../descricao/DescricaoFilme";

const API_key = 'af26cce282aecf5c6cc39a264f29d0a7';
const API_URL = 'https://api.themoviedb.org/3';

export function Lista({ termoBusca }) {
  const [movies, setMovies] = useState([]);
  const [filmeSelecionado, setFilmeSelecionado] = useState(null);

  const buscarFilmes = async () => {
    try {
      let endpoint = termoBusca
        ? `${API_URL}/search/movie?api_key=${API_key}&language=pt-BR&query=${termoBusca}`
        : `${API_URL}/movie/popular?api_key=${API_key}&language=pt-BR`;

      const response = await axios.get(endpoint);
      setMovies(response.data.results);
    } catch (error) {
      console.error("Erro ao buscar filmes", error);
    }
  };

  useEffect(() => {
    buscarFilmes();
  }, [termoBusca]);

  return (
    <div className={estilos.conteiner}>
      <figure style={{ display: 'flex', flexWrap: 'wrap' }}>
        {movies.map(movie => (
          <div key={movie.id} onClick={() => setFilmeSelecionado(movie)}>
            <Card movie={movie} />
          </div>
        ))}
      </figure>

      <DescricaoFilme filme={filmeSelecionado} onClose={() => setFilmeSelecionado(null)} />
    </div>
  );
}
