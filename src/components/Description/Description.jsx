import styles from './Description.module.css'

function Description(){

    const imgPhoto = 'https://images.tcdn.com.br/img/img_prod/655270/avental_barbeiro_personalizado_new_rio_caf_canvas_1_20251126160146_1c7a4e039d06.jpg'

    return(
        <>
        <section className={styles.sectionContainer}>
            <div className={styles.organization}>
                <div className={styles.separation}>
                    <img src={imgPhoto} alt="" className={styles.photo} /> 
                </div>
                <div className={styles.separation}>
                    <h1 className={styles.h1}>Sobre Mim</h1>
                    <p className={styles.p}>Sou um profissional apaixonado pela arte da barbearia e pelo impacto positivo que um bom visual tem na autoestima masculina. Há anos venho me dedicando a entender as necessidades de cada pessoa que senta na minha cadeira, unindo as técnicas clássicas da barbearia tradicional com as tendências mais modernas de cortes e estilos. Para mim, cuidar da aparência é um passo fundamental para transmitir confiança e atitude no dia a dia.</p>
                    <p className={styles.p}>Minha especialidade abrange desde cortes precisos, como os variados estilos de degradê (fades) e texturizações, até o cuidado rigoroso com o alinhamento da barba. Trabalho com foco extremo nos detalhes, utilizando produtos de alta qualidade e o clássico ritual da toalha quente com navalha, garantindo não apenas um acabamento impecável, mas também o máximo de conforto para a pele.</p>
                    <p className={styles.p}>Acredito que a ida à barbearia vai muito além de um simples serviço estético; é um momento de pausa, relaxamento e boa conversa. Faço questão de manter um ambiente acolhedor e descontraído, onde meus clientes podem se sentir em casa, tomar uma bebida gelada e trocar uma ideia enquanto cuidam do visual.</p>
                    <p className={styles.p}>Neste portfólio, compartilho um pouco da minha trajetória, do meu estilo de trabalho e dos resultados que entrego diariamente. Convido você a conferir os meus cortes e a agendar o seu horário. Vamos juntos alinhar o seu visual e encontrar o estilo que mais destaca a sua personalidade!</p>
                </div>
            </div>
        </section>
        </>
    )
}

export default Description