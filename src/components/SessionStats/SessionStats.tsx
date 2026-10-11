import { ProgressBar } from "@fluentui/react-components"
import { Icons } from "../../constants/Icons"
import { Session } from "../../constants/Session"
import styles from "./SessionStats.module.css"

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
            <section className={styles.statsCard}>
                <div className={styles.statsTitle}><span>{Session.Title}</span><span className={styles.liveTag}><i /> {Session.Live}</span></div>
                <div className={styles.statsMetrics}>
                    <div><strong>{correct}<span className={styles.metricTotal}>/{answered}</span></strong><span>{Session.Correct}</span></div>
                    <div><strong>{accuracy}<span className={styles.metricUnit}>%</span></strong><span>{Session.Accuracy}</span></div>
                </div>
                <ProgressBar className={styles.progressTrack} value={accuracy / 100} max={1} aria-label={Session.AccuracyLabel} />
                <div className={styles.statsFoot}><span>{answered ? Session.Recognized(correct, answered) : Session.ProgressStart}</span><span>{accuracy}%</span></div>
            </section>
            <section className={styles.streakCard}>
                <div className={styles.streakFlame}>{Icons.Streak}</div>
                <div className={styles.streakCopy}><span>{Session.CurrentStreak}</span><strong>{streak} <small>{streak === 1 ? Session.Hand : Session.Hands}</small></strong></div>
                <div className={styles.streakBest}><span>{Session.Best}</span><strong>{Icons.ExternalArrow} {bestStreak}</strong></div>
            </section>
        </>
    )
}
