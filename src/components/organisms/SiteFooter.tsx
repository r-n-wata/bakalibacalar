import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { GoogleMapPin } from '../molecules/GoogleMapPin'
import styles from './SiteFooter.module.scss'

const placeholderLocation = {
  lat: 40.7128,
  lng: -74.006,
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
  const placeholderAddress = t('footer.address', {
    returnObjects: true,
  }) as string[]

  return (
    <footer className={styles.siteFooter}>
      <div className={styles.brandBlock}>
        <Link className={styles.brandLink} to="/">
          <img src="/favicon.svg" alt="" className={styles.logoMark} />
          <span>{t('brand.name')}</span>
        </Link>
        <address className={styles.address}>
          {placeholderAddress.map((line) => (
            <span key={line}>
              {line}
              <br />
            </span>
          ))}
        </address>
      </div>

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

      <GoogleMapPin
        address={placeholderAddress.join(', ')}
        className={styles.locationMap}
        label={t('brand.name')}
        position={placeholderLocation}
      />
    </footer>
  )
}
