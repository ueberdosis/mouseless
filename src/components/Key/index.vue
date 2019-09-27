<template>
  <div class="key" :class="{ 'is-pressed': isPressed, 'is-ghost': isGhost }">
    <div class="key__card">
      {{ name | key }}
    </div>
    <div class="key__name" v-if="altName">
      {{ altName }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      default: '',
      type: String,
    },

    isPressed: {
      default: false,
      type: Boolean,
    },

    isGhost: {
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

<style lang="scss" src="./style.scss"></style>
