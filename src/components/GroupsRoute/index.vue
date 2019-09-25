<template>
  <div class="groups-route">
    <groups :app="app" />
    <div class="groups-route__sub">
      <transition @enter="enter" @leave="leave">
        <router-view />
      </transition>
    </div>
    <div
      class="groups-route__overlay"
      :class="{ 'is-visible': overlayIsVisible }"
      :style="`background-color: ${app.color}`"
    />
  </div>
</template>

<script>
import ramjet from 'ramjet'
import quintInOut from 'eases/quint-in-out'
import Event from '@/services/Event'
import Groups from '@/components/Groups'

export default {
  components: {
    Groups,
  },

  data() {
    return {
      overlayIsVisible: this.$route.name === 'app.groups.test',
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

<style lang="scss" src="./style.scss"></style>
