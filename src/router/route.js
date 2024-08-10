import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomePage.vue";
import SuccessPage from "../views/SucessView.vue";
import NotFound from "../views/NotFound.vue";
import PersonDataForm from "../components/PersonDataForm.vue";
import DeliveryData from "@/components/DeliveryData.vue";
import CheckoutForm from "@/components/CheckoutForm.vue";

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
    path: "/deliveryData",
    name: "DeliveryData",
    component: DeliveryData,
    props: true,
  },
  {
    path: "/checkout",
    name: "Checkout",
    component: CheckoutForm,
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
