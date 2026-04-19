import { Outlet } from 'react-router-dom'
import { SiteHeader } from '../organisms/SiteHeader'
import styles from './AppShell.module.scss'

export function AppShell() {
  return (
    <div className={styles.appShell}>
      <SiteHeader />
      <main className={styles.pageFrame}>
        <Outlet />
      </main>
    </div>
  )
}
