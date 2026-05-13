import type { ReactNode } from 'react'
import { ContentPanel } from '../atoms/ContentPanel'
import { SectionLabel } from '../atoms/SectionLabel'
import styles from './PageSection.module.scss'

type PageSectionProps = {
  children: ReactNode
  eyebrow: string
  title: string
}

export function PageSection({ children, eyebrow, title }: PageSectionProps) {
  return (
    <ContentPanel as="section" className={styles.pageSection}>
      <SectionLabel className={styles.eyebrow}>{eyebrow}</SectionLabel>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.content}>{children}</div>
    </ContentPanel>
  )
}
