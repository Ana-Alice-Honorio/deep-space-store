<template>
  <v-app-bar color="teal-darken-4" :style="appBarStyle">
    <v-app-bar-nav-icon></v-app-bar-nav-icon>

    <v-toolbar-title>{{ $t("homepage.title") }}</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script setup>
const appBarStyle = {
  backgroundImage: `linear-gradient(
      to top right,
      rgba(19, 84, 122, 0.8),
      rgba(128, 208, 199, 0.8)
    ),
    url('https://picsum.photos/1920/1080?random')`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};
</script>

<style scoped></style>
