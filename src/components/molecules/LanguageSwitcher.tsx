import { useTranslation } from 'react-i18next'
import {
  supportedLanguages,
  type SupportedLanguage,
} from '../../i18n'
import styles from './LanguageSwitcher.module.scss'

const languageLabels: Record<SupportedLanguage, string> = {
  en: 'language.english',
  es: 'language.spanish',
}

export function LanguageSwitcher() {
  const { i18n, t } = useTranslation()
  const currentLanguage = i18n.resolvedLanguage ?? i18n.language

  return (
    <div className={styles.languageSwitcher} aria-label={t('language.label')}>
      {supportedLanguages.map((language) => {
        const isActive = currentLanguage.startsWith(language)

        return (
          <button
            aria-pressed={isActive}
            className={
              isActive ? `${styles.button} ${styles.active}` : styles.button
            }
            key={language}
            onClick={() => void i18n.changeLanguage(language)}
            type="button"
          >
            <span aria-hidden="true">{language.toUpperCase()}</span>
            <span className={styles.screenReaderText}>
              {t(languageLabels[language])}
            </span>
          </button>
        )
      })}
    </div>
  )
}
