<template>
  <v-card class="product-card">
    <v-img :src="product.image" height="200px"></v-img>
    <v-card-title class="title">{{ product.name }}</v-card-title>
    <v-card-subtitle class="subtitle">
      <span class="value">R$ {{ product.value }}</span>
    </v-card-subtitle>
    <v-card-text class="text-content">
      <p class="description">{{ product.description.slice(0, 81) }}</p>
      <p>{{ product.pages }}</p>
    </v-card-text>
    <v-card-actions>
      <v-btn class="custom-button" @click="goToPersonData">
        {{ $t("homepage.buy") }}
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

export default defineComponent({
  name: "ProductCard",
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const router = useRouter();

    const store = useStore();

    const goToPersonData = () => {
      store.dispatch("products/selectProduct", props.product);
      router.push({
        name: "PersonDataForm",
        params: { productId: props.product.id },
      });
    };

    return {
      goToPersonData,
    };
  },
});
</script>

<style scoped>
.product-card {
  padding-top: 20px;
  height: 450px;
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
.custom-button {
  background-color: #1976d2;
  color: white;
  text-transform: none;
}
.value {
  font-weight: 600;
  font-size: 20px;
  color: #1976d2;
}
.description {
  font-weight: 700;
}
</style>
