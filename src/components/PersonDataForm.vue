<template>
  <v-container class="form-container">
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="6">
        <v-form ref="form" @submit.prevent="submitForm">
          <v-text-field
            variant="solo-filled"
            v-model="name"
            :label="$t('personDataForm.name')"
            :placeholder="$t('personDataForm.namePlaceholder')"
            @focus="clearError('name')"
            required
          ></v-text-field>
          <div v-if="errors.name.length" class="error-message">
            <v-icon color="red" small>mdi-alert-circle</v-icon>
            <span>{{ errors.name[0] }}</span>
          </div>

          <v-text-field
            variant="solo-filled"
            v-model="email"
            :label="$t('personDataForm.email')"
            :placeholder="$t('personDataForm.emailPlaceholder')"
            @focus="clearError('email')"
          ></v-text-field>
          <div v-if="errors.email.length" class="error-message">
            <v-icon color="red" small>mdi-alert-circle</v-icon>
            <span>{{ errors.email[0] }}</span>
          </div>

          <v-text-field
            variant="solo-filled"
            v-model="phone"
            @input="formatPhone(phone)"
            :label="$t('personDataForm.phone')"
            :placeholder="$t('personDataForm.phonePlaceholder')"
            @focus="clearError('phone')"
            required
          ></v-text-field>
          <div v-if="errors.phone.length" class="error-message">
            <v-icon color="red" small>mdi-alert-circle</v-icon>
            <span>{{ errors.phone[0] }}</span>
          </div>

          <v-btn
            type="submit"
            color="primary"
            class="submit-button"
            :disabled="!isFormValid"
          >
            {{ $t("personDataForm.next") }}
          </v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { defineComponent, ref, computed } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

export default defineComponent({
  name: "PersonDataForm",
  setup() {
    const router = useRouter();
    const store = useStore();
    const name = ref("");
    const email = ref("");
    const phone = ref("");
    const errors = ref({
      name: [],
      email: [],
      phone: [],
    });

    const isFormValid = computed(() => {
      return (
        name.value &&
        phone.value &&
        errors.value.name.length === 0 &&
        errors.value.phone.length === 0
      );
    });

    const goToDeliveryData = () => {
      router.push({
        name: "DeliveryData",
      });
    };

    const clearError = (field) => {
      errors.value[field] = [];
    };

    const formatPhone = (value) => {
      let rawValue = value.replace(/\D/g, "");

      let formattedValue =
        rawValue.length > 10
          ? `(${rawValue.slice(0, 2)}) ${rawValue.slice(2, 7)}-${rawValue.slice(
              7
            )}`
          : rawValue.length > 5
          ? `(${rawValue.slice(0, 2)}) ${rawValue.slice(2, 6)}-${rawValue.slice(
              6
            )}`
          : rawValue.length > 2
          ? `(${rawValue.slice(0, 2)}) ${rawValue.slice(2)}`
          : rawValue.length > 0
          ? `(${rawValue}`
          : "";
      phone.value = formattedValue;
    };

    const validate = () => {
      errors.value.name = !name.value ? ["Campo obrigatório"] : [];

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      errors.value.email =
        email.value && !emailRegex.test(email.value) ? ["E-mail inválido"] : [];

      const phoneRegex = /^\(?\d{2}\)?\s?\d{4,5}-\d{4}$/;
      errors.value.phone = !phone.value
        ? ["Campo obrigatório"]
        : !phoneRegex.test(phone.value)
        ? ["Telefone inválido"]
        : [];
    };

    const submitForm = async () => {
      validate();

      if (
        !errors.value.name.length &&
        !errors.value.phone.length &&
        !errors.value.email.length
      ) {
        await store.dispatch("personalData/saveData", {
          name: name.value,
          email: email.value,
          phone: phone.value,
        });
        goToDeliveryData();
      }
    };

    return {
      name,
      email,
      phone,
      errors,
      formatPhone,
      submitForm,
      clearError,
      goToDeliveryData,
      isFormValid,
    };
  },
});
</script>

<style scoped>
.phone-field {
  margin-bottom: 10px;
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
