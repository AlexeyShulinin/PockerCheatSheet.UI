import type { ReactNode } from "react"
import "./PageHeading.css"

type PageHeadingProps = {
  eyebrow: string
  title: ReactNode
  description: string
  action?: ReactNode
}

export function PageHeading({ eyebrow, title, description, action }: PageHeadingProps) {
    return (
        <div className="page-heading">
            <div>
                <div className="eyebrow"><span className="eyebrow-line" /> {eyebrow}</div>
                <h1>{title}</h1>
                <p className="heading-copy">{description}</p>
            </div>
            {action}
        </div>
    )
}
