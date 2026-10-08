import type { ReactNode } from "react"
import { Sidebar } from "../Sidebar"
import "./AppShell.css"

type AppShellProps = {
  children: ReactNode
}

export function AppShell({ children }: AppShellProps) {
    return (
        <main className="app-shell">
            <Sidebar />
            <section className="main-content">{children}</section>
        </main>
    )
}
