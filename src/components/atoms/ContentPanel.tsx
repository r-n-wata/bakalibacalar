import type { HTMLAttributes } from 'react'
import styles from './ContentPanel.module.scss'

type ContentPanelProps = HTMLAttributes<HTMLElement> & {
  as?: 'article' | 'aside' | 'div' | 'section'
  tone?: 'default' | 'footer' | 'soft'
}

export function ContentPanel({
  as = 'div',
  className,
  tone = 'default',
  ...props
}: ContentPanelProps) {
  const Component = as
  const panelClassName = [styles.contentPanel, styles[tone], className]
    .filter(Boolean)
    .join(' ')

  return <Component className={panelClassName} {...props} />
}
