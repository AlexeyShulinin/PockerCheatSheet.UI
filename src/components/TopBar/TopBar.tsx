import { useLocation } from "react-router-dom"
import { Routes } from "../../constants/Routes"
import { TopBar as TopBarCopy } from "../../constants/TopBar"
import styles from "./TopBar.module.css"

export function TopBar() {
    const { pathname } = useLocation()
    const pageTitle = pathname === Routes.HandRankings
        ? TopBarCopy.HandRankings
        : pathname === Routes.AllHands
            ? TopBarCopy.AllHands
            : TopBarCopy.Practice

    return (
        <header className={styles.topbar}>
            <div className={styles.breadcrumbs}><span>{TopBarCopy.Learn}</span><span className={styles.crumbSlash}>/</span><strong>{pageTitle}</strong></div>
            <div className={styles.topbarRight}><span className={styles.onlineDot} /> <span>{TopBarCopy.Coach}</span><span className={styles.topbarDivider} /><span className={styles.topbarLevel}>{TopBarCopy.Level}</span></div>
        </header>
    )
}
