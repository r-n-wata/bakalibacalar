import styles from './InfoList.module.scss'

type InfoListItem = {
  description: string
  title: string
}

type InfoListProps =
  | {
      className?: string
      items: string[]
      variant: 'lines'
    }
  | {
      className?: string
      items: InfoListItem[]
      variant: 'stacked'
    }

export function InfoList(props: InfoListProps) {
  const listClassName = [styles.infoList, props.className].filter(Boolean).join(' ')

  if (props.variant === 'lines') {
    return (
      <div className={listClassName}>
        {props.items.map((item) => (
          <p className={styles.line} key={item}>
            {item}
          </p>
        ))}
      </div>
    )
  }

  return (
    <div className={listClassName}>
      {props.items.map((item) => (
        <div className={styles.row} key={item.title}>
          <h3 className={styles.title}>{item.title}</h3>
          <p className={styles.description}>{item.description}</p>
        </div>
      ))}
    </div>
  )
}
