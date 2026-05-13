import { useTranslation } from 'react-i18next'
import { ContentPanel } from '../components/atoms/ContentPanel'
import { SectionLabel } from '../components/atoms/SectionLabel'
import { PlaceholderPanel } from '../components/molecules/PlaceholderPanel'
import styles from './SchoolPage.module.scss'

type Service = {
  description: string
  title: string
}

type ServiceFeature = {
  description: string
  title: string
}

type ServicesContent = {
  body: string
  eyebrow: string
  features: ServiceFeature[]
  featuresTitle: string
  imageCaption: string
  imageLabel: string
  services: Service[]
  servicesTitle: string
  title: string
}

export function Services() {
  const { t } = useTranslation()
  const content = t('pages.services', {
    returnObjects: true,
  }) as ServicesContent

  return (
    <div className={styles.page}>
      <section className={styles.pageHero}>
        <div>
          <SectionLabel className={styles.eyebrow}>{content.eyebrow}</SectionLabel>
          <h1 className={styles.pageTitle}>{content.title}</h1>
          <p className={styles.pageLead}>{content.body}</p>
        </div>
        <PlaceholderPanel
          className={`${styles.placeholderImage} ${styles.imageExploration}`}
          label={content.imageLabel}
          caption={content.imageCaption}
        />
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeading}>
          <SectionLabel className={styles.sectionEyebrow}>
            {content.eyebrow}
          </SectionLabel>
          <h2>{content.servicesTitle}</h2>
        </div>
        <div className={styles.cardGrid}>
          {content.services.map((service) => (
            <ContentPanel
              as="article"
              className={styles.contentCard}
              key={service.title}
            >
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </ContentPanel>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.sectionHeading}>
          <SectionLabel className={styles.sectionEyebrow}>
            {content.eyebrow}
          </SectionLabel>
          <h2>{content.featuresTitle}</h2>
        </div>
        <div className={styles.featureGrid}>
          {content.features.map((feature) => (
            <ContentPanel
              as="article"
              className={styles.featureCard}
              key={feature.title}
            >
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </ContentPanel>
          ))}
        </div>
      </section>
    </div>
  )
}
