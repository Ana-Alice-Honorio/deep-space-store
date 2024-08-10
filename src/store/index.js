import { createStore } from "vuex";
import products from "./modules/products";
import delivery from "./modules/delivery";
import checkout from "./modules/checkout";

const store = createStore({
  modules: {
    products,
    delivery,
    checkout,
  },
});

export default store;
