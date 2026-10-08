import { Button } from "@fluentui/react-components"
import { Icons } from "../../constants/Icons"
import { Practice } from "../../constants/Practice"
import { PokerHands } from "../../data/hands"
import type { Question } from "../../types/poker"
import type { HandName } from "../../constants/HandNames"
import { PokerCard } from "../PokerCard"
import "./QuizCard.css"

type QuizCardProps = {
  question: Question
  selected: HandName | null
  isAnswered: boolean
  isCorrect: boolean | null
  round: number
  onSelect: (answer: HandName) => void
  onCheck: () => void
  onNext: () => void
}

export function QuizCard({ question, selected, isAnswered, isCorrect, round, onSelect, onCheck, onNext }: QuizCardProps) {
    const correctHand = PokerHands.find((hand) => hand.name === question.answer)!

    return (
        <section className="quiz-card">
            <div className="quiz-topline">
                <div className="round-label"><span className="round-dot" /> {Practice.HandRecognition} <span className="round-divider">/</span> <span className="muted">{Practice.RoundLabel(round)}</span></div>
                <Button className="sound-button" appearance="subtle" aria-label={Practice.DealHand} title={Practice.DealHand} onClick={onNext}>{Icons.Refresh}</Button>
            </div>
            <div className="table-area">
                <div className="table-watermark">♠</div>
                <div className="table-caption"><span>{Practice.YourHand}</span><span className="table-caption-right">{Practice.FiveCards} <i /> {Practice.StandardDeck}</span></div>
                <div className="cards-row" aria-label={Practice.YourHand}>
                    {question.cards.map((card, index) => <PokerCard key={`${card.rank}${card.suit}`} card={card} index={index} />)}
                </div>
                <div className="table-footer"><span><i className="table-footer-dot" /> {Practice.StudyHand}</span><span>{Icons.CardSuits}</span></div>
            </div>
            <div className="answer-area">
                {!isAnswered ? (
                    <>
                        <div className="answer-prompt"><span className="prompt-number">{Icons.PromptNumber}</span><div><h2>{Practice.Prompt}</h2><p>{Practice.PromptHelp}</p></div></div>
                        <div className="answer-options">
                            {question.options.map((option, index) => (
                                <Button
                                    key={option}
                                    className={`answer-option ${selected === option ? "selected" : ""}`}
                                    appearance="subtle"
                                    aria-pressed={selected === option}
                                    onClick={() => onSelect(option)}
                                >
                                    <span className="option-letter">{Icons.FourOptions[index]}</span>
                                    <span>{option}</span>
                                    <span className="option-check">{Icons.Correct}</span>
                                </Button>
                            ))}
                        </div>
                        <div className="quiz-actions"><span className="keyboard-hint">{Practice.Encouragement}</span><Button className="check-button" appearance="primary" disabled={!selected} onClick={onCheck}>{Practice.CheckHand} <span>{Icons.Arrow}</span></Button></div>
                    </>
                ) : (
                    <div className={`answer-result ${isCorrect ? "result-correct" : "result-incorrect"}`}>
                        <div className="result-icon">{isCorrect ? Icons.Correct : Icons.ExternalArrow}</div>
                        <div className="result-copy"><span className="result-kicker">{isCorrect ? Practice.NiceRead : Practice.AnswerReveal}</span><h2>{question.answer}</h2><p>{correctHand.description}</p></div>
                        <Button className="check-button next-button" appearance="primary" onClick={onNext}>{Practice.NextHand} <span>{Icons.Arrow}</span></Button>
                    </div>
                )}
            </div>
        </section>
    )
}
