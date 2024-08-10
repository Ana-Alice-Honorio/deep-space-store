<template>
  <v-form ref="form" @submit.prevent="nextStep" class="form">
    <v-text-field
      variant="solo-filled"
      v-model="cep"
      :label="$t('deliveryAddressForm.cep')"
      placeholder="Digite seu CEP"
      required
      @blur="fetchAddress"
      @input="clearError"
    ></v-text-field>
    <v-text-field
      variant="solo-filled"
      v-model="deliveryAddress.street"
      :label="$t('deliveryAddressForm.street')"
      placeholder="Logradouro"
      required
      @input="clearError"
    ></v-text-field>
    <v-text-field
      variant="solo-filled"
      v-model="deliveryAddress.number"
      :label="$t('deliveryAddressForm.number')"
      placeholder="Número da residência"
      required
      @input="clearError"
    ></v-text-field>
    <v-text-field
      variant="solo-filled"
      v-model="deliveryAddress.neighborhood"
      :label="$t('deliveryAddressForm.neighborhood')"
      placeholder="Bairro"
      required
      @input="clearError"
    ></v-text-field>
    <v-text-field
      variant="solo-filled"
      v-model="deliveryAddress.city"
      :label="$t('deliveryAddressForm.city')"
      placeholder="Cidade"
      required
      @input="clearError"
    ></v-text-field>
    <v-combobox
      :label="$t('deliveryAddressForm.state')"
      :items="ufs"
      variant="solo-filled"
      placeholder="Selecione o estado"
      v-model="deliveryAddress.state"
      required
      @input="clearError"
    ></v-combobox>

    <div v-if="errorMessage" class="error-message">
      <v-icon color="red" small>mdi-alert-circle</v-icon>
      <span>{{ errorMessage }}</span>
    </div>
    <v-btn type="submit" color="primary" :disabled="!isFormValid">
      {{ $t("deliveryAddressForm.next") }}
    </v-btn>
  </v-form>
</template>

<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
  setup() {
    const store = useStore();
    const router = useRouter();
    const cep = ref("");
    const deliveryAddress = ref({
      street: "",
      number: "",
      neighborhood: "",
      city: "",
      state: "",
    });
    const ufs = [
      "AC",
      "AL",
      "AP",
      "AM",
      "BA",
      "CE",
      "DF",
      "ES",
      "GO",
      "MA",
      "MT",
      "MS",
      "MG",
      "PA",
      "PB",
      "PR",
      "PE",
      "PI",
      "RJ",
      "RN",
      "RS",
      "RO",
      "RR",
      "SC",
      "SP",
      "SE",
      "TO",
    ];
    const errorMessage = ref("");
    const fetchAddress = async () => {
      const cepPattern = /^[0-9]{8}$/;

      if (!cepPattern.test(cep.value)) {
        errorMessage.value = "CEP inválido. O CEP deve ter 8 dígitos.";
        clearAddressFields();
        return;
      }

      try {
        const response = await fetch(
          `https://viacep.com.br/ws/${cep.value}/json/`
        );
        const data = await response.json();

        if (!data.erro) {
          deliveryAddress.value = {
            street: data.logradouro,
            number: "",
            neighborhood: data.bairro,
            city: data.localidade,
            state: data.uf,
          };
          store.dispatch(
            "delivery/updateDeliveryAddress",
            deliveryAddress.value
          );
          errorMessage.value = "";
        } else {
          errorMessage.value = "CEP não encontrado.";
          clearAddressFields();
        }
      } catch (error) {
        console.error("Erro ao buscar endereço:", error);
      }
    };

    const clearAddressFields = () => {
      deliveryAddress.value = {
        street: "",
        number: "",
        neighborhood: "",
        city: "",
        state: "",
      };
      store.dispatch("delivery/updateDeliveryAddress", deliveryAddress.value);
    };

    const clearError = () => {
      errorMessage.value = "";
    };

    const isFormValid = computed(() => {
      return (
        deliveryAddress.value.street &&
        deliveryAddress.value.number &&
        deliveryAddress.value.neighborhood &&
        deliveryAddress.value.city &&
        deliveryAddress.value.state
      );
    });

    const nextStep = async () => {
      errorMessage.value = "";

      if (!isFormValid.value) {
        errorMessage.value =
          "Todos os campos obrigatórios devem ser preenchidos.";

        return;
      }

      try {
        await store.dispatch(
          "delivery/updateDeliveryAddress",
          deliveryAddress.value
        );
        router.push("/checkout");
      } catch (error) {
        console.error("Erro ao atualizar o endereço:", error);
      }
    };
    return {
      cep,
      deliveryAddress,
      ufs,
      errorMessage,
      fetchAddress,
      clearAddressFields,
      clearError,
      isFormValid,
      nextStep,
    };
  },
};
</script>

<style scoped>
.form {
  padding-top: 70px;
}
.error-message {
  display: flex;
  align-items: center;
  color: red;
  font-size: 12px;
  margin-top: -12px;
  margin-bottom: 12px;
}
</style>
