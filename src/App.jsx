import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Componentes
import { Cabecalho } from "./Componentes/Cabecalho/Cabecalho";
import Content from "./Componentes/conteudo/Conteudo";
import { BarraNavegacao } from "./Componentes/barraNav/BarraNavegacao";
import { Footer } from "./Componentes/footer/Footer";
import Perfis from "./Componentes/perfis/Perfis";
import Series from "./Componentes/Series/Series"; // Página de séries

function App() {
  const [termoBusca, setTermoBusca] = useState("");

  return (
    <Router>
      <Routes>

        {/* Página inicial com os perfis */}
        <Route path="/" element={<Perfis />} />

        {/* Página principal com filmes */}
        <Route
          path="/home"
          element={
            <>
              <BarraNavegacao aoBuscar={setTermoBusca} />
              <Cabecalho />
              <Content termoBusca={termoBusca} />
              <Footer />
            </>
          }
        />

        {/* Página de séries */}
        <Route
          path="/series"
          element={
            <>
              <BarraNavegacao aoBuscar={setTermoBusca} />
              <Cabecalho />
              <Series termoBusca={termoBusca} />
              <Footer />
            </>
          }
        />

      </Routes>
    </Router>
  );
}

export default App;
