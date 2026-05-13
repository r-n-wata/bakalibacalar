import { useTranslation } from 'react-i18next'
import { TextLink } from '../components/atoms/TextLink'
import { PageSection } from '../components/templates/PageSection'

export function NotFound() {
  const { t } = useTranslation()

  return (
    <PageSection
      eyebrow={t('pages.notFound.eyebrow')}
      title={t('pages.notFound.title')}
    >
      <p>{t('pages.notFound.body')}</p>
      <TextLink to="/">{t('pages.notFound.returnHome')}</TextLink>
    </PageSection>
  )
}
