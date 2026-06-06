import styles from './Works.module.css'

function Works(){

    const hairPhoto1 = 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    const hairPhoto2 = 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    const hairPhoto3 = 'https://images.unsplash.com/photo-1647140655214-e4a2d914971f?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    const hairPhoto4 = 'https://images.unsplash.com/photo-1517832606299-7ae9b720a186?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    const hairPhoto5 = 'https://images.unsplash.com/photo-1567894340315-735d7c361db0?q=80&w=737&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    const hairPhoto6 = 'https://plus.unsplash.com/premium_photo-1661645818605-61e1ef1f14e0?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    return(
         <section>
            <div className={styles.startDiv}>
            <div className={styles.Title}>
                <h3 className={styles.h3}>Meus Trabalhos</h3>
                <h2 className={styles.h2}>Cada corte, <br />uma obra de arte</h2>
                
            </div>
            <div className={styles.hourWorks}>
                <a href="" className={styles.hourLink}>Agendar Horario &gt;</a>
            </div>
            </div>
            <div className={styles.cardsContainer}>
                <div className={styles.cards}>
                    <div className={styles.cardItem}><img src={hairPhoto1} alt="" /></div>
                    <div className={styles.cardItem}><img src={hairPhoto2} alt="" /></div>
                    <div className={styles.cardItem}><img src={hairPhoto3} alt="" /></div>
                    <div className={styles.cardItem}><img src={hairPhoto4} alt="" /></div>
                    <div className={styles.cardItem}><img src={hairPhoto5} alt="" /></div>
                    <div className={styles.cardItem}><img src={hairPhoto6} alt="" /></div>

                </div>
            </div>
         </section>
    )
}

export default Works;