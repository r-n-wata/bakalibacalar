import type { ReactNode } from 'react'
import styles from './PageSection.module.scss'

type PageSectionProps = {
  children: ReactNode
  eyebrow: string
  title: string
}

export function PageSection({ children, eyebrow, title }: PageSectionProps) {
  return (
    <section className={styles.pageSection}>
      <p className={styles.eyebrow}>{eyebrow}</p>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.content}>{children}</div>
    </section>
  )
}
