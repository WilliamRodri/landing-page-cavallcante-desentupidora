import styles from "@/styles/components/Footer.module.css";

export default function Footer(){

    var date = new Date();
    
    return(
        <div className="container">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <div className="col-md-4 d-flex align-items-center">
                    <p className={`mb-3 mb-md-0 ${styles.creditFooter}`}>©Copyright {date.getFullYear()} <a href="/">Desentupidora Cavallcante</a></p>
                </div>

                <ul className={`nav col-md-4 justify-content-center list-unstyled d-flex ${styles.linksFooter}`}>
                    <li className="ms-3"><a href="#"><i className="bi bi-whatsapp"></i></a></li>
                    <li className="ms-3"><a href="#"><i className="bi bi-instagram"></i></a></li>
                </ul>

                <div className={`col-md-4 text-end ${styles.creditCreated}`}>
                    <p>Created by <a href="https://github.com/WilliamRodri" target="_blank">BlackAndWhiteSoft</a></p>
                </div>
            </footer>
        </div>
    );
}