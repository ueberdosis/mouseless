<template>
  <div>
    <router-link :to="{ name: 'apps' }">
      ← Apps
    </router-link>

    <h1>
      {{ app.title }} {{ level.title }}
    </h1>

    <p v-if="failed">
      Nope :(
    </p>

    <button type="button" @click="start" v-if="!started">
      Start
    </button>

    <template v-if="started">
      <p>
        {{ currentShortcut.title }}
      </p>
      <p>
        <key
          v-for="(key, index) in currentShortcut.resolvedShortcut"
          :key="index"
          :name="key"
          :active="keys.includes(key)"
        />
      </p>
      <button type="button" @click="stop">
        Stop
      </button>
    </template>
  </div>
</template>

<script>
import collect from 'collect.js'
import Keyboard from '@/services/Keyboard'
import Key from '@/components/Key'

export default {
  components: {
    Key,
  },

  data() {
    return {
      success: false,
      failed: false,
      started: false,
      keyboard: new Keyboard(),
      keys: [],
      currentShortcutIndex: null,
    }
  },

  computed: {
    level() {
      return this.$db.level(this.$route.params.level)
    },

    app() {
      return this.$db.app(this.$route.params.id)
    },

    shortcuts() {
      return collect(this.app.shortcutsByLevel(this.level.level))
        .shuffle()
        .toArray()
    },

    currentShortcut() {
      return this.shortcuts[this.currentShortcutIndex]
    },
  },

  methods: {
    start() {
      this.failed = false
      this.started = true
      this.success = false
      this.next()
    },

    next() {
      this.keys = []

      if (this.currentShortcutIndex === this.shortcuts.length - 1) {
        this.finish()
      } else {
        this.currentShortcutIndex = this.currentShortcutIndex === null
          ? 0
          : this.currentShortcutIndex + 1
      }
    },

    fail() {
      this.stop()
      this.failed = true
      this.success = false
    },

    stop() {
      this.started = false
      this.failed = false
      this.success = false
    },

    finish() {
      this.$router.push({ name: 'apps' })
    },

  },

  mounted() {
    this.keyboard.on('update', ({ keys }) => {
      if (!this.started || this.success) {
        return
      }

      this.keys = keys
    })

    this.keyboard.on('shortcut', ({ event, keys }) => {
      if (!this.started || this.success) {
        return
      }

      this.keys = keys
      event.preventDefault()
      const match = this.keyboard.is(this.currentShortcut.resolvedShortcut)

      if (match) {
        this.success = true
        setTimeout(() => {
          this.success = false
          this.next()
        }, 1000)
      } else {
        this.fail()
      }
    })
  },

  beforeDestroy() {
    this.keyboard.destroy()
  },
}
</script>

<style lang="scss" scoped>
div {
  text-align: center;
}

button {
  background-color: black;
  color: white;
  padding: 0.8rem 1rem;
  font: inherit;
  font-weight: 700;
  border: 0;
  border-radius: 9px;
}
</style>
