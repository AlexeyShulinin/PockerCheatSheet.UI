import { useNavigate } from "react-router-dom"
import { PageFooter } from "../../components/PageFooter"
import { PageHeading } from "../../components/PageHeading"
import { QuickTip } from "../../components/QuickTip"
import { QuizCard } from "../../components/QuizCard"
import { SessionStats } from "../../components/SessionStats"
import { usePokerQuiz } from "../../hooks/usePokerQuiz"
import { Icons } from "../../constants/Icons"
import { Practice } from "../../constants/Practice"
import { Routes } from "../../constants/Routes"
import pageStyles from "../../components/PageHeading/PageHeading.module.css"
import styles from "./PracticePage.module.css"

export function PracticePage() {
    const navigate = useNavigate()
    const quiz = usePokerQuiz()

    return (
        <div className={pageStyles.pageContent}>
            <PageHeading
                eyebrow={Practice.Eyebrow}
                title={<>{Practice.TitleLead} <span>{Practice.TitleEnd}</span></>}
                description={Practice.Description}
                action={<div className={styles.dailyBadge}><span>{Icons.Sparkle}</span><div><strong>{Practice.Daily}</strong><small>{Practice.DailySubtitle}</small></div></div>}
            />
            <div className={styles.practiceLayout}>
                <QuizCard
                    question={quiz.question}
                    selected={quiz.selected}
                    isAnswered={quiz.isAnswered}
                    isCorrect={quiz.isCorrect}
                    round={quiz.stats.answered + 1}
                    onSelect={quiz.selectAnswer}
                    onCheck={quiz.checkAnswer}
                    onNext={quiz.nextQuestion}
                />
                <aside className={styles.statsColumn}>
                    <SessionStats
                        correct={quiz.stats.correct}
                        answered={quiz.stats.answered}
                        accuracy={quiz.accuracy}
                        streak={quiz.stats.streak}
                        bestStreak={quiz.stats.bestStreak}
                    />
                    <QuickTip className={styles.tipGridSpan} onShowGuide={() => navigate(Routes.HandRankings)} />
                    <div className={styles.sessionNote}><span>{Icons.SessionClub}</span> {Practice.StandardDeckNote}</div>
                </aside>
            </div>
            <PageFooter />
        </div>
    )
}
