import { SectionLabel } from '../atoms/SectionLabel'
import styles from './PlaceholderPanel.module.scss'

type PlaceholderPanelProps = {
  ariaHidden?: boolean
  caption?: string
  className?: string
  label?: string
}

export function PlaceholderPanel({
  ariaHidden = false,
  caption,
  className,
  label,
}: PlaceholderPanelProps) {
  const panelClassName = [styles.panel, className].filter(Boolean).join(' ')

  return (
    <aside
      aria-hidden={ariaHidden || undefined}
      aria-label={ariaHidden ? undefined : label}
      className={panelClassName}
    >
      {label ? (
        <SectionLabel as="span" className={styles.label} tone="light">
          {label}
        </SectionLabel>
      ) : null}
      {caption ? <p className={styles.caption}>{caption}</p> : null}
    </aside>
  )
}
