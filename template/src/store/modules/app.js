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
    TOGGLE_SIDEBAR: (state) => {
      state.sidebar.opened = !state.sidebar.opened;
    },
    SET_LANGUAGE: (state, language) => {
      state.language = language;
      App.$i18n.locale = language;
    },
  },
  actions: {
    toggleSideBar({ commit }) {
      commit('TOGGLE_SIDEBAR');
    },
    setLanguage({ commit }, language) {
      commit('SET_LANGUAGE', language);
    },
  },
};

export default app;
