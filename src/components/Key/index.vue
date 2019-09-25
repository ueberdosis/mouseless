<template>
  <div class="key" :class="{ 'is-active': isActive, 'is-false': isFalse, 'is-pressed': pressed }">
    {{ name | key }}
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

    isFalse: {
      default: false,
      type: Boolean,
    },

    pressed: {
      default: false,
      type: Boolean,
    },
  },
}
</script>

<style lang="scss" src="./style.scss"></style>
