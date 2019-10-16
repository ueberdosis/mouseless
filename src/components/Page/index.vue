<template>
  <div class="page">
    <div class="page__header">
      <div class="page__left" :class="{ 'has-traffic-light-spacing': trafficLightSpacing }">
        <slot name="left" />
      </div>
      <div class="page__center">
        <template v-if="title">
          {{ title }}
        </template>
        <span class="page__sub-title truncate" v-if="subtitle">{{ subtitle }}</span>
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

    trafficLightSpacing: {
      type: Boolean,
      default: true,
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
