import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'
import { MenuToggle } from '../atoms/MenuToggle'
import { LanguageSwitcher } from '../molecules/LanguageSwitcher'
import {
  SiteNavigation,
  type NavigationItem,
} from '../molecules/SiteNavigation'
import styles from './SiteHeader.module.scss'

const navigationId = 'site-navigation'

export function SiteHeader() {
  const { t } = useTranslation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navItems: NavigationItem[] = [
    { label: t('navigation.items.home'), to: '/' },
    { label: t('navigation.items.about'), to: '/about' },
    { label: t('navigation.items.services'), to: '/services' },
    { label: t('navigation.items.contact'), to: '/contact' },
  ]

  const closeMenu = () => setIsMenuOpen(false)
  const toggleMenu = () => setIsMenuOpen((current) => !current)

  return (
    <header className={styles.siteHeader}>
      <NavLink className={styles.brandLink} to="/" onClick={closeMenu}>
        {t('brand.name')}
      </NavLink>
      <div className={styles.headerControls}>
        <LanguageSwitcher />
        <MenuToggle
          isOpen={isMenuOpen}
          menuId={navigationId}
          onClick={toggleMenu}
        />
      </div>
      <SiteNavigation
        id={navigationId}
        isOpen={isMenuOpen}
        items={navItems}
        onNavigate={closeMenu}
      />
    </header>
  )
}
