import { NavLink } from 'react-router-dom'
import styles from './SiteNavigation.module.scss'

export type NavigationItem = {
  label: string
  to: string
}

type SiteNavigationProps = {
  id: string
  isOpen: boolean
  items: NavigationItem[]
  onNavigate: () => void
}

export function SiteNavigation({
  id,
  isOpen,
  items,
  onNavigate,
}: SiteNavigationProps) {
  const navClassName = isOpen
    ? `${styles.siteNavigation} ${styles.open}`
    : styles.siteNavigation

  return (
    <nav className={navClassName} id={id} aria-label="Main navigation">
      {items.map((item) => (
        <NavLink
          className={({ isActive }) =>
            isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
          }
          end={item.to === '/'}
          key={item.to}
          onClick={onNavigate}
          to={item.to}
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  )
}
