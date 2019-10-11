<template>
  <div class="text-progress">
    <span>{{ value }}</span>
    <span>{{ maxValue }}</span>
  </div>
</template>

<script>
export default {
  name: 'TextProgress',

  props: {
    value: {
      default: 0,
      type: Number,
    },

    maxValue: {
      default: 100,
      type: Number,
    },
  },
}
</script>

<style lang="scss" src="./style.scss"></style>
