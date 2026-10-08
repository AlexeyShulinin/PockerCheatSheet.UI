import { Footer } from "../../constants/Footer"
import { Icons } from "../../constants/Icons"
import "./PageFooter.css"

export function PageFooter() {
    return (
        <footer className="page-footer">
            <span>{Footer.LoveOfGame} <span className="footer-heart">{Icons.FooterHeart}</span></span>
            <span>{Footer.Responsible}</span>
        </footer>
    )
}
