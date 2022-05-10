import { Platform, NativeModules } from 'react-native';
import i18n from 'i18n-js';

export const getLanguage = () => {
  return Platform.OS === 'ios'
    ? NativeModules.SettingsManager.settings.AppleLocale ||
        NativeModules.SettingsManager.settings.AppleLanguages[0]
    : NativeModules.I18nManager.localeIdentifier;
};

i18n.translations = {
  en_US: require('./en_US.json'),
  pt_BR: require('./pt_BR.json'),
};

export const setLocale = locale => {
  i18n.locale = locale;
};

export const translate = token => i18n.t(token);
