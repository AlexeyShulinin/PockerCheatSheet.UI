import { Button } from "@fluentui/react-components"
import { Icons } from "../../constants/Icons"
import { QuickTip as QuickTipCopy } from "../../constants/QuickTip"
import styles from "./QuickTip.module.css"

type QuickTipProps = {
    onShowGuide: () => void
    className?: string
}

export function QuickTip({ onShowGuide, className = "" }: QuickTipProps) {
    return (
        <section className={`${styles.learnCard} ${className}`}>
            <div className={styles.learnIcon}>{Icons.Add}</div>
            <span className={styles.learnLabel}>{QuickTipCopy.Label}</span>
            <h3>{QuickTipCopy.Title}</h3>
            <p>{QuickTipCopy.Description}</p>
            <Button className={styles.learnLink} appearance="subtle" onClick={onShowGuide}>{QuickTipCopy.Explore} <span>{Icons.ExternalArrow}</span></Button>
            <span className={styles.learnWatermark}>{Icons.Ace}</span>
        </section>
    )
}
