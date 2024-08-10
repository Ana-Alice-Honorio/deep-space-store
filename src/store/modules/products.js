const state = {
  selectedProduct: null,
};

const mutations = {
  setSelectedProduct(state, product) {
    state.selectedProduct = product;
  },
};

const actions = {
  selectProduct({ commit }, product) {
    commit("setSelectedProduct", product);
  },
};

const getters = {
  selectedProduct: (state) => state.selectedProduct,
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
