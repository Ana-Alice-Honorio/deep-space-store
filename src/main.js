import { createApp } from "vue";
import App from "./App.vue";
import { createI18n } from "vue-i18n";
import ptBR from "../src/locales/pt-br.json";
import "../src/mocks/webserver";
import router from "../src/router/route";

const i18n = createI18n({
  locale: "pt-BR",
  messages: {
    "pt-BR": ptBR,
  },
});

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "@mdi/font/css/materialdesignicons.css";

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: "mdi",
  },
});

createApp(App).use(router).use(i18n).use(vuetify).mount("#app");
