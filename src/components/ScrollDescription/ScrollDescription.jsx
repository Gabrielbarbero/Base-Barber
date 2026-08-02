import React, { useState, useRef, useEffect } from "react";
import styles from "./ScrollDescription.module.css";

const barberProfiles = [
    {
        id: '01',
        photo: 'https://thumbs.dreamstime.com/b/closeup-bearded-man-stylish-hairstyle-beard-bearded-man-man-s-haircut-barber-shop-portrait-stylish-young-man-perfect-343903276.jpg?w=992',
        name: 'Cleber',
        description: 'Especialista em cortes clássicos e design de barba. Focado em oferecer um atendimento detalhista para garantir um visual impecável e alinhado ao seu estilo.',
        experience: '3 anos'
    },
    {
        id: '02',
        photo: 'https://thumbs.dreamstime.com/b/side-front-portrait-stylish-young-man-perfect-beard-close-up-young-bearded-man-stylish-hairstyle-beard-side-view-bearded-343899106.jpg?w=992',
        name: 'Jamal',
        description: 'Apaixonado por estilos modernos, degradês (fades) e tendências atuais. Traz energia e criatividade para deixar o seu corte com muita personalidade.',
        experience: '1 ano'
    },
    {
        id: '03',
        photo: 'https://thumbs.dreamstime.com/b/beauty-salon-portrait-man-barbershop-confidence-hair-makeover-haircut-hairstylist-information-barber-beauty-319281449.jpg?w=992',
        name: 'Contiero',
        description: 'Profissional versátil, que domina desde a tesoura tradicional até os cortes mais arrojados. Preza pelo conforto do cliente e por um acabamento de alta qualidade.',
        experience: '3 anos'
    },
];

function ScrollDescription() {
    const [openMenuId, setOpenMenuId] = useState(null); 
    
    const containerRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (
                containerRef.current &&
                !containerRef.current.contains(event.target)
            ) {
                setOpenMenuId(null);
            }
        }

        if (openMenuId !== null) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [openMenuId]);

    const toggleMenu = (id) => {
        setOpenMenuId(openMenuId === id ? null : id);
    };

    const closeMenu = (event) => {
        event.stopPropagation();
        setOpenMenuId(null);
    };

    return (
        <article className={styles.wrapper}>
            <h1 className={styles.sectionTitle}>Barbeiros</h1>
            
            <div className={styles.cardsRow} ref={containerRef}>
                {barberProfiles.map((barber) => (
                    <div key={barber.id} className={styles.card}>
                        
                        <button className={styles.cardButton} onClick={() => toggleMenu(barber.id)}>
                            <img src={barber.photo} alt={`Foto de ${barber.name}`} className={styles.cardImage} />
                            <span className={styles.cardTitle}>{barber.name}</span>
                            <span className={styles.cardSubtitle}>Experiência: {barber.experience}</span>
                        </button>

                        <div className={openMenuId === barber.id ? styles.navOpen : styles.navClosed}>
                            
                            <button className={styles.closeBtn} onClick={closeMenu}>✕</button>
                            
                            <img src={barber.photo} alt={`Foto de ${barber.name}`} className={styles.modalImage} />
                            <span className={styles.modalTitle}>{barber.name}</span>
                            <span className={styles.expText}>{barber.experience}</span>
                            <p className={styles.descText}>{barber.description}</p>
                            
                        </div>
                    </div>
                ))}
            </div>
        </article>
    );
}

export default ScrollDescription;