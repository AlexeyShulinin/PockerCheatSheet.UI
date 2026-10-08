import { useState } from "react"
import { createQuestion } from "../utils/poker"
import type { Question } from "../types/poker"
import type { HandName } from "../constants/HandNames"

type SessionStats = {
  correct: number
  answered: number
  streak: number
  bestStreak: number
}

export function usePokerQuiz() {
    const [question, setQuestion] = useState<Question>(createQuestion)
    const [selected, setSelected] = useState<HandName | null>(null)
    const [isAnswered, setIsAnswered] = useState(false)
    const [stats, setStats] = useState<SessionStats>({ correct: 0, answered: 0, streak: 0, bestStreak: 0 })

    const checkAnswer = () => {
        if (!selected || isAnswered) return

        const isCorrect = selected === question.answer
        setIsAnswered(true)
        setStats((current) => {
            const streak = isCorrect ? current.streak + 1 : 0
            return {
                correct: current.correct + Number(isCorrect),
                answered: current.answered + 1,
                streak,
                bestStreak: Math.max(current.bestStreak, streak)
            }
        })
    }

    const nextQuestion = () => {
        setQuestion(createQuestion())
        setSelected(null)
        setIsAnswered(false)
    }

    return {
        question,
        selected,
        isAnswered,
        isCorrect: isAnswered ? selected === question.answer : null,
        stats,
        accuracy: stats.answered ? Math.round((stats.correct / stats.answered) * 100) : 0,
        selectAnswer: setSelected,
        checkAnswer,
        nextQuestion
    }
}
