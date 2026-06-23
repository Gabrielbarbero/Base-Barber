import styles from './Adress.module.css'

// Usei o ícone da tesoura branco igual ao seu original (?color=white)
export const Tesoura = 'https://api.iconify.design/ph/scissors.svg?color=white'

const contactInfo = [
    {
        id: 'endereco',
        icon: 'https://api.iconify.design/ph/map-pin.svg?color=black',
        title: 'Endereço',
        lines: ['Rua XXXXXX, 999', 'XXXXXXX, XX']
    },
    {
        id: 'horarios',
        icon: 'https://api.iconify.design/ph/clock.svg?color=black',
        title: 'Horários',
        lines: [
            'Segunda a Sexta -- 09h às 20h', 
            'Sábado -- 09h às 18h', 
            'Domingo -- Fechado', 
            'Feriados -- 8h às 12h'
        ]
    },
    {
        id: 'whatsapp',
        icon: 'https://api.iconify.design/ph/whatsapp-logo.svg?color=black',
        title: 'Whatsapp',
        lines: ['(XX)XXXXX-XXXX']
    },
    {
        id: 'instagram',
        icon: 'https://api.iconify.design/ph/instagram-logo.svg?color=black',
        title: 'Instagram',
        lines: ['@XXXXXX']
    }
];

function Adress() {
    // Links consistentes para os botões do rodapé
    const WhatsappIcon = 'https://api.iconify.design/ph/whatsapp-logo.svg?color=black';
    const InstagramIcon = 'https://api.iconify.design/ph/instagram-logo.svg?color=black';

    return (
        <section className={styles.SectionContact}  id='Address'>
            <div className={styles.divMaster} id='Contact'>
                
                {/* Contatos renderizados com .map() */}
                <div className={styles.divSeparation}>
                    <div>
                        <h2 className={styles.subtitle}>Localização e Contato</h2>
                        <h1 className={styles.title}>Venha nos <br /> Visitar</h1>
                    </div>

                    {contactInfo.map((info) => (
                        <div key={info.id} className={styles.infoItem}>
                            <div className={styles.imageBackground}>
                                <img src={info.icon} alt={info.title} className={styles.Images} />
                            </div>
                            <div className={styles.textBlock}>
                                <p className={styles.pTitle}>{info.title}</p>
                                {info.lines.map((line, index) => (
                                    <p key={index} className={styles.pDescription}>{line}</p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Card de Agendamento */}
                <div className={styles.divSeparation}>
                    <div className={styles.backgroundDiv}>
                        <div className={styles.imageBackground}>
                            <img src={Tesoura} alt="Tesoura" className={styles.Images} />
                        </div>
                        <h3 className={styles.titleOuter}>Pronto para o</h3>
                        <h3 className={styles.titleOuterColor}>novo visual?</h3>
                        <p className={styles.pDescription}>Agende pelo aplicativo em menos de 1 minuto. Escolha o horário, o <br />serviço e confirme. Simples assim.</p>
                        
                        <a href="#agendar" className={styles.customButtom}>
                            <img src={Tesoura} alt="Agendar" className={styles.imageButtom}/>
                            Agendar no Aplicativo
                        </a>
                        <p className={styles.tinyWords}>Sem cadastro complicado · Confirmação instantânea</p>
                    </div>
                </div>
            </div>
            
            <div className={styles.divLinks}>
                <a href="#whatsapp" className={styles.socialMedias}>
                    <img src={WhatsappIcon} alt="Whatsapp" className={styles.linkImage} />Whatsapp
                </a>
                <a href="#instagram" className={styles.socialMedias}>
                    <img src={InstagramIcon} alt="Instagram" className={styles.linkImage} />Instagram
                </a>
            </div>
        </section>
    );
}

export default Adress;