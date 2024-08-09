<template>
  <v-app>
    <HeaderComponent />
    <v-container>
      <Home />
    </v-container>
  </v-app>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import Home from '../src/views/HomePage.vue';

export default {
  components: {
    HeaderComponent,
    Home,
  },
};
</script>

<style>

</style>

