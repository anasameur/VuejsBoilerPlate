// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';

// Import vuetify core framework
import Vuetify from 'vuetify';

// Import vuetify css file
import 'vuetify/dist/vuetify.min.css';

// Import Material design icons
import 'material-design-icons-iconfont/dist/material-design-icons.css';

// Import router, store and App component
import App from './App';
import store from './store';
import router from './router';

// Import Internationalization
import i18n from './i18n';

Vue.config.productionTip = false;

// Definition of the theme colors
const colors = {
  primary: '#0097c1' /* indigo */,
  secondary: '#003b70' /* bleu  */,
  accent: '#003b70' /* deep orange */,
  error: '#F44336' /* rouge */,
  info: '#00BCD4' /* cyan */,
  success: '#4CAF50' /* vert */,
  warning: '#FF9800' /* orange */,
};

// Use of vuetify components  with specifc theme colors
Vue.use(Vuetify, { theme: colors });

/* eslint-disable no-new */
export default new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: { App },
  template: '<App/>',
});
