<template>
  <v-dialog v-model="isDialogOpen" max-width="600px">
    <v-card>
      <v-card-title>
        <span class="headline">{{ $t("resumeOrder.title") }}</span>
      </v-card-title>
      <v-card-text>
        <p>
          <strong>{{ $t("resumeOrder.beneficiary") }}:</strong> Deep Space Store
        </p>
        <p>
          <strong>{{ $t("resumeOrder.product") }}:</strong> {{ productName }}
        </p>
        <p>
          <strong>{{ $t("resumeOrder.name") }}:</strong>
          {{ personalData.name || "Não disponível" }}
        </p>
        <p>
          <strong>{{ $t("resumeOrder.email") }}:</strong>
          {{ personalData.email || "Não disponível" }}
        </p>
        <p>
          <strong>{{ $t("resumeOrder.phone") }}:</strong>
          {{ personalData.phone || "Não disponível" }}
        </p>
        <p>
          <strong>{{ $t("resumeOrder.address") }}:</strong> {{ fullAddress }}
        </p>
        <p>
          <strong>{{ $t("resumeOrder.paymentMethod") }}:</strong>
          {{ paymentMethod }}
        </p>
        <p>
          <strong>{{ $t("resumeOrder.randomCode") }}:</strong> {{ randomCode }}
        </p>
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" @click="closeModal">
          {{ $t("checkoutForm.close") }}
        </v-btn>
        <v-btn color="success" @click="finalizeOrder">
          {{ $t("checkoutForm.finish") }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { computed, ref, watch } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
  props: {
    paymentMethod: {
      type: String,
      required: true,
    },
    isOpen: {
      type: Boolean,
      required: true,
    },
  },
  setup(props, { emit }) {
    const router = useRouter();
    const store = useStore();
    const isDialogOpen = ref(props.isOpen);

    const productName = computed(() => {
      return (
        store.getters["products/selectedProduct"]?.name || "Não disponível"
      );
    });

    const personalData = computed(() => {
      return (
        store.getters["personalData/getPersonalData"] || {
          name: "Não disponível",
          email: "Não disponível",
          phone: "Não disponível",
        }
      );
    });

    const deliveryAddress = computed(() => {
      return (
        store.getters["delivery/deliveryAddress"] || {
          street: "Não disponível",
          number: "",
          neighborhood: "Não disponível",
          city: "Não disponível",
          state: "Não disponível",
        }
      );
    });

    const fullAddress = computed(() => {
      const address = deliveryAddress.value;
      return `${address.street || "Não disponível"}, ${address.number || ""}, ${
        address.neighborhood || "Não disponível"
      }, ${address.city || "Não disponível"}, ${
        address.state || "Não disponível"
      }`;
    });

    const randomCode = computed(() => {
      return Math.random().toString(36).substring(2, 8);
    });

    const closeModal = () => {
      isDialogOpen.value = false;
      emit("close");
    };

    watch(
      () => props.isOpen,
      (newValue) => {
        isDialogOpen.value = newValue;
      }
    );

    const finalizeOrder = () => {
      closeModal();
      router.push({ name: "Success" });
    };

    return {
      isDialogOpen,
      productName,
      personalData,
      deliveryAddress,
      fullAddress,
      randomCode,
      closeModal,
      finalizeOrder,
    };
  },
};
</script>

<style scoped>
.v-dialog {
  backdrop-filter: blur(5px);
}
</style>
