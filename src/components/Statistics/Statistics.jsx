import React from 'react';
import styles from './Statistics.module.css';


const statisticsData = [
    { id: 1, value: '3 Anos', label: 'de Experiência' },
    { id: 2, value: '100% Online', label: 'Agendamento Online' },
    { id: 3, value: '4,9★', label: 'Avaliação' }
];

function Statistics() {
    return (
        <section className={styles.statisticsSection}>
            {statisticsData.map((stat) => (
                <div key={stat.id} className={styles.statCard}>
                    <h2 className={styles.statValue}>{stat.value}</h2>
                    <h3 className={styles.statLabel}>{stat.label}</h3>
                </div>
            ))}
        </section>
    );
}

export default Statistics;