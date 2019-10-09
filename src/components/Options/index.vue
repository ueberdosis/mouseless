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
  </div>
</template>

<script>
import axios from 'axios'
import Event from '@/services/Event'
import Btn from '@/components/Btn'

export default {
  name: 'Options',

  components: {
    Btn,
  },

  methods: {
    close() {
      Event.emit('hideOptions')
    },

    reset() {
      this.$db.store.clear()
    },

    checkLicense() {
      axios
        .post('https://cors-anywhere.herokuapp.com/api.gumroad.com/v2/licenses/verify', {
          product_permalink: 'oyJZx',
          license_key: 'CEFA8043-F49D46F2-965EA1E6-11725170',
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
    this.checkLicense()
  },
}
</script>

<style lang="scss" src="./style.scss" scoped></style>
