<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-container>
        <v-form ref="form" v-model="valid" @submit.prevent="submitForm">
          <v-text-field
            variant="solo-filled"
            v-model="cpf"
            :label="$t('checkoutForm.cpfLabel')"
            @input="validateCpf"
            required
          />

          <div v-if="errors.cpf.length" class="error-message">
            <v-icon color="red" small>mdi-alert-circle</v-icon>
            <span>{{ errors.cpf[0] }}</span>
          </div>

          <v-radio-group v-model="selectedPaymentMethod">
            <v-radio
              :label="$t('checkoutForm.boletoOption')"
              value="boleto"
            ></v-radio>
            <v-radio
              :label="$t('checkoutForm.creditCardOption')"
              value="creditCard"
            ></v-radio>
            <v-radio
              :label="$t('checkoutForm.pixOption')"
              value="pix"
            ></v-radio>
          </v-radio-group>

          <PaymentOptions
            v-if="selectedPaymentMethod"
            :paymentMethod="selectedPaymentMethod"
            :qrCodeImage="qrCodeImage"
            :billImage="billImage"
            :billCode="billCode"
          />

          <v-btn type="submit" color="primary" :disabled="!isFormValid">{{
            $t("checkoutForm.nextButton")
          }}</v-btn>
        </v-form>
      </v-container>
    </v-col>
  </v-row>
</template>

<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import PaymentOptions from "./PayForm.vue";

export default {
  components: {
    PaymentOptions,
  },
  setup() {
    const store = useStore();
    const form = ref(null);
    const valid = ref(false);
    const cpf = ref("");
    const selectedPaymentMethod = ref(null);
    const errors = ref({ cpf: [] });
    const qrCodeImage = require("@/assets/images/pix.png");
    const billImage = require("@/assets/images/cod.png");
    const billCode = "Código do Boleto";

    const validateCpf = () => {
      const cpfCleaned = cpf.value.replace(/[^\d]+/g, "");
      errors.value.cpf = [];

      if (cpfCleaned.length === 0) {
        return;
      }

      if (cpfCleaned.length !== 11) {
        errors.value.cpf.push("CPF deve ter 11 dígitos.");
        return;
      }

      if (/^(\d)\1{10}$/.test(cpfCleaned)) {
        errors.value.cpf.push("CPF inválido.");
        return;
      }

      let sum = 0;
      for (let i = 0; i < 9; i++) {
        sum += parseInt(cpfCleaned[i]) * (10 - i);
      }
      let remainder = (sum * 10) % 11;
      if (remainder === 10 || remainder === 11) remainder = 0;
      if (remainder !== parseInt(cpfCleaned[9])) {
        errors.value.cpf.push("CPF inválido.");
        return;
      }

      sum = 0;
      for (let i = 0; i < 10; i++) {
        sum += parseInt(cpfCleaned[i]) * (11 - i);
      }
      remainder = (sum * 10) % 11;
      if (remainder === 10 || remainder === 11) remainder = 0;
      if (remainder !== parseInt(cpfCleaned[10])) {
        errors.value.cpf.push("CPF inválido.");
        return;
      }
    };

    const submitForm = () => {
      if (form.value.validate() && errors.value.cpf.length === 0) {
        store.dispatch("setCheckoutData", {
          cpf: cpf.value,
          paymentMethod: selectedPaymentMethod.value,
        });
      }
    };

    const isFormValid = computed(() => {
      return (
        cpf.value.length === 11 &&
        errors.value.cpf.length === 0 &&
        selectedPaymentMethod.value !== null
      );
    });

    return {
      form,
      valid,
      cpf,
      selectedPaymentMethod,
      errors,
      validateCpf,
      submitForm,
      qrCodeImage,
      billImage,
      billCode,
      isFormValid,
    };
  },
};
</script>

<style scoped>
.error-message {
  display: flex;
  align-items: center;
  color: red;
  font-size: 12px;
  margin-top: -12px;
  margin-bottom: 12px;
}
</style>
