const state = {
  paymentMethod: "",
  qrCodeImage: require("@/assets/images/pix.png"),
  billImage: require("@/assets/images/cod.png"),
  billCode: "Código do Boleto",
  cardNumber: "",
  cardHolder: "",
  expirationDate: "",
  cvv: "",
};

const mutations = {
  SET_PAYMENT_METHOD(state, method) {
    state.paymentMethod = method;
  },
  SET_CARD_NUMBER(state, cardNumber) {
    state.cardNumber = cardNumber;
  },
  SET_CARD_HOLDER(state, cardHolder) {
    state.cardHolder = cardHolder;
  },
  SET_EXPIRATION_DATE(state, expirationDate) {
    state.expirationDate = expirationDate;
  },
  SET_CVV(state, cvv) {
    state.cvv = cvv;
  },
};

const actions = {
  updatePaymentMethod({ commit }, method) {
    commit("SET_PAYMENT_METHOD", method);
  },
  updateCardNumber({ commit }, cardNumber) {
    commit("SET_CARD_NUMBER", cardNumber);
  },
  updateCardHolder({ commit }, cardHolder) {
    commit("SET_CARD_HOLDER", cardHolder);
  },
  updateExpirationDate({ commit }, expirationDate) {
    commit("SET_EXPIRATION_DATE", expirationDate);
  },
  updateCvv({ commit }, cvv) {
    commit("SET_CVV", cvv);
  },
};

const getters = {
  paymentMethod: (state) => state.paymentMethod,
  qrCodeImage: (state) => state.qrCodeImage,
  billImage: (state) => state.billImage,
  billCode: (state) => state.billCode,
  cardNumber: (state) => state.cardNumber,
  cardHolder: (state) => state.cardHolder,
  expirationDate: (state) => state.expirationDate,
  cvv: (state) => state.cvv,
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
