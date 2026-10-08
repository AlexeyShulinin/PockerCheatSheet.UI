import { Button } from "@fluentui/react-components"
import { useLocation, useNavigate } from "react-router-dom"
import { Brand } from "../../constants/Brand"
import { Icons } from "../../constants/Icons"
import { Routes } from "../../constants/Routes"
import { SideBar } from "../../constants/SideBar"
import "./Sidebar.css"

export function Sidebar() {
    const navigate = useNavigate()
    const { pathname } = useLocation()
    const isPractice = pathname === Routes.Practice
    const isGuide = pathname === Routes.HandRankings
    const isAllHands = pathname === Routes.AllHands

    return (
        <aside className="sidebar">
            <a className="brand" href={Routes.Practice} onClick={(event) => { event.preventDefault(); navigate(Routes.Practice) }}>
                <span className="brand-mark"><span>{Icons.LogoSpade}</span><span>{Icons.LogoHeart}</span></span>
                <span>{Brand.Name}<span className="brand-period">{Brand.Period}</span></span>
            </a>
            <div className="sidebar-label">{SideBar.Table}</div>
            <nav className="side-nav" aria-label={SideBar.MainNavigation}>
                <Button className={`nav-link ${isPractice ? "active" : ""}`} appearance="subtle" aria-current={isPractice ? "page" : undefined} onClick={() => navigate(Routes.Practice)}>
                    <span className="nav-icon">{Icons.Practice}</span> {SideBar.Practice} <span className="nav-arrow">{Icons.Chevron}</span>
                </Button>
                <Button className={`nav-link ${isGuide ? "active" : ""}`} appearance="subtle" aria-current={isGuide ? "page" : undefined} onClick={() => navigate(Routes.HandRankings)}>
                    <span className="nav-icon">{Icons.Guide}</span> {SideBar.HandRankings}
                </Button>
                <Button className={`nav-link ${isAllHands ? "active" : ""}`} appearance="subtle" aria-current={isAllHands ? "page" : undefined} onClick={() => navigate(Routes.AllHands)}>
                    <span className="nav-icon">{Icons.AllHands}</span> {SideBar.AllHands}
                </Button>
            </nav>
            <div className="sidebar-bottom">
                <div className="sidebar-tip">
                    <span className="tip-icon">{Icons.Sparkle}</span>
                    <p><strong>{SideBar.SmallSteps}</strong><br />{SideBar.TableEnergy}</p>
                    <span className="tip-suits">{Icons.SuitSet}</span>
                </div>
                <div className="profile">
                    <div className="avatar">{Icons.Spade}</div>
                    <div><strong>{SideBar.Rookie}</strong><span>{SideBar.LearningGame}</span></div>
                    <span className="profile-menu">{Icons.ProfileMenu}</span>
                </div>
            </div>
        </aside>
    )
}
