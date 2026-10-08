import type { PokerHand } from "../../types/poker"
import { HandGuide } from "../../constants/HandGuide"
import { Icons } from "../../constants/Icons"
import { PokerCard } from "../PokerCard"
import "./HandDetail.css"

export function HandDetail({ hand }: { hand: PokerHand }) {
    return (
        <aside className="guide-detail">
            <div className="guide-detail-top"><span>{HandGuide.HandNumber(hand.id)}</span><span className="guide-suits">{Icons.RedSuitSet}</span></div>
            <div className="guide-big-rank">{String(hand.id).padStart(2, "0")}</div>
            <div className="guide-detail-body">
                <span className="eyebrow"><span className="eyebrow-line" /> {hand.id === 1 ? HandGuide.OneInMillion : HandGuide.RankOfTen(hand.id)}</span>
                <h2>{hand.name}</h2>
                <p>{hand.description}</p>
                <div className="example-label">{HandGuide.Example}</div>
                <div className="example-hand" aria-label={HandGuide.Example}>
                    {hand.exampleCards.map((card, index) => (
                        <PokerCard key={`${card.rank}${card.suit}`} card={card} index={index} className="example-card" />
                    ))}
                </div>
                <div className="guide-odds">
                    <div><span>{HandGuide.Odds}</span><strong>{hand.odds}</strong></div>
                    <div><span>{HandGuide.Chance}</span><strong>{hand.chance}</strong></div>
                </div>
            </div>
        </aside>
    )
}
