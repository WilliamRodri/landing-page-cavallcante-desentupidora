import Logo from "@/logo.png";
import styles from "@/styles/components/Header.module.css";

export default function Header(){

    var linkWhatsApp = "https://api.whatsapp.com/send?phone=5585985477461&text=Ol%C3%A1%20vim%20pelo%20site%20e%20desejo%20fazer%20um%20or%C3%A7amento!";
    
    return(
        <div className="container">
            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                <div className="col-md-3 mb-2 mb-md-0">
                    <a href="/" className={`d-inline-flex link-body-emphasis text-decoration-none ${styles.logo}`}>
                        <img src={Logo.src} alt="Logo desentupidora Cavalcante" />
                    </a>
                </div>

                <ul className={`nav col-12 col-md-auto mb-2 justify-content-center mb-md-0 ${styles.linksHeader}`}>
                    <li><a href="/" className={`nav-link px-2 ${styles.links}`}>Início</a></li>
                    <li><a href="#servicos" className={`nav-link px-2 ${styles.links}`}>Serviços</a></li>
                    <li><a href="#duvidas" className={`nav-link px-2 ${styles.links}`}>Dúvidas</a></li>
                    <li><a href="#contatos" className={`nav-link px-2 ${styles.links}`}>Contatos</a></li>
                    <li><a href="#sobre" className={`nav-link px-2 ${styles.links}`}>Sobre</a></li>
                </ul>

                <div className="col-md-3 text-end">
                    <a href="tel:+5585985477461" className={`btn btn-outline-primary me-2 ${styles.buttonHeader}`} target="_blank">Ligue Agora!</a>
                </div>
            </header>
        </div>
    );
}