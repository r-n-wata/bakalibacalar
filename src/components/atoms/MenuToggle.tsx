import { useTranslation } from 'react-i18next'
import styles from './MenuToggle.module.scss'

type MenuToggleProps = {
  isOpen: boolean
  menuId: string
  onClick: () => void
}

export function MenuToggle({ isOpen, menuId, onClick }: MenuToggleProps) {
  const { t } = useTranslation()
  const buttonClassName = isOpen
    ? `${styles.menuToggle} ${styles.open}`
    : styles.menuToggle

  return (
    <button
      className={buttonClassName}
      type="button"
      aria-controls={menuId}
      aria-expanded={isOpen}
      aria-label={
        isOpen ? t('navigation.menu.close') : t('navigation.menu.open')
      }
      onClick={onClick}
    >
      <span className={styles.line} />
      <span className={styles.line} />
      <span className={styles.line} />
    </button>
  )
}
