<template>
  <div class="page">
    <div class="page__header">
      <div class="page__left" v-if="$scopedSlots.left">
        <slot name="left" />
      </div>
      <div class="page__center">
        <span class="page__title" v-if="title">
          {{ title }}
        </span>
        <span class="page__subtitle" style="opacity: 0.5" v-if="subtitle">
          {{ subtitle }}
        </span>
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
  name: 'Page',

  components: {
    Btn,
  },

  props: {
    title: {
      type: String,
      default: null,
    },

    subtitle: {
      type: String,
      default: null,
    },
  },

  methods: {
    reset() {
      this.$db.store.clear()
    },
  },
}
</script>

<style lang="scss" src="./style.scss"></style>
