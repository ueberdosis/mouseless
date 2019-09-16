<template>
  <div class="key" :class="{ 'is-active': active }">
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

    active: {
      default: false,
      type: Boolean,
    },
  },
}
</script>

<style lang="scss" src="./style.scss"></style>
