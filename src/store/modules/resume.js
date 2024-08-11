const state = {
  personData: {
    name: "",
    email: "",
    phone: "",
  },
  deliveryData: {
    address: "",
    city: "",
    state: "",
    zipCode: "",
  },
  paymentData: {
    paymentMethod: "",
    cardNumber: "",
    cardHolder: "",
    expirationDate: "",
    cvv: "",
  },
  productData: {
    productId: "",
    productName: "",
    productPrice: "",
  },
};

const mutations = {
  SET_PERSON_DATA(state, data) {
    state.personData = data;
  },
  SET_DELIVERY_DATA(state, data) {
    state.deliveryData = data;
  },
  SET_PAYMENT_DATA(state, data) {
    state.paymentData = data;
  },
  SET_PRODUCT_DATA(state, data) {
    state.productData = data;
  },
};

const actions = {
  updatePersonData({ commit }, data) {
    commit("SET_PERSON_DATA", data);
  },
  updateDeliveryData({ commit }, data) {
    commit("SET_DELIVERY_DATA", data);
  },
  updatePaymentData({ commit }, data) {
    commit("SET_PAYMENT_DATA", data);
  },
  updateProductData({ commit }, data) {
    commit("SET_PRODUCT_DATA", data);
  },
};

const getters = {
  personData: (state) => state.personData,
  deliveryData: (state) => state.deliveryData,
  paymentData: (state) => state.paymentData,
  productData: (state) => state.productData,
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
