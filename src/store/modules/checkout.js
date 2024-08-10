const state = {
  checkoutData: {
    cpf: "",
    paymentMethod: "",
  },
};

const mutations = {
  SET_CHECKOUT_DATA(state, data) {
    state.checkoutData = data;
  },
};

const actions = {
  setCheckoutData({ commit }, data) {
    commit("SET_CHECKOUT_DATA", data);
  },
};

const getters = {
  checkoutData: (state) => state.checkoutData,
};

export default {
  state,
  mutations,
  actions,
  getters,
};
