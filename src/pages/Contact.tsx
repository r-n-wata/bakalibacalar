import { useTranslation } from 'react-i18next'
import { PageSection } from '../components/templates/PageSection'

export function Contact() {
  const { t } = useTranslation()

  return (
    <PageSection
      eyebrow={t('pages.contact.eyebrow')}
      title={t('pages.contact.title')}
    >
      <p>{t('pages.contact.body')}</p>
    </PageSection>
  )
}
