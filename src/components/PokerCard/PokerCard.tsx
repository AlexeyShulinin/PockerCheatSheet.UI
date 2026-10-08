import type { CSSProperties } from "react"
import type { Card } from "../../types/poker"
import { rankName } from "../../utils/poker"
import "./PokerCard.css"

type PokerCardProps = {
  card: Card
  index: number
  className?: string
}

export function PokerCard({ card, index, className = "" }: PokerCardProps) {
    const isRed = card.suit === "♥" || card.suit === "♦"
    return (
        <div className={`playing-card ${isRed ? "red-suit" : ""} ${className}`} style={{ "--card-index": index } as CSSProperties}>
            <span className="card-corner">{rankName(card.rank)}<span>{card.suit}</span></span>
            <span className="card-center">{card.suit}</span>
            <span className="card-corner card-corner-bottom">{rankName(card.rank)}<span>{card.suit}</span></span>
        </div>
    )
}
