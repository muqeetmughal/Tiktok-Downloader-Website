import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import LanguageDetector from 'i18next-browser-languagedetector'


const resources = {
    en: {
        default: require('./locales/en/default.json'),
    },
    de: {
        default: require('./locales/de/default.json'),
    }
}

i18n

    .use(LanguageDetector)
    .use(initReactI18next)
    .init({

        defaultNS: 'default',
        lng: 'en',
        ns: ['default'],
        debug: false,
        interpolation: {
            escapeValue: false,
        },
        resources: resources,
    })

export default i18n