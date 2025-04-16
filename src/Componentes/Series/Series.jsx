import React, { useState, useEffect } from "react";
import axios from "axios";
import estilos from './Serie.module.css';
import Card from "../card/card";
import DescricaoFilme from "../descricao/DescricaoFilme";

const API_key = 'af26cce282aecf5c6cc39a264f29d0a7';
const API_URL = 'https://api.themoviedb.org/3';

export function Serie() {
  const [series, setSeries] = useState([]);
  const [serieSelecionada, setSerieSelecionada] = useState(null);

  useEffect(() => {
    axios.get(`${API_URL}/tv/popular?api_key=${API_key}&language=pt-BR`)
      .then(response => {
        setSeries(response.data.results);
      })
      .catch(error => {
        console.error("Erro ao buscar séries", error);
      });
  }, []);

  return (
    <main className={estilos.conteiner}>
      <figure style={{ display: 'flex', flexWrap: 'wrap' }}>
        {series.map(serie => (
          <div key={serie.id} onClick={() => setSerieSelecionada(serie)}>
            <Card movie={serie} />
          </div>
        ))}
      </figure>

      {serieSelecionada && (
        <DescricaoFilme filme={serieSelecionada} onClose={() => setSerieSelecionada(null)} />
      )}
    </main>
  );
}
