<template>
  <page>
    <template v-slot:left>
      <router-link class="hover-button" :to="{ name: 'apps' }">
        ← Apps
      </router-link>
    </template>
    <template v-slot:center>
      {{ app.title }}
    </template>
    <template v-slot>
      <groups :app="app" :animate="animate" />
    </template>
  </page>
</template>

<script>
import ramjet from 'ramjet'
import quintInOut from 'eases/quint-in-out'
import Event from '@/services/Event'
import Groups from '@/components/Groups'
import Page from '@/components/Page'

export default {
  components: {
    Groups,
    Page,
  },

  data() {
    return {
      previousRoute: null,
      overlayIsVisible: this.$route.name === 'app.groups.test',
    }
  },

  computed: {
    app() {
      return this.$db.app(this.$route.params.id)
    },

    animate() {
      return this.previousRoute && this.previousRoute.name === 'apps'
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

  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.previousRoute = from
    })
  },

  mounted() {
    // console.log(this.$router, this.$route)
    Event.on('beforeAnimation', this.onBeforeAnimation)
  },

  beforeDestroy() {
    Event.off('beforeAnimation', this.onBeforeAnimation)
  },
}
</script>

<style lang="scss" src="./style.scss"></style>
