import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './app/routes/AppRoutes'
import { AppShell } from './components/templates/AppShell'

export default function App() {
  const { i18n, t } = useTranslation()

  useEffect(() => {
    document.title = t('app.title')
  }, [i18n.language, t])

  return (
    <BrowserRouter>
      <AppRoutes layout={<AppShell />} />
    </BrowserRouter>
  )
}
