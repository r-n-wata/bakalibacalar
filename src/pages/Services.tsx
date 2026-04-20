import { useTranslation } from 'react-i18next'
import { PageSection } from '../components/templates/PageSection'

export function Services() {
  const { t } = useTranslation()

  return (
    <PageSection
      eyebrow={t('pages.services.eyebrow')}
      title={t('pages.services.title')}
    >
      <p>{t('pages.services.body')}</p>
    </PageSection>
  )
}
