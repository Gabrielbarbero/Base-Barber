import React from 'react';
import styles from './Address.module.css';

// Export mantido
export const Tesoura = 'https://api.iconify.design/ph/scissors.svg?color=white';

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

function Address() {
    const whatsappIcon = 'https://api.iconify.design/ph/whatsapp-logo.svg?color=black';
    const instagramIcon = 'https://api.iconify.design/ph/instagram-logo.svg?color=black';

    return (
        <section className={styles.sectionContact} id="Address">
            <div className={styles.mainContainer} id="Contact">
                
                {/* Coluna Esquerda: Contatos renderizados com .map() */}
                <div className={styles.column}>
                    <div>
                        <h2 className={styles.subtitle}>Localização e Contato</h2>
                        <h1 className={styles.title}>Venha nos <br /> Visitar</h1>
                    </div>

                    {contactInfo.map((info) => (
                        <div key={info.id} className={styles.infoItem}>
                            
                            <div className={styles.imageBackground}>
                                <img 
                                    src={info.icon} 
                                    alt={`Ícone de ${info.title}`} 
                                    className={styles.icon} 
                                />
                            </div>
                            
                            <div className={styles.textBlock}>
                                <p className={styles.itemTitle}>{info.title}</p>
                                {info.lines.map((line, index) => (
                                    <p key={index} className={styles.itemDescription}>
                                        {line}
                                    </p>
                                ))}
                            </div>
                            
                        </div>
                    ))}
                </div>

                {/* Coluna Direita: Card de Agendamento */}
                <div className={styles.column}>
                    <div className={styles.backgroundCard}>
                        
                        <div className={styles.imageBackground}>
                            <img 
                                src={Tesoura} 
                                alt="Ícone de tesoura" 
                                className={styles.icon} 
                            />
                        </div>
                        
                        <h3 className={styles.titleOuter}>Pronto para o</h3>
                        <h3 className={styles.titleOuterColor}>novo visual?</h3>
                        
                        <p className={styles.itemDescription}>
                            Agende pelo aplicativo em menos de 1 minuto. 
                            Escolha o horário, o <br />serviço e confirme. Simples assim.
                        </p>
                        
                        <a href="#agendar" className={styles.customButton}>
                            <img 
                                src={Tesoura} 
                                alt="Ícone agendar" 
                                className={styles.buttonIcon}
                            />
                            Agendar no Aplicativo
                        </a>
                        
                        <p className={styles.helperText}>
                            Sem cadastro complicado · Confirmação instantânea
                        </p>
                        
                    </div>
                </div>
            </div>
            
            {/* Rodapé: Links de Redes Sociais */}
            <div className={styles.linksContainer}>
                <a href="#whatsapp" className={styles.socialMediaLink}>
                    <img 
                        src={whatsappIcon} 
                        alt="Logo Whatsapp" 
                        className={styles.linkIcon} 
                    />
                    Whatsapp
                </a>
                <a href="#instagram" className={styles.socialMediaLink}>
                    <img 
                        src={instagramIcon} 
                        alt="Logo Instagram" 
                        className={styles.linkIcon} 
                    />
                    Instagram
                </a>
            </div>
        </section>
    );
}

export default Address;