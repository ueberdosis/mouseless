<template>
  <div class="key">
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
  },
}
</script>

<style lang="scss" src="./style.scss"></style>
