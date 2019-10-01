<template>
  <section class="list-section" v-if="$scopedSlots.default">
    <div class="list-section__title" v-if="title">
      {{ title }}
    </div>
    <div class="list-section__content">
      <slot />
    </div>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      default: null,
      type: String,
    },
  },
}
</script>

<style lang="scss" src="./style.scss" scoped></style>
