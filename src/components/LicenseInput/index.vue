<template>
  <div class="license-input">
    <the-mask
      class="license-input__input"
      :class="{
        'is-success': isSuccess,
        'is-error': isError,
      }"
      :mask="licenseMask"
      :masked="true"
      :placeholder="licensePlaceholder"
      :disabled="isLoading"
      v-model="licenseKey"
      @input="onChange"
      :tokens="tokens"
    />
    <div class="license-input__error" v-if="isError">
      Sorry. This license does not exist.
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { TheMask } from 'vue-the-mask'

export default {
  name: 'LicenseInput',

  components: {
    TheMask,
  },

  data() {
    return {
      isLoading: false,
      isSuccess: false,
      isError: false,
      licenseMask: 'XXXXXXXX-XXXXXXXX-XXXXXXXX-XXXXXXXX',
      licensePlaceholder: '00000000-00000000-00000000-00000000',
      licenseKey: null,
      // licenseKey: 'CEFA8043-F49D46F2-965EA1E6-11725170',
      tokens: {
        X: {
          pattern: /[0-9a-zA-Z]/,
          transform: v => v.toLocaleUpperCase(),
        },
      },
    }
  },

  methods: {
    onChange() {
      if (this.licenseKey.length === this.licenseMask.length) {
        this.checkLicense()
      }
    },

    checkLicense() {
      this.isLoading = true

      axios
        .post('https://cors-anywhere.herokuapp.com/api.gumroad.com/v2/licenses/verify', {
          product_permalink: process.env.VUE_APP_GUMROAD_PRODUCT_ID,
          license_key: this.licenseKey,
        })
        .then(response => {
          console.log({ response })
          this.isSuccess = true
          this.isError = false
        })
        .catch(error => {
          console.log({ error })
          this.isSuccess = false
          this.isError = true
        })
        .finally(() => {
          this.isLoading = false
        })
    },
  },

  mounted() {
    console.log(process.env.VUE_APP_GUMROAD_PRODUCT_ID)
  },
}
</script>

<style lang="scss" src="./style.scss" scoped></style>
