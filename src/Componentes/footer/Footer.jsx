import estilos from './Footer.module.css';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

export function Footer() {
    return (
        <footer className={estilos.conteiner}>
            <div className={estilos.socialMedia}>
                <FaFacebook />
                <FaTwitter />
                <FaInstagram />
                <FaYoutube />
            </div>
            <p>© 2025 Katflix. Todos os direitos reservados.</p>
            <p className={estilos.links}>Termos de Uso | Política de Privacidade | Ajuda</p>
        </footer>
    );
}
