// App module store contains all states that manage application
import locale from 'locale2';

// import app module (the vue instance)
import App from '@/main';

const app = {
  namespaced: true,
  state: {
    sidebar: {
      opened: true,
    },
    language: locale.split('-')[0] || 'fr',
  },
  getters: {
    sidebar: state => state.sidebar,
    language: state => state.language,
  },
  mutations: {
    TOGGLE_SIDEBAR: (state, val) => {
      // check if its a button call or overlay dismissed
      if (val === null || typeof val === 'undefined') {
        state.sidebar.opened = !state.sidebar.opened;
      } else {
        state.sidebar.opened = val;
      }
    },
    SET_LANGUAGE: (state, language) => {
      state.language = language;
      App.$i18n.locale = language;
    },
  },
  actions: {
    toggleSideBarButton({ commit }) {
      commit('TOGGLE_SIDEBAR');
    },
    toggleSideBar({ commit }, val) {
      commit('TOGGLE_SIDEBAR', val);
    },
    setLanguage({ commit }, language) {
      commit('SET_LANGUAGE', language);
    },
  },
};

export default app;
