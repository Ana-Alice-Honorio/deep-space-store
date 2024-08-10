import { createStore } from "vuex";
import products from "./modules/products";
import delivery from "./modules/delivery";

const store = createStore({
  modules: {
    products,
    delivery,
  },
});

export default store;
