import { useState } from "react"
import { PokerHands } from "../data/hands"
import type { PokerHand } from "../types/poker"

export function useHandGuide() {
    const [selectedHand, setSelectedHand] = useState<PokerHand>(PokerHands[0])
    return { selectedHand, selectHand: setSelectedHand }
}
