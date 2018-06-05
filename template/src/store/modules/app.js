// App module store contains all states that manage application

const app = {
  namespaced: true,
  state: {
    sidebar: {
      opened: true,
    },
  },
  getters: {
    sidebar: state => state.sidebar,
  },
  mutations: {
    TOGGLE_SIDEBAR: (state) => {
      state.sidebar.opened = !state.sidebar.opened;
    },
  },
  actions: {
    toggleSideBar({ commit }) {
      commit('TOGGLE_SIDEBAR');
    },
  },
};

export default app;
