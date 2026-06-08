import styles from './Adress.module.css'
export    const Tesoura = 'https://img.icons8.com/?size=100&id=15ugJLhHdnQd&format=png&color=FFFFFF'

function Adress() {
    const Adress = 'https://www.freeiconspng.com/uploads/maps-icon-16.png'
    const Hour = 'https://www.freeiconspng.com/uploads/clock-png-10.png'
    const Phone = 'https://www.freeiconspng.com/uploads/the-phone-icon-has-now-grown-to-a-similar-status-how-many-phones-have--1.png'
    const Instagram = 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/black-instagram-icon.png'
    const Whatsapp = 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/whatsapp-icon.png'
    return (
        <section className={styles.SectionContact}>
            <div className={styles.divMaster}>
                <div className={styles.divSeparation}>
                    <div>
                        <h2 className={styles.subtitle}>Localização e Contato</h2>
                        <h1 className={styles.title}>Venha nos <br /> Visitar</h1>
                    </div>

                    <div className={styles.infoItem}>
                        <div className={styles.imageBackground}><img src={Adress} alt="Endereço" className={styles.Images} /></div>
                        <div className={styles.textBlock}>
                            <p className={styles.pTitle}>Endereço</p>
                            <p className={styles.pDescription}>Rua XXXXXX, 999 <br />XXXXXXX, XX</p>
                        </div>
                    </div>

                    <div className={styles.infoItem}>
                        <div className={styles.imageBackground}><img src={Hour} alt="Horários" className={styles.Images} /></div>
                        <div className={styles.textBlock}>
                            <p className={styles.pTitle}>Horários</p>
                            <p className={styles.pDescription}>Segunda a Sexta -- 09h às 20h</p>
                            <p className={styles.pDescription}>Sábado -- 09h às 18h</p>
                            <p className={styles.pDescription}>Domingo -- Fechado</p>
                            <p className={styles.pDescription}>Feriados -- 8h às 12h</p>
                        </div>
                    </div>

                    <div className={styles.infoItem}>
                        <div className={styles.imageBackground}><img src={Phone} alt="WhatsApp" className={styles.Images} /></div>
                        <div className={styles.textBlock}>
                            <p className={styles.pTitle}>Whatsapp</p>
                            <p className={styles.pDescription}>(XX)XXXXX-XXXX</p>
                        </div>
                    </div>

                    <div className={styles.infoItem}>
                        
                        <div className={styles.imageBackground}><img src={Instagram} alt="Instagram" className={styles.Images} /></div>
                        <div className={styles.textBlock}>
                            <p className={styles.pTitle}>Instagram</p>
                            <p className={styles.pDescription}>@XXXXXX</p>
                        </div>
                    </div>
                </div>

                <div className={styles.divSeparation}>
                    <div className={styles.backgroundDiv}>
                        <div className={styles.imageBackground}><img src={Tesoura} alt="" className={styles.Images} /></div>
                        <h3 className={styles.titleOuter}>Pronto para o</h3>
                        <h3 className={styles.titleOuterColor}>novo visual?</h3>
                        <p className={styles.pDescription}>Agende pelo aplicativo em menos de 1 minuto. Escolha o horário, o serviço e confirme. Simples assim.</p>
                        <a href="" className={styles.customButtom}><img src={Tesoura} alt="" className={styles.imageButtom}/>Agendar no Aplicativo</a>
                        <p className={styles.tinyWords}>Sem cadastro complicado · Confirmação instantânea</p>
                    </div>
                </div>
            </div>
            
            <div className={styles.divLinks}>
                <a href="" className={styles.socialMedias}><img src={Whatsapp} alt="" className={styles.linkImage} />Whatsapp</a>
                <a href="" className={styles.socialMedias}><img src={Instagram} alt="" className={styles.linkImage} />Instagram</a>
            </div>
        </section>
    )
}

export default Adress