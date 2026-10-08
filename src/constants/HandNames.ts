export type HandName =
  | "Royal flush"
  | "Straight flush"
  | "Four of a kind"
  | "Full house"
  | "Flush"
  | "Straight"
  | "Three of a kind"
  | "Two pair"
  | "One pair"
  | "High card";

export const HandNames: {
  RoyalFlush: HandName;
  StraightFlush: HandName;
  FourOfAKind: HandName;
  FullHouse: HandName;
  Flush: HandName;
  Straight: HandName;
  ThreeOfAKind: HandName;
  TwoPair: HandName;
  OnePair: HandName;
  HighCard: HandName;
} = {
    RoyalFlush: "Royal flush",
    StraightFlush: "Straight flush",
    FourOfAKind: "Four of a kind",
    FullHouse: "Full house",
    Flush: "Flush",
    Straight: "Straight",
    ThreeOfAKind: "Three of a kind",
    TwoPair: "Two pair",
    OnePair: "One pair",
    HighCard: "High card"
};
