import { Button } from "@fluentui/react-components"
import { HandDetail } from "../../components/HandDetail"
import { HandRankingList } from "../../components/HandRankingList"
import { PageFooter } from "../../components/PageFooter"
import { PageHeading } from "../../components/PageHeading"
import { useHandGuide } from "../../hooks/useHandGuide"
import { useNavigate } from "react-router-dom"
import { HandGuide } from "../../constants/HandGuide"
import { Icons } from "../../constants/Icons"
import { Routes } from "../../constants/Routes"
import "./GuidePage.css"

export function GuidePage() {
    const navigate = useNavigate()
    const { selectedHand, selectHand } = useHandGuide()

    return (
        <div className="page-content guide-page">
            <PageHeading
                eyebrow={HandGuide.Eyebrow}
                title={<>{HandGuide.TitleLead} <span>{HandGuide.TitleEnd}</span></>}
                description={HandGuide.Description}
                action={<Button className="guide-practice-button" appearance="primary" onClick={() => navigate(Routes.Practice)}>{HandGuide.Practice} <span>{Icons.Arrow}</span></Button>}
            />
            <div className="guide-layout">
                <HandRankingList selectedHand={selectedHand} onSelect={selectHand} />
                <HandDetail hand={selectedHand} />
            </div>
            <PageFooter />
        </div>
    )
}
