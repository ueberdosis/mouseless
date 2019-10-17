<template>
  <div class="wrapper" :class="{ 'is-loaded': isLoaded }">
    <div class="wrapper__content" :class="{ 'is-hidden': showOptions || showLicense }">
      <transition :name="transitionName">
        <router-view class="route" />
      </transition>
      <div class="wrapper__content-overlay" />
    </div>

    <transition name="options">
      <options-overlay class="wrapper__overlay" v-if="showOptions" />
    </transition>

    <transition name="options">
      <license-overlay class="wrapper__overlay" v-if="showLicense" />
    </transition>
  </div>
</template>

<script>
import SpatialNavigation from 'spatial-navigation-js'
import Event from '@/services/Event'
import OptionsOverlay from '@/components/OptionsOverlay'
import LicenseOverlay from '@/components/LicenseOverlay'

export default {
  name: 'Wrapper',

  components: {
    OptionsOverlay,
    LicenseOverlay,
  },

  data() {
    return {
      isLoaded: false,
      showOptions: false,
      showLicense: !this.$db.verified,
    }
  },

  computed: {
    transitionName() {
      if (this.$route.name === 'shortcuts') {
        return null
      }

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

    onShowLicense() {
      this.showLicense = true
    },

    onHideLicense() {
      this.showLicense = false
    },
  },

  mounted() {
    setTimeout(() => {
      this.isLoaded = true
    }, 0)

    SpatialNavigation.init()
    SpatialNavigation.add({ selector: '[data-focusable]' })
    SpatialNavigation.makeFocusable()

    Event.on('showOptions', this.onShowOptions)
    Event.on('hideOptions', this.onHideOptions)
    Event.on('showLicense', this.onShowLicense)
    Event.on('hideLicense', this.onHideLicense)
  },

  beforeDestroy() {
    Event.off('showOptions', this.onShowOptions)
    Event.off('hideOptions', this.onHideOptions)
    Event.off('showLicense', this.onShowLicense)
    Event.off('hideLicense', this.onHideLicense)
  },
}
</script>

<style lang="scss" src="./fonts.scss"></style>
<style lang="scss" src="./base.scss"></style>
<style lang="scss" src="./animations.scss"></style>
<style lang="scss" src="./style.scss" scoped></style>
