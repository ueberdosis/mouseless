<template>
  <div class="license-overlay">
    <div class="license-overlay__content">
      <h1 class="license-overlay__title">
        Enter your license
      </h1>
      <license-input @success="onSuccess" />
    </div>
    <div class="license-overlay__footer">
      <span>
        Don’t have a license yet?
      </span>
      <btn @click.native="buyLicense" is-yellow>
        Buy License
      </btn>
    </div>
  </div>
</template>

<script>
import Event from '@/services/Event'
import Btn from '@/components/Btn'
import LicenseInput from '@/components/LicenseInput'

export default {
  name: 'LicenseOverlay',

  components: {
    Btn,
    LicenseInput,
  },

  methods: {
    onSuccess() {
      this.close()
    },

    close() {
      Event.emit('hideLicense')
    },

    buyLicense() {
      require('electron')
        .shell
        .openExternal(`https://gumroad.com/l/${process.env.VUE_APP_GUMROAD_PRODUCT_ID}`)
    },
  },
}
</script>

<style lang="scss" src="./style.scss" scoped></style>
