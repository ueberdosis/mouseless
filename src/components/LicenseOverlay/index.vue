<template>
  <div class="license-overlay">
    <div>
      <h2>
        Enter your license
      </h2>
    </div>

    <div>
      <btn @click.native="close">
        Close
      </btn>
    </div>

    <div>
      <btn @click.native="buyLicense">
        Buy License
      </btn>
      <license-input />
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
