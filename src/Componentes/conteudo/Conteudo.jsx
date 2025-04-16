import estilos from './Conteudo.module.css';
import { Lista } from '../lista/lista';

export default function Conteudo({ termoBusca }) {
  return (
    <main className={estilos.conteiner}>
      <Lista termoBusca={termoBusca} />
    </main>
  );
}
