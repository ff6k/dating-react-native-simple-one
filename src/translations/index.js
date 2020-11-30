import * as RNLocalize from 'react-native-localize';
import i18nLocale from './i18n'
import i18n from 'i18n-js';
import memoize from 'lodash.memoize';

import { I18nManager } from 'react-native';

const translationGetters = {
  en: () => require('./en.json'),
  vi: () => require('./vi.json'),
};

export const changeLanguage = (code) => {
  i18nLocale.changeLanguage(code);
}

export const translate = memoize(
  (key, config) => i18n.t(key, config),
  (key, config) => (config ? key + JSON.stringify(config) : key),
);

export const setI18nConfig = () => {
  const fallback = { languageTag: 'en', isRTL: false };

  const { languageTag, isRTL } =
    RNLocalize.findBestAvailableLanguage(Object.keys(translationGetters)) ||
    fallback;

  translate.cache.clear();
  I18nManager.forceRTL(isRTL);
  i18n.translations = { [languageTag]: translationGetters[languageTag]() };
  i18n.locale = languageTag;
};
