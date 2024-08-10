import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomePage.vue";
import SuccessPage from "../views/SucessView.vue";
import NotFound from "../views/NotFound.vue";
import PersonDataForm from "../components/PersonDataForm.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/person-data/:productId",
    name: "PersonDataForm",
    component: PersonDataForm,
    props: true,
  },
  {
    path: "/success",
    name: "Success",
    component: SuccessPage,
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
