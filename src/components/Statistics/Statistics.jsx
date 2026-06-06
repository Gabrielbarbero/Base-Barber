import styles from './Statistics.module.css'

function Statistic(){


    return(
        <section className={styles.Section}>
            <div className={styles.Cards}>
                <h2 className={styles.h2}>3 Anos</h2>
                <h3 className={styles.h3}>de Experiência</h3>
            </div>
            <div className={styles.Cards}>
                <h2 className={styles.h2}>100% Online </h2>
                <h3 className={styles.h3}>Agendamento Online</h3>
            </div>
            <div className={styles.Cards}>
                <h2 className={styles.h2}>4.9★</h2>
                <h3 className={styles.h3}>Avaliação</h3>
            </div>
        </section>
    )
}

export default Statistic;