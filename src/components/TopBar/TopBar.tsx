import { useLocation } from "react-router-dom"
import { Routes } from "../../constants/Routes"
import { TopBar as TopBarCopy } from "../../constants/TopBar"
import "./TopBar.css"

export function TopBar() {
    const { pathname } = useLocation()
    const pageTitle = pathname === Routes.HandRankings
        ? TopBarCopy.HandRankings
        : pathname === Routes.AllHands
            ? TopBarCopy.AllHands
            : TopBarCopy.Practice

    return (
        <header className="topbar">
            <div className="breadcrumbs"><span>{TopBarCopy.Learn}</span><span className="crumb-slash">/</span><strong>{pageTitle}</strong></div>
            <div className="topbar-right"><span className="online-dot" /> <span>{TopBarCopy.Coach}</span><span className="topbar-divider" /><span className="topbar-level">{TopBarCopy.Level}</span></div>
        </header>
    )
}
