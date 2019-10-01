<template>
  <div class="group-progress">
    <transition name="right-to-left" mode="out-in">
      <div class="group-progress__message" v-if="message" :key="message">
        <div class="group-progress__text">
          {{ message }}
        </div>
      </div>
    </transition>

    <transition name="pop-up">
      <circle-progress
        class="group-progress__bar"
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

  data() {
    return {
      timeout: null,
      message: null,
    }
  },

  watch: {
    learnedCount() {
      this.setMessage()
    },
  },

  methods: {
    setMessage() {
      this.message = `${this.learnedCount} learned`

      clearTimeout(this.timeout)
      this.timeout = setTimeout(() => {
        this.message = null
      }, 3000)
    },
  },

  beforeDestroy() {
    clearTimeout(this.timeout)
  },
}
</script>

<style lang="scss" src="./style.scss" scoped></style>
