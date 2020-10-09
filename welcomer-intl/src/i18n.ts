import i18n from 'i18next';

import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import frenchTranslation from './services/traductions/locales/fr/translation.json'
import germanTranslation from './services/traductions/locales/de/translation.json'
import englishTranslation from './services/traductions/locales/en/translation.json'

const languages = {
    en: {
        translation: englishTranslation,
    },
    de: {
        translation: germanTranslation
    },
    fr: {
        translation: frenchTranslation
    }
}

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: languages,
        lng: "en",
        fallbackLng: "en",
        keySeparator: false,
        interpolation: {
            escapeValue: false
        }
    });



export default i18n;