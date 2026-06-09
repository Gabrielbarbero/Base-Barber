import styles from './NavBar.module.css'

// 1. Array de dados: todos os seus links organizados aqui fora
const navLinks = [
    { id: 'trabalhos', label: 'Trabalhos', url: '#Works' },
    { id: 'sobre', label: 'Sobre Mim', url: '#Description' },
    { id: 'tabela', label: 'Tabela', url: '#Tabela' },
    { id: 'agendamento', label: 'Agendamento', url: '#Address' },
    { id: 'contato', label: 'Contato', url: '#Contact' }
];

function NavBar() {
    const logo = 'https://img.icons8.com/?size=100&id=15ugJLhHdnQd&format=png&color=FFFFFF'
    
    return (
        <>
            <header className={styles.Header}>
                <div className={styles.NavBar}>
                    
                    {/* Bloco da Logo e Títulos */}
                    <div className={styles.text_NavBar}>
                        <img src={logo} alt="logo" className={styles.logo}/>
                        <h1 className={styles.title_NavBar}>Barbearia</h1>
                        <h1 className={styles.subtitle_NavBar}>ABY</h1>
                    </div>
                    
                    {/* 2. O .map() em ação substituindo as repetições */}
                    <div className={styles.Connect_NavBar}>
                        {navLinks.map((link) => (
                            <a key={link.id} href={link.url}>
                                {link.label}
                            </a>
                        ))}
                    </div>
                    
                    {/* Botão de Ação Principal */}
                    <a href="#agendamento" className={styles.Custom_Buttom}>
                        Agendar Horarios &gt;
                    </a>
                    
                </div>
            </header>
        </>
    )
}

export default NavBar;