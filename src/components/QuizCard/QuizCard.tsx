import { Button } from "@fluentui/react-components"
import { Icons } from "../../constants/Icons"
import { Practice } from "../../constants/Practice"
import { PokerHands } from "../../data/hands"
import type { Question } from "../../types/poker"
import type { HandName } from "../../constants/HandNames"
import { PokerCard } from "../PokerCard"
import styles from "./QuizCard.module.css"

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
        <section className={styles.quizCard}>
            <div className={styles.quizTopline}>
                <div className={styles.roundLabel}><span className={styles.roundDot} /> {Practice.HandRecognition} <span className={styles.roundDivider}>/</span> <span className={styles.muted}>{Practice.RoundLabel(round)}</span></div>
                <Button className={styles.soundButton} appearance="subtle" aria-label={Practice.DealHand} title={Practice.DealHand} onClick={onNext}>{Icons.Refresh}</Button>
            </div>
            <div className={styles.tableArea}>
                <div className={styles.tableWatermark}>♠</div>
                <div className={styles.tableCaption}><span>{Practice.YourHand}</span><span className={styles.tableCaptionRight}>{Practice.FiveCards} <i /> {Practice.StandardDeck}</span></div>
                <div className={styles.cardsRow} aria-label={Practice.YourHand}>
                    {question.cards.map((card, index) => <PokerCard key={`${card.rank}${card.suit}`} card={card} index={index} />)}
                </div>
                <div className={styles.tableFooter}><span><i className={styles.tableFooterDot} /> {Practice.StudyHand}</span><span>{Icons.CardSuits}</span></div>
            </div>
            <div className={styles.answerArea}>
                {!isAnswered ? (
                    <>
                        <div className={styles.answerPrompt}><span className={styles.promptNumber}>{Icons.PromptNumber}</span><div><h2>{Practice.Prompt}</h2><p>{Practice.PromptHelp}</p></div></div>
                        <div className={styles.answerOptions}>
                            {question.options.map((option, index) => (
                                <Button
                                    key={option}
                                    className={`${styles.answerOption} ${selected === option ? styles.selected : ""}`}
                                    appearance="subtle"
                                    aria-pressed={selected === option}
                                    onClick={() => onSelect(option)}
                                >
                                    <span className={styles.optionLetter}>{Icons.FourOptions[index]}</span>
                                    <span>{option}</span>
                                    <span className={styles.optionCheck}>{Icons.Correct}</span>
                                </Button>
                            ))}
                        </div>
                        <div className={styles.quizActions}><span className={styles.keyboardHint}>{Practice.Encouragement}</span><Button className={styles.checkButton} appearance="primary" disabled={!selected} onClick={onCheck}>{Practice.CheckHand} <span>{Icons.Arrow}</span></Button></div>
                    </>
                ) : (
                    <div className={`${styles.answerResult} ${isCorrect ? styles.resultCorrect : styles.resultIncorrect}`}>
                        <div className={styles.resultIcon}>{isCorrect ? Icons.Correct : Icons.ExternalArrow}</div>
                        <div className={styles.resultCopy}><span className={styles.resultKicker}>{isCorrect ? Practice.NiceRead : Practice.AnswerReveal}</span><h2>{question.answer}</h2><p>{correctHand.description}</p></div>
                        <Button className={`${styles.checkButton} ${styles.nextButton}`} appearance="primary" onClick={onNext}>{Practice.NextHand} <span>{Icons.Arrow}</span></Button>
                    </div>
                )}
            </div>
        </section>
    )
}
