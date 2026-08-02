import React from "react";
import styles from "./NavBar.module.css";

export const Tesoura = 'https://api.iconify.design/ph/scissors.svg?color=white';

const navLinks = [
    { id: 'trabalhos', label: 'Trabalhos', url: '#Works' },
    { id: 'sobre', label: 'Sobre Mim', url: '#Description' },
    { id: 'tabela', label: 'Tabela', url: '#Tabela' },
    { id: 'agendamento', label: 'Agendamento', url: '#Address' },
    { id: 'contato', label: 'Contato', url: '#Contact' }
];

function NavBar() {
    return (
        <header className={styles.header}>
            <nav className={styles.navBar}>
                
                <div className={styles.brandContainer}>
                    <img 
                        className={styles.logo} 
                        src={Tesoura} 
                        alt="Logo Base Barber" 
                    />
                    <span className={styles.brandTitle}>Base</span>
                    <span className={styles.brandSubtitle}>Barber</span>
                </div>

                {/* Links de Navegação */}
                <div className={styles.navLinksContainer}>
                    {navLinks.map((link) => (
                        <a 
                            key={link.id} 
                            href={link.url} 
                            className={styles.navLink}
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* Botão de Ação */}
                <a href="#Address" className={styles.customButton}>
                    Agendar Horário
                </a>

            </nav>
        </header>
    );
}

export default NavBar;