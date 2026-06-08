import styles from './Statistics.module.css'

const statistics = [
    {id: 1, name: '3 Anos', description: 'de Experiência'},
    {id: 2, name: '100% Online', description: 'Agendamento Online'},
    {id: 3, name: '4,9★', description: 'Avaliação'}
]

function Statistic(){
    return(
        <section className={styles.Section}>
            {statistics.map((stats) => (
                <div key={stats.id} className={styles.Cards}>
                    <h2 className={styles.h2}>{stats.name}</h2>
                    <h3 className={styles.h3}>{stats.description}</h3>
                </div>
            ))}
        </section>
    )
}

export default Statistic;