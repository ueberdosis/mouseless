<template>
  <button class="button" :class="{ 'is-yellow': isYellow }" type="button">
    <icon class="button__icon" :name="icon" v-if="icon" />
    <span class="button__content" v-if="$scopedSlots.default">
      <slot />
    </span>
  </button>
</template>

<script>
import Icon from '@/components/Icon'

export default {
  name: 'Btn',

  components: {
    Icon,
  },

  props: {
    icon: {
      default: null,
      type: String,
    },

    isYellow: {
      default: false,
      type: Boolean,
    },
  },
}
</script>

<style lang="scss" src="./style.scss" scoped></style>
