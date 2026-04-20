import { Link } from 'react-router-dom'
import { GoogleMapPin } from '../molecules/GoogleMapPin'
import styles from './SiteFooter.module.scss'

const placeholderAddress = [
  '123 Placeholder Street',
  'Suite 100',
  'Your City, ST 12345',
]

const placeholderLocation = {
  lat: 40.7128,
  lng: -74.006,
}

const socials = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/bakali',
  },
  {
    label: 'Email',
    href: 'mailto:hello@bakali.example',
  },
]

export function SiteFooter() {
  return (
    <footer className={styles.siteFooter}>
      <div className={styles.brandBlock}>
        <Link className={styles.brandLink} to="/">
          <img src="/favicon.svg" alt="" className={styles.logoMark} />
          <span>Bakali</span>
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

      <nav className={styles.footerNav} aria-label="Footer navigation">
        <Link className={styles.footerLink} to="/contact">
          Contact
        </Link>
      </nav>

      <div className={styles.socials} aria-label="Social links">
        {socials.map((social) => (
          <a
            className={styles.footerLink}
            href={social.href}
            key={social.label}
            rel={social.label === 'Instagram' ? 'noreferrer' : undefined}
            target={social.label === 'Instagram' ? '_blank' : undefined}
          >
            {social.label}
          </a>
        ))}
      </div>

      <GoogleMapPin
        address={placeholderAddress.join(', ')}
        className={styles.locationMap}
        label="Bakali"
        position={placeholderLocation}
      />
    </footer>
  )
}
