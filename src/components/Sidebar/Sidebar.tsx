import { Button } from "@fluentui/react-components"
import { useLocation, useNavigate } from "react-router-dom"
import { Brand } from "../../constants/Brand"
import { Icons } from "../../constants/Icons"
import { Routes } from "../../constants/Routes"
import { SideBar } from "../../constants/SideBar"
import styles from "./Sidebar.module.css"

export function Sidebar() {
    const navigate = useNavigate()
    const { pathname } = useLocation()
    const isPractice = pathname === Routes.Practice
    const isGuide = pathname === Routes.HandRankings
    const isAllHands = pathname === Routes.AllHands

    return (
        <aside className={styles.sidebar}>
            <a className={styles.brand} href={Routes.Practice} onClick={(event) => { event.preventDefault(); navigate(Routes.Practice) }}>
                <span className={styles.brandMark}><span>{Icons.LogoSpade}</span><span>{Icons.LogoHeart}</span></span>
                <span>{Brand.Name}<span className={styles.brandPeriod}>{Brand.Period}</span></span>
            </a>
            <div className={styles.sidebarLabel}>{SideBar.Table}</div>
            <nav className={styles.sideNav} aria-label={SideBar.MainNavigation}>
                <Button className={`${styles.navLink} ${isPractice ? styles.active : ""}`} appearance="subtle" aria-current={isPractice ? "page" : undefined} onClick={() => navigate(Routes.Practice)}>
                    <span className={styles.navIcon}>{Icons.Practice}</span> {SideBar.Practice} <span className={styles.navArrow}>{Icons.Chevron}</span>
                </Button>
                <Button className={`${styles.navLink} ${isGuide ? styles.active : ""}`} appearance="subtle" aria-current={isGuide ? "page" : undefined} onClick={() => navigate(Routes.HandRankings)}>
                    <span className={styles.navIcon}>{Icons.Guide}</span> {SideBar.HandRankings}
                </Button>
                <Button className={`${styles.navLink} ${isAllHands ? styles.active : ""}`} appearance="subtle" aria-current={isAllHands ? "page" : undefined} onClick={() => navigate(Routes.AllHands)}>
                    <span className={styles.navIcon}>{Icons.AllHands}</span> {SideBar.AllHands}
                </Button>
            </nav>
            <div className={styles.sidebarBottom}>
                <div className={styles.sidebarTip}>
                    <span className={styles.tipIcon}>{Icons.Sparkle}</span>
                    <p><strong>{SideBar.SmallSteps}</strong><br />{SideBar.TableEnergy}</p>
                    <span className={styles.tipSuits}>{Icons.SuitSet}</span>
                </div>
                <div className={styles.profile}>
                    <div className={styles.avatar}>{Icons.Spade}</div>
                    <div><strong>{SideBar.Rookie}</strong><span>{SideBar.LearningGame}</span></div>
                    <span className={styles.profileMenu}>{Icons.ProfileMenu}</span>
                </div>
            </div>
        </aside>
    )
}
