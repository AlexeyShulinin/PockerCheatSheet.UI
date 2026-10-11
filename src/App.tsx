import { FluentProvider, webLightTheme } from "@fluentui/react-components"
import { HashRouter , Navigate, Route, Routes as RouterRoutes } from "react-router-dom"
import { AppShell } from "./components/AppShell"
import { AllHandsPage } from "./views/AllHandsPage"
import { GuidePage } from "./views/GuidePage"
import { PracticePage } from "./views/PracticePage"
import { TopBar } from "./components/TopBar"
import { Routes } from "./constants/Routes"
import styles from "./App.module.css"

function App() {
    return (
        <FluentProvider theme={webLightTheme}>
            <div className={styles.application}>
                <HashRouter >
                    <AppShell>
                        <TopBar />
                        <RouterRoutes>
                            <Route path={Routes.Practice} element={<PracticePage />} />
                            <Route path={Routes.HandRankings} element={<GuidePage />} />
                            <Route path={Routes.AllHands} element={<AllHandsPage />} />
                            <Route path="*" element={<Navigate to={Routes.Practice} replace />} />
                        </RouterRoutes>
                    </AppShell>
                </HashRouter >
            </div>
        </FluentProvider>
    )
}

export default App
