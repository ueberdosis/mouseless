<template>
  <div class="page">
    <div class="page__header">
      <div class="page__left" v-if="$scopedSlots.left">
        <slot name="left" />
      </div>
      <div class="page__center" v-if="$scopedSlots.center">
        <slot name="center" />
      </div>
      <div class="page__right">
        <btn icon="options" @click.native="reset" />
      </div>
    </div>
    <div class="page__content">
      <slot />
    </div>
  </div>
</template>

<script>
import Btn from '@/components/Btn'

export default {
  components: {
    Btn,
  },

  methods: {
    reset() {
      this.$db.store.clear()
    },
  },
}
</script>

<style lang="scss" src="./style.scss"></style>
