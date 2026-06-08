import styles from "./Footer.module.css"
import Adress, { Tesoura } from "../Address/Address"
function Footer(){

return(
    <footer>
        <div>
            <div className={styles.footerText}>
                <div className={styles.footerImageBackground} >
                <img src={Tesoura} alt="" className={styles.footerImage} />
                </div>
                <p className={styles.footerDescription}>Barbearia ABY © 2026 · Todos os direitos reservados</p>
            </div>
        </div>
        <div className={styles.footerContainerLink}>
            <a href="" className={styles.footerLink}>Agendar Horario →</a>
        </div>
    </footer>
)

}
export default Footer