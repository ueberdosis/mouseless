<template>
  <div class="group-progress">
    <transition name="pop-up">
      <circle-progress
        :size="20"
        :value="learnedCount"
        :max-value="count"
        v-if="learnedCount"
      />
    </transition>
  </div>
</template>

<script>
import CircleProgress from '@/components/CircleProgress'

export default {
  components: {
    CircleProgress,
  },

  props: {
    learnedCount: {
      default: 0,
      type: Number,
    },

    count: {
      default: 0,
      type: Number,
    },
  },
}
</script>

<style lang="scss" src="./style.scss" scoped></style>
