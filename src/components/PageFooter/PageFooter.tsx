import { Footer } from "../../constants/Footer"
import { Icons } from "../../constants/Icons"
import styles from "./PageFooter.module.css"

export function PageFooter({ className = "" }: { className?: string }) {
    return (
        <footer className={`${styles.pageFooter} ${className}`}>
            <span>{Footer.LoveOfGame} <span className={styles.footerHeart}>{Icons.FooterHeart}</span></span>
            <span>{Footer.Responsible}</span>
        </footer>
    )
}
