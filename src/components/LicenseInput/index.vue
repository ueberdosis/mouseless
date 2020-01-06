<template>
  <div class="license-input">
    <the-mask
      class="license-input__input"
      :class="{
        'is-success': isSuccess,
        'is-error': isError,
      }"
      v-model="licenseKey"
      :mask="licenseMask"
      :tokens="tokens"
      :masked="true"
      :placeholder="licensePlaceholder"
      :disabled="isLoading"
      @input="onChange"
      @keyup.enter.native="onChange"
      ref="input"
    />
    <div class="license-input__error-wrapper">
      <transition name="bottom-to-top">
        <div class="license-input__error" v-if="isError">
          {{ errorMessage }}
          <button class="license-input__retry" @click="retry">
            Retry
          </button>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { TheMask } from 'vue-the-mask'
import { ipcRenderer } from 'electron'
import User from '@/services/User'

export default {
  name: 'LicenseInput',

  components: {
    TheMask,
  },

  data() {
    return {
      isLoading: false,
      isSuccess: false,
      isError: false,
      errorMessage: null,
      licenseUsageLimit: 2,
      licenseMask: 'XXXXXXXX-XXXXXXXX-XXXXXXXX-XXXXXXXX',
      licensePlaceholder: '00000000-00000000-00000000-00000000',
      licenseKey: null,
      tokens: {
        X: {
          pattern: /[0-9a-zA-Z]/,
          transform: v => v.toLocaleUpperCase(),
        },
      },
    }
  },

  methods: {
    retry() {
      this.onChange()
    },

    onChange() {
      if (this.licenseKey.length === this.licenseMask.length) {
        this.verifyLicense()
      }
    },

    verifyLicense() {
      if (this.isLoading) {
        return
      }

      this.isError = false
      this.isLoading = true
      ipcRenderer.send('verifyLicenseKey', this.licenseKey)
    },

    handleSuccess() {
      if (!User.isVerified) {
        return
      }

      this.isSuccess = true
      this.isLoading = false
      this.$emit('success')
    },

    handleFail(_, errorMessage) {
      this.errorMessage = errorMessage
      this.isError = true
      this.isLoading = false
      this.focusInput()
    },

    focusInput() {
      this.$nextTick(() => {
        if (this.$refs.input) {
          this.$refs.input.$el.focus()
        }
      })
    },
  },

  mounted() {
    this.focusInput()
    ipcRenderer.on('verifyLicenseKey:succeeded', this.handleSuccess)
    ipcRenderer.on('verifyLicenseKey:failed', this.handleFail)
  },

  beforeDestroy() {
    ipcRenderer.removeListener('verifyLicenseKey:succeeded', this.handleSuccess)
    ipcRenderer.removeListener('verifyLicenseKey:failed', this.handleFail)
  },
}
</script>

<style lang="scss" src="./style.scss" scoped></style>
