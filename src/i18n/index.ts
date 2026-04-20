import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { en } from './locales/en'
import { es } from './locales/es'

export const supportedLanguages = ['en', 'es'] as const

export type SupportedLanguage = (typeof supportedLanguages)[number]

const languageStorageKey = 'bakali-language'

function isSupportedLanguage(language: string): language is SupportedLanguage {
  return supportedLanguages.includes(language as SupportedLanguage)
}

function normalizeLanguage(language: string) {
  return language.split('-')[0]
}

function getInitialLanguage(): SupportedLanguage {
  const storedLanguage = localStorage.getItem(languageStorageKey)

  if (storedLanguage && isSupportedLanguage(storedLanguage)) {
    return storedLanguage
  }

  const browserLanguage = normalizeLanguage(navigator.language)

  if (isSupportedLanguage(browserLanguage)) {
    return browserLanguage
  }

  return 'en'
}

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  lng: getInitialLanguage(),
  resources: {
    en: {
      translation: en,
    },
    es: {
      translation: es,
    },
  },
  supportedLngs: supportedLanguages,
})

i18n.on('languageChanged', (language) => {
  const normalizedLanguage = normalizeLanguage(language)

  if (!isSupportedLanguage(normalizedLanguage)) {
    return
  }

  localStorage.setItem(languageStorageKey, normalizedLanguage)
  document.documentElement.lang = normalizedLanguage
})

document.documentElement.lang = i18n.resolvedLanguage ?? i18n.language

export { i18n }
