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
          Sorry. This license does not exist.
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { TheMask } from 'vue-the-mask'
import { ipcRenderer } from 'electron'

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
      licenseMask: 'XXXXXXXX-XXXXXXXX-XXXXXXXX-XXXXXXXX',
      licensePlaceholder: '00000000-00000000-00000000-00000000',
      // licenseKey: null,
      licenseKey: 'CEFA8043-F49D46F2-965EA1E6-11725170',
      tokens: {
        X: {
          pattern: /[0-9a-zA-Z]/,
          transform: v => v.toLocaleUpperCase(),
        },
      },
    }
  },

  methods: {
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

    handleSuccess(_, response) {
      console.log({ response })
      this.isSuccess = true
      this.isError = false
      this.isLoading = false
      this.$emit('success')
    },

    handleFail(_, error) {
      console.log({ error })
      this.isSuccess = false
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
