import React from 'react';
import styles from './Description.module.css';

const PROFILE_IMAGE = 'https://images.tcdn.com.br/img/img_prod/655270/avental_barbeiro_personalizado_new_rio_caf_canvas_1_20251126160146_1c7a4e039d06.jpg';

const descriptions = [
    {
        id: 1,
        text: "Sou um profissional apaixonado pela arte da barbearia e pelo impacto positivo que um bom visual tem na autoestima masculina. Há anos venho me dedicando a entender as necessidades de cada pessoa que senta na minha cadeira, unindo as técnicas clássicas da barbearia tradicional com as tendências mais modernas de cortes e estilos. Para mim, cuidar da aparência é um passo fundamental para transmitir confiança e atitude no dia a dia."
    },
    {
        id: 2,
        text: "Minha especialidade abrange desde cortes precisos, como os variados estilos de degradê (fades) e texturizações, até o cuidado rigoroso com o alinhamento da barba. Trabalho com foco extremo nos detalhes, utilizando produtos de alta qualidade e o clássico ritual da toalha quente com navalha, garantindo não apenas um acabamento impecável, mas também o máximo de conforto para a pele."
    }
];

function Description() {
    return (
        <section className={styles.sectionContainer} id="Description">
            <div className={styles.mainContainer}>
                
                {/* Coluna da Imagem */}
                <div className={styles.column}>
                    <img 
                        src={PROFILE_IMAGE} 
                        alt="Foto do barbeiro" 
                        className={styles.profileImage} 
                    />
                </div>
                
                {/* Coluna do Texto */}
                <div className={styles.column}>
                    <h1 className={styles.title}>Sobre Mim</h1>
                    
                    {descriptions.map((info) => (
                        <p key={info.id} className={styles.descriptionText}>
                            {info.text}
                        </p>
                    ))}
                </div>
                
            </div>
        </section>
    );
}

export default Description;