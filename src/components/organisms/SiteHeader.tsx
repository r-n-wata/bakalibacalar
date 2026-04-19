import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { MenuToggle } from '../atoms/MenuToggle'
import {
  SiteNavigation,
  type NavigationItem,
} from '../molecules/SiteNavigation'
import styles from './SiteHeader.module.scss'

const navItems: NavigationItem[] = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Contact', to: '/contact' },
]

const navigationId = 'site-navigation'

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => setIsMenuOpen(false)
  const toggleMenu = () => setIsMenuOpen((current) => !current)

  return (
    <header className={styles.siteHeader}>
      <NavLink className={styles.brandLink} to="/" onClick={closeMenu}>
        Bakali
      </NavLink>
      <MenuToggle
        isOpen={isMenuOpen}
        menuId={navigationId}
        onClick={toggleMenu}
      />
      <SiteNavigation
        id={navigationId}
        isOpen={isMenuOpen}
        items={navItems}
        onNavigate={closeMenu}
      />
    </header>
  )
}
