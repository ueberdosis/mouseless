<template>
  <div class="c-circle-progress" :style="`width: ${size}px; height: ${size}px;`">
    <svg class="c-circle-progress__svg" :viewBox="`0 0 ${position * 2} ${position * 2}`">
      <circle
        class="c-circle-progress__circle"
        :r="radius"
        :cx="position"
        :cy="position"
        stroke-dasharray="0"
        stroke-dashoffset="0"
        :stroke-width="strokeWidth"
      />
      <circle
        class="c-circle-progress__progress"
        :r="radius"
        :cx="position"
        :cy="position"
        :stroke-dasharray="dashArray"
        :stroke-dashoffset="dashOffset"
        :stroke-width="strokeWidth"
        :transform="`rotate(-90 ${position} ${position})`"
      />
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    size: {
      default: 50,
      type: Number,
    },

    value: {
      default: 0,
      type: Number,
    },

    maxValue: {
      default: 100,
      type: Number,
    },
  },

  data() {
    return {
      strokeWidth: 3,
    }
  },

  computed: {
    position() {
      return this.size / 2
    },

    radius() {
      return this.size / 2 - this.strokeWidth / 2
    },

    dashArray() {
      return 2 * Math.PI * this.radius
    },

    dashOffset() {
      const c = Math.PI * (this.radius * 2)

      if (this.maxValue) {
        return ((this.maxValue - this.value) / this.maxValue) * c
      }

      return 0
    },
  },
}
</script>

<style lang="scss" src="./style.scss"></style>
