import styles from './NavBar.module.css'

function NavBar(){
    const logo = 'https://img.icons8.com/?size=100&id=15ugJLhHdnQd&format=png&color=FFFFFF'
    return(
    <>
        <header className={styles.Header}>
            <div className={styles.NavBar}>
                <div className={styles.text_NavBar}>
                    <img src={logo} alt="logo" className={styles.logo}/>
                    <h1 className={styles.title_NavBar}>Barbearia</h1>
                    <h1 className={styles.subtitle_NavBar}>ABY</h1>
                </div>
                <div className={styles.Connect_NavBar}>
                        <a href="">Combos</a>
                        <a href="">Promoções</a>
                        <a href="">Agendamento</a>
                        <a href="">Trabalhos</a>
                        <a href="">Contato</a>
                </div>
                <a href="" className={styles.Custom_Buttom}>Agendar Horarios &gt;</a>
            </div>
        </header>
    </>
    )
}

export default NavBar;