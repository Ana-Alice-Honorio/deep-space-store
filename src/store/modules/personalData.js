const state = {
  data: {
    name: "",
    email: "",
    phone: "",
  },
};

const mutations = {
  SET_PERSONAL_DATA(state, payload) {
    state.data.name = payload.name;
    state.data.email = payload.email;
    state.data.phone = payload.phone;
  },
  CLEAR_PERSONAL_DATA(state) {
    state.data = {
      name: "",
      email: "",
      phone: "",
    };
  },
};

const actions = {
  saveData({ commit }, payload) {
    commit("SET_PERSONAL_DATA", payload);
  },
  clearData({ commit }) {
    commit("CLEAR_PERSONAL_DATA");
  },
};

const getters = {
  getPersonalData(state) {
    return state.data;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
