import styles from "./SideBar.module.css";
import React, { useState, useRef, useEffect } from 'react';

const navLinks = [
    { id: 'trabalhos', label: 'Trabalhos', url: '#Works' },
    { id: 'sobre', label: 'Sobre Mim', url: '#Description' },
    { id: 'tabela', label: 'Tabela', url: '#Tabela' },
    { id: 'agendamento', label: 'Agendamento', url: '#Address' },
    { id: 'contato', label: 'Contato', url: '#Contact' }
];

function SideBar() {
    const [openMenu, setOpenMenu] = useState(false);
    const sidebarRef = useRef(null);
    const buttonRef = useRef(null);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };

    const closeMenu = () => {
        setOpenMenu(false);
    };

    // Fecha o menu ao clicar fora dele
    useEffect(() => {
        function handleClickOutside(event) {
            if (
                sidebarRef.current &&
                !sidebarRef.current.contains(event.target) &&
                buttonRef.current &&
                !buttonRef.current.contains(event.target)
            ) {
                setOpenMenu(false);
            }
        }

        if (openMenu) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [openMenu]);

    return(
        <div className={styles.container}>
            
            {/* BOTÃO FIXO (Sempre visível) */}
            <button ref={buttonRef} className={styles.sidebar_Buttom} onClick={toggleMenu}> 
                <img className={styles.sidebar_img} src="data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4 6H20M4 12H20M4 18H20' stroke='%23ffffff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E" alt="Menu" />
            </button>

            {/* MENU DESLIZANTE */}
            <nav ref={sidebarRef} className={`${styles.sidebar_menu} ${openMenu ? styles.aberta : styles.fechada}`}>
                
                {/* BOTÃO DE FECHAR */}
                <button className={styles.close_Buttom} onClick={closeMenu}>
                    ✕
                </button>

                <ul className={styles.lista_menu}>
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <a href={link.url} onClick={closeMenu}>
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>

        </div>
    );
}

export default SideBar;