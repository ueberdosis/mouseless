<template>
  <div class="levels">
    <levels :app="app" />
    <div class="levels__sub">
      <transition @enter="enter" @leave="leave">
        <router-view />
      </transition>
    </div>
    <div
      class="levels__overlay"
      :class="{ 'is-visible': overlayIsVisible }"
      :style="`background-color: ${app.color}`"
    />
  </div>
</template>

<script>
import ramjet from 'ramjet'
import quintInOut from 'eases/quint-in-out'
import Event from '@/services/Event'
import Levels from '@/components/Levels'

export default {
  components: {
    Levels,
  },

  data() {
    return {
      overlayIsVisible: this.$route.name === 'app.levels.test',
    }
  },

  computed: {
    app() {
      return this.$db.app(this.$route.params.id)
    },
  },

  methods: {
    enter(el, done) {
      this.overlayIsVisible = true

      const a = this.srcElement
      const b = el

      if (!a || !b) {
        done()
        return
      }

      ramjet.hide(b)
      ramjet.transform(a, b, {
        duration: 400,
        easing: quintInOut,
        done: () => {
          ramjet.show(b)
          done()
        },
      })
    },

    leave(el, done) {
      this.overlayIsVisible = false

      const a = el
      const b = this.srcElement

      if (!a || !b) {
        done()
        return
      }

      ramjet.hide(a)
      ramjet.transform(a, b, {
        duration: 400,
        easing: quintInOut,
        done: () => {
          done()
        },
      })
    },

    onBeforeAnimation(srcElement) {
      this.srcElement = srcElement
    },
  },

  mounted() {
    Event.on('beforeAnimation', this.onBeforeAnimation)
  },

  beforeDestroy() {
    Event.off('beforeAnimation', this.onBeforeAnimation)
  },
}
</script>

<style lang="scss" scoped>
.levels {
  position: relative;
  height: 100%;

  &__sub {
    position: absolute;
    top: 0;
    left: 14px;
    bottom: 14px;
    right: 14px;

    &:not(:empty) {
      z-index: 2;
    }
  }

  &__overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    opacity: 0;
    visibility: hidden;
    transition:
      opacity 0.5s $easeInOutQuint,
      visibility 0.5s $easeInOutQuint,
    ;

    &.is-visible {
      opacity: 1;
      visibility: visible;
    }
  }
}
</style>
