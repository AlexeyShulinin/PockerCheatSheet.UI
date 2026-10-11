import type { ReactNode } from "react"
import styles from "./PageHeading.module.css"

type PageHeadingProps = {
  eyebrow: string
  title: ReactNode
  description: string
  action?: ReactNode
  className?: string
}

export function PageHeading({ eyebrow, title, description, action, className = "" }: PageHeadingProps) {
    return (
        <div className={`${styles.pageHeading} ${className}`}>
            <div>
                <div className={styles.eyebrow}><span className={styles.eyebrowLine} /> {eyebrow}</div>
                <h1>{title}</h1>
                <p className={styles.headingCopy}>{description}</p>
            </div>
            {action}
        </div>
    )
}
