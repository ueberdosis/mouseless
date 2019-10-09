<template>
  <div class="set-progress">
    <transition name="right-to-left" mode="out-in">
      <div class="set-progress__message" v-if="message" :key="message">
        <div class="set-progress__text">
          {{ message }}
        </div>
      </div>
    </transition>

    <transition name="pop-up">
      <circle-progress
        class="set-progress__bar"
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
  name: 'SetProgress',

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
      this.message = `${this.learnedCount} mastered`

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
