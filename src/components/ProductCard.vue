<template>
    <v-card>
      <v-img :src="product.image" height="200px"></v-img>
      <v-card-title>{{ product.name }}</v-card-title>
      <v-card-subtitle>
        <span>R$ {{ product.value }}</span>
      </v-card-subtitle>
      <v-card-text>
        <p>{{ product.description }}</p>
        <p>{{ product.pages }}</p>
        <p>{{ product.publisher }}</p>
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary">{{ $t('homepage.buy') }}</v-btn>
      </v-card-actions>
    </v-card>
  </template>
  
  <script>
  export default {
    name: 'ProductCard',
    props: {
      product: {
        type: Object,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>

  </style>
  
  