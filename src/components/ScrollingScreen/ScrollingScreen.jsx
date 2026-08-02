import React, { useState, useEffect } from 'react';
import styles from './ScrollingScreen.module.css';

const ARROW_ICON = 'https://cdn-icons-png.flaticon.com/512/271/271220.png';

const IMAGES = [
    'https://images.unsplash.com/photo-1493256338651-d82f7acb2b38?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
];

function ScrollingScreen() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => {
                if (prevIndex === IMAGES.length - 1) {
                    return 0;
                }
                return prevIndex + 1;
            });
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === IMAGES.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? IMAGES.length - 1 : prev - 1));
    };

    return (
        <section className={styles.carouselContainer}>
            
            <div 
                className={styles.sliderTrack}
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {IMAGES.map((imgUrl, index) => (
                    <div 
                        key={index}
                        className={styles.screen} 
                        style={{ backgroundImage: `url(${imgUrl})` }}
                    />
                ))}
            </div>
            
            <button className={`${styles.tradeButtons} ${styles.leftBtn}`} onClick={prevSlide}>
                <img src={ARROW_ICON} alt="Voltar Imagem" className={styles.arrowIcon}/>
            </button>

            <button className={`${styles.tradeButtons} ${styles.rightBtn}`} onClick={nextSlide}>
                <img src={ARROW_ICON} alt="Avançar Imagem" className={`${styles.arrowIcon} ${styles.right}`} />
            </button>

        </section>
    );
}

export default ScrollingScreen;