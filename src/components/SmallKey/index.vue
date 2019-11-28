<template>
  <div class="small-key">
    {{ name | key | uppercase }}
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" src="./style.scss" scoped></style>
