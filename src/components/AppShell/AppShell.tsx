import type { ReactNode } from "react"
import { Sidebar } from "../Sidebar"
import styles from "./AppShell.module.css"

type AppShellProps = {
  children: ReactNode
}

export function AppShell({ children }: AppShellProps) {
    return (
        <main className={styles.appShell}>
            <Sidebar />
            <section className={styles.mainContent}>{children}</section>
        </main>
    )
}
