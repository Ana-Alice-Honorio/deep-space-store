<template>
    <v-app-bar :elevation="2">
      <template v-slot:prepend>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
       </template>
      <v-toolbar-title>{{ $t('homepage.title') }}</v-toolbar-title>
    </v-app-bar>
  </template>
  
  <script>
  export default {
    name: 'HeaderComponent',
  };
  </script>
  
  <style>
  </style>
  