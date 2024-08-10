const state = {
  deliveryAddress: {
    street: "",
    number: "",
    neighborhood: "",
    city: "",
    state: "",
  },
};

const mutations = {
  setDeliveryAddress(state, address) {
    state.deliveryAddress = address;
  },
};

const actions = {
  updateDeliveryAddress({ commit }, address) {
    commit("setDeliveryAddress", address);
  },
};

const getters = {
  deliveryAddress: (state) => state.deliveryAddress,
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
