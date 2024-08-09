<template>
  <v-container class="text-center">
    <v-row>
      <v-col>
        <v-icon large class="not-found-icon">mdi-alert-circle</v-icon>
        <h1>{{ $t("notfound.title") }}</h1>
        <p>{{ $t("notfound.message") }}</p>
        <v-btn color="primary" @click="goHome">{{
          $t("notfound.goHome")
        }}</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "NotFound",
  methods: {
    goHome() {
      this.$router.push({ name: "Home" });
    },
  },
};
</script>

<style scoped>
.not-found-icon {
  color: #f44336;
  margin-bottom: 16px;
}
</style>
