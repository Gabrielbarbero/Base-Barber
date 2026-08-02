import React from 'react';
import styles from './Tabela.module.css';


const PRICING_TABLE_IMAGE = 'https://res.cloudinary.com/df39h99li/image/upload/v1782184259/tabela_base_barber_ie32h4.png';

function Tabela() {
    return (
        <section className={styles.sectionContainer} id="Tabela">
            
            <h1 className={styles.title}>Tabela de Preços</h1>
            
            <div className={styles.imageWrapper}>
                <img 
                    src={PRICING_TABLE_IMAGE} 
                    alt="Tabela de Preços dos Cortes" 
                    className={styles.tableImage} 
                />
            </div>
            
        </section>
    );
}

export default Tabela;