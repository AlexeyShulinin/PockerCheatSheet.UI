import { Button } from "@fluentui/react-components"
import { Icons } from "../../constants/Icons"
import { QuickTip as QuickTipCopy } from "../../constants/QuickTip"
import "./QuickTip.css"

export function QuickTip({ onShowGuide }: { onShowGuide: () => void }) {
    return (
        <section className="learn-card">
            <div className="learn-icon">{Icons.Add}</div>
            <span className="learn-label">{QuickTipCopy.Label}</span>
            <h3>{QuickTipCopy.Title}</h3>
            <p>{QuickTipCopy.Description}</p>
            <Button className="learn-link" appearance="subtle" onClick={onShowGuide}>{QuickTipCopy.Explore} <span>{Icons.ExternalArrow}</span></Button>
            <span className="learn-watermark">{Icons.Ace}</span>
        </section>
    )
}
