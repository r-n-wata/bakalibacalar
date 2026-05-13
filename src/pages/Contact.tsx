import { useTranslation } from 'react-i18next'
import { ContentPanel } from '../components/atoms/ContentPanel'
import { SectionLabel } from '../components/atoms/SectionLabel'
import { InfoList } from '../components/molecules/InfoList'
import { PlaceholderPanel } from '../components/molecules/PlaceholderPanel'
import styles from './SchoolPage.module.scss'

type ContactStep = {
  description: string
  title: string
}

type ContactContent = {
  body: string
  details: string[]
  eyebrow: string
  imageCaption: string
  imageLabel: string
  infoTitle: string
  steps: ContactStep[]
  stepsTitle: string
  title: string
}

export function Contact() {
  const { t } = useTranslation()
  const content = t('pages.contact', {
    returnObjects: true,
  }) as ContactContent

  return (
    <div className={styles.page}>
      <section className={styles.pageHero}>
        <div>
          <SectionLabel className={styles.eyebrow}>{content.eyebrow}</SectionLabel>
          <h1 className={styles.pageTitle}>{content.title}</h1>
          <p className={styles.pageLead}>{content.body}</p>
        </div>
        <PlaceholderPanel
          className={`${styles.placeholderImage} ${styles.imageAdmissions}`}
          label={content.imageLabel}
          caption={content.imageCaption}
        />
      </section>

      <section className={styles.storyGrid}>
        <ContentPanel as="article" className={styles.storyCard}>
          <SectionLabel className={styles.sectionEyebrow}>
            {content.eyebrow}
          </SectionLabel>
          <h2>{content.infoTitle}</h2>
          <InfoList items={content.details} variant="lines" />
        </ContentPanel>
        <ContentPanel as="article" className={styles.storyCard}>
          <SectionLabel className={styles.sectionEyebrow}>
            {content.eyebrow}
          </SectionLabel>
          <h2>{content.stepsTitle}</h2>
          <InfoList items={content.steps} variant="stacked" />
        </ContentPanel>
      </section>
    </div>
  )
}
