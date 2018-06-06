import Vue from 'vue';
import VueI18n from 'vue-i18n';
import locale from 'locale2';
import messages from './messages';
// import dateTimeFormats from './dates';
// import numberFormats from './numbers';

Vue.use(VueI18n);

export default new VueI18n({
  locale: locale.split('-')[0] || 'fr', // get current language tag RFC 5646
  messages,
});
