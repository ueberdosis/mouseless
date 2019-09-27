<template>
  <div class="key" :class="{ 'is-pressed': isPressed, 'is-ghost': isGhost }">
    <div class="key__card">
      {{ name | key }}
    </div>
    <div class="key__name" v-if="showName">
      {{ name }}
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
    showName() {
      const keys = ['Shift', 'Control', 'Alt', 'Meta', 'Enter', 'Backspace']
      return keys.includes(this.name)
    },
  },
}
</script>

<style lang="scss" src="./style.scss"></style>
