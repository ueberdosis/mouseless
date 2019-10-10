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
        <span class="page__subtitle" v-if="subtitle">
          <span style="opacity: 0.5">/</span> {{ subtitle }}
        </span>
      </div>
      <div class="page__right">
        <btn icon="options" @click.native="showOptions" />
      </div>
    </div>
    <div class="page__content">
      <slot />
    </div>
  </div>
</template>

<script>
import Event from '@/services/Event'
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
    showOptions() {
      Event.emit('showOptions')
    },
  },
}
</script>

<style lang="scss" src="./style.scss"></style>
