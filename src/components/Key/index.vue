<template>
  <div class="key" :class="{ 'is-pressed': isPressed }">
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

    isPressed: {
      default: false,
      type: Boolean,
    },
  },
}
</script>

<style lang="scss" src="./style.scss"></style>
