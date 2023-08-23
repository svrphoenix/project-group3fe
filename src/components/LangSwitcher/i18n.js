import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import resources from './locales/en/traslation';

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
