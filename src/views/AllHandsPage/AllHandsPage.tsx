import { Button } from "@fluentui/react-components"
import { useNavigate } from "react-router-dom"
import { AllHands } from "../../constants/AllHands"
import { Icons } from "../../constants/Icons"
import { Routes } from "../../constants/Routes"
import { PokerHands } from "../../data/hands"
import { PageFooter } from "../../components/PageFooter"
import { PageHeading } from "../../components/PageHeading"
import { PokerCard } from "../../components/PokerCard"
import pageStyles from "../../components/PageHeading/PageHeading.module.css"
import styles from "./AllHandsPage.module.css"

export function AllHandsPage() {
    const navigate = useNavigate()

    return (
        <div className={`${pageStyles.pageContent} ${styles.allHandsPage}`}>
            <PageHeading
                className={styles.allHandsPageHeading}
                eyebrow={AllHands.Eyebrow}
                title={<>{AllHands.TitleLead} <span>{AllHands.TitleEnd}</span></>}
                description={AllHands.Description}
                action={
                    <Button className={pageStyles.guidePracticeButton} appearance="primary" onClick={() => navigate(Routes.Practice)}>
                        {AllHands.Practice} <span>{Icons.Arrow}</span>
                    </Button>
                }
            />
            <section className={styles.allHandsGrid} aria-label={AllHands.ListLabel}>
                {PokerHands.map((hand) => (
                    <article className={styles.allHandCard} key={hand.name}>
                        <div className={styles.allHandHeading}>
                            <span className={styles.allHandRank}>{String(hand.id).padStart(2, "0")}</span>
                            <div className={styles.allHandTitle}>
                                <h2>{hand.name}</h2>
                                <span>{hand.odds} <i /> {AllHands.Probability(hand.chance)}</span>
                            </div>
                        </div>
                        <div className={styles.allHandExample} aria-label={`${AllHands.CardLabel(hand.id)}: ${hand.name}`}>
                            {hand.exampleCards.map((card, index) => (
                                <PokerCard key={`${card.rank}${card.suit}`} card={card} index={index} variant="allExample" />
                            ))}
                        </div>
                        <p className={styles.allHandDescription}>{hand.description}</p>
                    </article>
                ))}
            </section>
            <PageFooter />
        </div>
    )
}
