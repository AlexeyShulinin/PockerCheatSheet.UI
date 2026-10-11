import type { CSSProperties } from "react"
import type { Card } from "../../types/poker"
import { rankName } from "../../utils/poker"
import styles from "./PokerCard.module.css"

type PokerCardProps = {
  card: Card
  index: number
  variant?: "example" | "allExample"
}

export function PokerCard({ card, index, variant }: PokerCardProps) {
    const isRed = card.suit === "♥" || card.suit === "♦"
    const variantClass = variant === "example"
        ? styles.exampleCard
        : variant === "allExample"
            ? styles.allExampleCard
            : ""

    return (
        <div className={`${styles.playingCard} ${isRed ? styles.redSuit : ""} ${variantClass}`} style={{ "--card-index": index } as CSSProperties}>
            <span className={styles.cardCorner}>{rankName(card.rank)}<span>{card.suit}</span></span>
            <span className={styles.cardCenter}>{card.suit}</span>
            <span className={`${styles.cardCorner} ${styles.cardCornerBottom}`}>{rankName(card.rank)}<span>{card.suit}</span></span>
        </div>
    )
}
