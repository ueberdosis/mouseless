<template>
  <div class="options">
    <div>
      <h2>
        Options
      </h2>
    </div>

    <div>
      <btn @click.native="close">
        Close
      </btn>
    </div>

    <div>
      <btn @click.native="reset">
        Reset Store
      </btn>
    </div>

    <div>
      <a :href="buyLink" target="blank">
        Buy License
      </a>
      <license-input />
    </div>
  </div>
</template>

<script>
import Event from '@/services/Event'
import Btn from '@/components/Btn'
import LicenseInput from '@/components/LicenseInput'

export default {
  name: 'Options',

  components: {
    Btn,
    LicenseInput,
  },

  data() {
    return {
      buyLink: `https://gumroad.com/l/${process.env.VUE_APP_GUMROAD_PRODUCT_ID}`,
    }
  },

  methods: {
    close() {
      Event.emit('hideOptions')
    },

    reset() {
      this.$db.store.clear()
    },
  },
}
</script>

<style lang="scss" src="./style.scss" scoped></style>
