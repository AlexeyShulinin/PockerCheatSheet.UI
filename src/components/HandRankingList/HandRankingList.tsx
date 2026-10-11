import { Button } from "@fluentui/react-components"
import { PokerHands } from "../../data/hands"
import type { PokerHand } from "../../types/poker"
import { HandGuide } from "../../constants/HandGuide"
import { Icons } from "../../constants/Icons"
import styles from "./HandRankingList.module.css"

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
        <section className={styles.rankingList} aria-label={HandGuide.ListLabel}>
            {PokerHands.map((hand) => (
                <Button
                    key={hand.name}
                    className={`${styles.rankingRow} ${selectedHand.name === hand.name ? styles.rankingSelected : ""}`}
                    appearance="subtle"
                    aria-pressed={selectedHand.name === hand.name}
                    onClick={() => onSelect(hand)}
                >
                    <span className={styles.rankingNumber}>{String(hand.id).padStart(2, "0")}</span>
                    <span className={styles.rankingSymbol}>{symbolForRank(hand.id)}</span>
                    <span className={styles.rankingName}>{hand.name}</span>
                    <span className={styles.rankingOdds}>{hand.odds}</span>
                    <span className={styles.rankingChevron}>{Icons.Chevron}</span>
                </Button>
            ))}
        </section>
    )
}
