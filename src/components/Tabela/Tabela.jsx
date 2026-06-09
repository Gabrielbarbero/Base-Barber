import styles from './Tabela.module.css'

function Tabela() {
  const tabelaImg = 'https://montarumnegocio.com/wp-content/uploads/2022/03/tabela-de-valores-de-barbearia-724x1024.jpg'
  
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