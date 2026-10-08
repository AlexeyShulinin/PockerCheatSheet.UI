import { ProgressBar } from "@fluentui/react-components"
import { Icons } from "../../constants/Icons"
import { Session } from "../../constants/Session"
import "./SessionStats.css"

type SessionStatsProps = {
  correct: number
  answered: number
  accuracy: number
  streak: number
  bestStreak: number
}

export function SessionStats({ correct, answered, accuracy, streak, bestStreak }: SessionStatsProps) {
    return (
        <>
            <section className="stats-card">
                <div className="stats-title"><span>{Session.Title}</span><span className="live-tag"><i /> {Session.Live}</span></div>
                <div className="stats-metrics">
                    <div><strong>{correct}<span className="metric-total">/{answered}</span></strong><span>{Session.Correct}</span></div>
                    <div><strong>{accuracy}<span className="metric-unit">%</span></strong><span>{Session.Accuracy}</span></div>
                </div>
                <ProgressBar className="progress-track" value={accuracy / 100} max={1} aria-label={Session.AccuracyLabel} />
                <div className="stats-foot"><span>{answered ? Session.Recognized(correct, answered) : Session.ProgressStart}</span><span>{accuracy}%</span></div>
            </section>
            <section className="streak-card">
                <div className="streak-flame">{Icons.Streak}</div>
                <div className="streak-copy"><span>{Session.CurrentStreak}</span><strong>{streak} <small>{streak === 1 ? Session.Hand : Session.Hands}</small></strong></div>
                <div className="streak-best"><span>{Session.Best}</span><strong>{Icons.ExternalArrow} {bestStreak}</strong></div>
            </section>
        </>
    )
}
