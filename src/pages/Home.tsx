import { useTranslation } from 'react-i18next'
import { ContentPanel } from '../components/atoms/ContentPanel'
import { SectionLabel } from '../components/atoms/SectionLabel'
import { PlaceholderPanel } from '../components/molecules/PlaceholderPanel'
import { TextLink } from '../components/atoms/TextLink'
import styles from './SchoolPage.module.scss'

type Highlight = {
  description: string
  label: string
  value: string
}

type Program = {
  description: string
  title: string
}

type HomeContent = {
  body: string
  ctaPrimary: string
  ctaSecondary: string
  eyebrow: string
  imageCaptionSecondary: string
  imageCaptionTertiary: string
  imageCaptionQuaternary: string
  highlights: Highlight[]
  imageCaption: string
  imageLabel: string
  imageLabelQuaternary: string
  imageLabelSecondary: string
  imageLabelTertiary: string
  programs: Program[]
  programsTitle: string
  promise: string
  promiseTitle: string
  title: string
}

export function Home() {
  const { t } = useTranslation()
  const content = t('pages.home', {
    returnObjects: true,
  }) as HomeContent

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <ContentPanel className={styles.heroCopy}>
          <SectionLabel className={styles.eyebrow}>{content.eyebrow}</SectionLabel>
          <h1 className={styles.heroTitle}>{content.title}</h1>
          <p className={styles.heroLead}>{content.body}</p>
          <div className={styles.heroActions}>
            <TextLink to="/contact">{content.ctaPrimary}</TextLink>
            <TextLink className={styles.secondaryAction} to="/services">
              {content.ctaSecondary}
            </TextLink>
          </div>
          <div className={styles.highlightGrid}>
            {content.highlights.map((highlight) => (
              <ContentPanel
                as="article"
                className={styles.highlightCard}
                key={highlight.label}
                tone="soft"
              >
                <SectionLabel as="span" className={styles.highlightValue}>
                  {highlight.value}
                </SectionLabel>
                <h2 className={styles.highlightLabel}>{highlight.label}</h2>
              </ContentPanel>
            ))}
          </div>
        </ContentPanel>

        <div className={styles.heroMedia}>
          <PlaceholderPanel
            className={`${styles.placeholderImage} ${styles.imageLagoon}`}
            label={content.imageLabel}
            caption={content.imageCaption}
          />
          <div className={styles.mediaPair}>
            <PlaceholderPanel
              className={`${styles.placeholderImage} ${styles.imageCommunity}`}
              label={content.imageLabelSecondary}
              caption={content.imageCaptionSecondary}
            />
            <PlaceholderPanel
              className={`${styles.placeholderImage} ${styles.imageClassroom}`}
              label={content.imageLabelTertiary}
              caption={content.imageCaptionTertiary}
            />
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeading}>
          <SectionLabel className={styles.sectionEyebrow}>
            {content.eyebrow}
          </SectionLabel>
          <h2>{content.programsTitle}</h2>
        </div>
        <div className={styles.cardGrid}>
          {content.programs.map((program) => (
            <ContentPanel
              as="article"
              className={styles.contentCard}
              key={program.title}
            >
              <h3>{program.title}</h3>
              <p>{program.description}</p>
            </ContentPanel>
          ))}
        </div>
      </section>

      <section className={styles.homeGallery}>
        <PlaceholderPanel
          ariaHidden
          className={`${styles.placeholderImage} ${styles.imageExploration}`}
          label={content.imageLabelQuaternary}
          caption={content.imageCaptionQuaternary}
        />
        <ContentPanel as="article" className={styles.storyCard}>
          <SectionLabel className={styles.sectionEyebrow}>
            {content.eyebrow}
          </SectionLabel>
          <h2>{content.promiseTitle}</h2>
          <p>{content.promise}</p>
        </ContentPanel>
        <PlaceholderPanel
          ariaHidden
          className={`${styles.placeholderImage} ${styles.imageAdmissions}`}
          label={content.imageLabelSecondary}
        />
      </section>
    </div>
  )
}
