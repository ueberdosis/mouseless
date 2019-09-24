<template>
  <div class="levels">
    <levels :app="app" />
    <div class="levels__sub">
      <transition
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter"
        @enter-cancelled="enterCancelled"
        @before-leave="beforeLeave"
        @leave="leave"
        @after-leave="afterLeave"
        @leave-cancelled="leaveCancelled"
      >
        <router-view />
      </transition>
    </div>
    <div class="levels__overlay" :style="`background-color: ${app.color}`" />
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

  computed: {
    app() {
      return this.$db.app(this.$route.params.id)
    },
  },

  methods: {
    beforeEnter(el) {

    },

    enter(el, done) {
      const a = this.srcElement
      const b = el

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

    afterEnter(el) {

    },

    enterCancelled(el) {

    },

    beforeLeave(el) {

    },

    leave(el, done) {
      const a = el
      const b = this.srcElement

      ramjet.hide(a)

      ramjet.transform(a, b, {
        duration: 400,
        easing: quintInOut,
        done: () => {
          // ramjet.show(b)
          done()
        },
      })
    },

    afterLeave(el) {

    },

    leaveCancelled(el) {

    },
  },

  mounted() {
    Event.on('beforeAnimation', srcElement => {
      this.srcElement = srcElement
    })
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
    opacity: 1;
    transition:
      opacity 0.5s $easeInOutQuint,
      visibility 0.5s $easeInOutQuint,
    ;
  }

  &__sub:empty + &__overlay {
    opacity: 0;
    visibility: hidden;
  }
}
</style>
