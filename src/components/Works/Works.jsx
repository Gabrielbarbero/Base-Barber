import React from 'react';
import styles from './Works.module.css';

const WORKS_PHOTOS = [
    { id: 1, url: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 2, url: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 3, url: 'https://images.unsplash.com/photo-1647140655214-e4a2d914971f?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 4, url: 'https://images.unsplash.com/photo-1517832606299-7ae9b720a186?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 5, url: 'https://images.unsplash.com/photo-1567894340315-735d7c361db0?q=80&w=737&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { id: 6, url: 'https://plus.unsplash.com/premium_photo-1661645818605-61e1ef1f14e0?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }
];

function Works() {
    return (
        <section id="Works">
            
            <div className={styles.headerContainer}>
                <div className={styles.titleWrapper}>
                    <h3 className={styles.subtitle}>Meus Trabalhos</h3>
                    <h2 className={styles.title}>Cada corte, <br />uma obra de arte</h2>
                </div>
                <div className={styles.linkContainer}>
                    <a href="#agendamento" className={styles.bookingLink}>Agendar Horário &gt;</a>
                </div>
            </div>

            <div className={styles.galleryContainer}>
                <div className={styles.imageGrid}>
                    
                    {WORKS_PHOTOS.map((photo) => (
                        <div key={photo.id} className={styles.imageWrapper}>
                            <img 
                                src={photo.url} 
                                alt={`Trabalho ${photo.id}`} 
                                className={styles.galleryImage}
                            />
                        </div>
                    ))}
                    
                </div>
            </div>
            
        </section>
    );
}

export default Works;