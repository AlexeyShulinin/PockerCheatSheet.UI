import { Button } from "@fluentui/react-components"
import { PokerHands } from "../../data/hands"
import type { PokerHand } from "../../types/poker"
import { HandGuide } from "../../constants/HandGuide"
import { Icons } from "../../constants/Icons"
import "./HandRankingList.css"

type HandRankingListProps = {
  selectedHand: PokerHand
  onSelect: (hand: PokerHand) => void
}

function symbolForRank(rank: number): string {
    if (rank === 1) return Icons.Royal
    if (rank === 2) return Icons.ExternalArrow
    if (rank <= 4) return Icons.AllHands
    if (rank <= 6) return Icons.Straight
    if (rank <= 8) return Icons.TwoPair
    return Icons.Club
}

export function HandRankingList({ selectedHand, onSelect }: HandRankingListProps) {
    return (
        <section className="ranking-list" aria-label={HandGuide.ListLabel}>
            {PokerHands.map((hand) => (
                <Button
                    key={hand.name}
                    className={`ranking-row ${selectedHand.name === hand.name ? "ranking-selected" : ""}`}
                    appearance="subtle"
                    aria-pressed={selectedHand.name === hand.name}
                    onClick={() => onSelect(hand)}
                >
                    <span className="ranking-number">{String(hand.id).padStart(2, "0")}</span>
                    <span className="ranking-symbol">{symbolForRank(hand.id)}</span>
                    <span className="ranking-name">{hand.name}</span>
                    <span className="ranking-odds">{hand.odds}</span>
                    <span className="ranking-chevron">{Icons.Chevron}</span>
                </Button>
            ))}
        </section>
    )
}
