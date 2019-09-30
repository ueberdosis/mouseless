<template>
  <div class="key" :class="{ 'is-active': isActive, 'is-test': isTest }">
    <div class="key__placeholder">
      {{ name | key }}
    </div>
    <transition name="pop-up">
      <div class="key__card" v-if="isActive">
        {{ name | key }}
      </div>
    </transition>
    <div class="key__name" v-if="altName">
      {{ altName }}
    </div>
    <transition name="pop-up">
      <img
        class="key__check-badge"
        src="@/assets/images/check.svg"
        alt=""
        v-if="showResult && isSuccess"
      >
      <img
        class="key__fail-badge"
        src="@/assets/images/fail.svg"
        alt=""
        v-if="showResult && !isSuccess"
      >
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      default: '',
      type: String,
    },

    isActive: {
      default: false,
      type: Boolean,
    },

    isTest: {
      default: false,
      type: Boolean,
    },

    isSuccess: {
      default: false,
      type: Boolean,
    },

    showResult: {
      default: false,
      type: Boolean,
    },
  },

  computed: {
    altName() {
      const keys = {
        Shift: 'Shift',
        Control: 'Ctrl',
        Alt: 'Alt',
        Meta: 'Cmd',
        Enter: 'Enter',
        Backspace: 'Back',
        Delete: 'Delete',
        Tab: 'Tab',
        PageUp: 'Page Up',
        PageDown: 'Page Down',
      }

      return keys[this.name] ? keys[this.name] : false
    },
  },
}
</script>

<style lang="scss" src="./style.scss" scoped></style>
