<template>
  <button class="skip-button" type="button">
    <span class="skip-button__label">
      Skip
    </span>
    <icon class="skip-button__icon" name="skip" />
  </button>
</template>

<script>
import Icon from '@/components/Icon'

export default {
  components: {
    Icon,
  },
}
</script>

<style lang="scss" src="./style.scss" scoped></style>
