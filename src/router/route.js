import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomePage.vue";
import SuccessPage from "../views/SucessView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/success",
    name: "Success",
    component: SuccessPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
