import estilos from './Cabecalho.module.css';
import { BsFillPlayFill, BsInfoCircle } from "react-icons/bs";

export function Cabecalho() {
  return (
    <header className={estilos.conteiner}>
      {/* Vídeo em segundo plano */}
      <div className={estilos.videoWrapper}>
  <iframe
    src="https://www.youtube.com/embed/k9bUTfFF3_4?start=59&autoplay=1&mute=1&loop=1&controls=0&playlist=k9bUTfFF3_4"
    title="Disney Castle Video"
    frameBorder="0"
    allow="autoplay; fullscreen"
    allowFullScreen
  ></iframe>
</div>

      {/* Conteúdo por cima do vídeo */}
      <div className={estilos.overlay}></div>
      <div className={estilos.content}>
        <h1 className={estilos.title}>Katflix</h1>
        <p className={estilos.description}>Os melhores conteúdos para você, em um só lugar.</p>
        <div className={estilos.buttons}>
          <button className={estilos.playButton}><BsFillPlayFill /> Assistir Agora</button>
          <button className={estilos.infoButton}><BsInfoCircle /> Mais Informações</button>
        </div>
      </div>
    </header>
  );
}
