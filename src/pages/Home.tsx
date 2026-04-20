import { useTranslation } from 'react-i18next'
import { PageSection } from '../components/templates/PageSection'

export function Home() {
  const { t } = useTranslation()

  return (
    <PageSection eyebrow={t('pages.home.eyebrow')} title={t('pages.home.title')}>
      <p>{t('pages.home.body')}</p>
    </PageSection>
  )
}
