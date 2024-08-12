import { createStore } from "vuex";
import products from "./modules/products";
import delivery from "./modules/delivery";
import checkout from "./modules/checkout";
import payment from "./modules/payment";
import resume from "./modules/resume";
import personalData from "./modules/personalData";

const store = createStore({
  modules: {
    products,
    delivery,
    checkout,
    payment,
    resume,
    personalData,
  },
});

export default store;
