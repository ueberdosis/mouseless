<template>
  <div class="wrapper" :class="{ 'is-loaded': isLoaded }">
    <div class="wrapper__content" :class="{ 'is-hidden': showOptions }">
      <transition :name="transitionName">
        <router-view class="route" />
      </transition>
      <div class="wrapper__content-overlay" />
    </div>

    <transition name="options">
      <options-overlay class="wrapper__options" v-if="showOptions" />
    </transition>
  </div>
</template>

<script>
import Event from '@/services/Event'
import OptionsOverlay from '@/components/OptionsOverlay'

export default {
  name: 'Wrapper',

  components: {
    OptionsOverlay,
  },

  data() {
    return {
      isLoaded: false,
      showOptions: false,
    }
  },

  computed: {
    transitionName() {
      return this.$route.name === 'apps' ? 'slide-right' : 'slide-left'
    },
  },

  methods: {
    onShowOptions() {
      this.showOptions = true
    },

    onHideOptions() {
      this.showOptions = false
    },
  },

  mounted() {
    setTimeout(() => {
      this.isLoaded = true
    }, 0)

    Event.on('showOptions', this.onShowOptions)
    Event.on('hideOptions', this.onHideOptions)
  },

  beforeDestroy() {
    Event.off('showOptions', this.onShowOptions)
    Event.off('hideOptions', this.onHideOptions)
  },
}
</script>

<style lang="scss" src="./fonts.scss"></style>
<style lang="scss" src="./base.scss"></style>
<style lang="scss" src="./style.scss" scoped></style>
