import estilos from './Cabecalho.module.css';
import { BsFillPlayFill, BsInfoCircle } from "react-icons/bs";

export function Cabecalho() {
    return (
        <header className={estilos.conteiner}>
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






