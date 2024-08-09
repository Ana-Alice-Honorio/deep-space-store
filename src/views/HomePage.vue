<template>
  <v-container fluid>
    <v-row justify="center" align="center">
      <v-col cols="12">
        <h2>{{ $t("homepage.products") }}</h2>
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
  </v-container>
</template>

<script>
import { ref, onMounted } from "vue";
import axios from "axios";
import ProductCard from "../components/ProductCard.vue";

export default {
  components: {
    ProductCard,
  },
  setup() {
    const products = ref([]);
    const offer = ref(null);

    const fetchProducts = async () => {
      try {
        const response = await axios.get("/api/products");
        products.value = response.data;
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      }
    };

    onMounted(() => {
      fetchProducts();
    });

    return {
      products,
      offer,
    };
  },
};
</script>

<style>
.v-container {
  margin-top: 64px;
}
</style>
