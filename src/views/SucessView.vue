<template>
  <v-container class="text-center">
    <v-row>
      <v-col>
        <v-icon large class="success-icon">mdi-check-circle</v-icon>
        <h1>{{ $t("successpage.title") }}</h1>
        <p>{{ $t("successpage.message") }}</p>
        <v-btn color="primary" @click="goHome">{{
          $t("successpage.goHome")
        }}</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "SuccessPage",
  methods: {
    goHome() {
      this.$router.push({ name: "Home" });
    },
  },
};
</script>

<style scoped>
.success-icon {
  color: #4caf50;
  margin-bottom: 16px;
}
</style>
