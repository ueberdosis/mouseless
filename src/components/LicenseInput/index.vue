<template>
  <div class="license-input">
    <the-mask
      class="license-input__input"
      :mask="licenseMask"
      :masked="true"
      :placeholder="licenseMask"
      :disabled="disabled"
      v-model="licenseKey"
      @input="onChange"
      :tokens="tokens"
    />
  </div>
</template>

<script>
import axios from 'axios'
import { TheMask } from 'vue-the-mask'

export default {
  components: {
    TheMask,
  },

  data() {
    return {
      disabled: false,
      licenseMask: 'XXXXXXXX-XXXXXXXX-XXXXXXXX-XXXXXXXX',
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
      this.disabled = true

      axios
        .post('https://cors-anywhere.herokuapp.com/api.gumroad.com/v2/licenses/verify', {
          product_permalink: process.env.VUE_APP_GUMROAD_PRODUCT_ID,
          license_key: this.licenseKey,
        })
        .then(response => {
          console.log({ response })
        })
        .catch(error => {
          console.log({ error })
        })
    },
  },

  mounted() {
    console.log(process.env.VUE_APP_GUMROAD_PRODUCT_ID)
  },
}
</script>

<style lang="scss" src="./style.scss" scoped></style>
