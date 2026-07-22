import styles from "./NavBar.module.css";
import React from "react";
export const Tesoura = 'https://api.iconify.design/ph/scissors.svg?color=white'
const navLinks = [
    { id: 'trabalhos', label: 'Trabalhos', url: '#Works' },
    { id: 'sobre', label: 'Sobre Mim', url: '#Description' },
    { id: 'tabela', label: 'Tabela', url: '#Tabela' },
    { id: 'agendamento', label: 'Agendamento', url: '#Address' },
    { id: 'contato', label: 'Contato', url: '#Contact' }
];

function NavBar() {
    return (
        <header className={styles.Header}>
            <nav className={styles.NavBar}>

                {/* Versão compacta: mobile e tablet (até 1100px) */}
                <div className={styles.mobile_NavBar}>
                    <img className={styles.logo_Mobile} src={Tesoura} alt="Logo" />
                    <span className={styles.title_NavBar_Mobile}>Base</span>
                    <span className={styles.subtitle_NavBar_Mobile}>Barber</span>
                </div>

                {/* Versão completa: apenas desktop (a partir de 1101px) */}
                <div className={styles.text_NavBar}>
                    <img className={styles.logo} src={Tesoura} alt="Logo" />
                    <span className={styles.title_NavBar}>Base</span>
                    <span className={styles.subtitle_NavBar}>Barber</span>
                </div>

                <div className={styles.Connect_NavBar}>
                    {navLinks.map((link) => (
                        <a key={link.id} href={link.url}>
                            {link.label}
                        </a>
                    ))}
                </div>

                <a href="#Address" className={styles.Custom_Buttom}>
                    Agendar Horário
                </a>

            </nav>
        </header>
    );
}

export default NavBar;