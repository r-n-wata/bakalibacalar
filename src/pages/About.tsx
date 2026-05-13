import { useTranslation } from 'react-i18next'
import { ContentPanel } from '../components/atoms/ContentPanel'
import { SectionLabel } from '../components/atoms/SectionLabel'
import { InfoList } from '../components/molecules/InfoList'
import { PlaceholderPanel } from '../components/molecules/PlaceholderPanel'
import styles from './SchoolPage.module.scss'

type Principle = {
  description: string
  title: string
}

type AboutContent = {
  body: string
  campusBody: string
  campusTitle: string
  eyebrow: string
  imageCaption: string
  imageLabel: string
  principles: Principle[]
  principlesTitle: string
  title: string
}

export function About() {
  const { t } = useTranslation()
  const content = t('pages.about', {
    returnObjects: true,
  }) as AboutContent

  return (
    <div className={styles.page}>
      <section className={styles.pageHero}>
        <div>
          <SectionLabel className={styles.eyebrow}>{content.eyebrow}</SectionLabel>
          <h1 className={styles.pageTitle}>{content.title}</h1>
          <p className={styles.pageLead}>{content.body}</p>
        </div>
        <PlaceholderPanel
          className={`${styles.placeholderImage} ${styles.imageCommunity}`}
          label={content.imageLabel}
          caption={content.imageCaption}
        />
      </section>

      <section className={styles.storyGrid}>
        <ContentPanel as="article" className={styles.storyCard}>
          <SectionLabel className={styles.sectionEyebrow}>
            {content.eyebrow}
          </SectionLabel>
          <h2>{content.campusTitle}</h2>
          <p>{content.campusBody}</p>
        </ContentPanel>
        <ContentPanel as="article" className={styles.storyCard}>
          <SectionLabel className={styles.sectionEyebrow}>
            {content.eyebrow}
          </SectionLabel>
          <h2>{content.principlesTitle}</h2>
          <InfoList items={content.principles} variant="stacked" />
        </ContentPanel>
      </section>
    </div>
  )
}
