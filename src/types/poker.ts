import type { HandName } from "../constants/HandNames"

export type Suit = "♠" | "♥" | "♦" | "♣"

export type Card = {
  rank: number
  suit: Suit
}

export type PokerHand = {
  id: number
  name: HandName
  description: string
  exampleCards: Card[]
  odds: string
  chance: string
}

export type Question = {
  cards: Card[]
  answer: HandName
  options: HandName[]
}
