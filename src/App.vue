<template>
  <v-app>
    <HeaderComponent />
    <v-container>
      <router-view />
    </v-container>
  </v-app>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";

export default {
  components: {
    HeaderComponent,
  },
};
</script>

<style></style>
