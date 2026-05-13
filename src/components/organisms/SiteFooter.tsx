import { useTranslation } from 'react-i18next'
import { ContentPanel } from '../atoms/ContentPanel'
import { SectionLabel } from '../atoms/SectionLabel'
import { Link } from 'react-router-dom'
import { GoogleMapPin } from '../molecules/GoogleMapPin'
import styles from './SiteFooter.module.scss'

const bacalarLocation = {
  lat: 18.6813,
  lng: -88.391,
}

const socials = [
  {
    labelKey: 'footer.socials.instagram',
    href: 'https://www.instagram.com/bakali',
  },
  {
    labelKey: 'footer.socials.email',
    href: 'mailto:hello@bakali.example',
  },
]

export function SiteFooter() {
  const { t } = useTranslation()
  const address = t('footer.address', {
    returnObjects: true,
  }) as string[]
  const visit = t('footer.visit', {
    returnObjects: true,
  }) as string[]

  return (
    <footer className={styles.siteFooter}>
      <div className={styles.footerContent}>
        <div className={styles.brandBlock}>
          <Link className={styles.brandLink} to="/">
            <span className={styles.logoMark}>{t('brand.name').slice(0, 1)}</span>
            <span>{t('brand.name')}</span>
          </Link>
          <address className={styles.address}>
            {address.map((line) => (
              <span key={line}>
                {line}
                <br />
              </span>
            ))}
          </address>
        </div>

        <div className={styles.footerMeta}>
          <nav className={styles.footerNav} aria-label={t('navigation.footerLabel')}>
            <Link className={styles.footerLink} to="/contact">
              {t('navigation.items.contact')}
            </Link>
          </nav>

          <div className={styles.socials} aria-label={t('footer.socialsLabel')}>
            {socials.map((social) => (
              <a
                className={styles.footerLink}
                href={social.href}
                key={social.href}
                rel={social.href.includes('instagram') ? 'noreferrer' : undefined}
                target={social.href.includes('instagram') ? '_blank' : undefined}
              >
                {t(social.labelKey)}
              </a>
            ))}
          </div>
        </div>

        <ContentPanel className={styles.locationCard} tone="footer">
          <SectionLabel className={styles.locationLabel} tone="light">
            {t('footer.visitLabel')}
          </SectionLabel>
          {visit.map((line) => (
            <p className={styles.locationText} key={line}>
              {line}
            </p>
          ))}
        </ContentPanel>
      </div>

      <div className={styles.mapColumn}>
        <GoogleMapPin
          address={address.join(', ')}
          className={styles.locationMap}
          label={t('brand.name')}
          position={bacalarLocation}
        />
      </div>
    </footer>
  )
}
