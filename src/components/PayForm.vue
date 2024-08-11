<template>
  <div>
    <template v-if="paymentMethod === 'pix'">
      <div class="pix-option">
        <h3>{{ $t("checkoutForm.pixOption") }}</h3>
        <img :src="qrCodeImage" alt="QR Code" class="qr-code" />
        <v-btn>{{ $t("checkoutForm.pixInstructions") }}</v-btn>
      </div>
    </template>

    <template v-if="paymentMethod === 'boleto'">
      <div class="bill-option">
        <h3>{{ $t("checkoutForm.boletoOption") }}</h3>
        <img :src="billImage" alt="Boleto" class="bill-image" />
        <v-btn>
          {{ $t("checkoutForm.boletoInstructions") }}
        </v-btn>
      </div>
    </template>

    <template v-if="paymentMethod === 'creditCard'">
      <h3 class="title-credit">{{ $t("checkoutForm.creditCardOption") }}</h3>
      <v-text-field
        variant="solo-filled"
        v-model="cardNumber"
        :label="$t('checkoutForm.cardNumberLabel')"
        required
      />
      <v-text-field
        variant="solo-filled"
        v-model="cardHolder"
        :label="$t('checkoutForm.cardHolderLabel')"
        required
      />
      <v-text-field
        variant="solo-filled"
        v-model="expirationDate"
        :label="$t('checkoutForm.expirationDateLabel')"
        required
      />
      <v-text-field
        variant="solo-filled"
        v-model="cvv"
        :label="$t('checkoutForm.cvvLabel')"
        type="password"
        required
      />
    </template>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  props: {
    paymentMethod: {
      type: String,
      required: true,
    },
    qrCodeImage: {
      type: String,
      required: true,
    },
    billImage: {
      type: String,
      required: true,
    },
    billCode: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...mapState("payment", [
      "cardNumber",
      "cardHolder",
      "expirationDate",
      "cvv",
    ]),
  },
  methods: {
    ...mapActions("payment", [
      "updateCardNumber",
      "updateCardHolder",
      "updateExpirationDate",
      "updateCvv",
    ]),
  },
  setup() {
    return {};
  },
};
</script>

<style scoped>
h3 {
  margin-top: 20px;
}

.title-credit {
  margin-bottom: 10px;
}

.pix-option,
.bill-option {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
}

.qr-code,
.bill-image {
  width: 150px;
  height: auto;
}
</style>
