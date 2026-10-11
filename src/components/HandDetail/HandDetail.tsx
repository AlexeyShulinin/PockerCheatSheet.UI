import type { PokerHand } from "../../types/poker"
import { HandGuide } from "../../constants/HandGuide"
import { Icons } from "../../constants/Icons"
import { PokerCard } from "../PokerCard"
import styles from "./HandDetail.module.css"

export function HandDetail({ hand }: { hand: PokerHand }) {
    return (
        <aside className={styles.guideDetail}>
            <div className={styles.guideDetailTop}><span>{HandGuide.HandNumber(hand.id)}</span><span className={styles.guideSuits}>{Icons.RedSuitSet}</span></div>
            <div className={styles.guideBigRank}>{String(hand.id).padStart(2, "0")}</div>
            <div className={styles.guideDetailBody}>
                <span className={styles.eyebrow}><span className={styles.eyebrowLine} /> {hand.id === 1 ? HandGuide.OneInMillion : HandGuide.RankOfTen(hand.id)}</span>
                <h2>{hand.name}</h2>
                <p>{hand.description}</p>
                <div className={styles.exampleLabel}>{HandGuide.Example}</div>
                <div className={styles.exampleHand} aria-label={HandGuide.Example}>
                    {hand.exampleCards.map((card, index) => (
                        <PokerCard key={`${card.rank}${card.suit}`} card={card} index={index} variant="example" />
                    ))}
                </div>
                <div className={styles.guideOdds}>
                    <div><span>{HandGuide.Odds}</span><strong>{hand.odds}</strong></div>
                    <div><span>{HandGuide.Chance}</span><strong>{hand.chance}</strong></div>
                </div>
            </div>
        </aside>
    )
}
