import { useState } from 'react'
import { useEffect } from 'react'
import styles from './ScrollingScreen.module.css'

function ScrollingScreen(){
    const seta = 'https://cdn-icons-png.flaticon.com/512/271/271220.png'
    const image1 = 'https://images.unsplash.com/photo-1493256338651-d82f7acb2b38?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    const image2 = 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    const image3 = 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    
    const image = [image1, image2, image3];
    const [indice, setIndice] = useState(0);

    useEffect(() => {

        const relogio = setInterval(() => {

            setIndice((indiceAtual) => {
                if (indiceAtual === image.length - 1) {
                    return 0;
                } else {
                    return indiceAtual + 1; 
                }
            });
        }, 5000);


        return () => clearInterval(relogio);
        
    }, [indice, image.length]);

    const imageJump = () => {
        if (indice === image.length - 1){
            setIndice(0);
        } else {
            setIndice(indice + 1);
        }
    }

    const imageBack = () => {
        if (indice === 0) {
            setIndice(image.length - 1)
        } else {
            setIndice(indice - 1);
        }
    }

    return (
        <div className={styles.CarouselContainer}>
            
            <div 
                className={styles.SliderTrack}
                style={{ transform: `translateX(-${indice * 100}%)` }}>
                <div className={styles.Screen} style={{backgroundImage: `url(${image1})`}}></div>
                <div className={styles.Screen} style={{backgroundImage: `url(${image2})`}}></div>
                <div className={styles.Screen} style={{backgroundImage: `url(${image3})`}}></div>
            </div>
            
            <button className={`${styles.Trade_Buttons} ${styles.leftBtn}`} onClick={imageBack}>
                <img src={seta} alt="Voltar" className={styles.Seta}/>
            </button>

            <button className={`${styles.Trade_Buttons} ${styles.rightBtn}`} onClick={imageJump}>
                <img src={seta} alt="Avançar" className={`${styles.Seta} ${styles.right}`} />
            </button>
        </div>
    )
}

export default ScrollingScreen;