<template>
  <div class="license-overlay">
    <div class="license-overlay__content">
      <h1>
        Enter your license
      </h1>
      <license-input />
    </div>
    <div class="license-overlay__footer">
      <btn @click.native="buyLicense">
        Buy License
      </btn>
      <btn @click.native="close">
        Close
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
    close() {
      Event.emit('hideLicense')
    },

    reset() {
      this.$db.store.clear()
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
