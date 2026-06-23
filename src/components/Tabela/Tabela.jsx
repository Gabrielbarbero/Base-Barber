import styles from './Tabela.module.css'

function Tabela() {
  const tabelaImg = 'https://res.cloudinary.com/df39h99li/image/upload/v1782184259/tabela_base_barber_ie32h4.png'
  
  return (
    <section className={styles.sectionContainer} id='Tabela'>
        <div>
            <h1 className={styles.h1}>Tabela de Preços</h1>
        </div>
        
        <div className={styles.imageWrapper}>
            <img src={tabelaImg} alt="Tabela de Preços" className={styles.tabelaImagem} />
        </div>
    </section>
  )
}

export default Tabela