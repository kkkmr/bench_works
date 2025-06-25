import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en_preferences from './locales/en/preferences.json';
import hindi_preferences from './locales/hindi/preferences.json';
import telugu_preferences from './locales/telugu/preferences.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: 'en',
    resources: {
      en: { preferences: en_preferences },
      hindi: { preferences: hindi_preferences },
      telugu: { preferences: telugu_preferences },
    },
    detection: {
      // disable localStorage or cookie detection
      caches: [] 
    },
    fallbackLng: 'en',
    // ns: ['preferences'],
    defaultNS:'preferences',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;