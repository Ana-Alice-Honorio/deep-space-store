<template>
  <v-card class="product-card">
    <v-img :src="product.image" height="200px"></v-img>
    <v-card-title class="title">{{ product.name }}</v-card-title>
    <v-card-subtitle class="subtitle">
      <span>R$ {{ product.value }}</span>
    </v-card-subtitle>
    <v-card-text class="text-content">
      <p>{{ product.description }}</p>
      <p>{{ product.pages }}</p>
      <p>{{ product.publisher }}</p>
    </v-card-text>
    <v-card-actions>
      <v-btn color="primary">{{ $t("homepage.buy") }}</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProductCard",
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
});
</script>

<style scoped>
.product-card {
  padding-top: 20px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.title,
.subtitle {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.text-content {
  flex-grow: 1;
  overflow: hidden;
}

.text-content p {
  margin: 0;
}
</style>
