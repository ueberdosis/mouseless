<template>
  <div class="options">
    <div>
      <button @click="close">
        close
      </button>
    </div>

    <div>
      <button @click="reset">
        reset
      </button>
    </div>
  </div>
</template>

<script>
import Event from '@/services/Event'

export default {
  name: 'Options',

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
