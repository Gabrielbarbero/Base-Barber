import React from "react";
import styles from "./Footer.module.css";
import { Tesoura } from "../Address/Address";

function Footer() {
    // Dica Sênior: Pega o ano atual automaticamente
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footerContainer}>
            
            {/* Informações de Copyright */}
            <div>
                <div className={styles.footerText}>
                    <div className={styles.footerImageBackground}>
                        <img 
                            src={Tesoura} 
                            alt="Ícone de tesoura" 
                            className={styles.footerImage} 
                        />
                    </div>
                    
                    {/* Injetando a variável do ano dinamicamente no JSX */}
                    <p className={styles.footerDescription}>
                        Base Barber © {currentYear} · Todos os direitos reservados
                    </p>
                </div>
            </div>
            
            {/* Call to Action (Agendamento) */}
            <div className={styles.footerContainerLink}>
                <a href="#agendar" className={styles.footerLink}>
                    Agendar Horário →
                </a>
            </div>
            
        </footer>
    );
}

export default Footer;