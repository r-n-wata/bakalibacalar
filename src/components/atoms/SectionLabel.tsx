import type { ReactNode } from 'react'
import styles from './SectionLabel.module.scss'

type SectionLabelProps = {
  as?: 'p' | 'span'
  children: ReactNode
  className?: string
  tone?: 'default' | 'light'
}

export function SectionLabel({
  as = 'p',
  children,
  className,
  tone = 'default',
}: SectionLabelProps) {
  const Component = as
  const labelClassName = [styles.sectionLabel, styles[tone], className]
    .filter(Boolean)
    .join(' ')

  return <Component className={labelClassName}>{children}</Component>
}
