import { useTranslation } from 'react-i18next'
import { PageSection } from '../components/templates/PageSection'

export function About() {
  const { t } = useTranslation()

  return (
    <PageSection eyebrow={t('pages.about.eyebrow')} title={t('pages.about.title')}>
      <p>{t('pages.about.body')}</p>
    </PageSection>
  )
}
