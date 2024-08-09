<template>
    <v-container fluid>
      <v-row justify="center" align="center">
        <v-col cols="12">
          <h2>{{ $t('homepage.products') }}</h2>
        </v-col>
        <v-col
          v-for="product in products"
          :key="product.id"
          cols="12"
          sm="6"
          md="4"
        >
          <ProductCard :product="product" />
        </v-col>
      </v-row>
      <v-btn @click="fetchOffer">Buscar Oferta</v-btn>
      <div v-if="offer">
        <h3>Oferta: {{ offer.name }}</h3>
        <p>Valor: R$ {{ offer.value }}</p>
        <p>Itens: {{ offer.items.join(', ') }}</p>
        <p>Meios de pagamento: {{ offer.payOptions.join(', ') }}</p>
        <img v-for="img in offer.images" :key="img" :src="img" :alt="offer.name" />
        <p>{{ offer.description }}</p>
      </div>
    </v-container>
  </template>
  
  <script>
  import axios from 'axios';
  import ProductCard from '../components/ProductCard.vue';
  
  export default {
    components: {
      ProductCard,
    },
    data() {
      return {
        products: [],
        offer: null,
      };
    },
    mounted() {
      this.fetchProducts();
    },
    methods: {
      fetchProducts() {
        axios.get('/api/products')
          .then(response => {
            this.products = response.data;
          })
          .catch(error => {
            console.error('Erro ao buscar produtos:', error);
          });
      },
      fetchOffer() {
        const OFFER_CODE = 'miniatura-enterprise';
        axios.get(`/offers/${OFFER_CODE}`)
          .then(response => {
            this.offer = response.data;
          })
          .catch(error => {
            console.error('Erro ao buscar oferta:', error);
          });
      },
    },
  };
  </script>
  
  <style>
  .v-container {
    margin-top: 64px;
  }
  </style>
  