import styles from "./Scroll_Description.module.css";
import React, { useState, useRef, useEffect } from "react";

const profiDesc = [
    {
        id: '01',
        photo: 'https://thumbs.dreamstime.com/b/closeup-bearded-man-stylish-hairstyle-beard-bearded-man-man-s-haircut-barber-shop-portrait-stylish-young-man-perfect-343903276.jpg?w=992',
        name: 'Cleber',
        Description: 'Especialista em cortes clássicos e design de barba. Focado em oferecer um atendimento detalhista para garantir um visual impecável e alinhado ao seu estilo.',
        experience: '3 anos'
    },
    {
        id: '02',
        photo: 'https://thumbs.dreamstime.com/b/side-front-portrait-stylish-young-man-perfect-beard-close-up-young-bearded-man-stylish-hairstyle-beard-side-view-bearded-343899106.jpg?w=992',
        name: 'Jamal',
        Description: 'Apaixonado por estilos modernos, degradês (fades) e tendências atuais. Traz energia e criatividade para deixar o seu corte com muita personalidade.',
        experience: '1 ano'
    },
    {
        id: '03',
        photo: 'https://thumbs.dreamstime.com/b/beauty-salon-portrait-man-barbershop-confidence-hair-makeover-haircut-hairstylist-information-barber-beauty-319281449.jpg?w=992',
        name: 'Contiero',
        Description: 'Profissional versátil, que domina desde a tesoura tradicional até os cortes mais arrojados. Preza pelo conforto do cliente e por um acabamento de alta qualidade.',
        experience: '3 anos'
    },
]

function Scroll_Description(){
    const [openMenu, setOpenMenu] = useState(null); 
    const descRef = useRef(null)
    const buttonRef = useRef(null)

    useEffect(() => {
        function handleClickOutside(event) {
            if (
                descRef.current &&
                !descRef.current.contains(event.target) &&
                buttonRef.current &&
                !buttonRef.current.contains(event.target)
            ) {
                setOpenMenu(null);
            }
        }

        if (openMenu !== null) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [openMenu]);

    const toggleMenu = (id) => {
        setOpenMenu(openMenu === id ? null : id);
    };

    const closeMenu = () => {
        setOpenMenu(null);
    };

    return (
        <article className={styles.wrapper}>
            <h1 className={styles.sectionTitle}>Barbeiros</h1>
            
            <div className={styles.cardsRow}>
                {profiDesc.map((desc) => (
                    <div key={desc.id} className={styles.card}>
                        <button ref={buttonRef} onClick={() => toggleMenu(desc.id)}>
                            <div>
                                <img src={desc.photo} alt={`Foto de ${desc.name}`} />
                            </div>
                            <div><h1>{desc.name}</h1></div>
                            <div><p>Experiência: {desc.experience}</p></div>
                        </button>

                        <nav
                            ref={descRef}
                            className={openMenu === desc.id ? styles.navOpen : styles.navClosed}
                        >
                            <button className={styles.closeBtn} onClick={closeMenu}>✕</button>
                            <div>
                                <img src={desc.photo} alt={`Foto de ${desc.name}`} />
                            </div>
                            <div><h1>{desc.name}</h1></div>
                            <div><p className={styles.expText}>Experiência: {desc.experience}</p></div>
                            <div><p className={styles.descText}>{desc.Description}</p></div>
                        </nav>
                    </div>
                ))}
            </div>
        </article>
    )
};

export default Scroll_Description;