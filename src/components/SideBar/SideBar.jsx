import React, { useState, useRef, useEffect } from 'react';
import styles from "./SideBar.module.css";


const navLinks = [
    { id: 'trabalhos', label: 'Trabalhos', url: '#Works' },
    { id: 'sobre', label: 'Sobre Mim', url: '#Description' },
    { id: 'tabela', label: 'Tabela', url: '#Tabela' },
    { id: 'agendamento', label: 'Agendamento', url: '#Address' },
    { id: 'contato', label: 'Contato', url: '#Contact' }
];

function SideBar() {

    const [isOpen, setIsOpen] = useState(false);
    const sidebarRef = useRef(null);
    const buttonRef = useRef(null);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    useEffect(() => {
        function handleClickOutside(event) {
            if (
                sidebarRef.current &&
                !sidebarRef.current.contains(event.target) &&
                buttonRef.current &&
                !buttonRef.current.contains(event.target)
            ) {
                setIsOpen(false);
            }
        }

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    return (
        <div className={styles.container}>
            
            {/* BOTÃO FIXO (Sempre visível) */}
            <button 
                ref={buttonRef} 
                className={styles.sidebarButton} 
                onClick={toggleMenu}
                aria-expanded={isOpen}
                aria-label="Alternar Menu"
            > 
                <img 
                    className={styles.sidebarImg} 
                    src="data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4 6H20M4 12H20M4 18H20' stroke='%23ffffff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E" 
                    alt="Ícone de Menu" 
                />
            </button>

            {/* MENU DESLIZANTE */}
            <nav 
                ref={sidebarRef} 
                className={`${styles.sidebarMenu} ${isOpen ? styles.open : styles.closed}`}
                aria-hidden={!isOpen}
            >
                
                {/* BOTÃO DE FECHAR */}
                <button 
                    className={styles.closeButton} 
                    onClick={closeMenu}
                    aria-label="Fechar Menu"
                >
                    ✕
                </button>

                <ul className={styles.menuList}>
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