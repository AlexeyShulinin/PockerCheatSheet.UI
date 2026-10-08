import { PokerHands } from "../data/hands"
import { HandNames } from "../constants/HandNames"
import type { Card, Question, Suit } from "../types/poker"
import type { HandName } from "../constants/HandNames"

const Suits: Suit[] = ["♠", "♥", "♦", "♣"]

export function rankName(rank: number): string {
    return ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"][rank - 2]
}

function shuffle<T,>(items: T[]): T[] {
    const shuffled = [...items]
    for (let index = shuffled.length - 1; index > 0; index -= 1) {
        const randomIndex = Math.floor(Math.random() * (index + 1))
    ;[shuffled[index], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[index]]
    }
    return shuffled
}

export function classifyHand(cards: Card[]): HandName {
    const counts = new Map<number, number>()
    cards.forEach(({ rank }) => counts.set(rank, (counts.get(rank) ?? 0) + 1))
    const groups = [...counts.values()].sort((left, right) => right - left)
    const values = [...counts.keys()].sort((left, right) => left - right)
    const isFlush = cards.every(({ suit }) => suit === cards[0].suit)
    const straightValues = values.includes(14) ? [...values, 1].sort((left, right) => left - right) : values
    const isStraight = straightValues.some((value, index) =>
        index <= straightValues.length - 5 &&
    straightValues.slice(index, index + 5).every((next, offset) => next === value + offset)
    )
    const isRoyal = isFlush && isStraight && values.includes(10) && values.includes(14)

    if (isRoyal) return HandNames.RoyalFlush
    if (isFlush && isStraight) return HandNames.StraightFlush
    if (groups[0] === 4) return HandNames.FourOfAKind
    if (groups[0] === 3 && groups[1] === 2) return HandNames.FullHouse
    if (isFlush) return HandNames.Flush
    if (isStraight) return HandNames.Straight
    if (groups[0] === 3) return HandNames.ThreeOfAKind
    if (groups[0] === 2 && groups[1] === 2) return HandNames.TwoPair
    if (groups[0] === 2) return HandNames.OnePair
    return HandNames.HighCard
}

export function createQuestion(): Question {
    const deck = Suits.flatMap((suit) =>
        Array.from({ length: 13 }, (_, index) => ({ rank: index + 2, suit }))
    )
    const cards = shuffle(deck).slice(0, 5)
    const answer = classifyHand(cards)
    const alternatives = shuffle(PokerHands.filter((hand) => hand.name !== answer).map((hand) => hand.name)).slice(0, 3)
    return { cards, answer, options: shuffle([answer, ...alternatives]) }
}
