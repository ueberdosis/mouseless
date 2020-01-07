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
import { ipcRenderer } from 'electron'
import SpatialNavigation from 'spatial-navigation-js'
import Event from '@/services/Event'
import User from '@/services/User'
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
      showLicense: !User.isVerified,
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

    onLog(event, log) {
      // eslint-disable-next-line
      console.log(log)
    },
  },

  mounted() {
    setTimeout(() => {
      this.isLoaded = true
      document.body.classList.add('is-loaded')
    }, 0)

    SpatialNavigation.init()
    SpatialNavigation.add({ selector: '[data-focusable]' })
    SpatialNavigation.makeFocusable()

    Event.on('showOptions', this.onShowOptions)
    Event.on('hideOptions', this.onHideOptions)
    Event.on('showLicense', this.onShowLicense)
    Event.on('hideLicense', this.onHideLicense)

    ipcRenderer.on('log', this.onLog)
  },

  beforeDestroy() {
    Event.off('showOptions', this.onShowOptions)
    Event.off('hideOptions', this.onHideOptions)
    Event.off('showLicense', this.onShowLicense)
    Event.off('hideLicense', this.onHideLicense)

    ipcRenderer.removeListener('log', this.onLog)
  },
}
</script>

<style lang="scss" src="./fonts.scss"></style>
<style lang="scss" src="./base.scss"></style>
<style lang="scss" src="./animations.scss"></style>
<style lang="scss" src="./style.scss" scoped></style>
