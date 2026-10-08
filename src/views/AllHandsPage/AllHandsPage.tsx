import { Button } from "@fluentui/react-components"
import { useNavigate } from "react-router-dom"
import { AllHands } from "../../constants/AllHands"
import { Icons } from "../../constants/Icons"
import { Routes } from "../../constants/Routes"
import { PokerHands } from "../../data/hands"
import { PageFooter } from "../../components/PageFooter"
import { PageHeading } from "../../components/PageHeading"
import { PokerCard } from "../../components/PokerCard"
import "./AllHandsPage.css"

export function AllHandsPage() {
    const navigate = useNavigate()

    return (
        <div className="page-content all-hands-page">
            <PageHeading
                eyebrow={AllHands.Eyebrow}
                title={<>{AllHands.TitleLead} <span>{AllHands.TitleEnd}</span></>}
                description={AllHands.Description}
                action={
                    <Button className="guide-practice-button" appearance="primary" onClick={() => navigate(Routes.Practice)}>
                        {AllHands.Practice} <span>{Icons.Arrow}</span>
                    </Button>
                }
            />
            <section className="all-hands-grid" aria-label={AllHands.ListLabel}>
                {PokerHands.map((hand) => (
                    <article className="all-hand-card" key={hand.name}>
                        <div className="all-hand-heading">
                            <span className="all-hand-rank">{String(hand.id).padStart(2, "0")}</span>
                            <div className="all-hand-title">
                                <h2>{hand.name}</h2>
                                <span>{hand.odds} <i /> {AllHands.Probability(hand.chance)}</span>
                            </div>
                        </div>
                        <div className="all-hand-example" aria-label={`${AllHands.CardLabel(hand.id)}: ${hand.name}`}>
                            {hand.exampleCards.map((card, index) => (
                                <PokerCard key={`${card.rank}${card.suit}`} card={card} index={index} className="all-example-card" />
                            ))}
                        </div>
                        <p className="all-hand-description">{hand.description}</p>
                    </article>
                ))}
            </section>
            <PageFooter />
        </div>
    )
}
