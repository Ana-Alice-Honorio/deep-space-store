import { createApp } from "vue";
import App from "./App.vue";
import { createI18n } from "vue-i18n";
import ptBR from "../src/locales/pt-br.json";
import "../src/mocks/webserver";

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

const app = createApp(App);
app.use(vuetify);
app.use(i18n);
app.mount("#app");
